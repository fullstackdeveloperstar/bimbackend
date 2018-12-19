import * as functions from 'firebase-functions';
import { request } from 'https';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
const corsHandler  = cors({origin: true});
admin.initializeApp(functions.config().firebase);
const db = admin.database();
import * as nodemailer from 'nodemailer';
import { resolve } from 'path';
import { FieldValue } from '@google-cloud/firestore';
import * as fs from "fs";
var storage = admin.storage();

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "cretumanager@gmail.com",
    pass: "dmstjd890220",
  },
}); 

export const sendNotification = functions.https.onRequest((request, response) => {
    return corsHandler(request, response, () => {
        var body = request.body;
        if (!body.sender) {
            response.send({error: 'empty sender'});
        }

        if (!body.project) {
            response.send({error: 'empty project'});
        }

        db.ref('/projects')
            .child(body.project)
            .once('value')
            .then(snap => {
                var project = snap.val();
                var notification = {
                    created: new Date().getTime(),
                    isread: false,
                    key: "",
                    message: body.message,
                    sender: body.sender,
                    type: body.type
                }
                
                    var insertedKey = db.ref('/notifications/' + project.created_by).push(notification);
                    db.ref('/notifications/' + project.created_by + '/' + insertedKey.key).update({key: insertedKey.key});
                   db.ref('/users' )
                        .child(project.created_by)
                        .once('value')
                        .then(tempuser => {
                            var user_project = tempuser.val();
                            sendWelcomeEmail(user_project.email, body.type, "You have got notification from BIM.");
                        });
                    
                
            });

        db.ref('/teams')
            .child(body.project)
            .once('value')
            .then(snap => {
            var members = snap.val();
            var keys= Object.keys(members);
            if (keys.length == 0) {
                return;
            }
            keys.forEach(key => {
                var notification = {
                    created: new Date().getTime(),
                    isread: false,
                    key: "",
                    message: body.message,
                    sender: body.sender,
                    type: body.type
                }
                if (members[key].userid) {
                    var insertedKey = db.ref('/notifications/' + members[key].userid).push(notification);
                    db.ref('/notifications/' + members[key].userid + '/' + insertedKey.key).update({key: insertedKey.key});
                    sendWelcomeEmail(members[key].email, body.type, "You have got notification from BIM.");
                }
            });
            
            })
            .catch(e =>{
            console.log(e);
            });
        response.send({success: 'true'});
    });
    
})

export const sendInvitation = functions.https.onRequest((request, response) => {
    return corsHandler(request, response, () => {
        var body = request.body;
        if (!body.teamid) {
            response.send({error: 'empty team'});
        }
    
        if (!body.project) {
            response.send({error: 'empty project'});
        }
        
        db.ref('/teams/' + body.project)
            .child(body.teamid)
            .once('value')
            .then(snap => {
               var member = snap.val();
               if (member && member.userid) {
                   sendWelcomeEmail(member.email, 'Invitation', 'Please goto hear https://bimbackend.firebaseapp.com');
    
                   response.send({success: 'true'});
               } else {
                var ref = db.ref("/users");
                ref.orderByChild("email").equalTo(member.email).once('value')
                .then(snap => {
                    var user = snap.val(); 
                    var keys = Object.keys(user);
                    if (keys.length > 0 && user[keys[0]]) {
                        db.ref('/teams/' + body.project + '/' + body.teamid).update({userid:  user[keys[0]].uid});
                        var userprojectdata = {
                            userid: user[keys[0]].uid,
                            projectid: body.project
                        }
                        db.ref('/user-project').push(userprojectdata);
                        sendWelcomeEmail(member.email, 'Invitation', "You have been invited. https://bimbackend.firebaseapp.com/project/profile/"+body.project);
                    } else {
                        sendWelcomeEmail(member.email, 'Invitation', "https://bimbackend.firebaseapp.com/signup/"+body.project+"/"+body.teamid);
                    }
    
                    response.send({success: 'true'});
                })
                .catch(e => {                    
                    sendWelcomeEmail(member.email, 'Invitation', "https://bimbackend.firebaseapp.com/signup/"+body.project+"/"+body.teamid);
    
                    response.send({error: e});
                })
                
               }
            })
            .catch(e =>{
               response.send({error: e});
            });
    });
    
})

export const getTeamMemberInfo = functions.https.onRequest((request, response) => {
    return corsHandler(request, response, () => {
        var body = request.body;
        if (!body.teamid) {
            response.send({error: 'empty team'});
        }
    
        if (!body.project) {
            response.send({error: 'empty project'});
        }
    
        db.ref('/teams/' + body.project+ '/' + body.teamid)
            .once('value')
            .then(snap => {
               var member = snap.val();
                if (member) {
                    response.send({success: true, data: member});     
                } else {
                    response.send({success: false});
                }
            })
            .catch(e =>{
               response.send({success: false});
            });
    });
})

export const saveTemplate = functions.https.onRequest((request, response) => {
    return corsHandler(request, response, () => {
        var body = request.body;
        if (!body.projectid) {
            response.send({
                success : false, 
                msg: "Empty Project"
            });
            return;
        }
    
        if (!body.templatename) {
            response.send({
                success: false,
                msg: "Empty Template name"
            });

            return;
        }

        if (!body.userid) {
            response.send({
                success: false,
                msg: "Empty User"
            });
            return;
        }

        saveTemplateProc(request, response);
    });
})

export const loadTemplate = functions.https.onRequest((request, response) => {
    return corsHandler(request, response, () => {
        var body = request.body;
        
        if (!body.templateid) {
            response.send({
                success: false,
                msg: "Empty Template"
            });

            return;
        }

        if (!body.userid) {
            response.send({
                success: false,
                msg: "Empty User"
            });
            return;
        }

        if(!body.projectid) {
            response.send({
                success: false,
                msg: "Empty Project"
            });
            return;
        }

       loadTemplateProc(request, response);
    });
})

async function sendWelcomeEmail(email,subject, message) {
    const mailOptions = {
      from: `<noreply@firebase.com>`,
      to: email,
      subject : subject,
      text : message
    };
    await mailTransport.sendMail(mailOptions);
    return null;
}

async function saveTemplateProc(request, response) {
    var body = request.body;
    var projectid = body.projectid;
    var userid = body.userid;
    var saveData = {
        templatename: body.templatename,
        project: null,
        stages: null,
        bims: null,
        lods: null,
        project_configuration: null,
        // teams: null,
        meeting: null,
        matrix: null,
        quality: null,
        key: null,
        created_at: null
    };
    var project = await getProject(projectid);
    saveData.project = project;
    if(!project) {
        response.send({
            success: false,
            msg: "There is not project"
        });
        return;
    }

    var user = await getDBref('/users/' + userid);
    if(!user) {
        response.send({
            success: false,
            msg: "There is not user"
        });
        return;
    }


    var stages = await getDBref('/stages/' + projectid);
    saveData.stages = stages;

    var bims = await getDBref('/bims/' + projectid);
    saveData.bims = bims;

    var lods = await getDBref('/lods/' + projectid);
    saveData.lods = lods;

    var project_configuration = await getDBref('/project_configuration/' + projectid);
    saveData.project_configuration = project_configuration;

    // var teams = await getDBref('/teams/' + projectid);
    // saveData.teams = teams;

    var meeting = await getDBref('/meeting/' + projectid);
    saveData.meeting = meeting;

    var matrix = await getDBref('/matrix/' + projectid);
    saveData.matrix = matrix;

    var quality = await getDBref('/quality/' + projectid);
    saveData.quality = quality;
    
    saveData.created_at = new Date().getTime()
    var insertedKey = db.ref('/savedtemplates/' + userid).push(saveData);
    
    db.ref('/savedtemplates/' + userid + '/' + insertedKey.key).update({key: insertedKey.key});
    response.send({
        success: true,
        msg: "template saved"
    });

    return;
}

async function loadTemplateProc(request, response) {
   var body = request.body;
   var userid = body.userid;
   var templateid = body.templateid;
   var defaultRef = '/savedtemplates/Wjq8J7YzgpRwXiqBp7FBeJKrgmU2/-LTfRkcaycWM1yyVRoxX';
   var template;

   if(body.templateid == 'default') {
    template = await getDBref(defaultRef);
   } else{
    template = await getDBref('/savedtemplates/' + userid + '/' + templateid);
   }

   if (!template) {
      response.send({
        success: false,
        msg: "Template error"
      });
      return;
   }
   
//    var project = template['project'];
//    project['created_by'] = userid;
//    var insertedProject = db.ref('/projects').push(project);
   var insertedprojectkey = body.projectid;
   if(template['stages']) {
       db.ref('/stages/' + insertedprojectkey).set(template['stages']);
   }

   if(template['bims']) {
    db.ref('/bims/' + insertedprojectkey).set(template['bims']);
   }

   if(template['lods']) {
    db.ref('/lods/' + insertedprojectkey).set(template['lods']);
   }

   if(template['project_configuration']) {
    db.ref('/project_configuration/' + insertedprojectkey).set(template['project_configuration']);
   }

//    if(template['teams']) {
//     db.ref('/teams/' + insertedprojectkey).set(template['teams']);
//    }

   if(template['meeting']) {
    db.ref('/meeting/' + insertedprojectkey).set(template['meeting']);
   }

   if(template['matrix']) {
    db.ref('/matrix/' + insertedprojectkey).set(template['matrix']);
   }

   if(template['quality']) {
    db.ref('/quality/' + insertedprojectkey).set(template['quality']);
   }

   response.send({
    success: true,
    msg: "Template is loaded successfully",
    key: insertedprojectkey
  });
  return;
}

function getProject(projectId) {
    return new Promise((resolve, reject) => {
        db.ref('/projects')
        .child(projectId)
        .once('value')
        .then(snap => {
            var project = snap.val();
            resolve(project);
        })
        .catch(e => {
            reject(e);
        });
    });
}

function getDBref(ref) {
    return new Promise((resolve, reject) => {
        db.ref(ref)
        .once('value')
        .then(snap => {
            var result = snap.val();
            resolve(result);
        })
        .catch(e => {
            reject(e);
        });
    }); 
}