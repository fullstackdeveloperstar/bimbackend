(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // return this.authService.isSignedInStream;
        var _this = this;
        return this.authService.isSignedInStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isSignedIn) {
            if (!isSignedIn) {
                _this.router.navigate(['/signin']);
            }
            var url = _this.router.url;
            var authUser = _this.afAuth.auth.currentUser;
            if (url == '/upgrade') {
                _this.router.navigate(['/upgrade']);
            }
            else {
                _this.authService.getUserByIdPromise(authUser.uid).then(function (data) {
                    var now = new Date().getTime();
                    if (!data.membership) {
                        var created = authUser.metadata;
                        created = created['a'];
                        var diff = now - created;
                        var diff = diff / 1000 / 3600 / 24;
                        if (diff >= 30) {
                            _this.router.navigate(['/expired']);
                        }
                    }
                    else {
                        if (data.membership.type != 30) {
                            var upgrade = data.membership.created;
                            var diff = now - upgrade;
                            var diff = diff / 1000 / 3600 / 24;
                            if (diff >= 30) {
                                _this.router.navigate(['/expired']);
                            }
                        }
                    }
                });
            }
            return isSignedIn;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, databaseService, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.databaseService = databaseService;
        this.db = db;
        this.dbPath = "/users";
        this.dbRef = null;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.authUser = auth;
            }
        });
        this.isSignedInStream = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return user != null;
        }));
    }
    AuthService.prototype.getAuthUser = function () {
        return this.authUser;
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            });
        });
    };
    AuthService.prototype.doLinkedinLogin = function () {
    };
    AuthService.prototype.doRegister = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                var userProfile = { uid: user.uid, name: value.name, company_name: value.cname, email: value.email, randomColor: _this.getRandomColorHex() };
                _this.databaseService.createRowWithKey('/users/' + user.uid, userProfile);
                if (user.emailVerified == false) {
                    _this.sendEmailVerification();
                }
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AuthService.prototype.getRandomColorHex = function () {
        var r = this.getRandomInt(0, 255);
        var g = this.getRandomInt(0, 255);
        var b = this.getRandomInt(0, 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    AuthService.prototype.doSignin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.sendEmailVerification = function () {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        return new Promise(function (resolve, reject) {
            user.sendEmailVerification().then(function (success) {
                resolve(success);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.getUserProfile = function () {
        return this.databaseService.getRowDetails('/users', firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid);
    };
    AuthService.prototype.doSignout = function () {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut()
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getUserById = function (uid) {
        // return  this.db.list(this.dbPath+'/'+uid);
        return this.db.object(this.dbPath + "/" + uid);
    };
    AuthService.prototype.getUserByIdPromise = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.object(_this.dbPath + "/" + uid).valueChanges().subscribe(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject(null);
                }
            });
        });
    };
    AuthService.prototype.updateUserById = function (uid, profile) {
        return this.db.list(this.dbPath).update(uid, profile);
    };
    AuthService.prototype.getAvartarImage = function (profile) {
        var return_val = {
            type: "",
            val: ""
        };
        if (profile.avatar && profile.avatar != "") {
            return_val.type = "image";
            return_val.val = profile.avatar;
            return return_val;
        }
        if (profile.name && profile.name != "") {
            var res = profile.name.split(" ");
            return_val.type = 'text';
            if (res.length >= 2) {
                return_val.val = res[0].charAt(0).toUpperCase() + res[1].charAt(0).toUpperCase();
            }
            else {
                return_val.val = profile.name.charAt(0).toUpperCase() + profile.name.charAt(1).toUpperCase();
            }
            return return_val;
        }
        return return_val;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/chat.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/chat.service.ts ***!
  \*******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = /** @class */ (function () {
    function ChatService(db) {
        this.db = db;
        this.dbPath = "/messages";
        this.dbRef = null;
        this.dbRef = db.list(this.dbPath);
    }
    ChatService.prototype.getMessages = function (projectId, urlType) {
        // query to create our message feed binding
        this.dbRef = this.db.list(this.dbPath + '/' + projectId + '/' + urlType);
        return this.dbRef;
    };
    ChatService.prototype.sendMsg = function (msgbody, projectId, urlType) {
        msgbody['timesent'] = this.getTimeStamp();
        return this.db.list(this.dbPath + '/' + projectId + '/' + urlType).push(msgbody);
    };
    ChatService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth() + 1) + '/' +
            now.getUTCDate();
        var time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();
        return (date + ' ' + time);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/_services/database.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/database.service.ts ***!
  \***********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseService = /** @class */ (function () {
    function DatabaseService(db) {
        this.db = db;
        this.dbPath = "/projects";
        this.dbRef = null;
        this.dbRef = db.list(this.dbPath);
    }
    DatabaseService.prototype.createRow = function (path, data) {
        this.dbRef = this.db.list(path);
        return this.dbRef.push(data);
    };
    DatabaseService.prototype.createRowWithKey = function (path, data) {
        this.db.object(path).set(data);
    };
    DatabaseService.prototype.updateRow = function (path, key, value) {
        var _this = this;
        this.dbRef = this.db.list(path);
        this.dbRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    DatabaseService.prototype.deleteRow = function (path, key) {
        var _this = this;
        this.dbRef = this.db.list(path);
        this.dbRef.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    DatabaseService.prototype.getLists = function (path) {
        this.dbRef = this.db.list(path);
        return this.dbRef;
    };
    DatabaseService.prototype.deleteAll = function (path) {
        var _this = this;
        this.dbRef = this.db.list(path);
        this.dbRef.remove().catch(function (error) { return _this.handleError(error); });
    };
    DatabaseService.prototype.getRowDetails = function (path, key) {
        return this.db.object(path + "/" + key);
    };
    DatabaseService.prototype.handleError = function (error) {
        console.log(error);
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/_services/dropdown.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/dropdown.service.ts ***!
  \***********************************************/
/*! exports provided: DropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return DropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownService = /** @class */ (function () {
    function DropdownService(db) {
        this.db = db;
        this.projectTypeDBPath = 'project_type';
        this.contractTypeDBPath = 'contract_type';
        this.lengthDBPath = 'length';
        this.areaDBPath = 'area';
        this.volumnDBPath = 'volume';
        this.angleDBPath = 'angle';
        this.roundingDBPath = 'rounding';
        this.projectTypesRef = null;
        this.contractTypesRef = null;
        this.lengthsRef = null;
        this.areasRef = null;
        this.volumnsRef = null;
        this.anglesRef = null;
        this.roundingsRef = null;
    }
    DropdownService.prototype.getProjectTypes = function () {
        return this.projectTypesRef = this.db.list(this.projectTypeDBPath);
    };
    DropdownService.prototype.getContractTypes = function () {
        return this.contractTypesRef = this.db.list(this.contractTypeDBPath);
    };
    DropdownService.prototype.getLengths = function () {
        return this.lengthsRef = this.db.list(this.lengthDBPath);
    };
    DropdownService.prototype.getAreas = function () {
        return this.areasRef = this.db.list(this.areaDBPath);
    };
    DropdownService.prototype.getVolumns = function () {
        return this.volumnsRef = this.db.list(this.volumnDBPath);
    };
    DropdownService.prototype.getAngles = function () {
        return this.anglesRef = this.db.list(this.angleDBPath);
    };
    DropdownService.prototype.getRoundings = function () {
        return this.roundingsRef = this.db.list(this.roundingDBPath);
    };
    DropdownService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DropdownService);
    return DropdownService;
}());



/***/ }),

/***/ "./src/app/_services/evented.ts":
/*!**************************************!*\
  !*** ./src/app/_services/evented.ts ***!
  \**************************************/
/*! exports provided: Evented, Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evented", function() { return Evented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Evented = /** @class */ (function () {
    function Evented() {
        this._listeners = {};
    }
    Evented.prototype.on = function (eventName, listener) {
        return Evented._on(this, eventName, listener);
    };
    Evented.prototype.off = function (eventName, listener) {
        Evented._off(eventName, this, listener);
    };
    Evented.prototype.fire = function (eventName, eventArgs, eventTarget) {
        if (eventTarget === void 0) { eventTarget = this; }
        Evented._fire(this, eventName, eventArgs, eventTarget);
    };
    Evented.prototype.listensTo = function (eventName) {
        return Evented._listensTo(this, eventName);
    };
    Evented.prototype.listeners = function (eventName) {
        return Evented._listeners(this, eventName);
    };
    Evented.fire = function (eventName, eventArgs, eventTarget) {
        Evented._fire(undefined, eventName, eventArgs, eventTarget);
    };
    Evented.on = function (eventName, listener) {
        return Evented._on(undefined, eventName, listener);
    };
    Evented.off = function (eventName, listener) {
        Evented._off(eventName, undefined, listener);
    };
    Evented.listensTo = function (eventName) {
        return Evented._listensTo(undefined, eventName);
    };
    Evented.listeners = function (eventName) {
        return Evented._listeners(undefined, eventName);
    };
    Evented._on = function (instance, eventName, listener) {
        var listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        if (listeners[eventName] === undefined) {
            listeners[eventName] = [];
        }
        listeners[eventName].push(listener);
        return function () { return Evented._off(eventName, instance, listener); };
    };
    Evented._off = function (eventName, instance, listener) {
        var eventListeners, listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        eventListeners = listeners[eventName];
        if (eventListeners instanceof Array) {
            if (!listener) {
                listeners[eventName] = undefined;
            }
            else {
                listeners[eventName] = eventListeners.filter(function (l) { return l !== listener; });
            }
        }
    };
    Evented._fire = function (instance, eventName, eventArgs, eventTarget) {
        var eventListeners, listeners, thisArg;
        if (instance) {
            listeners = instance._listeners;
            thisArg = instance;
        }
        else {
            listeners = Evented.globalListeners;
            thisArg = Evented;
        }
        eventListeners = listeners[eventName];
        if (eventListeners instanceof Array) {
            eventListeners.forEach(function (l) {
                l.call(thisArg, new Event(eventName, eventArgs, eventTarget));
            });
        }
    };
    Evented._listensTo = function (instance, eventName) {
        var listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        return (listeners[eventName] instanceof Array && listeners[eventName].length > 0);
    };
    Evented._listeners = function (instance, eventName) {
        var listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        return listeners[eventName];
    };
    Evented.globalListeners = {};
    return Evented;
}());

var Event = /** @class */ (function () {
    function Event(name, args, target) {
        this._name = name;
        this._args = args;
        this._target = target;
    }
    Object.defineProperty(Event.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());



/***/ }),

/***/ "./src/app/_services/upgrade.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/upgrade.service.ts ***!
  \**********************************************/
/*! exports provided: UpgradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeService", function() { return UpgradeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpgradeService = /** @class */ (function () {
    function UpgradeService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        this.user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
    }
    UpgradeService.prototype.processPayment = function (token, amount, type) {
        var payment = { token: token, amount: amount };
        var membership = {
            created: new Date().getTime(),
            type: type
        };
        this.db.list('/payments/' + this.user.uid).push(payment);
        this.db.list('users/' + this.user.uid).set('membership', membership);
    };
    UpgradeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], UpgradeService);
    return UpgradeService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wrap_wrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap/wrap.component */ "./src/app/wrap/wrap.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _lod_lod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lod/lod.component */ "./src/app/lod/lod.component.ts");
/* harmony import */ var _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectprofile/projectprofile.component */ "./src/app/projectprofile/projectprofile.component.ts");
/* harmony import */ var _projectstage_projectstage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectstage/projectstage.component */ "./src/app/projectstage/projectstage.component.ts");
/* harmony import */ var _projectbim_projectbim_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projectbim/projectbim.component */ "./src/app/projectbim/projectbim.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "./src/app/forgetpassword/forgetpassword.component.ts");
/* harmony import */ var _projectconf_projectconf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projectconf/projectconf.component */ "./src/app/projectconf/projectconf.component.ts");
/* harmony import */ var _project_team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project/team/team.component */ "./src/app/project/team/team.component.ts");
/* harmony import */ var _project_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project/meeting/meeting.component */ "./src/app/project/meeting/meeting.component.ts");
/* harmony import */ var _expired_expired_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./expired/expired.component */ "./src/app/expired/expired.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upgrade/upgrade.component */ "./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var _project_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project/matrix/matrix.component */ "./src/app/project/matrix/matrix.component.ts");
/* harmony import */ var _project_quality_quality_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project/quality/quality.component */ "./src/app/project/quality/quality.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    {
        component: _wrap_wrap_component__WEBPACK_IMPORTED_MODULE_2__["WrapComponent"],
        path: '',
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
            },
            {
                path: 'signin',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            },
            {
                path: 'forgetpassword',
                component: _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpasswordComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
            },
            {
                path: 'project',
                component: _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
                children: [
                    {
                        path: 'new',
                        component: _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_9__["ProjectprofileComponent"]
                    },
                    {
                        path: 'profile/:id',
                        component: _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_9__["ProjectprofileComponent"]
                    },
                    {
                        path: 'stage/:id',
                        component: _projectstage_projectstage_component__WEBPACK_IMPORTED_MODULE_10__["ProjectstageComponent"]
                    },
                    {
                        path: 'bim/:id',
                        component: _projectbim_projectbim_component__WEBPACK_IMPORTED_MODULE_11__["ProjectbimComponent"]
                    },
                    {
                        path: 'lod/:id',
                        component: _lod_lod_component__WEBPACK_IMPORTED_MODULE_8__["LodComponent"]
                    },
                    {
                        path: 'conf/:id',
                        component: _projectconf_projectconf_component__WEBPACK_IMPORTED_MODULE_14__["ProjectconfComponent"]
                    },
                    {
                        path: 'team/:id',
                        component: _project_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"]
                    },
                    {
                        path: 'meeting/:id',
                        component: _project_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_16__["MeetingComponent"]
                    },
                    {
                        path: 'matrix/:id',
                        component: _project_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_19__["MatrixComponent"]
                    },
                    {
                        path: 'quality/:id',
                        component: _project_quality_quality_component__WEBPACK_IMPORTED_MODULE_20__["QualityComponent"]
                    }
                ]
            },
            {
                path: 'expired',
                component: _expired_expired_component__WEBPACK_IMPORTED_MODULE_17__["ExpiredComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
            },
            {
                path: 'upgrade',
                component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_18__["UpgradeComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
            }
        ],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _wrap_wrap_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrap/wrap.component */ "./src/app/wrap/wrap.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _lod_lod_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lod/lod.component */ "./src/app/lod/lod.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _sidebarright_sidebarright_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebarright/sidebarright.component */ "./src/app/sidebarright/sidebarright.component.ts");
/* harmony import */ var _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projectprofile/projectprofile.component */ "./src/app/projectprofile/projectprofile.component.ts");
/* harmony import */ var _projectstage_projectstage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projectstage/projectstage.component */ "./src/app/projectstage/projectstage.component.ts");
/* harmony import */ var _projectbim_projectbim_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projectbim/projectbim.component */ "./src/app/projectbim/projectbim.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forgetpassword/forgetpassword.component */ "./src/app/forgetpassword/forgetpassword.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_services/chat.service */ "./src/app/_services/chat.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _projectconf_projectconf_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./projectconf/projectconf.component */ "./src/app/projectconf/projectconf.component.ts");
/* harmony import */ var _project_team_team_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./project/team/team.component */ "./src/app/project/team/team.component.ts");
/* harmony import */ var _project_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./project/meeting/meeting.component */ "./src/app/project/meeting/meeting.component.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _expired_expired_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./expired/expired.component */ "./src/app/expired/expired.component.ts");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./upgrade/upgrade.component */ "./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _services_upgrade_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_services/upgrade.service */ "./src/app/_services/upgrade.service.ts");
/* harmony import */ var _project_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./project/matrix/matrix.component */ "./src/app/project/matrix/matrix.component.ts");
/* harmony import */ var _project_quality_quality_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./project/quality/quality.component */ "./src/app/project/quality/quality.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _sidebarright_message_message_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sidebarright/message/message.component */ "./src/app/sidebarright/message/message.component.ts");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./avatar/avatar.component */ "./src/app/avatar/avatar.component.ts");
/* harmony import */ var _project_quality_useravatar_useravatar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./project/quality/useravatar/useravatar.component */ "./src/app/project/quality/useravatar/useravatar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"],
                _wrap_wrap_component__WEBPACK_IMPORTED_MODULE_11__["WrapComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"],
                _lod_lod_component__WEBPACK_IMPORTED_MODULE_15__["LodComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _sidebarright_sidebarright_component__WEBPACK_IMPORTED_MODULE_17__["SidebarrightComponent"],
                _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_18__["ProjectprofileComponent"],
                _projectstage_projectstage_component__WEBPACK_IMPORTED_MODULE_19__["ProjectstageComponent"],
                _projectbim_projectbim_component__WEBPACK_IMPORTED_MODULE_20__["ProjectbimComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"],
                _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_27__["ForgetpasswordComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_28__["LoadingComponent"],
                _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_18__["SaveTemplateDialog"],
                _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_18__["ArchiveDialog"],
                _projectconf_projectconf_component__WEBPACK_IMPORTED_MODULE_31__["ProjectconfComponent"],
                _project_team_team_component__WEBPACK_IMPORTED_MODULE_32__["TeamComponent"],
                _project_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_33__["MeetingComponent"],
                _expired_expired_component__WEBPACK_IMPORTED_MODULE_35__["ExpiredComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_36__["UpgradeComponent"],
                _project_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_39__["MatrixComponent"],
                _project_quality_quality_component__WEBPACK_IMPORTED_MODULE_40__["QualityComponent"],
                _sidebarright_message_message_component__WEBPACK_IMPORTED_MODULE_43__["MessageComponent"],
                _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_44__["AvatarComponent"],
                _project_quality_useravatar_useravatar_component__WEBPACK_IMPORTED_MODULE_45__["UseravatarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_30__["AngularFireStorageModule"],
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_34__["PickerModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_37__["Ng5SliderModule"]
            ],
            entryComponents: [_projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_18__["SaveTemplateDialog"], _projectprofile_projectprofile_component__WEBPACK_IMPORTED_MODULE_18__["ArchiveDialog"]],
            providers: [
                _services_chat_service__WEBPACK_IMPORTED_MODULE_29__["ChatService"],
                _services_upgrade_service__WEBPACK_IMPORTED_MODULE_38__["UpgradeService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_41__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/avatar/avatar.component.html":
/*!**********************************************!*\
  !*** ./src/app/avatar/avatar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar\">\r\n  <img [src]=\"userProfile.avatar == ''? '/assets/images/avatar.png' : avartarImage.val\" *ngIf=\"avartarImage.type == 'image' && avartarImage.val != ''\" alt=\"\" class=\"avatar-img\">\r\n  <span class=\"avatar-txt\" *ngIf=\"avartarImage.type == 'text'\" [ngStyle]=\"{'background': userProfile.randomColor}\">{{avartarImage.val}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/avatar/avatar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/avatar/avatar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar .avatar-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%; }\n\n.avatar .avatar-txt {\n  color: #fff;\n  font-size: 15px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZhdGFyL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcYXZhdGFyXFxhdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFMTDtFQVFRLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgICAuYXZhdGFyLWltZ3tcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXItdHh0e1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/avatar/avatar.component.ts":
/*!********************************************!*\
  !*** ./src/app/avatar/avatar.component.ts ***!
  \********************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(authService) {
        this.authService = authService;
        this.avartarImage = {
            type: '',
            val: ''
        };
    }
    AvatarComponent.prototype.ngOnInit = function () {
        this.avartarImage = this.authService.getAvartarImage(this.userProfile);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "userProfile", void 0);
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.scss */ "./src/app/avatar/avatar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/expired/expired.component.html":
/*!************************************************!*\
  !*** ./src/app/expired/expired.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expired\" *ngIf=\"!isLoading\">\r\n    <img [src]=\"user.avatar == '' ? '/assets/images/avatar.png' : user.avatar\" alt=\"\" class=\"user-avartar\">\r\n    <p style=\"margin-top: 30px;\">\r\n      <span style=\"font-size: 30px;color: white;\"><strong style=\"font-size: 30px;color: white;\">BIM</strong> . VU</span>\r\n    </p>\r\n    <p style=\"font-size: 25px;color: white;    margin-top: 25px;\">\r\n      Your <span style=\"font-size: 25px;color:#2f5597\">30 day</span> trial period has expired. Please upgrade.\r\n    </p>\r\n\r\n    <button class=\"upgrade-btn\" (click)=\"gotourl('/upgrade')\">UPGRADE</button>\r\n\r\n    <button class=\"contact-btn\">CONTACT SUPPORT</button>\r\n\r\n</div>\r\n\r\n<app-loading *ngIf=\"isLoading\"></app-loading>"

/***/ }),

/***/ "./src/app/expired/expired.component.scss":
/*!************************************************!*\
  !*** ./src/app/expired/expired.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expired {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background: black;\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .expired .user-avartar {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%; }\n  .expired .upgrade-btn {\n    background: #3b5998;\n    color: white;\n    padding: 10px 0px;\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    margin-top: 25px;\n    width: 20%; }\n  .expired .contact-btn {\n    background: #000;\n    color: #3b5998;\n    padding: 10px 0px;\n    border: solid 2px #3b5998;\n    border-radius: 3px;\n    outline: none;\n    margin-top: 25px;\n    width: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwaXJlZC9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXGV4cGlyZWRcXGV4cGlyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxPQUFNO0VBQ04sUUFBTztFQUNQLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBNkIxQjtFQXhDRDtJQWNRLGFBQVk7SUFDWixjQUFhO0lBQ2IsbUJBQWtCLEVBQ3JCO0VBakJMO0lBb0JRLG9CQUFtQjtJQUNuQixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixXQUNKLEVBQUM7RUE1Qkw7SUErQlEsaUJBQWdCO0lBQ2hCLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsMEJBQXlCO0lBQ3pCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsaUJBQWdCO0lBQ2hCLFdBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL2V4cGlyZWQvZXhwaXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBpcmVke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC51c2VyLWF2YXJ0YXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC51cGdyYWRlLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB3aWR0aDogMjAlXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzNiNTk5ODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMCVcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/expired/expired.component.ts":
/*!**********************************************!*\
  !*** ./src/app/expired/expired.component.ts ***!
  \**********************************************/
/*! exports provided: ExpiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiredComponent", function() { return ExpiredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpiredComponent = /** @class */ (function () {
    function ExpiredComponent(router, authService, afAuth) {
        this.router = router;
        this.authService = authService;
        this.afAuth = afAuth;
        this.isLoading = true;
    }
    ExpiredComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authUser = this.afAuth.auth.currentUser;
        this.authService.getUserByIdPromise(this.authUser.uid).then(function (data) {
            _this.isLoading = false;
            if (data) {
                _this.user = data;
            }
        });
    };
    ExpiredComponent.prototype.gotourl = function (url) {
        this.router.navigate([url]);
    };
    ExpiredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expired',
            template: __webpack_require__(/*! ./expired.component.html */ "./src/app/expired/expired.component.html"),
            styles: [__webpack_require__(/*! ./expired.component.scss */ "./src/app/expired/expired.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ExpiredComponent);
    return ExpiredComponent;
}());



/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgetpassword works!\n</p>\n"

/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldHBhc3N3b3JkL2ZvcmdldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function() { return ForgetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetpasswordComponent = /** @class */ (function () {
    function ForgetpasswordComponent() {
    }
    ForgetpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgetpassword',
            template: __webpack_require__(/*! ./forgetpassword.component.html */ "./src/app/forgetpassword/forgetpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgetpassword.component.scss */ "./src/app/forgetpassword/forgetpassword.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetpasswordComponent);
    return ForgetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row style=\"justify-content: space-between;\" class=\"header\">\r\n    <div class=left-group>\r\n      <span class=\"logo\"><a (click)=\"gotourl('/')\"><strong>BIM</strong> . VU</a></span>\r\n      <span class=\"sp-line\"> |</span> \r\n      <span class=\"page-title\"></span>\r\n    </div>\r\n    <div class=\"right-group\">\r\n        <div style=\"display: flex; align-items: center;\">\r\n            <span *ngIf=\"url == '/signin'\" class=\"nav-item-createaccount\" (click)=\"gotourl('/signup')\">CREATE ACCOUNT</span>\r\n            <span *ngIf=\"url == '/signup'\" class=\"nav-item-signinaccount\" (click)=\"gotourl('/home')\">SIGN IN</span>\r\n            <span (click)=\"openDialog()\" *ngIf=\"isAuth && userProfile\" style=\"margin-right: 10px;\">Hi {{userProfile.name}}</span>\r\n            <app-avatar *ngIf=\"userProfile\" [userProfile]=\"userProfile\" (click)=\"openDialog()\"></app-avatar>\r\n        </div>\r\n        <mat-icon>notifications</mat-icon>\r\n        <button mat-flat-button color=\"white\" (click)=\"gotourl('/upgrade')\">Upgrade</button>\r\n        <mat-icon>help</mat-icon>\r\n        <mat-icon (click)=\"signout()\">cancel</mat-icon>  \r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item-signinaccount,\n.nav-item-createaccount {\n  font-size: 12px;\n  cursor: pointer; }\n\n.sp-line {\n  margin: 0 50px;\n  font-size: 12px; }\n\n.header.mat-toolbar-row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: #181717;\n  height: 50px; }\n\n.header.mat-toolbar-row .left-group .logo a {\n    font-size: 1.5em;\n    color: #ffffff;\n    text-decoration: none;\n    cursor: pointer; }\n\n.header.mat-toolbar-row .left-group .logo a strong {\n      font-size: 1.2em;\n      color: #ffffff; }\n\n.header.mat-toolbar-row .right-group {\n    display: flex;\n    align-items: center;\n    width: auto; }\n\n.header.mat-toolbar-row .right-group > div {\n      padding: 0 10px; }\n\n.header.mat-toolbar-row .right-group .small-avatar {\n      background: #2F5597;\n      border-radius: 100%;\n      padding: 5px;\n      margin-left: 10px;\n      font-size: .7em;\n      cursor: pointer; }\n\n.header.mat-toolbar-row .right-group .small-avatar-image {\n      margin-left: 10px;\n      border-radius: 50%;\n      height: 30px;\n      width: 30px;\n      border: solid 1px #2F5597;\n      cursor: pointer; }\n\n.header.mat-toolbar-row .right-group button {\n      background: none;\n      margin: 0 5px;\n      border: 2px solid #2F5597;\n      line-height: 25px; }\n\n.header.mat-toolbar-row .right-group mat-icon {\n      color: #3B3838;\n      font-size: 25px;\n      width: 25px;\n      height: 25px;\n      line-height: 25px;\n      margin: 0 3px;\n      cursor: pointer;\n      display: flex;\n      align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBR0ksZ0JBQWU7RUFDZixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsYUFBWSxFQXlEZjs7QUE5REQ7SUFTWSxpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixnQkFBZSxFQU1sQjs7QUFsQlQ7TUFlZ0IsaUJBQWdCO01BQ2hCLGVBQWMsRUFDakI7O0FBakJiO0lBcUJRLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsWUFBVyxFQXNDZDs7QUE3REw7TUEwQlksZ0JBQWUsRUFDbEI7O0FBM0JUO01BNkJZLG9CQUFtQjtNQUNuQixvQkFBbUI7TUFDbkIsYUFBWTtNQUNaLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGdCQUFlLEVBQ2xCOztBQW5DVDtNQXFDWSxrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixZQUFXO01BQ1gsMEJBQXlCO01BQ3pCLGdCQUFlLEVBQ2xCOztBQTNDVDtNQTZDWSxpQkFBZ0I7TUFDaEIsY0FBYTtNQUNiLDBCQUF5QjtNQUN6QixrQkFBaUIsRUFDcEI7O0FBakRUO01BbURZLGVBQWM7TUFDZCxnQkFBZTtNQUNmLFlBQVc7TUFDWCxhQUFZO01BQ1osa0JBQWlCO01BQ2pCLGNBQWE7TUFDYixnQkFBZTtNQUNmLGNBQWE7TUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtLXNpZ25pbmFjY291bnQsXHJcbi5uYXYtaXRlbS1jcmVhdGVhY2NvdW50XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNwLWxpbmV7XHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmhlYWRlci5tYXQtdG9vbGJhci1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTgxNzE3O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgXHJcbiAgICAubGVmdC1ncm91cCB7XHJcbiAgICAgICAgLmxvZ28gYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQtZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNtYWxsLWF2YXRhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyRjU1OTc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc21hbGwtYXZhdGFyLWltYWdle1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMkY1NTk3OyBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMkY1NTk3O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM0IzODM4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, dialog, authService, auth) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.auth = auth;
        this.url = '';
        this.avartarImage = {
            type: '',
            val: ''
        };
        this.router.events.subscribe(function (val) {
            _this.url = val['url'];
        });
        var me = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                me.isAuth = true;
                me.authUser = me.auth.auth.currentUser;
                me.authService.getUserById(me.authUser.uid).valueChanges().subscribe(function (data) {
                    me.userProfile = data;
                });
            }
            else {
                me.isAuth = false;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewChecked = function () {
    };
    HeaderComponent.prototype.gotourl = function (url) {
        this.router.navigate([url]);
    };
    HeaderComponent.prototype.openDialog = function () {
        // 
        var dialogRef = this.dialog.open(_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HeaderComponent.prototype.signout = function () {
        var _this = this;
        this.authService.doSignout().then(function (res) {
            _this.router.navigate(['/signin']);
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home row\" layout=\"row\">\r\n    <div flex *ngFor=\"let project of projects | async \" class=\"col-md-2 card-div\" (click)=\"gotourl('/project/profile/' + project.key)\">\r\n        <mat-card class=\"project-card\">\r\n            <mat-card-header>\r\n                <mat-card-title>{{ project.number }}</mat-card-title>\r\n                <mat-card-subtitle>{{ project.name }}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <img mat-card-image *ngIf=\"project.thumb_image\" [src]=\"project.thumb_image\" [alt]=\"project.name\">\r\n              <img mat-card-image *ngIf=\"!project.thumb_image\" src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" [alt]=\"project.name\">\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div flex class=\"col-md-2 card-div\">\r\n      <mat-card class=\"add-card\">\r\n        <mat-card-content>\r\n            <div class=\"add-project\">\r\n                <img mat-card-image src=\"/assets/icons/baseline-add-24px.svg\" alt=\"Photo of a Shiba Inu\" class=\"add-card\" (click)=\"gotourl('/project/new')\">\r\n            </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n        \r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  margin: 20px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch; }\n  .home .card-div {\n    padding: 20px; }\n  .home .mat-card {\n    padding: 0;\n    position: relative;\n    height: 100%;\n    border-radius: 0;\n    background: #262626; }\n  .home .mat-card .mat-card-header {\n      width: 100%;\n      padding: 20px 10px;\n      position: absolute;\n      font-stretch: expanded;\n      background: rgba(0, 0, 0, 0.5); }\n  .home .mat-card .mat-card-header .mat-card-title {\n        font-size: 20px;\n        color: #ffffff;\n        text-transform: uppercase;\n        clear: both; }\n  .home .mat-card .mat-card-header .mat-card-subtitle {\n        font-size: 14px;\n        color: #ffffff;\n        text-transform: uppercase;\n        margin-bottom: 10px;\n        clear: both; }\n  .home .mat-card .mat-card-content {\n      height: 100%; }\n  .home .mat-card .mat-card-content img {\n        height: 100%; }\n  .home .mat-card img {\n      width: 100%;\n      margin: 0; }\n  .home .mat-card .add-project {\n      width: 100%;\n      display: flex;\n      align-items: center; }\n  .home .mat-card .add-project mat-icon {\n        width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YscUJBQW9CLEVBeUR2QjtFQTdERDtJQU9RLGNBQWEsRUFDaEI7RUFSTDtJQVdRLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixvQkFBbUIsRUE2Q3RCO0VBNURMO01Ba0JZLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsbUJBQWtCO01BQ2xCLHVCQUFzQjtNQUN0QiwrQkFBZ0MsRUFlbkM7RUFyQ1Q7UUF5QmdCLGdCQUFlO1FBQ2YsZUFBYztRQUNkLDBCQUF5QjtRQUN6QixZQUFXLEVBQ2Q7RUE3QmI7UUErQmdCLGdCQUFlO1FBQ2YsZUFBYztRQUNkLDBCQUF5QjtRQUN6QixvQkFBbUI7UUFDbkIsWUFBVyxFQUNkO0VBcENiO01BdUNZLGFBQVksRUFLZjtFQTVDVDtRQTBDZ0IsYUFBWSxFQUNmO0VBM0NiO01BK0NZLFlBQVc7TUFDWCxVQUFTLEVBQ1o7RUFqRFQ7TUFvRFksWUFBVztNQUNYLGNBQWE7TUFDYixvQkFBbUIsRUFLdEI7RUEzRFQ7UUF5RGdCLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBcclxuICAgIC5jYXJkLWRpdntcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxuXHJcbiAgICAgICAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGQtcHJvamVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, projectService, authService) {
        this.router = router;
        this.projectService = projectService;
        this.authService = authService;
        this.currentUser = this.authService.getAuthUser();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = this.projectService.getProjectsList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }).filter(function (proj) { return proj.created_by == _this.currentUser.uid; });
        }));
    };
    HomeComponent.prototype.gotourl = function (url) {
        this.router.navigate([url]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_2__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\r\n    <mat-spinner></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loading/loading.component.scss":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/lod/lod.component.html":
/*!****************************************!*\
  !*** ./src/app/lod/lod.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"lod-form\">\n          <div>\n            <mat-form-field color=\"white\" class=\"\">\n                <input matInput placeholder=\"Search\" value=\"\">\n            </mat-form-field>\n      \n            <mat-form-field color=\"white\">\n                <mat-select placeholder=\"Stage\">\n                  <mat-option *ngFor=\"let stage of stages\" [value]=\"stage.key\">\n                    {{stage.stage}} \n                  </mat-option>\n                </mat-select>\n            </mat-form-field>\n      \n            <mat-form-field color=\"white\">\n                  <mat-select placeholder=\"Lod\">\n                    <mat-option *ngFor=\"let lod of lods\" [value]=\"lod.value\">\n                      {{lod.viewValue}}\n                    </mat-option>\n                  </mat-select>\n            </mat-form-field>\n          </div>\n\n          <div>\n              <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n              <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n          </div>\n        \n        </div>\n\n          <div *ngIf=\"isEditable\" class=\"tool-bar\">\n              <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n              <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n              <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n              <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n              <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n              <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n          </div>\n      </div>\n    \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\" sticky>\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\"> <span>D{{(\"00\"+element.number).slice(-2)}}</span> </td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"disciple\" sticky>\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Disciple </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <span *ngIf=\"element.key != editableKey\">{{element.disciple}}</span>\n                <mat-form-field *ngIf=\"element.key == editableKey\">\n                    <input matInput [(ngModel)]=\"element.disciple\" required>\n                </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"code\" sticky>\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Code </th>\n            <td mat-cell *matCellDef=\"let element\">                \n                <span *ngIf=\"element.key != editableKey\">{{element.code}}</span>\n                <mat-form-field *ngIf=\"element.key == editableKey\">\n                    <input matInput [(ngModel)]=\"element.code\" required>\n                </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container *ngFor=\"let stage of stages\" [matColumnDef]=\"'s'+('00'+stage.number).slice(-2)\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>S{{(\"00\"+stage.number).slice(-2)}}</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\">{{element.stages[('s'+('00'+stage.number).slice(-2))]}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <mat-select placeholder=\"\" [(ngModel)]=\"element.stages[('s'+('00'+stage.number).slice(-2))]\">\n                      <mat-option *ngFor=\"let option of dropdowns\" [value]=\"option\">\n                        {{ option }} \n                      </mat-option>\n                    </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lod/lod.component.scss":
/*!****************************************!*\
  !*** ./src/app/lod/lod.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .content-search {\n    background: #ffffff; }\n  .main-content .content-search .lod-form {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px; }\n  .main-content .content-search .lod-form .mat-form-field {\n        margin-right: 30px; }\n  .main-content .content-search .lod-form .mat-button {\n        background: #ffffff;\n        border: 2px solid #215ebb;\n        color: #215ebb; }\n  .main-content .content-search .tool-bar {\n      display: flex;\n      flex-direction: row-reverse; }\n  .main-content .content-search .tool-bar > div {\n        display: flex;\n        padding: 10px;\n        align-items: center;\n        align-content: center; }\n  .main-content .table-container {\n    height: 100%;\n    width: 100%;\n    overflow: auto; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n      color: #000000;\n      padding-left: 10px;\n      padding-right: 10px;\n      text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n        padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n      font-weight: 800;\n      text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n      border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n      border: none; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:first-child, .main-content .table-container .mat-table .mat-row .mat-table-sticky:first-child {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:nth-child(2), .main-content .table-container .mat-table .mat-row .mat-table-sticky:nth-child(2) {\n      left: 96px !important;\n      width: 150px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:nth-child(3), .main-content .table-container .mat-table .mat-row .mat-table-sticky:nth-child(3) {\n      left: 239px !important;\n      width: 150px;\n      border-right: 1px solid #e0e0e0; }\n  .gray-100 {\n  background: #ececec; }\n  .gray-200 {\n  background: #e0e0e0; }\n  .gray-300 {\n  background: #b7b7b7; }\n  .gray-400 {\n  background: #9a9a9a; }\n  .gray-500 {\n  background: #7b7b7b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9kL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcbG9kXFxsb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQStGekI7RUFsR0Q7SUFNUSxvQkFBbUIsRUE2QnRCO0VBbkNMO01BU1ksY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixjQUFhLEVBV2hCO0VBdEJUO1FBY2dCLG1CQUFrQixFQUNyQjtFQWZiO1FBa0JnQixvQkFBbUI7UUFDbkIsMEJBQXlCO1FBQ3pCLGVBQWMsRUFDakI7RUFyQmI7TUF5QlksY0FBYTtNQUNiLDRCQUEyQixFQVE5QjtFQWxDVDtRQTZCZ0IsY0FBYTtRQUNiLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsc0JBQXFCLEVBQ3hCO0VBakNiO0lBc0NRLGFBQVk7SUFDWixZQUFXO0lBQ1gsZUFBYyxFQXVEakI7RUEvRkw7TUE2Q2dCLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLG1CQUFrQixFQUtyQjtFQXJEYjtRQW1Eb0IsbUJBQWtCLEVBQ3JCO0VBcERqQjtNQXdEZ0IsaUJBQWdCO01BQ2hCLDJCQUEwQixFQUM3QjtFQTFEYjtNQTZEZ0IsYUFBWSxFQUNmO0VBOURiO01Ba0VvQixpQ0FBZ0MsRUFDbkM7RUFuRWpCO01BcUVvQixhQUFZLEVBQ2Y7RUF0RWpCO01BeUV3QixhQUFZLEVBQ2Y7RUExRXJCO01BNkV3QixzQkFBcUI7TUFDckIsYUFBWSxFQUNmO0VBL0VyQjtNQWtGd0IsdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixnQ0FBK0IsRUFDbEM7RUFlckI7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCO0VBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZC9sb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5jb250ZW50LXNlYXJjaCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgLmxvZC1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMTVlYmI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxNWViYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudG9vbC1iYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblxyXG4gICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtdGFibGUge1xyXG5cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1yb3csIC5tYXQtcm93IHtcclxuICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwubWF0LXRhYmxlLXN0aWNreSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXQtdGFibGUtc3RpY2t5e1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMzlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbn1cclxuXHJcbi5ncmF5LTEwMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG59XHJcblxyXG4uZ3JheS0yMDAge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxufVxyXG5cclxuLmdyYXktMzAwIHtcclxuICAgIGJhY2tncm91bmQ6ICNiN2I3Yjc7XHJcbn1cclxuXHJcbi5ncmF5LTQwMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWE5YTlhO1xyXG59XHJcblxyXG4uZ3JheS01MDAge1xyXG4gICAgYmFja2dyb3VuZDogIzdiN2I3YjtcclxufVxyXG5cclxuXHJcbiAgIFxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/lod/lod.component.ts":
/*!**************************************!*\
  !*** ./src/app/lod/lod.component.ts ***!
  \**************************************/
/*! exports provided: LodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodComponent", function() { return LodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LodComponent = /** @class */ (function () {
    function LodComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
        this.tablePath = '/lods';
        this.isEditable = false;
        this.stages = [];
        this.lods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.dropdowns = ['NA', '100', '200', '300', '400', '500'];
        this.displayedColumns = ['number', 'disciple', 'code'];
    }
    LodComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadData();
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    LodComponent.prototype.loadData = function () {
        var _this = this;
        this.databaseService.getLists('/stages/' + this.projectId).valueChanges().subscribe(function (data) {
            _this.stages = data;
            for (var _i = 0, _a = _this.stages; _i < _a.length; _i++) {
                var stage = _a[_i];
                _this.displayedColumns.push("s" + ("00" + stage.number).slice(-2));
            }
        });
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
        });
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    };
    LodComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
        }
    };
    LodComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    LodComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var number = 0;
            var position = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (number < element.number) {
                    number = element.number;
                }
                if (position < element.position) {
                    position = element.position;
                }
            }
            number++;
            position++;
            var stageValues = {};
            for (var _b = 0, _c = this.stages; _b < _c.length; _b++) {
                var stage = _c[_b];
                stageValues['s' + ('00' + stage.number).slice(-2)] = 'NA';
            }
            var newRow = { number: number, disciple: "", code: "", code_color: "", stages: stageValues, key: "newRow", position: position, is_new: true };
            console.log(newRow);
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    LodComponent.prototype.deleteRow = function () {
        console.log(this.selectedKey);
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    LodComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    LodComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == 'newRow') {
                if (element.disciple && element.code) {
                    var result = this.databaseService.createRow(this.tablePath, element);
                    element.key = result.key;
                    element.is_new = false;
                    this.databaseService.updateRow(this.tablePath, result.key, element);
                }
            }
            if (element.key == this.editableKey) {
                if (element.disciple && element.code) {
                    this.databaseService.updateRow(this.tablePath, this.editableKey, element);
                }
            }
        }
        this.editableKey = null;
    };
    LodComponent.prototype.moveUp = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index - 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index - 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index - 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index - 1]['key'], this.elements[index - 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    LodComponent.prototype.moveDown = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index + 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index + 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index + 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index + 1]['key'], this.elements[index + 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    LodComponent.prototype.sortRecords = function () {
        if (this.elements) {
            this.elements.sort(function (a, b) { return a.position - b.position; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], LodComponent.prototype, "sort", void 0);
    LodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lod',
            template: __webpack_require__(/*! ./lod.component.html */ "./src/app/lod/lod.component.html"),
            styles: [__webpack_require__(/*! ./lod.component.scss */ "./src/app/lod/lod.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LodComponent);
    return LodComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSortModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSortModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/project/matrix/matrix.component.html":
/*!******************************************************!*\
  !*** ./src/app/project/matrix/matrix.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  matrix works!\n</p>\n"

/***/ }),

/***/ "./src/app/project/matrix/matrix.component.scss":
/*!******************************************************!*\
  !*** ./src/app/project/matrix/matrix.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvbWF0cml4L21hdHJpeC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/project/matrix/matrix.component.ts":
/*!****************************************************!*\
  !*** ./src/app/project/matrix/matrix.component.ts ***!
  \****************************************************/
/*! exports provided: MatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixComponent", function() { return MatrixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatrixComponent = /** @class */ (function () {
    function MatrixComponent() {
    }
    MatrixComponent.prototype.ngOnInit = function () {
    };
    MatrixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix',
            template: __webpack_require__(/*! ./matrix.component.html */ "./src/app/project/matrix/matrix.component.html"),
            styles: [__webpack_require__(/*! ./matrix.component.scss */ "./src/app/project/matrix/matrix.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MatrixComponent);
    return MatrixComponent;
}());



/***/ }),

/***/ "./src/app/project/meeting/meeting.component.html":
/*!********************************************************!*\
  !*** ./src/app/project/meeting/meeting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" value=\"\">\n                </mat-form-field>\n            </div>\n            <div>\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n            <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              M{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"meeting\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Meeting </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">{{element.meeting}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.meeting\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"start\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Start </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.start | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"element.start\" required>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container matColumnDef=\"frequency\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Frequency </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{ element.frequency }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <mat-select name=\"meeting_frequency\" placeholder=\"\" [(ngModel)]=\"element.frequency\" required aria-required=\"true\">\n                      <mat-option *ngFor=\"let option of frequencyOptions\" [value]=\"option\">{{ option }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s02 Column -->\n          <ng-container matColumnDef=\"organizer\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Organizer </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"gray-200\">{{element.organizer}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.organizer\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/project/meeting/meeting.component.scss":
/*!********************************************************!*\
  !*** ./src/app/project/meeting/meeting.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .content-search {\n    background: #ffffff; }\n  .main-content .content-search .search-form {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px; }\n  .main-content .content-search .search-form .mat-form-field {\n        margin-right: 30px; }\n  .main-content .content-search .search-form .mat-button {\n        background: #ffffff;\n        border: 2px solid #215ebb;\n        color: #215ebb; }\n  .main-content .content-search .tool-bar {\n      display: flex;\n      flex-direction: row-reverse; }\n  .main-content .content-search .tool-bar > div {\n        display: flex;\n        padding: 10px;\n        align-items: center;\n        align-content: center; }\n  .main-content .table-container {\n    height: calc(100% - 100px);\n    width: 100%;\n    overflow: auto; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n      color: #000000;\n      padding-left: 10px;\n      padding-right: 10px;\n      text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n        padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n      font-weight: 800;\n      text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n      border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n      border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9tZWV0aW5nL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdFxcbWVldGluZ1xcbWVldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBdUV6QjtFQTFFRDtJQU1RLG9CQUFtQixFQTZCdEI7RUFuQ0w7TUFTWSxjQUFhO01BQ2IsK0JBQThCO01BQzlCLGNBQWEsRUFXaEI7RUF0QlQ7UUFjZ0IsbUJBQWtCLEVBQ3JCO0VBZmI7UUFrQmdCLG9CQUFtQjtRQUNuQiwwQkFBeUI7UUFDekIsZUFBYyxFQUNqQjtFQXJCYjtNQXlCWSxjQUFhO01BQ2IsNEJBQTJCLEVBUTlCO0VBbENUO1FBNkJnQixjQUFhO1FBQ2IsY0FBYTtRQUNiLG9CQUFtQjtRQUNuQixzQkFBcUIsRUFDeEI7RUFqQ2I7SUFzQ1EsMkJBQTBCO0lBQzFCLFlBQVc7SUFDWCxlQUFjLEVBaUNqQjtFQXpFTDtNQTZDZ0IsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsbUJBQWtCLEVBS3JCO0VBckRiO1FBbURvQixtQkFBa0IsRUFDckI7RUFwRGpCO01Bd0RnQixpQkFBZ0I7TUFDaEIsMkJBQTBCLEVBQzdCO0VBMURiO01BNkRnQixhQUFZLEVBQ2Y7RUE5RGI7TUFrRW9CLGlDQUFnQyxFQUNuQztFQW5FakI7TUFxRW9CLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvbWVldGluZy9tZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuY29udGVudC1zZWFyY2gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIC5zZWFyY2gtZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjE1ZWJiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTVlYmI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRvb2wtYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtdGFibGUge1xyXG5cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1yb3csIC5tYXQtcm93IHtcclxuICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwubWF0LXRhYmxlLXN0aWNreSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/project/meeting/meeting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/project/meeting/meeting.component.ts ***!
  \******************************************************/
/*! exports provided: MeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingComponent", function() { return MeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingComponent = /** @class */ (function () {
    function MeetingComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
        this.tablePath = '/meeting';
        this.isEditable = false;
        this.displayedColumns = ['number', 'meeting', 'start', 'frequency', 'organizer'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.frequencyOptions = [
            "One time",
            "As needed",
            "Daily",
            "Weelky",
            "Bi-Weekly",
            "Monthly",
            "Quarterly",
            "Yearly"
        ];
    }
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadData();
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    MeetingComponent.prototype.loadData = function () {
        var _this = this;
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
        });
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    };
    MeetingComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
        }
    };
    MeetingComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    MeetingComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var number = 0;
            var position = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var stage = _a[_i];
                if (number < stage.number) {
                    number = stage.number;
                }
                if (position < stage.position) {
                    position = stage.position;
                }
            }
            number++;
            position++;
            var newRow = { number: number, meeting: '', start: "", frequency: "", organizer: "", key: "newRow", position: position };
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    MeetingComponent.prototype.deleteRow = function () {
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    MeetingComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    MeetingComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var stage = _a[_i];
            if (stage.key == 'newRow') {
                var result = this.databaseService.createRow(this.tablePath, stage);
                stage.key = result.key;
                this.databaseService.updateRow(this.tablePath, result.key, stage);
            }
            if (stage.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, stage);
            }
        }
        this.editableKey = null;
    };
    MeetingComponent.prototype.moveUp = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index - 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index - 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index - 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index - 1]['key'], this.elements[index - 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    MeetingComponent.prototype.moveDown = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index + 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index + 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index + 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index + 1]['key'], this.elements[index + 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    MeetingComponent.prototype.sortRecords = function () {
        if (this.elements) {
            this.elements.sort(function (a, b) { return a.position - b.position; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MeetingComponent.prototype, "sort", void 0);
    MeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meeting',
            template: __webpack_require__(/*! ./meeting.component.html */ "./src/app/project/meeting/meeting.component.html"),
            styles: [__webpack_require__(/*! ./meeting.component.scss */ "./src/app/project/meeting/meeting.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MeetingComponent);
    return MeetingComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-page\">\n  <div class=\"project-side-bar\">\n    <app-sidebar></app-sidebar>\n  </div>\n\n  <div class=\"project-main-content\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"project-right-panel\">\n    <app-sidebarright></app-sidebarright>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-page {\n  width: 100%;\n  height: calc(100vh - 85px);\n  display: flex; }\n  .project-page .project-side-bar {\n    width: 15%; }\n  .project-page .project-main-content {\n    width: 65%;\n    background: #ffffff; }\n  .project-page .project-right-panel {\n    width: 20%;\n    background: #e0dfde; }\n  .project-page .project-right-panel app-sidebarright {\n      width: 100%; }\n  .project-page :after {\n    content: \"\";\n    display: block;\n    clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHByb2plY3RcXHByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsMkJBQTBCO0VBQzFCLGNBQWEsRUF5QmhCO0VBNUJEO0lBTVEsV0FBVSxFQUNiO0VBUEw7SUFVUSxXQUFVO0lBQ1Ysb0JBQW1CLEVBQ3RCO0VBWkw7SUFlUSxXQUFVO0lBQ1Ysb0JBQW1CLEVBS3RCO0VBckJMO01BbUJZLFlBQVcsRUFDZDtFQXBCVDtJQXdCUSxZQUFXO0lBQ1gsZUFBYztJQUNkLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnByb2plY3Qtc2lkZS1iYXIge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtbWFpbi1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtcmlnaHQtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UwZGZkZTtcclxuXHJcbiAgICAgICAgYXBwLXNpZGViYXJyaWdodCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/quality/quality.component.html":
/*!********************************************************!*\
  !*** ./src/app/project/quality/quality.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" value=\"\">\n                </mat-form-field>\n            </div>\n            <div>\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Add</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              Q{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"discipline\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Discipline </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">\n                  {{ getDiscipline(element.discipline) }}\n              </span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <mat-select name=\"meeting_frequency\" placeholder=\"\" [(ngModel)]=\"element.discipline\" required aria-required=\"true\">\n                      <mat-option *ngFor=\"let option of disciplines\" [value]=\"option.key\">{{ option.disciple }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"checked_by\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> User </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <!-- <span>{{ getUserData(element.checked_by) }}</span> -->\n                <!-- <app-avatar [userProfile]=\"getUserData(element.checked_by)\" ></app-avatar> -->\n                <app-useravatar ></app-useravatar>\n              </td>\n            </ng-container>\n      \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"report_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.report_date | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"element.report_date\" required>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- Visual Column -->\n          <ng-container matColumnDef=\"visual\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Visual </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <div class=\"check-toggle\" (click)=\"switchVisual()\">\n                    <div class=\"toggle-active\" *ngIf=\"element.visual\"></div>\n                    <div class=\"toggle-inactive\" *ngIf=\"!element.visual\"></div>\n                </div>\n            </td>\n          </ng-container>\n      \n          <!-- Interface Column -->\n          <ng-container matColumnDef=\"interface\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Interface </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                  <div class=\"check-toggle\" (click)=\"switchInterface()\">\n                      <div class=\"toggle-active\" *ngIf=\"element.interface\"></div>\n                      <div class=\"toggle-inactive\" *ngIf=\"!element.interface\"></div>\n                  </div>\n              </td>\n            </ng-container>\n        \n          <!-- Information Column -->\n          <ng-container matColumnDef=\"information\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Information </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                  <div class=\"check-toggle\" (click)=\"switchInformation()\">\n                      <div class=\"toggle-active\" *ngIf=\"element.information\"></div>\n                      <div class=\"toggle-inactive\" *ngIf=\"!element.information\"></div>\n                  </div>\n              </td>\n            </ng-container>\n        \n          <!-- Standards Column -->\n          <ng-container matColumnDef=\"standards\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Standards </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                  <div class=\"check-toggle\" (click)=\"switchStandards()\">\n                      <div class=\"toggle-active\" *ngIf=\"element.standards\"></div>\n                      <div class=\"toggle-inactive\" *ngIf=\"!element.standards\"></div>\n                  </div>\n              </td>\n            </ng-container>\n        \n          <!-- Remarks Column -->\n          <ng-container matColumnDef=\"remarks\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.key != editableKey\">{{element.remarks}}</span>\n                <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [(ngModel)]=\"element.remarks\" required>\n                </mat-form-field>\n              </td>\n            </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/project/quality/quality.component.scss":
/*!********************************************************!*\
  !*** ./src/app/project/quality/quality.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .content-search {\n    background: #ffffff; }\n  .main-content .content-search .search-form {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px; }\n  .main-content .content-search .search-form .mat-form-field {\n        margin-right: 30px; }\n  .main-content .content-search .search-form .mat-button {\n        background: #ffffff;\n        border: 2px solid #215ebb;\n        color: #215ebb; }\n  .main-content .content-search .tool-bar {\n      display: flex;\n      flex-direction: row-reverse; }\n  .main-content .content-search .tool-bar > div {\n        display: flex;\n        padding: 10px;\n        align-items: center;\n        align-content: center; }\n  .main-content .table-container {\n    height: calc(100% - 100px);\n    width: 100%;\n    overflow: auto; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n      color: #000000;\n      padding-left: 10px;\n      padding-right: 10px;\n      text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n        padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n      font-weight: 800;\n      text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n      border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n      border: none; }\n  .main-content .check-toggle > div {\n    width: 20px;\n    height: 20px; }\n  .main-content .check-toggle > div.toggle-active {\n      background: #00B050; }\n  .main-content .check-toggle > div.toggle-inactive {\n      background: #d2d2d2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9xdWFsaXR5L0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdFxccXVhbGl0eVxccXVhbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBbUZ6QjtFQXRGRDtJQU1RLG9CQUFtQixFQTZCdEI7RUFuQ0w7TUFTWSxjQUFhO01BQ2IsK0JBQThCO01BQzlCLGNBQWEsRUFXaEI7RUF0QlQ7UUFjZ0IsbUJBQWtCLEVBQ3JCO0VBZmI7UUFrQmdCLG9CQUFtQjtRQUNuQiwwQkFBeUI7UUFDekIsZUFBYyxFQUNqQjtFQXJCYjtNQXlCWSxjQUFhO01BQ2IsNEJBQTJCLEVBUTlCO0VBbENUO1FBNkJnQixjQUFhO1FBQ2IsY0FBYTtRQUNiLG9CQUFtQjtRQUNuQixzQkFBcUIsRUFDeEI7RUFqQ2I7SUFzQ1EsMkJBQTBCO0lBQzFCLFlBQVc7SUFDWCxlQUFjLEVBaUNqQjtFQXpFTDtNQTZDZ0IsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsbUJBQWtCLEVBS3JCO0VBckRiO1FBbURvQixtQkFBa0IsRUFDckI7RUFwRGpCO01Bd0RnQixpQkFBZ0I7TUFDaEIsMkJBQTBCLEVBQzdCO0VBMURiO01BNkRnQixhQUFZLEVBQ2Y7RUE5RGI7TUFrRW9CLGlDQUFnQyxFQUNuQztFQW5FakI7TUFxRW9CLGFBQVksRUFDZjtFQXRFakI7SUE0RVEsWUFBVztJQUNYLGFBQVksRUFRZjtFQXJGTDtNQWdGWSxvQkFBbUIsRUFDdEI7RUFqRlQ7TUFtRlksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9xdWFsaXR5L3F1YWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5jb250ZW50LXNlYXJjaCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMTVlYmI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxNWViYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudG9vbC1iYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblxyXG4gICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC10YWJsZSB7XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsLCAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFibGUtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtaGVhZGVyLXJvdywgLm1hdC1yb3cge1xyXG4gICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbC5tYXQtdGFibGUtc3RpY2t5IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXQtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGVjay10b2dnbGUgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgJi50b2dnbGUtYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQjA1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi50b2dnbGUtaW5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/project/quality/quality.component.ts":
/*!******************************************************!*\
  !*** ./src/app/project/quality/quality.component.ts ***!
  \******************************************************/
/*! exports provided: QualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityComponent", function() { return QualityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/profile */ "./src/app/user/profile.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QualityComponent = /** @class */ (function () {
    function QualityComponent(databaseService, auth, router) {
        this.databaseService = databaseService;
        this.auth = auth;
        this.router = router;
        this.tablePath = '/quality';
        this.isEditable = false;
        this.displayedColumns = ['number', 'discipline', 'checked_by', 'report_date', 'visual', 'interface', 'information', 'standards', 'remarks'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.assignedUsers = [];
        this.currentUser = new _user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfile"]();
    }
    QualityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadData();
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    QualityComponent.prototype.loadData = function () {
        var _this = this;
        this.auth.getUserProfile().valueChanges().subscribe(function (data) {
            _this.currentUser = data;
        });
        this.databaseService.getLists('/lods/' + this.projectId).valueChanges().subscribe(function (data) {
            _this.disciplines = data;
        });
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
            for (var _i = 0, _a = _this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                _this.assignedUsers.push(_this.getUserData(element.checked_by));
            }
        });
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    };
    QualityComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
        }
    };
    QualityComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    QualityComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var number = 0;
            var position = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var stage = _a[_i];
                if (number < stage.number) {
                    number = stage.number;
                }
                if (position < stage.position) {
                    position = stage.position;
                }
            }
            number++;
            position++;
            console.log(this.currentUser);
            var newRow = { number: number, discipline: '', checked_by: this.currentUser.uid, report_date: "", visual: false, interface: false, information: false, standards: false, remarks: "", key: "newRow", position: position };
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    QualityComponent.prototype.deleteRow = function () {
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    QualityComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    QualityComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var stage = _a[_i];
            if (stage.key == 'newRow') {
                var result = this.databaseService.createRow(this.tablePath, stage);
                stage.key = result.key;
                this.databaseService.updateRow(this.tablePath, result.key, stage);
            }
            if (stage.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, stage);
            }
        }
        this.editableKey = null;
    };
    QualityComponent.prototype.sortRecords = function () {
        this.elements.sort(function (a, b) { return a.position - b.position; });
    };
    QualityComponent.prototype.switchVisual = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == this.editableKey) {
                element.visual = !element.visual;
            }
        }
    };
    QualityComponent.prototype.switchInterface = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == this.editableKey) {
                element.interface = !element.interface;
            }
        }
    };
    QualityComponent.prototype.switchInformation = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == this.editableKey) {
                element.information = !element.information;
            }
        }
    };
    QualityComponent.prototype.switchStandards = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == this.editableKey) {
                element.standards = !element.standards;
            }
        }
    };
    QualityComponent.prototype.getUserData = function (uid) {
        return this.databaseService.getRowDetails('/users/', uid).snapshotChanges().subscribe(function (data) {
            return data;
        });
    };
    QualityComponent.prototype.getDiscipline = function (key) {
        var discipline;
        this.disciplines.map(function (item) {
            if (item.key == key) {
                discipline = item.disciple;
            }
        });
        return discipline;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], QualityComponent.prototype, "sort", void 0);
    QualityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quality',
            template: __webpack_require__(/*! ./quality.component.html */ "./src/app/project/quality/quality.component.html"),
            styles: [__webpack_require__(/*! ./quality.component.scss */ "./src/app/project/quality/quality.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], QualityComponent);
    return QualityComponent;
}());



/***/ }),

/***/ "./src/app/project/quality/useravatar/useravatar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/project/quality/useravatar/useravatar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-avatar *ngIf=\"userProfile\" [userProfile]=\"userProfile\" ></app-avatar>"

/***/ }),

/***/ "./src/app/project/quality/useravatar/useravatar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/project/quality/useravatar/useravatar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcXVhbGl0eS91c2VyYXZhdGFyL3VzZXJhdmF0YXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/project/quality/useravatar/useravatar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/project/quality/useravatar/useravatar.component.ts ***!
  \********************************************************************/
/*! exports provided: UseravatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseravatarComponent", function() { return UseravatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UseravatarComponent = /** @class */ (function () {
    function UseravatarComponent(authService) {
        this.authService = authService;
    }
    UseravatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserProfile().valueChanges().subscribe(function (data) {
            _this.userProfile = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UseravatarComponent.prototype, "userId", void 0);
    UseravatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useravatar',
            template: __webpack_require__(/*! ./useravatar.component.html */ "./src/app/project/quality/useravatar/useravatar.component.html"),
            styles: [__webpack_require__(/*! ./useravatar.component.scss */ "./src/app/project/quality/useravatar/useravatar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UseravatarComponent);
    return UseravatarComponent;
}());



/***/ }),

/***/ "./src/app/project/team/team.component.html":
/*!**************************************************!*\
  !*** ./src/app/project/team/team.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  team works!\n</p>\n"

/***/ }),

/***/ "./src/app/project/team/team.component.scss":
/*!**************************************************!*\
  !*** ./src/app/project/team/team.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/team/team.component.ts":
/*!************************************************!*\
  !*** ./src/app/project/team/team.component.ts ***!
  \************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/project/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/project/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/projectbim/projectbim.component.html":
/*!******************************************************!*\
  !*** ./src/app/projectbim/projectbim.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"bim-form\">\n          <div>\n            <mat-form-field color=\"white\" class=\"\">\n                <input matInput placeholder=\"Search\" value=\"\">\n            </mat-form-field>\n      \n            <mat-form-field color=\"white\">\n                <mat-select placeholder=\"Stage\">\n                  <mat-option *ngFor=\"let stage of stages\" [value]=\"stage.key\">\n                    {{stage.stage}} \n                  </mat-option>\n                </mat-select>\n            </mat-form-field>\n      \n            <mat-form-field color=\"white\">\n                  <mat-select placeholder=\"Lod\">\n                    <mat-option *ngFor=\"let lod of lods\" [value]=\"lod.value\">\n                      {{lod.viewValue}}\n                    </mat-option>\n                  </mat-select>\n            </mat-form-field>\n          </div>\n          <div>\n            <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n            <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n          </div>           \n        </div>\n\n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n          <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n          <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n          <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n          <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n          <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n          <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n      </div>\n    \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">U{{(\"00\"+element.number).slice(-2)}}</td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"bim_use\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> BIM Use </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"(element.key != editableKey) || !element.is_new\" class=\"no-bg\">{{element.bim_use}}</span>\n              <mat-form-field *ngIf=\"(element.key == editableKey) && element.is_new\">\n                <input matInput [(ngModel)]=\"element.bim_use\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"check\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Check </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <div class=\"check-toggle\" (click)=\"switchToggle()\">\n                <div class=\"toggle-active\" *ngIf=\"element.check\"><span>Active</span></div>\n                <div class=\"toggle-inactive\" *ngIf=\"!element.check\"><span>In Active</span></div>\n              </div>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container matColumnDef=\"software\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Software </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.software}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.software\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s02 Column -->\n          <ng-container matColumnDef=\"version\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Version </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.version}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.version\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s03 Column -->\n          <ng-container matColumnDef=\"format\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Formats</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.format}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.format\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/projectbim/projectbim.component.scss":
/*!******************************************************!*\
  !*** ./src/app/projectbim/projectbim.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .content-search {\n    background: #ffffff; }\n  .main-content .content-search .bim-form {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 20px; }\n  .main-content .content-search .bim-form .mat-form-field {\n        margin-right: 30px; }\n  .main-content .content-search .bim-form .mat-button {\n        background: #ffffff;\n        border: 2px solid #215ebb;\n        color: #215ebb; }\n  .main-content .content-search .tool-bar {\n      display: flex;\n      flex-direction: row-reverse; }\n  .main-content .content-search .tool-bar > div {\n        display: flex;\n        padding: 10px;\n        align-items: center;\n        align-content: center; }\n  .main-content .table-container {\n    height: calc(100% - 100px);\n    width: 100%;\n    overflow: auto; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n      color: #000000;\n      padding-left: 10px;\n      padding-right: 10px;\n      text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n        padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n      font-weight: 800;\n      text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n      border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n      border: none; }\n  .main-content .check-toggle {\n    width: 100px;\n    height: 30px;\n    border-radius: 0; }\n  .main-content .check-toggle .toggle-inactive {\n    border: 2px solid #AFABAB;\n    display: flex;\n    flex-direction: row-reverse; }\n  .main-content .check-toggle .toggle-inactive span {\n    background: #AFABAB; }\n  .main-content .check-toggle .toggle-active {\n    border: 2px solid #00B050;\n    display: flex; }\n  .main-content .check-toggle .toggle-active span {\n    background: #00B050; }\n  .main-content .check-toggle span {\n    width: 80px;\n    height: 26px;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGJpbS9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHByb2plY3RiaW1cXHByb2plY3RiaW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQXVIekI7RUExSEQ7SUFNUSxvQkFBbUIsRUE4QnRCO0VBcENMO01BU1ksY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixvQkFBbUI7TUFDbkIsY0FBYSxFQVdoQjtFQXZCVDtRQWVnQixtQkFBa0IsRUFDckI7RUFoQmI7UUFtQmdCLG9CQUFtQjtRQUNuQiwwQkFBeUI7UUFDekIsZUFBYyxFQUNqQjtFQXRCYjtNQTBCWSxjQUFhO01BQ2IsNEJBQTJCLEVBUTlCO0VBbkNUO1FBOEJnQixjQUFhO1FBQ2IsY0FBYTtRQUNiLG9CQUFtQjtRQUNuQixzQkFBcUIsRUFDeEI7RUFsQ2I7SUF1Q1EsMkJBQTBCO0lBQzFCLFlBQVc7SUFDWCxlQUFjLEVBaUNqQjtFQTFFTDtNQThDZ0IsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsbUJBQWtCLEVBS3JCO0VBdERiO1FBb0RvQixtQkFBa0IsRUFDckI7RUFyRGpCO01BeURnQixpQkFBZ0I7TUFDaEIsMkJBQTBCLEVBQzdCO0VBM0RiO01BOERnQixhQUFZLEVBQ2Y7RUEvRGI7TUFtRW9CLGlDQUFnQyxFQUNuQztFQXBFakI7TUFzRW9CLGFBQVksRUFDZjtFQXZFakI7SUE2RVEsYUFBWTtJQUNaLGFBQVk7SUFDWixpQkFBZ0IsRUFDbkI7RUFoRkw7SUFrRlEsMEJBQXlCO0lBQ3pCLGNBQWE7SUFDYiw0QkFDSixFQUFDO0VBckZMO0lBdUZRLG9CQUFtQixFQUN0QjtFQXhGTDtJQTBGUSwwQkFBeUI7SUFDekIsY0FBYSxFQUNoQjtFQTVGTDtJQThGUSxvQkFBbUIsRUFDdEI7RUEvRkw7SUFpR1EsWUFBVztJQUNYLGFBQVk7SUFDWixlQUFjO0lBQ2QsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFDbkIsc0JBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdGJpbS9wcm9qZWN0YmltLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuY29udGVudC1zZWFyY2gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIC5iaW0tZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjE1ZWJiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTVlYmI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRvb2wtYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXQtdGFibGUge1xyXG5cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1yb3csIC5tYXQtcm93IHtcclxuICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwubWF0LXRhYmxlLXN0aWNreSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2stdG9nZ2xlIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAuY2hlY2stdG9nZ2xlIC50b2dnbGUtaW5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNBRkFCQUI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2VcclxuICAgIH1cclxuICAgIC5jaGVjay10b2dnbGUgLnRvZ2dsZS1pbmFjdGl2ZSBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQUZBQkFCO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrLXRvZ2dsZSAudG9nZ2xlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwQjA1MDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrLXRvZ2dsZSAudG9nZ2xlLWFjdGl2ZSBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBCMDUwO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrLXRvZ2dsZSBzcGFuIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuLy8gLm1hdC1zbGlkZS10b2dnbGUgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4vLyAgIHdpZHRoOiA3MHB4O1xyXG4vLyAgIGhlaWdodDogMjZweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwO1xyXG4vLyB9XHJcbi8vIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXIge1xyXG4vLyAgIGxlZnQ6IC0xN3B4O1xyXG4vLyB9XHJcbi8vIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbi8vICAgYm9yZGVyOiAycHggc29saWQgIzAwQjA1MDtcclxuLy8gfVxyXG4vLyAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4vLyAgIGJhY2tncm91bmQ6ICMwMEIwNTA7XHJcbi8vICAgY29udGVudDogXCI8c3Bhbj5BY3RpdmU8L3NwYW4+XCI7XHJcbi8vIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projectbim/projectbim.component.ts":
/*!****************************************************!*\
  !*** ./src/app/projectbim/projectbim.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectbimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectbimComponent", function() { return ProjectbimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectbimComponent = /** @class */ (function () {
    function ProjectbimComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
        this.tablePath = '/bims';
        this.isEditable = false;
        this.displayedColumns = ['number', 'bim_use', 'check', 'software', 'version', 'format'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
    }
    ProjectbimComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadData();
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ProjectbimComponent.prototype.loadData = function () {
        var _this = this;
        // Get the stages dropdown list
        this.databaseService.getLists('/stages/' + this.projectId).valueChanges().subscribe(function (data) {
            _this.stages = data;
        });
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
        });
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    };
    ProjectbimComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
        }
    };
    ProjectbimComponent.prototype.switchToggle = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == this.editableKey) {
                element.check = !element.check;
            }
        }
    };
    ProjectbimComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    ProjectbimComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var number = 0;
            var position = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (number < element.number) {
                    number = element.number;
                }
                if (position < element.position) {
                    position = element.position;
                }
            }
            number++;
            position++;
            var newRow = { number: number, bim_use: '', check: true, software: "", version: "", format: "", key: "newRow", position: position, is_new: true };
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    ProjectbimComponent.prototype.deleteRow = function () {
        console.log(this.selectedKey);
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    ProjectbimComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    ProjectbimComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == 'newRow') {
                if (element.bim_use && element.format && element.software && element.version) {
                    element.is_new = false;
                    var result = this.databaseService.createRow(this.tablePath, element);
                    element.key = result.key;
                    this.databaseService.updateRow(this.tablePath, result.key, element);
                }
            }
            if (element.key == this.editableKey) {
                if (element.bim_use && element.format && element.software && element.version) {
                    element.is_new = false;
                    this.databaseService.updateRow(this.tablePath, this.editableKey, element);
                }
            }
        }
        this.editableKey = null;
    };
    ProjectbimComponent.prototype.moveUp = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index - 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index - 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index - 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index - 1]['key'], this.elements[index - 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    ProjectbimComponent.prototype.moveDown = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index + 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index + 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index + 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index + 1]['key'], this.elements[index + 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    ProjectbimComponent.prototype.sortRecords = function () {
        this.elements.sort(function (a, b) { return a.position - b.position; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ProjectbimComponent.prototype, "sort", void 0);
    ProjectbimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectbim',
            template: __webpack_require__(/*! ./projectbim.component.html */ "./src/app/projectbim/projectbim.component.html"),
            styles: [__webpack_require__(/*! ./projectbim.component.scss */ "./src/app/projectbim/projectbim.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectbimComponent);
    return ProjectbimComponent;
}());



/***/ }),

/***/ "./src/app/projectconf/projectconf.component.html":
/*!********************************************************!*\
  !*** ./src/app/projectconf/projectconf.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" value=\"\">\n                </mat-form-field>\n            </div>\n            <div>\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n            <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              B{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"block\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Block </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">{{element.block}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.block\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"area\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Area(SqM) </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.area }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [(ngModel)]=\"element.area\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container matColumnDef=\"levels\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Levels </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{ element.levels }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.levels\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s02 Column -->\n          <ng-container matColumnDef=\"remarks\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"gray-200\">{{element.remarks}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.remarks\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/projectconf/projectconf.component.scss":
/*!********************************************************!*\
  !*** ./src/app/projectconf/projectconf.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .content-search {\n    background: #ffffff; }\n  .main-content .content-search .search-form {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px; }\n  .main-content .content-search .search-form .mat-form-field {\n        margin-right: 30px; }\n  .main-content .content-search .search-form .mat-button {\n        background: #ffffff;\n        border: 2px solid #215ebb;\n        color: #215ebb; }\n  .main-content .content-search .tool-bar {\n      display: flex;\n      flex-direction: row-reverse; }\n  .main-content .content-search .tool-bar > div {\n        display: flex;\n        padding: 10px;\n        align-items: center;\n        align-content: center; }\n  .main-content .table-container {\n    height: calc(100% - 100px);\n    width: 100%;\n    overflow: auto; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n      color: #000000;\n      padding-left: 10px;\n      padding-right: 10px;\n      text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n        padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n      font-weight: 800;\n      text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n      border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n      border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGNvbmYvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxwcm9qZWN0Y29uZlxccHJvamVjdGNvbmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQXVFekI7RUExRUQ7SUFNUSxvQkFBbUIsRUE2QnRCO0VBbkNMO01BU1ksY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixjQUFhLEVBV2hCO0VBdEJUO1FBY2dCLG1CQUFrQixFQUNyQjtFQWZiO1FBa0JnQixvQkFBbUI7UUFDbkIsMEJBQXlCO1FBQ3pCLGVBQWMsRUFDakI7RUFyQmI7TUF5QlksY0FBYTtNQUNiLDRCQUEyQixFQVE5QjtFQWxDVDtRQTZCZ0IsY0FBYTtRQUNiLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsc0JBQXFCLEVBQ3hCO0VBakNiO0lBc0NRLDJCQUEwQjtJQUMxQixZQUFXO0lBQ1gsZUFBYyxFQWlDakI7RUF6RUw7TUE2Q2dCLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLG1CQUFrQixFQUtyQjtFQXJEYjtRQW1Eb0IsbUJBQWtCLEVBQ3JCO0VBcERqQjtNQXdEZ0IsaUJBQWdCO01BQ2hCLDJCQUEwQixFQUM3QjtFQTFEYjtNQTZEZ0IsYUFBWSxFQUNmO0VBOURiO01Ba0VvQixpQ0FBZ0MsRUFDbkM7RUFuRWpCO01BcUVvQixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0Y29uZi9wcm9qZWN0Y29uZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmNvbnRlbnQtc2VhcmNoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAuc2VhcmNoLWZvcm0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzIxNWViYjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjE1ZWJiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50b29sLWJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAubWF0LXRhYmxlIHtcclxuXHJcbiAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwsIC5tYXQtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4OztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWJsZS1jZWxsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItcm93LCAubWF0LXJvdyB7XHJcbiAgICAgICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsLm1hdC10YWJsZS1zdGlja3kge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1hdC1jZWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projectconf/projectconf.component.ts":
/*!******************************************************!*\
  !*** ./src/app/projectconf/projectconf.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectconfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectconfComponent", function() { return ProjectconfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectconfComponent = /** @class */ (function () {
    function ProjectconfComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
        this.tablePath = '/project_configuration';
        this.isEditable = false;
        this.displayedColumns = ['number', 'block', 'area', 'levels', 'remarks'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
    }
    ProjectconfComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadData();
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ProjectconfComponent.prototype.loadData = function () {
        var _this = this;
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
        });
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    };
    ProjectconfComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
        }
    };
    ProjectconfComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    ProjectconfComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var number = 0;
            var position = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var stage = _a[_i];
                if (number < stage.number) {
                    number = stage.number;
                }
                if (position < stage.position) {
                    position = stage.position;
                }
            }
            number++;
            position++;
            var newRow = { number: number, block: '', area: "", levels: "", remarks: "", key: "newRow", position: position };
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    ProjectconfComponent.prototype.deleteRow = function () {
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    ProjectconfComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    ProjectconfComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var stage = _a[_i];
            if (stage.key == 'newRow') {
                var result = this.databaseService.createRow(this.tablePath, stage);
                stage.key = result.key;
                this.databaseService.updateRow(this.tablePath, result.key, stage);
            }
            if (stage.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, stage);
            }
        }
        this.editableKey = null;
    };
    ProjectconfComponent.prototype.moveUp = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index - 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index - 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index - 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index - 1]['key'], this.elements[index - 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    ProjectconfComponent.prototype.moveDown = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index + 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index + 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index + 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index + 1]['key'], this.elements[index + 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    ProjectconfComponent.prototype.sortRecords = function () {
        if (this.elements) {
            this.elements.sort(function (a, b) { return a.position - b.position; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ProjectconfComponent.prototype, "sort", void 0);
    ProjectconfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectconf',
            template: __webpack_require__(/*! ./projectconf.component.html */ "./src/app/projectconf/projectconf.component.html"),
            styles: [__webpack_require__(/*! ./projectconf.component.scss */ "./src/app/projectconf/projectconf.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectconfComponent);
    return ProjectconfComponent;
}());



/***/ }),

/***/ "./src/app/projectprofile/archive.html":
/*!*********************************************!*\
  !*** ./src/app/projectprofile/archive.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>ARE YOU SURE ?</h1>\r\n<div mat-dialog-content>\r\n  <p>Are you sure you want to archive this project ? This action is irreversible.</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button color=\"blue\" [mat-dialog-close]=\"true\" cdkFocusInitial>Archive</button>\r\n    <button mat-stroked-button color=\"blue\" (click)=\"onNoClick()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/projectprofile/projectprofile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-wrap\" *ngIf=\"project\">\n    <app-loading *ngIf=\"!project\"></app-loading>\n    <div *ngIf=\"message\" class=\"row message\">{{ message }}</div>           \n            \n    <div class=\"general-info\">\n      <div class=\"row\">\n          <div class=\"project-num\">\n              <mat-label>* Project Number</mat-label>\n              <mat-form-field>\n                  <input matInput name=\"number\"  placeholder=\"\" [(ngModel)]=\"project.number\" required  [disabled]=\"!isEditable\"> \n              </mat-form-field>\n          </div>\n\n          <div class=\"project-name\">\n              <mat-label>* Project Name</mat-label>\n              <mat-form-field>\n                  <input matInput name=\"name\"  placeholder=\"\" [(ngModel)]=\"project.name\" required [disabled]=\"!isEditable\">\n              </mat-form-field>\n          </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"project-type\">\n              <mat-label>* Project Type</mat-label>\n              <mat-form-field>\n                  <mat-select name=\"project_type\" placeholder=\"\" [(ngModel)]=\"project.project_type\" aria-required=\"true\" [disabled]=\"!isEditable\">\n                      <mat-option *ngFor=\"let project_type of projectTypes | async\" [value]=\"project_type\">{{ project_type }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"contract-type\">\n              <mat-label>Contract Type</mat-label>\n              <mat-form-field>\n                  <mat-select name=\"contract_type\" placeholder=\"\" [(ngModel)]=\"project.contract_type\" [disabled]=\"!isEditable\">\n                    <mat-option *ngFor=\"let contract_type of contractTypes | async\" [value]=\"contract_type\">{{ contract_type }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"address\">\n              <mat-label>Address</mat-label>\n              <mat-form-field>\n                  <input matInput name=\"address\"  placeholder=\"\" [(ngModel)]=\"project.address\" [disabled]=\"!isEditable\">\n              </mat-form-field>\n          </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"province\">\n              <mat-label>State/Province</mat-label>\n              <mat-form-field>\n                  <input matInput name=\"state\"  placeholder=\"\" [(ngModel)]=\"project.state\" [disabled]=\"!isEditable\">\n              </mat-form-field>\n          </div>\n\n          <div class=\"zip-code\">\n              <mat-label>Zip Code</mat-label>\n              <mat-form-field>\n                  <input matInput name=\"zipcode\"  placeholder=\"\" [(ngModel)]=\"project.zipcode\" [disabled]=\"!isEditable\">\n              </mat-form-field>\n          </div>\n      </div>\n      \n      <div class=\"row\">\n          <div class=\"country\">\n              <mat-label>* Country</mat-label>\n              <mat-form-field>\n                  <mat-select name=\"country\" placeholder=\"\" [value]=\"project.country\" [(ngModel)]=\"project.country\" aria-required=\"true\" [disabled]=\"!isEditable\">\n                      <mat-option value=\"1\">United States</mat-option>\n                      <mat-option value=\"2\">United Kingdom</mat-option>\n                    <mat-option *ngFor=\"let country of countries | async\" [value]=\"country\">{{ country }}</mat-option>\n                  </mat-select>\n            </mat-form-field>\n          </div>\n      </div>\n    \n      <div class=\"row\">\n          <div class=\"time-zone\">\n              <mat-label>* Project Time zone</mat-label>\n              <mat-form-field>\n                  <mat-select name=\"timezone\" placeholder=\"\" [(ngModel)]=\"project.timezone\" aria-required=\"true\" [disabled]=\"!isEditable\">\n                      <mat-option value=\"1\">GMT -08</mat-option>\n                      <mat-option value=\"2\">GMT -05</mat-option>\n                    <mat-option *ngFor=\"let timezone of timezones | async\" [value]=\"timezone\">{{ timezone }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n      </div>\n    \n  </div>\n\n  <div class=\"details\">\n\n      <div class=\"row\">\n          <mat-label>Model Units</mat-label>\n    \n          <mat-label>Rounding</mat-label>\n\n          <mat-label class=\"geo-location\">Geo Location</mat-label>\n      </div>\n      \n      <div class=\"row\">\n          <mat-form-field>\n              <mat-select name=\"length\" placeholder=\"\" [(ngModel)]=\"project.length\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let length of lengths | async\" [value]=\"length\">{{ length }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n              <mat-select name=\"length_rounding\" placeholder=\"\" [(ngModel)]=\"project.length_rounding\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"geo-location\">\n              <input matInput name=\"geolocation_1\" placeholder=\"\" [(ngModel)]=\"project.geolocation_1\" [disabled]=\"!isEditable\">\n          </mat-form-field>\n      </div>\n      \n      <div class=\"row\">\n          <mat-form-field>\n              <mat-select name=\"area\" placeholder=\"\" [(ngModel)]=\"project.area\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let area of areas | async\" [value]=\"area\">{{ area }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n              <mat-select name=\"area_rounding\" placeholder=\"\" [(ngModel)]=\"project.area_rounding\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"geo-location\">\n            <input matInput name=\"geolocation_2\" placeholder=\"\" [(ngModel)]=\"project.geolocation_2\" [disabled]=\"!isEditable\">\n          </mat-form-field>\n      </div>\n      \n      <div class=\"row\">\n          <mat-form-field>\n              <mat-select name=\"volumn\" placeholder=\"\" [(ngModel)]=\"project.volumn\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let volumn of volumns | async\" [value]=\"volumn\">{{ volumn }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n              <mat-select name=\"volumn_rounding\" placeholder=\"\" [(ngModel)]=\"project.volumn_rounding\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"geo-location\">\n              <input matInput name=\"geolocation_3\" placeholder=\"\" [(ngModel)]=\"project.geolocation_3\" [disabled]=\"!isEditable\">\n          </mat-form-field>\n      </div>\n      \n      <div class=\"row\">\n          <mat-form-field>\n              <mat-select name=\"angle\" placeholder=\"\" [(ngModel)]=\"project.angle\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let angle of angles | async\" [value]=\"angle\">{{ angle }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n              <mat-select name=\"angle_rounding\" placeholder=\"\" [(ngModel)]=\"project.angle_rounding\" [disabled]=\"!isEditable\">\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"geo-location\">\n              <input matInput name=\"geolocation_4\" placeholder=\"\" [(ngModel)]=\"project.geolocation_4\" [disabled]=\"!isEditable\">\n          </mat-form-field>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"bim-standard\">\n          <mat-label>BIM Standard</mat-label>\n          <mat-form-field>\n              <mat-select name=\"bim_template\" placeholder=\"\" [(ngModel)]=\"project.bim_template\">\n                <mat-option value=\"option\">Default</mat-option>\n                <mat-option *ngFor=\"let template of templates | async\" [value]=\"template\">{{ template }}</mat-option>\n              </mat-select>\n              <mat-hint align=\"end\">Note : BIM Standard can not be changed ones saved !</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"isEditable\">\n          <div class=\"open-dialogs\">\n                <a class=\"save-project\" (click)=\"saveTemplateDialog()\">Save Project as Template</a>\n                <a class=\"archive-project\" (click)=\"archiveProjectDialog()\">Archive Project</a>\n          </div>\n      </div>\n  \n      <div class=\"actions\">\n        <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"saveProject()\">Save Project</button>\n        <button mat-stroked-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"cancel()\">Cancel</button>\n        <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projectprofile/projectprofile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-wrap {\n  display: flex;\n  height: calc(100% - 50px);\n  margin-top: 20px;\n  padding: 20px 50px;\n  overflow-y: scroll; }\n  .project-wrap mat-label {\n    padding: 10px; }\n  .project-wrap .mat-form-field {\n    width: 100%;\n    padding: 3px; }\n  .project-wrap .row {\n    display: flex; }\n  .project-wrap .general-info {\n    padding: 50px; }\n  .project-wrap .general-info .project-number input {\n      text-transform: uppercase; }\n  .project-wrap .general-info .project-name {\n      flex: 100%; }\n  .project-wrap .general-info .project-name input {\n      text-transform: uppercase; }\n  .project-wrap .general-info .project-type {\n      width: 100%; }\n  .project-wrap .general-info .contract-type {\n      width: 100%; }\n  .project-wrap .general-info .address {\n      width: 100%; }\n  .project-wrap .general-info .country {\n      width: 100%; }\n  .project-wrap .general-info .time-zone {\n      width: 100%; }\n  .project-wrap .details {\n    padding: 50px; }\n  .project-wrap .details .row > * {\n      flex: 1 1 100%; }\n  .project-wrap .details .geo-location {\n      flex: 3 1 auto; }\n  .project-wrap .details .actions {\n      display: flex;\n      flex-direction: row-reverse;\n      margin-top: 30px; }\n  .project-wrap .details .actions button {\n        margin-left: 20px; }\n  .project-wrap .details .open-dialogs {\n      display: flex;\n      flex-direction: column;\n      align-content: flex-end;\n      align-items: flex-end; }\n  .project-wrap .details .open-dialogs .save-project {\n        margin-top: 20px;\n        text-decoration: underline;\n        font-style: italic; }\n  .project-wrap .details .open-dialogs .archive-project {\n        margin-top: 20px;\n        text-decoration: underline;\n        font-style: italic;\n        color: #FF3960; }\n  .project-wrap .mat-dialog-container .template-title {\n    text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHByb2ZpbGUvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxwcm9qZWN0cHJvZmlsZVxccHJvamVjdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBNEZyQjtFQWpHRDtJQVFRLGNBQWEsRUFDaEI7RUFUTDtJQVdRLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7RUFiTDtJQWVRLGNBQWEsRUFDaEI7RUFoQkw7SUFtQlEsY0FBYSxFQStCaEI7RUFsREw7TUFzQlksMEJBQXlCLEVBQzVCO0VBdkJUO01BeUJZLFdBQVUsRUFDYjtFQTFCVDtNQTRCWSwwQkFBeUIsRUFDNUI7RUE3QlQ7TUFnQ1ksWUFBVyxFQUNkO0VBakNUO01Bb0NZLFlBQVcsRUFDZDtFQXJDVDtNQXdDWSxZQUFXLEVBQ2Q7RUF6Q1Q7TUE0Q1ksWUFBVyxFQUNkO0VBN0NUO01BZ0RZLFlBQVcsRUFDZDtFQWpEVDtJQXFEUSxjQUFhLEVBdUNoQjtFQTVGTDtNQXdEWSxlQUFjLEVBQ2pCO0VBekRUO01BNERZLGVBQWMsRUFDakI7RUE3RFQ7TUFnRVksY0FBYTtNQUNiLDRCQUEyQjtNQUMzQixpQkFBZ0IsRUFLbkI7RUF2RVQ7UUFxRWdCLGtCQUFpQixFQUNwQjtFQXRFYjtNQTBFWSxjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLHdCQUF1QjtNQUN2QixzQkFBcUIsRUFjeEI7RUEzRlQ7UUFnRmdCLGlCQUFnQjtRQUNoQiwyQkFBMEI7UUFDMUIsbUJBQWtCLEVBQ3JCO0VBbkZiO1FBc0ZnQixpQkFBZ0I7UUFDaEIsMkJBQTBCO1FBQzFCLG1CQUFrQjtRQUNsQixlQUFjLEVBQ2pCO0VBMUZiO0lBK0ZRLDJCQUEwQixFQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Rwcm9maWxlL3Byb2plY3Rwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgbWF0LWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nZW5lcmFsLWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LW51bWJlciBpbnB1dCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9qZWN0LW5hbWUge1xyXG4gICAgICAgICAgICBmbGV4OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdC1uYW1lIGlucHV0IHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LXR5cGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250cmFjdC10eXBlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLXpvbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG4gICAgICAgIC5yb3cgPiAqIHtcclxuICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2VvLWxvY2F0aW9uIHtcclxuICAgICAgICAgICAgZmxleDogMyAxIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wZW4tZGlhbG9ncyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAuc2F2ZS1wcm9qZWN0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5hcmNoaXZlLXByb2plY3Qge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjM5NjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIC50ZW1wbGF0ZS10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projectprofile/projectprofile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectprofileComponent, SaveTemplateDialog, ArchiveDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectprofileComponent", function() { return ProjectprofileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTemplateDialog", function() { return SaveTemplateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveDialog", function() { return ArchiveDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projectprofile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _projectprofile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectprofile */ "./src/app/projectprofile/projectprofile.ts");
/* harmony import */ var _services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/dropdown.service */ "./src/app/_services/dropdown.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_evented__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/evented */ "./src/app/_services/evented.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ProjectprofileComponent = /** @class */ (function () {
    function ProjectprofileComponent(activedRoute, router, location, databaseService, projectprofileService, dropdownService, authService, dialog) {
        this.activedRoute = activedRoute;
        this.router = router;
        this.location = location;
        this.databaseService = databaseService;
        this.projectprofileService = projectprofileService;
        this.dropdownService = dropdownService;
        this.authService = authService;
        this.dialog = dialog;
        this.projectKey = null;
        // Create new project profile object
        this.project = new _projectprofile__WEBPACK_IMPORTED_MODULE_4__["ProjectProfile"]();
        this.isEditable = true;
        this.projectKey = this.activedRoute.snapshot.params['id'];
    }
    ProjectprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch dropdown options
        this.projectTypes = this.dropdownService.getProjectTypes().valueChanges();
        this.contractTypes = this.dropdownService.getContractTypes().valueChanges();
        this.lengths = this.dropdownService.getLengths().valueChanges();
        this.areas = this.dropdownService.getAreas().valueChanges();
        this.volumns = this.dropdownService.getVolumns().valueChanges();
        this.angles = this.dropdownService.getAngles().valueChanges();
        this.roundings = this.dropdownService.getRoundings().valueChanges();
        // Fetch project profile information
        if (this.projectKey !== null && this.projectKey !== undefined) {
            this.isEditable = false;
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                _this.project = data;
            });
        }
        else {
            this.project = new _projectprofile__WEBPACK_IMPORTED_MODULE_4__["ProjectProfile"]();
            this.project.created_by = this.authService.getAuthUser().uid;
        }
        _services_evented__WEBPACK_IMPORTED_MODULE_8__["Evented"].on('updateProjectImage', function (e) {
            _this.project.thumb_image = e.args.imgUrl;
            _this.saveProject();
        });
    };
    ProjectprofileComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        _services_evented__WEBPACK_IMPORTED_MODULE_8__["Evented"].fire('editmod', {
            mode: this.isEditable
        });
    };
    ProjectprofileComponent.prototype.cancel = function () {
        if (this.projectKey !== null && this.projectKey !== undefined) {
            this.switchEditable();
        }
        else {
            this.location.back();
        }
    };
    ProjectprofileComponent.prototype.saveProject = function () {
        if (this.projectKey !== null && this.projectKey !== undefined) {
            this.projectprofileService.updateProject(this.projectKey, this.project);
            this.switchEditable();
        }
        else {
            var result = this.projectprofileService.createProject(this.project);
            this.router.navigate(['/project/profile/' + result.ref.key]);
        }
    };
    ProjectprofileComponent.prototype.deleteProject = function () {
        this.projectprofileService.deleteProject(this.projectKey);
    };
    ProjectprofileComponent.prototype.deleteAllProjects = function () {
        this.projectprofileService.deleteAll();
    };
    ProjectprofileComponent.prototype.saveTemplateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(SaveTemplateDialog, {
            width: '500px',
            data: { title: "" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var template = _this.project;
                template.template_title = result;
                _this.databaseService.createRow('/templates', template).then(function (result) {
                    if (result.key) {
                        // this.message = "Template was saved successfully!";
                    }
                });
            }
        });
    };
    ProjectprofileComponent.prototype.archiveProjectDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ArchiveDialog, {
            width: '500px',
            data: { key: this.projectKey, project: this.project }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.project.is_archive = true;
                _this.projectprofileService.updateProject(_this.projectKey, _this.project).then(function (res) { return console.log(res); });
            }
        });
    };
    ProjectprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectprofile',
            template: __webpack_require__(/*! ./projectprofile.component.html */ "./src/app/projectprofile/projectprofile.component.html"),
            styles: [__webpack_require__(/*! ./projectprofile.component.scss */ "./src/app/projectprofile/projectprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _projectprofile_service__WEBPACK_IMPORTED_MODULE_3__["ProjectprofileService"],
            _services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], ProjectprofileComponent);
    return ProjectprofileComponent;
}());

var SaveTemplateDialog = /** @class */ (function () {
    function SaveTemplateDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SaveTemplateDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SaveTemplateDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'save-template-dialog',
            template: __webpack_require__(/*! ./save-template-dialog.html */ "./src/app/projectprofile/save-template-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
    ], SaveTemplateDialog);
    return SaveTemplateDialog;
}());

var ArchiveDialog = /** @class */ (function () {
    function ArchiveDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ArchiveDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ArchiveDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'archive-dialog',
            template: __webpack_require__(/*! ./archive.html */ "./src/app/projectprofile/archive.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]])
    ], ArchiveDialog);
    return ArchiveDialog;
}());



/***/ }),

/***/ "./src/app/projectprofile/projectprofile.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.service.ts ***!
  \**********************************************************/
/*! exports provided: ProjectprofileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectprofileService", function() { return ProjectprofileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectprofileService = /** @class */ (function () {
    function ProjectprofileService(db) {
        this.db = db;
        this.dbPath = '/projects';
        this.projectsRef = null;
        this.projectsRef = db.list(this.dbPath);
    }
    ProjectprofileService.prototype.createProject = function (project) {
        return this.projectsRef.push(project);
    };
    ProjectprofileService.prototype.updateProject = function (key, value) {
        var _this = this;
        this.projectsRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    ProjectprofileService.prototype.deleteProject = function (key) {
        var _this = this;
        this.projectsRef.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    ProjectprofileService.prototype.getProjectsList = function () {
        return this.projectsRef;
    };
    ProjectprofileService.prototype.deleteAll = function () {
        var _this = this;
        this.projectsRef.remove().catch(function (error) { return _this.handleError(error); });
    };
    ProjectprofileService.prototype.getProjectProfile = function (key) {
        return this.db.object(this.dbPath + "/" + key);
    };
    ProjectprofileService.prototype.handleError = function (error) {
        console.log(error);
    };
    ProjectprofileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProjectprofileService);
    return ProjectprofileService;
}());



/***/ }),

/***/ "./src/app/projectprofile/projectprofile.ts":
/*!**************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.ts ***!
  \**************************************************/
/*! exports provided: ProjectProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProfile", function() { return ProjectProfile; });
var ProjectProfile = /** @class */ (function () {
    function ProjectProfile() {
    }
    return ProjectProfile;
}());



/***/ }),

/***/ "./src/app/projectprofile/save-template-dialog.html":
/*!**********************************************************!*\
  !*** ./src/app/projectprofile/save-template-dialog.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>TEMPLATE NAME</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput [(ngModel)]=\"data.title\" class=\"full-width template-title\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button color=\"blue\" [mat-dialog-close]=\"data.title\" cdkFocusInitial>Save</button>\r\n    <button mat-stroked-button color=\"blue\" (click)=\"onNoClick()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/projectstage/projectstage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/projectstage/projectstage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"stage-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" value=\"\">\n                </mat-form-field>\n            </div>\n            <div>\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n            <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              S{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Stage Name Column -->\n          <ng-container matColumnDef=\"stage\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Stage </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">{{element.stage}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.stage\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Start date Column -->\n          <ng-container matColumnDef=\"start\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Start </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{element.start | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"element.start\" required>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- End date Column -->\n          <ng-container matColumnDef=\"end\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> End </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray\">{{ element.end | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"element.end\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- Remarks Column -->\n          <ng-container matColumnDef=\"remarks\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"gray-200\">{{element.remarks}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.remarks\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projectstage/projectstage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/projectstage/projectstage.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .content-search {\n    background: #ffffff; }\n  .main-content .content-search .stage-form {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px; }\n  .main-content .content-search .stage-form .mat-form-field {\n        margin-right: 30px; }\n  .main-content .content-search .stage-form .mat-button {\n        background: #ffffff;\n        border: 2px solid #215ebb;\n        color: #215ebb; }\n  .main-content .content-search .tool-bar {\n      display: flex;\n      flex-direction: row-reverse; }\n  .main-content .content-search .tool-bar > div {\n        display: flex;\n        padding: 10px;\n        align-items: center;\n        align-content: center; }\n  .main-content .table-container {\n    height: calc(100% - 100px);\n    width: 100%;\n    overflow: auto; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n      color: #000000;\n      padding-left: 10px;\n      padding-right: 10px;\n      text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n        padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n      font-weight: 800;\n      text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n      width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n      border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n      border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHN0YWdlL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdHN0YWdlXFxwcm9qZWN0c3RhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQXVFekI7RUExRUQ7SUFNUSxvQkFBbUIsRUE2QnRCO0VBbkNMO01BU1ksY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixjQUFhLEVBV2hCO0VBdEJUO1FBY2dCLG1CQUFrQixFQUNyQjtFQWZiO1FBa0JnQixvQkFBbUI7UUFDbkIsMEJBQXlCO1FBQ3pCLGVBQWMsRUFDakI7RUFyQmI7TUF5QlksY0FBYTtNQUNiLDRCQUEyQixFQVE5QjtFQWxDVDtRQTZCZ0IsY0FBYTtRQUNiLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsc0JBQXFCLEVBQ3hCO0VBakNiO0lBc0NRLDJCQUEwQjtJQUMxQixZQUFXO0lBQ1gsZUFBYyxFQWlDakI7RUF6RUw7TUE2Q2dCLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLG1CQUFrQixFQUtyQjtFQXJEYjtRQW1Eb0IsbUJBQWtCLEVBQ3JCO0VBcERqQjtNQXdEZ0IsaUJBQWdCO01BQ2hCLDJCQUEwQixFQUM3QjtFQTFEYjtNQTZEZ0IsYUFBWSxFQUNmO0VBOURiO01Ba0VvQixpQ0FBZ0MsRUFDbkM7RUFuRWpCO01BcUVvQixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0c3RhZ2UvcHJvamVjdHN0YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuY29udGVudC1zZWFyY2gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIC5zdGFnZS1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMTVlYmI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxNWViYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudG9vbC1iYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblxyXG4gICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC10YWJsZSB7XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsLCAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFibGUtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtaGVhZGVyLXJvdywgLm1hdC1yb3cge1xyXG4gICAgICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbC5tYXQtdGFibGUtc3RpY2t5IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXQtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/projectstage/projectstage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/projectstage/projectstage.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectstageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectstageComponent", function() { return ProjectstageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectstageComponent = /** @class */ (function () {
    function ProjectstageComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
        this.tablePath = '/stages';
        this.isEditable = false;
        this.displayedColumns = ['number', 'stage', 'start', 'end', 'remarks'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
    }
    ProjectstageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadData();
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    ProjectstageComponent.prototype.loadData = function () {
        var _this = this;
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
        });
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    };
    ProjectstageComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
        }
    };
    ProjectstageComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    ProjectstageComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var number = 0;
            var position = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var stage = _a[_i];
                if (number < stage.number) {
                    number = stage.number;
                }
                if (position < stage.position) {
                    position = stage.position;
                }
            }
            number++;
            position++;
            var newRow = { number: number, stage: '', start: "", end: "", remarks: "", key: "newRow", position: position };
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    ProjectstageComponent.prototype.deleteRow = function () {
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    ProjectstageComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    ProjectstageComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == 'newRow') {
                var result = this.databaseService.createRow(this.tablePath, element);
                element.key = result.key;
                this.databaseService.updateRow(this.tablePath, result.key, element);
            }
            if (element.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, element);
            }
        }
        this.editableKey = null;
    };
    ProjectstageComponent.prototype.moveUp = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index - 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index - 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index - 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index - 1]['key'], this.elements[index - 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    ProjectstageComponent.prototype.moveDown = function () {
        if (!this.editableKey) {
            var index = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.key == this.selectedKey && this.elements[index + 1]) {
                    var position = this.elements[index]['position'];
                    this.elements[index]['position'] = this.elements[index + 1]['position'];
                    this.databaseService.updateRow(this.tablePath, element.key, this.elements[index]);
                    this.elements[index + 1]['position'] = position;
                    this.databaseService.updateRow(this.tablePath, this.elements[index + 1]['key'], this.elements[index + 1]);
                    break;
                }
                index++;
            }
            this.sortRecords();
        }
    };
    ProjectstageComponent.prototype.sortRecords = function () {
        if (this.elements) {
            this.elements.sort(function (a, b) { return a.position - b.position; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ProjectstageComponent.prototype, "sort", void 0);
    ProjectstageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectstage',
            template: __webpack_require__(/*! ./projectstage.component.html */ "./src/app/projectstage/projectstage.component.html"),
            styles: [__webpack_require__(/*! ./projectstage.component.scss */ "./src/app/projectstage/projectstage.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectstageComponent);
    return ProjectstageComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n  <p class=\"title\">\r\n    <span>MY SETTINGS</span>\r\n    <mat-icon class=\"close-icon\" (click)=\"onNoClick()\">close</mat-icon>\r\n  </p>\r\n  <div class=\"tab-header\">\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'Profile'}\" (click)=\"activeTab = 'Profile'\">Profile</span>\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'Account'}\" (click)=\"activeTab = 'Account'\">Account</span>\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'My Templates'}\" (click)=\"activeTab = 'My Templates'\">My Templates</span>\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'Apps'}\" (click)=\"activeTab = 'Apps'\">Apps</span>\r\n  </div>\r\n\r\n  <div class=\"tab-body\">\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'Profile'\">\r\n      <div class=\"tab-profile\">\r\n        <div class=\"left-side-for-image\">\r\n          <img [src]=\"userProfile.avatar == '' ? '/assets/images/avatar.png' : userProfile.avatar\" alt=\"\" class=\"profile-image\">\r\n          <input type=\"file\" #images_for_profile accept=\"image/*\" id=\"images-for-profile\" (change)=\"handleFileInput($event.target.files)\">\r\n          <p class=\"change-delete-profile-image\">\r\n            <span class=\"change-btn\" (click)=\"popupforImage()\">Change</span> | \r\n            <span class=\"delete-btn\" (click)=\"deleteProfileImage()\">Delete</span>\r\n          </p>\r\n        </div>\r\n        <div class=\"right-side-for-info\">\r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"*Full Name\" [(ngModel)]='userProfile.name'>\r\n          </mat-form-field>\r\n          \r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"*Email\" [(ngModel)]='userProfile.email'>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"\">\r\n            <span matPrefix>+1 &nbsp;</span> |\r\n            <input type=\"tel\" matInput placeholder=\"Phone Number\" [(ngModel)]='userProfile.phone'>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"Company\" [(ngModel)]='userProfile.company_name'>\r\n          </mat-form-field>\r\n\r\n          <div class=\"update-btn-div\">\r\n            <button (click)=\"updateProfile()\">Update Profile</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'Account'\">\r\n      <div class=\"tab-account\">\r\n        <button class=\"upgrade-btn\">Upgrade</button>\r\n\r\n        <p class=\"freetrial-explain\">Your free trial expires in <span class=\"trial-days\">25 days</span>!</p>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Old Password</mat-label>\r\n          <input  matInput type=\"password\"  placeholder=\"Old Password\" [(ngModel)]=\"passwordUpdateInfo.old\" >\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>New Password</mat-label>\r\n          <input  matInput type=\"password\"  placeholder=\"New Password\" [(ngModel)]=\"passwordUpdateInfo.new\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Confirm</mat-label>\r\n          <input  matInput type=\"password\"  placeholder=\"Confirm\" [(ngModel)]=\"passwordUpdateInfo.confirm\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"update-pwd-div\">\r\n          <button class=\"update-pwd-btn\" (click)=\"updatePassword()\">Update</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'My Templates'\">\r\n      <div class=\"tab-my-template\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'Apps'\">\r\n      <div class=\"tab-apps\">\r\n        <button class=\"upgrade-btn\">Upgrade</button>\r\n\r\n        <p class=\"upgrade-details\">Upgrade now for unlimited access to apps !</p>\r\n\r\n        <button class=\"contact-btn\">Contact Sales</button>\r\n\r\n        <p class=\"contact-details\">Contact sales for additional help !</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  margin: 0 -50px; }\n  .profile .title {\n    color: black;\n    padding-left: 20px;\n    font-size: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .profile .title .close-icon {\n      margin-right: 20px;\n      cursor: pointer; }\n  .profile .tab-header {\n    display: flex;\n    width: 100%;\n    border: none;\n    border-bottom: solid 1px #888; }\n  .profile .tab-header .tab-header-item {\n      padding: 5px 30px;\n      font-size: 15px;\n      cursor: pointer; }\n  .profile .tab-header .tab-header-item:hover {\n        color: #000; }\n  .profile .tab-header .active {\n      color: #000; }\n  .profile .tab-body .tab-body-item .tab-profile {\n    display: flex; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image {\n      min-width: 300px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .profile-image {\n        width: 100px;\n        height: 100px;\n        border-radius: 50%; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image #images-for-profile {\n        display: none; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .change-delete-profile-image {\n        margin-top: 30px; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .change-delete-profile-image .change-btn {\n          color: #000;\n          cursor: pointer;\n          margin-right: 10px; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .change-delete-profile-image .delete-btn {\n          margin-left: 10px;\n          color: #000;\n          cursor: pointer; }\n  .profile .tab-body .tab-body-item .tab-profile .right-side-for-info {\n      min-width: 400px;\n      display: flex;\n      justify-content: center;\n      align-content: center;\n      flex-direction: column;\n      padding: 10px;\n      padding-right: 50px; }\n  .profile .tab-body .tab-body-item .tab-profile .right-side-for-info .update-btn-div {\n        display: flex;\n        justify-content: flex-end; }\n  .profile .tab-body .tab-body-item .tab-profile .right-side-for-info .update-btn-div button {\n          border: 2px solid #2F5597;\n          color: #2F5597;\n          background: #fff;\n          padding: 5px 20px;\n          outline: none; }\n  .profile .tab-body .tab-body-item .tab-account {\n    padding: 40px 150px;\n    display: flex;\n    flex-direction: column;\n    width: 600px; }\n  .profile .tab-body .tab-body-item .tab-account .upgrade-btn {\n      background: #2F5597;\n      color: #fff;\n      border: none;\n      outline: none;\n      padding: 5px 15px;\n      width: 100px; }\n  .profile .tab-body .tab-body-item .tab-account .freetrial-explain {\n      font-style: italic;\n      margin-top: 20px; }\n  .profile .tab-body .tab-body-item .tab-account .freetrial-explain .trial-days {\n        color: #2F5597; }\n  .profile .tab-body .tab-body-item .tab-account .update-pwd-div {\n      display: flex;\n      justify-content: flex-end; }\n  .profile .tab-body .tab-body-item .tab-account .update-pwd-div .update-pwd-btn {\n        background: #2F5597;\n        color: #fff;\n        padding: 5px 15px;\n        border: none;\n        outline: none; }\n  .profile .tab-body .tab-body-item .tab-apps {\n    padding: 150px 150px;\n    display: flex;\n    flex-direction: column;\n    width: 600px;\n    justify-content: center;\n    align-items: center; }\n  .profile .tab-body .tab-body-item .tab-apps .upgrade-btn {\n      background: #2F5597;\n      color: #fff;\n      padding: 5px 15px;\n      width: 200px;\n      border: none;\n      outline: none; }\n  .profile .tab-body .tab-body-item .tab-apps .upgrade-details {\n      font-style: italic;\n      margin-top: 15px; }\n  .profile .tab-body .tab-body-item .tab-apps .contact-btn {\n      background: #fff;\n      color: #2F5597;\n      padding: 5px 15px;\n      width: 200px;\n      border: solid 2px #2F5597;\n      outline: none;\n      margin-top: 50px; }\n  .profile .tab-body .tab-body-item .tab-apps .contact-details {\n      font-style: italic;\n      margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZSxFQThLbEI7RUFoTEQ7SUFLUSxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLCtCQUE4QjtJQUM5QixvQkFBbUIsRUFNdEI7RUFoQkw7TUFhWSxtQkFBa0I7TUFDbEIsZ0JBQWUsRUFDbEI7RUFmVDtJQW1CUSxjQUFhO0lBQ2IsWUFBVztJQUNYLGFBQVk7SUFDWiw4QkFBNkIsRUFlaEM7RUFyQ0w7TUF5Qlksa0JBQWlCO01BQ2pCLGdCQUFlO01BQ2YsZ0JBQWUsRUFLbEI7RUFoQ1Q7UUE4QmdCLFlBQVcsRUFDZDtFQS9CYjtNQW1DWSxZQUFXLEVBQ2Q7RUFwQ1Q7SUEwQ2dCLGNBQWEsRUF1RGhCO0VBakdiO01BNkNvQixpQkFBZ0I7TUFDaEIsY0FBYTtNQUNiLHdCQUF1QjtNQUN2QixvQkFBbUI7TUFDbkIsdUJBQXNCLEVBeUJ6QjtFQTFFakI7UUFvRHdCLGFBQVk7UUFDWixjQUFhO1FBQ2IsbUJBQWtCLEVBQ3JCO0VBdkRyQjtRQXlEd0IsY0FBYSxFQUNoQjtFQTFEckI7UUE2RHdCLGlCQUFnQixFQVluQjtFQXpFckI7VUErRDRCLFlBQVc7VUFDWCxnQkFBZTtVQUNmLG1CQUFrQixFQUNyQjtFQWxFekI7VUFxRTRCLGtCQUFpQjtVQUNqQixZQUFXO1VBQ1gsZ0JBQWUsRUFDbEI7RUF4RXpCO01BNkVvQixpQkFBZ0I7TUFDaEIsY0FBYTtNQUNiLHdCQUF1QjtNQUN2QixzQkFBcUI7TUFDckIsdUJBQXNCO01BQ3RCLGNBQWE7TUFDYixvQkFBbUIsRUFhdEI7RUFoR2pCO1FBc0Z3QixjQUFhO1FBQ2IsMEJBQXlCLEVBUTVCO0VBL0ZyQjtVQXlGNEIsMEJBQXlCO1VBQ3pCLGVBQWM7VUFDZCxpQkFBZ0I7VUFDaEIsa0JBQWlCO1VBQ2pCLGNBQWEsRUFDaEI7RUE5RnpCO0lBb0dnQixvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixhQUFZLEVBZ0NmO0VBdkliO01BMEdvQixvQkFBbUI7TUFDbkIsWUFBVztNQUNYLGFBQVk7TUFDWixjQUFhO01BQ2Isa0JBQWlCO01BQ2pCLGFBQVksRUFDZjtFQWhIakI7TUFtSG9CLG1CQUFrQjtNQUNsQixpQkFBZ0IsRUFLbkI7RUF6SGpCO1FBdUh3QixlQUFjLEVBQ2pCO0VBeEhyQjtNQTRIb0IsY0FBYTtNQUNiLDBCQUF5QixFQVM1QjtFQXRJakI7UUFnSXdCLG9CQUFtQjtRQUNuQixZQUFXO1FBQ1gsa0JBQWlCO1FBQ2pCLGFBQVk7UUFDWixjQUFhLEVBQ2hCO0VBcklyQjtJQTBJZ0IscUJBQW9CO0lBQ3BCLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsYUFBWTtJQUNaLHdCQUF1QjtJQUN2QixvQkFBbUIsRUE4QnRCO0VBN0tiO01Ba0pvQixvQkFBbUI7TUFDbkIsWUFBVztNQUNYLGtCQUFpQjtNQUNqQixhQUFZO01BQ1osYUFBWTtNQUNaLGNBQWEsRUFDaEI7RUF4SmpCO01BMkpvQixtQkFBa0I7TUFDbEIsaUJBQWdCLEVBQ25CO0VBN0pqQjtNQWdLb0IsaUJBQWdCO01BQ2hCLGVBQWM7TUFDZCxrQkFBaUI7TUFDakIsYUFBWTtNQUNaLDBCQUF5QjtNQUN6QixjQUFhO01BQ2IsaUJBQWdCLEVBQ25CO0VBdktqQjtNQTBLb0IsbUJBQWtCO01BQ2xCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGV7XHJcblxyXG4gICAgbWFyZ2luOiAwIC01MHB4O1xyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuY2xvc2UtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWItaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjODg4O1xyXG5cclxuICAgICAgICAudGFiLWhlYWRlci1pdGVte1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFiLWJvZHl7XHJcbiAgICAgICAgLnRhYi1ib2R5LWl0ZW17XHJcbiAgICAgICAgICAgIC50YWItcHJvZmlsZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxlZnQtc2lkZS1mb3ItaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjaW1hZ2VzLWZvci1wcm9maWxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZS1kZWxldGUtcHJvZmlsZS1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yaWdodC1zaWRlLWZvci1pbmZve1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUtYnRuLWRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkY1NTk3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYi1hY2NvdW50e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAxNTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC51cGdyYWRlLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkY1NTk3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZnJlZXRyaWFsLWV4cGxhaW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50cmlhbC1kYXlze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnVwZGF0ZS1wd2QtZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlLXB3ZC1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyRjU1OTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYi1hcHBze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAudXBncmFkZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnVwZ3JhZGUtZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdC1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/profile */ "./src/app/user/profile.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dialogRef, auth, authService, afStorage, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.authService = authService;
        this.afStorage = afStorage;
        this.router = router;
        this.activeTab = 'Profile';
        this.userProfile = new _user_profile__WEBPACK_IMPORTED_MODULE_4__["UserProfile"]();
        this.passwordUpdateInfo = {
            old: '',
            confirm: '',
            new: ''
        };
        this.authUser = auth.auth.currentUser;
        console.log(this.authUser);
        this.userProfile.email = this.authUser.email;
        // this.userProfile.phone = this.authUser.phoneNumber;
        this.userProfile.avatar = this.authUser.photoURL;
        this.userProfile.uid = this.authUser.uid;
        this.uid = this.authUser.uid;
        this.authService.getUserById(this.uid).valueChanges().subscribe(function (data) {
            _this.userProfile.name = data['name'];
            _this.userProfile.company_name = data['company_name'];
            _this.userProfile.phone = data['phone'] ? data['phone'] : '';
        });
    }
    SettingsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.updateProfile = function () {
        this.authUser.updateEmail(this.userProfile.email).then(function () {
            console.log('success');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
        this.authUser.updateProfile({
            displayName: this.userProfile.name,
            photoURL: this.userProfile.avatar
        }).then(function () {
            // Update successful.
            console.log('avartar change success');
        }).catch(function (error) {
            // An error happened.
            console.log('avartar change error');
        });
        this.authService.updateUserById(this.userProfile.uid, this.userProfile);
    };
    SettingsComponent.prototype.popupforImage = function () {
        this.images_for_profile.nativeElement.click();
    };
    SettingsComponent.prototype.deleteProfileImage = function () {
        this.userProfile.avatar = '';
    };
    SettingsComponent.prototype.handleFileInput = function (files) {
        if (files.length == 0) {
            return;
        }
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('profile/' + this.userProfile.uid + '/' + '/' + id);
        this.task = this.ref.put(files[0]);
        var me = this;
        this.task.then(function (data) {
            var a = data.ref.getDownloadURL();
            a.then(function (data) {
                me.userProfile.avatar = data;
                console.log(data);
            });
        });
    };
    SettingsComponent.prototype.updatePassword = function () {
        var me = this;
        if (this.passwordUpdateInfo.new == this.passwordUpdateInfo.confirm && this.passwordUpdateInfo.new != "" && this.passwordUpdateInfo.confirm != "") {
            this.authUser.updatePassword(this.passwordUpdateInfo.new).then(function () {
                // Update successful.
                me.authService.doSignout().then(function (res) {
                    me.dialogRef.close();
                    me.router.navigate(['/signin']);
                }, function (err) {
                    console.log(err);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('images_for_profile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsComponent.prototype, "images_for_profile", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-sidebar\">\n    <div class=\"project-thumb\">\n        <mat-icon *ngIf=\"!project.thumb_image\" (click)=\"popupforImage()\">photo_camera</mat-icon>\n        <img *ngIf=\"project.thumb_image\" [src]=\"project.thumb_image\" (click)=\"popupforImage()\">\n        <input type=\"file\" *ngIf=\"editMod\" #load_project_img accept=\"image/*\" id=\"load_project_img\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n\n    <ul class=\"sidebar-list\">\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'new' || activate == 'profile')}\" (click)=\"gotourl('project/profile/' + projectKey)\"><span>Profile</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'stage')}\" (click)=\"gotourl('project/stage/' + projectKey)\"><span>Stages</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'bim')}\" (click)=\"gotourl('project/bim/' + projectKey)\"><span>Bim Uses</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'lod')}\" (click)=\"gotourl('project/lod/' + projectKey)\"><span>Lod</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'matrix')}\" (click)=\"gotourl('project/matrix/' + projectKey)\"><span>Clash Matrix</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'conf')}\" (click)=\"gotourl('project/conf/' + projectKey)\"><span>Configuration</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'team')}\" (click)=\"gotourl('project/team/' + projectKey)\"><span>Team</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'meeting')}\" (click)=\"gotourl('project/meeting/' + projectKey)\"><span>Meetings</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'quality')}\" (click)=\"gotourl('project/quality/' + projectKey)\"><span>Quality</span></li>\n    </ul>\n</div>\n  "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-sidebar {\n  color: #ffffff;\n  top: 50px;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .project-sidebar .project-thumb img {\n    width: 100%; }\n  .project-sidebar .project-thumb .mat-icon {\n    width: 100%;\n    color: #ffffff;\n    font-size: 10em;\n    padding: 50px 0;\n    text-align: center; }\n  .project-sidebar .project-thumb #load_project_img {\n    display: none; }\n  .project-sidebar .sidebar-list {\n    padding-top: 30px;\n    overflow-y: scroll; }\n  .project-sidebar .sidebar-list .sidebar-item {\n      min-height: 50px;\n      padding: 10px 20px; }\n  .project-sidebar .sidebar-list .sidebar-item span {\n        font-size: 16px;\n        text-transform: uppercase; }\n  .project-sidebar .sidebar-list .sidebar-item.active span {\n        font-weight: bold;\n        color: #ffffff;\n        display: flex;\n        align-items: baseline; }\n  .project-sidebar .sidebar-list .sidebar-item.active span::after {\n          content: '';\n          width: 15px;\n          height: 15px;\n          margin-left: 10px;\n          border-radius: 100%;\n          background: #4472C4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsVUFBUztFQUNULGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBa0R6QjtFQXZERDtJQVNZLFlBQVcsRUFDZDtFQVZUO0lBYVksWUFBVztJQUNYLGVBQWM7SUFDZCxnQkFBZTtJQUNmLGdCQUFlO0lBQ2YsbUJBQ0osRUFBQztFQWxCVDtJQXFCWSxjQUFhLEVBQ2hCO0VBdEJUO0lBMEJRLGtCQUFpQjtJQUNqQixtQkFBa0IsRUEyQnJCO0VBdERMO01BOEJZLGlCQUFnQjtNQUNoQixtQkFBa0IsRUFzQnJCO0VBckRUO1FBa0NnQixnQkFBZTtRQUNmLDBCQUF5QixFQUM1QjtFQXBDYjtRQXVDZ0Isa0JBQWlCO1FBQ2pCLGVBQWM7UUFDZCxjQUFhO1FBQ2Isc0JBQXFCLEVBVXhCO0VBcERiO1VBNkNvQixZQUFXO1VBQ1gsWUFBVztVQUNYLGFBQVk7VUFDWixrQkFBaUI7VUFDakIsb0JBQW1CO1VBQ25CLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LXNpZGViYXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5wcm9qZWN0LXRodW1iIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMGVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xvYWRfcHJvamVjdF9pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci1saXN0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAgIC5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDcyQzQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_evented__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/evented */ "./src/app/_services/evented.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _projectprofile_projectprofile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projectprofile/projectprofile */ "./src/app/projectprofile/projectprofile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, activatedRoute, afStorage, databaseService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.afStorage = afStorage;
        this.databaseService = databaseService;
        this.isProgressForuploading = false;
        this.project = new _projectprofile_projectprofile__WEBPACK_IMPORTED_MODULE_5__["ProjectProfile"]();
        this.r_e = this.router.events.subscribe(function (val) {
            if (val['url']) {
                _this.activate = val['url'].split('/')[2];
                _this.projectKey = val['url'].split('/')[3];
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.databaseService.getRowDetails('/projects/', this.projectKey).valueChanges().subscribe(function (data) {
            _this.project = data;
        });
        _services_evented__WEBPACK_IMPORTED_MODULE_2__["Evented"].on('editmod', function (e) {
            _this.editMod = e.args.mode;
        });
    };
    SidebarComponent.prototype.gotourl = function (url) {
        this.router.navigate([url]);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.r_e.unsubscribe();
    };
    SidebarComponent.prototype.popupforImage = function () {
        this.load_project_img.nativeElement.click();
    };
    SidebarComponent.prototype.handleFileInput = function (files) {
        if (files.length == 0) {
            return;
        }
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('files/' + this.projectKey + '/images/' + id);
        this.task = this.ref.put(files[0]);
        var me = this;
        this.isProgressForuploading = true;
        this.task.then(function (data) {
            var a = data.ref.getDownloadURL();
            a.then(function (data) {
                _services_evented__WEBPACK_IMPORTED_MODULE_2__["Evented"].fire('updateProjectImage', {
                    imgUrl: data
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('load_project_img'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SidebarComponent.prototype, "load_project_img", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebarright/message/message.component.html":
/*!*************************************************************!*\
  !*** ./src/app/sidebarright/message/message.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-sender\" *ngIf=\"user\">\r\n  <app-avatar [userProfile]=\"user\" *ngIf=\"user\"></app-avatar>\r\n  <div class=\"msg-sender-detail\">\r\n    <p class=\"name\">{{user.name}}</p>\r\n    <p>BIM Manager</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"msg-content\" *ngIf=\"user\">\r\n  <span *ngIf=\"message.type == 'txt'\">{{message.message}}</span>\r\n  <a [href]='message.message' *ngIf=\"message.type == 'img'\">\r\n    <img [src]=\"message.message\" class=\"chat-img\">\r\n  </a>\r\n\r\n  <a [href]='message.message' *ngIf=\"message.type == 'file'\" class=\"msg-attach-item\">\r\n    <mat-icon>attach_file</mat-icon>{{message.name}}\r\n  </a>\r\n</div>\r\n\r\n<div class=\"msg-date\">\r\n  <span> {{ message.timesent | date:'medium' }}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebarright/message/message.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/sidebarright/message/message.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-sender {\n  display: flex; }\n  .msg-sender img {\n    width: 50px;\n    height: 50px;\n    border-radius: 100%;\n    background: #a7a7a7;\n    float: left; }\n  .msg-sender .msg-sender-detail {\n    display: block;\n    padding-left: 20px; }\n  .msg-sender .msg-sender-detail p {\n      display: block;\n      width: 100%; }\n  .msg-sender .msg-sender-detail .name {\n      font-size: 1.3em;\n      font-weight: 800; }\n  .msg-sender:after {\n    content: \"\";\n    display: block;\n    clear: both; }\n  .msg-content {\n  padding: 15px 0;\n  font-style: italic; }\n  .msg-content .chat-img {\n    width: 100%; }\n  .msg-content .msg-attach-item {\n    display: flex;\n    align-items: center; }\n  .msg-date {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhcnJpZ2h0L21lc3NhZ2UvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxzaWRlYmFycmlnaHRcXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBNkJoQjtFQTlCRDtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixZQUFXLEVBQ2Q7RUFUTDtJQVlRLGVBQWM7SUFDZCxtQkFBa0IsRUFVckI7RUF2Qkw7TUFnQlksZUFBYztNQUNkLFlBQVcsRUFDZDtFQWxCVDtNQW9CWSxpQkFBZ0I7TUFDaEIsaUJBQWdCLEVBQ25CO0VBdEJUO0lBMEJRLFlBQVc7SUFDWCxlQUFjO0lBQ2QsWUFBVyxFQUNkO0VBR0w7RUFDSSxnQkFBZTtFQUNmLG1CQUFrQixFQVVyQjtFQVpEO0lBS1EsWUFBVyxFQUNkO0VBTkw7SUFTUSxjQUFhO0lBQ2Isb0JBQW1CLEVBQ3RCO0VBR0w7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFycmlnaHQvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zZy1zZW5kZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhN2E3YTc7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1zZy1zZW5kZXItZGV0YWlsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxufVxyXG5cclxuLm1zZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIFxyXG4gICAgLmNoYXQtaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tc2ctYXR0YWNoLWl0ZW17XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubXNnLWRhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebarright/message/message.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sidebarright/message/message.component.ts ***!
  \***********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(authService) {
        this.authService = authService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var me = this;
        this.authService.getUserById(this.message.userId).valueChanges().subscribe(function (data) {
            me.user = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/sidebarright/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/sidebarright/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/sidebarright/sidebarright.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sidebarright/sidebarright.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-panel\">\r\n  <div class=\"search-bar\" >\r\n      <form class=\"search-form\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Search\" (keyup)=\"search($event.target.value)\">\r\n          </mat-form-field>\r\n        </form>\r\n  </div>\r\n  \r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <ul class=\"msg-list\"  *ngIf=\"!isLoading && messagesShow.length == 0\">\r\n    <h2 class=\"no-messages\">No Messages</h2>\r\n  </ul>\r\n  <ul class=\"msg-list\" *ngIf=\"!isLoading && messagesShow && messagesShow.length>0\" #feedContainer>\r\n    <li class=\"msg-list-item\" *ngFor=\"let message of messagesShow\">\r\n      <app-message [message]=\"message\"></app-message>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <div class=\"msg-box\">\r\n    <textarea class=\"input-message-to-send\" placeholder=\"Type something to send!\" [(ngModel)]=\"msgtext\"  (keyup)=\"handleSubmit($event)\"></textarea>\r\n    <mat-progress-bar *ngIf=\"isProgressForuploading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div class=\"chat-tools\">\r\n      <div class=\"adding-tools\">\r\n        <mat-icon (click)=\"popupforFile()\">attach_file</mat-icon>\r\n        <input type=\"file\" #files_for_send id=\"files-for-send\" (change)=\"handleFileInputFile($event.target.files)\">\r\n        <mat-icon (click)=\"popupforImage()\">photo_camera</mat-icon>\r\n        <input type=\"file\" #images_for_send accept=\"image/*\" id=\"images-for-send\" (change)=\"handleFileInput($event.target.files)\">\r\n        <mat-icon (click)=\"isEmojji = !isEmojji\">mood</mat-icon>\r\n        <emoji-mart (emojiClick)=\"addEmoji($event)\" *ngIf=\"isEmojji\" [style]=\"{ position: 'absolute', bottom: '20px', right: '20px' }\"></emoji-mart>\r\n      </div>\r\n      <div class=\"send-button-tool\">\r\n        <div class=\"send-btn-round\">\r\n          <mat-icon (click)=\"sendMsg()\" >send</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebarright/sidebarright.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sidebarright/sidebarright.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-panel {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .right-panel .search-bar {\n    width: 100%;\n    padding: 10px; }\n  .right-panel .msg-list {\n    height: 100%;\n    overflow-y: scroll; }\n  .right-panel .msg-list .no-messages {\n      text-align: center; }\n  .right-panel .msg-list::-webkit-scrollbar {\n      width: 10px; }\n  .right-panel .msg-list::-webkit-scrollbar-track {\n      background: #e0dfde; }\n  .right-panel .msg-list::-webkit-scrollbar-thumb {\n      background: #888; }\n  .right-panel .msg-list .msg-list-item {\n      padding: 10px;\n      border-bottom: 1px solid #a7a7a7;\n      list-style: none; }\n  .right-panel .msg-box {\n    min-height: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  .right-panel .msg-box .input-message-to-send {\n      border: none;\n      width: 100%;\n      resize: none;\n      padding: 5px; }\n  .right-panel .msg-box .input-message-to-send::-webkit-input-placeholder {\n        font-style: oblique; }\n  .right-panel .msg-box .input-message-to-send::-ms-input-placeholder {\n        font-style: oblique; }\n  .right-panel .msg-box .input-message-to-send::placeholder {\n        font-style: oblique; }\n  .right-panel .msg-box .input-message-to-send:focus {\n        border: grey;\n        outline: none; }\n  .right-panel .msg-box .chat-tools {\n      display: flex;\n      justify-content: space-between;\n      padding: 5px 10px;\n      align-items: center; }\n  .right-panel .msg-box .chat-tools .adding-tools {\n        display: flex;\n        align-items: center; }\n  .right-panel .msg-box .chat-tools .adding-tools mat-icon {\n          color: black;\n          cursor: pointer;\n          font-size: 21px; }\n  .right-panel .msg-box .chat-tools .adding-tools #images-for-send {\n          display: none; }\n  .right-panel .msg-box .chat-tools .adding-tools #files-for-send {\n          display: none; }\n  .right-panel .msg-box .chat-tools .send-button-tool .send-btn-round {\n        background: #344456;\n        border-radius: 50%;\n        padding: 4px 0px 2px 5px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n  .right-panel .msg-box .chat-tools .send-button-tool .send-btn-round mat-icon {\n          color: white;\n          cursor: pointer;\n          font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhcnJpZ2h0L0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcc2lkZWJhcnJpZ2h0XFxzaWRlYmFycmlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkFBc0IsRUFtR3pCO0VBdkdEO0lBT1EsWUFBVztJQUNYLGNBQWEsRUFDaEI7RUFUTDtJQVlRLGFBQVk7SUFDWixtQkFBa0IsRUF1QnJCO0VBcENMO01BZ0JZLG1CQUFrQixFQUNyQjtFQWpCVDtNQW9CWSxZQUFXLEVBQ2Q7RUFyQlQ7TUF3Qlksb0JBQW1CLEVBQ3RCO0VBekJUO01BNEJZLGlCQUFnQixFQUNuQjtFQTdCVDtNQWdDWSxjQUFhO01BQ2IsaUNBQWdDO01BQ2hDLGlCQUFnQixFQUNuQjtFQW5DVDtJQXVDUSxrQkFBaUI7SUFDakIsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QiwrQkFBOEIsRUE0RGpDO0VBdEdMO01BNkNZLGFBQVk7TUFDWixZQUFXO01BQ1gsYUFBWTtNQUNaLGFBQVksRUFVZjtFQTFEVDtRQW1EZ0Isb0JBQW1CLEVBQ3RCO0VBcERiO1FBbURnQixvQkFBbUIsRUFDdEI7RUFwRGI7UUFtRGdCLG9CQUFtQixFQUN0QjtFQXBEYjtRQXVEZ0IsYUFBWTtRQUNaLGNBQWEsRUFDaEI7RUF6RGI7TUE2RFksY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixrQkFBaUI7TUFDakIsb0JBQW1CLEVBcUN0QjtFQXJHVDtRQW1FZ0IsY0FBYTtRQUNiLG9CQUFtQixFQWV0QjtFQW5GYjtVQXVFb0IsYUFBWTtVQUNaLGdCQUFlO1VBQ2YsZ0JBQWUsRUFDbEI7RUExRWpCO1VBNkVvQixjQUFhLEVBQ2hCO0VBOUVqQjtVQWlGb0IsY0FBYSxFQUNoQjtFQWxGakI7UUF1Rm9CLG9CQUFtQjtRQUNuQixtQkFBa0I7UUFDbEIseUJBQXdCO1FBQ3hCLGNBQWE7UUFDYiwrQkFBOEI7UUFDOUIsb0JBQW1CLEVBT3RCO0VBbkdqQjtVQStGd0IsYUFBWTtVQUNaLGdCQUFlO1VBQ2YsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFycmlnaHQvc2lkZWJhcnJpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LXBhbmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnNlYXJjaC1iYXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1zZy1saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgICAgICAubm8tbWVzc2FnZXN7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGRmZGU7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODg4OyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tc2ctbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhN2E3YTc7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tc2ctYm94IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuaW5wdXQtbWVzc2FnZS10by1zZW5ke1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC10b29sc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5hZGRpbmctdG9vbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjaW1hZ2VzLWZvci1zZW5ke1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2ZpbGVzLWZvci1zZW5ke1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZW5kLWJ1dHRvbi10b29se1xyXG4gICAgICAgICAgICAgICAgLnNlbmQtYnRuLXJvdW5ke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDQ0NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwcHggMnB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebarright/sidebarright.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sidebarright/sidebarright.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarrightComponent", function() { return SidebarrightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/chat.service */ "./src/app/_services/chat.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarrightComponent = /** @class */ (function () {
    function SidebarrightComponent(router, chatService, afStorage, auth) {
        var _this = this;
        this.router = router;
        this.chatService = chatService;
        this.afStorage = afStorage;
        this.auth = auth;
        this.isLoading = false;
        this.msgtext = '';
        this.searchTxt = '';
        this.isProgressForuploading = false;
        this.isEmojji = false;
        this.routerEvent = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.url = val['url'];
            }
            else {
                _this.url = val['url'];
            }
            if (_this.url) {
                _this.projectId = _this.url.split('/')[3];
                _this.urlType = _this.url.split('/')[2];
                _this.loadMessages();
            }
        });
        this.authUser = this.auth.auth.currentUser;
        console.log(this.authUser);
    }
    SidebarrightComponent.prototype.ngOnInit = function () {
    };
    SidebarrightComponent.prototype.ngOnDestroy = function () {
        this.routerEvent.unsubscribe();
    };
    SidebarrightComponent.prototype.loadMessages = function () {
        var _this = this;
        this.isLoading = true;
        this.messages = [];
        this.messagesShow = [];
        this.chatService.getMessages(this.projectId, this.urlType).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            _this.messages = data;
            _this.messagesShow = data;
            _this.isLoading = false;
            _this.search(_this.searchTxt);
        });
    };
    SidebarrightComponent.prototype.sendMsg = function () {
        if (this.msgtext != '') {
            var msgBody = {
                message: this.msgtext,
                type: 'txt',
                userId: this.authUser.uid
            };
            this.chatService.sendMsg(msgBody, this.projectId, this.urlType);
            this.msgtext = '';
        }
    };
    SidebarrightComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            if (!event.shiftKey) {
                this.sendMsg();
            }
        }
    };
    SidebarrightComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
    };
    SidebarrightComponent.prototype.ngAfterViewChecked = function () {
        // this.scrollToBottom();
    };
    SidebarrightComponent.prototype.popupforImage = function () {
        this.images_for_send.nativeElement.click();
    };
    SidebarrightComponent.prototype.popupforFile = function () {
        this.files_for_send.nativeElement.click();
    };
    SidebarrightComponent.prototype.handleFileInput = function (files) {
        if (files.length == 0) {
            return;
        }
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('files/' + this.projectId + '/' + this.urlType + '/' + id);
        this.task = this.ref.put(files[0]);
        var me = this;
        this.isProgressForuploading = true;
        this.task.then(function (data) {
            var a = data.ref.getDownloadURL();
            a.then(function (data) {
                var msgBody = {
                    message: data,
                    type: 'img',
                    userId: me.authUser.uid
                };
                me.isProgressForuploading = false;
                me.chatService.sendMsg(msgBody, me.projectId, me.urlType);
            });
        });
    };
    SidebarrightComponent.prototype.handleFileInputFile = function (files) {
        if (files.length == 0) {
            return;
        }
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('files/' + this.projectId + '/' + this.urlType + '/' + id);
        this.task = this.ref.put(files[0]);
        var me = this;
        this.isProgressForuploading = true;
        this.task.then(function (data) {
            var a = data.ref.getDownloadURL();
            a.then(function (data) {
                var msgBody = {
                    message: data,
                    type: 'file',
                    name: files[0]['name'],
                    userId: me.authUser.uid
                };
                me.isProgressForuploading = false;
                me.chatService.sendMsg(msgBody, me.projectId, me.urlType);
            });
        });
    };
    SidebarrightComponent.prototype.search = function (val) {
        var _this = this;
        this.searchTxt = val;
        if (this.searchTxt == "") {
            return;
        }
        this.messagesShow = this.messages.filter(function (message) { return message.message.includes(_this.searchTxt); });
    };
    SidebarrightComponent.prototype.addEmoji = function (event) {
        this.isEmojji = !this.isEmojji;
        this.msgtext += event.emoji.native;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('feedContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SidebarrightComponent.prototype, "feedContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('images_for_send'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SidebarrightComponent.prototype, "images_for_send", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('files_for_send'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SidebarrightComponent.prototype, "files_for_send", void 0);
    SidebarrightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebarright',
            template: __webpack_require__(/*! ./sidebarright.component.html */ "./src/app/sidebarright/sidebarright.component.html"),
            styles: [__webpack_require__(/*! ./sidebarright.component.scss */ "./src/app/sidebarright/sidebarright.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], SidebarrightComponent);
    return SidebarrightComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication\">\r\n        <mat-card class=\"auth-form\">\r\n            <mat-card-header>\r\n                <mat-card-title><strong>BIM</strong>.VU</mat-card-title>\r\n            </mat-card-header>\r\n\r\n            <mat-card-content>\r\n                <form class=\"login-form\">\r\n                    <mat-form-field class=\"full-width\">\r\n                        <mat-label>Email</mat-label>\r\n                        <input  matInput  placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"full-width\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input  matInput type=\"password\"  placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\">\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-raised-button (click)=\"login()\" color=\"primary\" class=\"full-width\">Sign In</button>\r\n                <div class=\"forgot-password\">\r\n                    <a (click)=\"gotoForgotPassword()\">Forgot password?</a>\r\n                </div>\r\n                <button mat-raised-button (click)=\"gotoSignin()\" color=\"primary\" class=\"full-width create-account\"><strong>Create Account</strong></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    \r\n        <mat-card class=\"auth-form-social\">\r\n            <mat-card-header>\r\n                <mat-card-title>\r\n                    Alternative Sign in\r\n                </mat-card-title>\r\n            </mat-card-header>\r\n\r\n            <mat-card-content>\r\n                <button mat-raised-button (click)=\"tryGoogleLogin()\" color=\"primary\" class=\"full-width google-sign\"><mat-icon svgIcon=\"google-plus\"></mat-icon>Sign in with Google+</button>\r\n                <button mat-raised-button (click)=\"register()\" color=\"primary\" class=\"full-width linkedin-sign\"><mat-icon svgIcon=\"linkedin\"></mat-icon>Sign in with Linkedin</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/signin/signin.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-password {\n  margin-bottom: 35px; }\n\n.auth-form .mat-card-actions button.create-account {\n  background: none;\n  border: 1px solid #3b5998; }\n\n.auth-form .mat-card-actions button.create-account strong {\n  color: #3b5998; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcc2lnbmluXFxzaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4uYXV0aC1mb3JtIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbi5jcmVhdGUtYWNjb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNiNTk5ODtcclxufVxyXG4uYXV0aC1mb3JtIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbi5jcmVhdGUtYWNjb3VudCBzdHJvbmcge1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, authService, matIconRegistry, domSanitizer) {
        this.router = router;
        this.authService = authService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.errorMessage = "";
        this.successMessage = "";
        this.user = { email: '', password: '' };
        if (localStorage.getItem('currentUser') !== 'undefined' && localStorage.getItem('currentUser') !== null) {
            this.router.navigate(['/']);
        }
        this.matIconRegistry.addSvgIcon('google-plus', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google-plus.svg"));
        this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg"));
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.gotoSignin = function () {
        this.router.navigate(["/signup"]);
    };
    SigninComponent.prototype.gotoForgotPassword = function () {
        this.router.navigate(["/forgetpassword"]);
    };
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.authService.doSignin(this.user)
            .then(function (res) {
            _this.errorMessage = "";
            localStorage.setItem('currentUser', res.user.uid);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    SigninComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/']);
        }, function (err) { return console.log(err); });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication\">\r\n    <mat-card class=\"auth-form\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <strong>BIM</strong>.VU\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n        <form class=\"signup-form\">\r\n          <mat-form-field class=\"full-width\">\r\n              <mat-label>Full Name</mat-label>\r\n              <input  matInput  placeholder=\"Full name\"  name=\"name\" class=\"form-input\" [(ngModel)]=\"user.name\"  required>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Company (Optional)</mat-label>\r\n              <input  matInput  placeholder=\"Company (Optional)\" name=\"cname\" [(ngModel)]=\"user.cname\"  required>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Email</mat-label>\r\n              <input  matInput  placeholder=\"Email\" name=\"email\"[(ngModel)]=\"user.email\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Password</mat-label>\r\n              <input  matInput type=\"password\"  placeholder=\"Password\"  name=\"password\"[(ngModel)]=\"user.password\">\r\n            </mat-form-field>\r\n            <span>Password must be 8 characters or longer</span>\r\n        </form>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button (click)=\"tryRegister()\" color=\"primary\" class=\"full-width\">Create Account</button>\r\n        <div class=\"go-to-signin\">\r\n            <a (click)=\"gotoSignIn()\">Go to Sign in</a>\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"auth-form-social\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          Use an existing account\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n          <button mat-raised-button (click)=\"tryGoogleLogin()\" color=\"primary\" class=\"full-width google-sign\">Sign in with Google+</button>\r\n          <button mat-raised-button (click)=\"register()\" color=\"primary\" class=\"full-width linkedin-sign\">Sign in with Linkedin</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".go-to-signin {\n  margin-top: 15px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nby10by1zaWduaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authService, matIconRegistry, domSanitizer) {
        // if (localStorage.getItem('currentUser') !== 'undefined' && localStorage.getItem('currentUser') !== null) {
        //   this.router.navigate(['/']);
        // }
        this.router = router;
        this.authService = authService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.errorMessage = "";
        this.successMessage = "";
        this.user = {
            name: '',
            cname: '',
            email: '',
            password: '',
            phone: '',
            avatar: ''
        };
        this.matIconRegistry.addSvgIcon('google-plus', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google-plus.svg"));
        this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg"));
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.gotoSignIn = function () {
        this.router.navigate(["/signin"]);
    };
    SignupComponent.prototype.tryRegister = function () {
        var _this = this;
        this.authService.doRegister(this.user)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
            localStorage.setItem('currentUser', res.user.uid);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    SignupComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/']);
        }, function (err) { return console.log(err); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/*!************************************************!*\
  !*** ./src/app/upgrade/upgrade.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upgrade\" *ngIf=\"!isLoading\">\r\n  <img [src]=\"user.avatar == ''? '/assets/images/avatar.png' : user.avatar\" alt=\"\" class=\"user-avartar\">\r\n  <p style=\"margin-top: 30px;\">\r\n    <span style=\"font-size: 30px;color: white;\"><strong style=\"font-size: 30px;color: white;\">BIM</strong> . VU</span>\r\n  </p>\r\n  <p style=\"font-size: 25px;color: white;    margin-top: 25px;\">\r\n    Upgrade for only <span style=\"font-size: 30px;color:#fff\">$50</span> / month a project and gain access to unlimited users!\r\n  </p>\r\n  \r\n  <div class=\"slider-container\">\r\n    <ng5-slider [(value)]=\"value\" [options]=\"options\"></ng5-slider>\r\n  </div>\r\n  <p>Choose the number of projects above</p>\r\n  <button class=\"price-btn\" *ngIf=\"value != 30\">Total <b>${{value * 50}}</b> / month</button>\r\n  <button class=\"price-btn\" *ngIf=\"value == 30\">ENTERPRISE</button>\r\n\r\n  <button class=\"pay-now-btn\" *ngIf=\"value != 30\" (click)=\"handlePayment()\">PAY NOW</button>\r\n  <button class=\"pay-now-btn\" *ngIf=\"value == 30\">CONTACT SUPPORT</button>\r\n\r\n</div>\r\n\r\n<app-loading *ngIf=\"isLoading\"></app-loading>"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.scss":
/*!************************************************!*\
  !*** ./src/app/upgrade/upgrade.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upgrade {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background: black;\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .upgrade .user-avartar {\n    width: 100px;\n    border-radius: 50%;\n    height: 100px; }\n  .upgrade .pay-now-btn {\n    background: #3b5998;\n    color: white;\n    padding: 10px 0px;\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    margin-top: 25px;\n    width: 20%; }\n  .upgrade .price-btn {\n    background: #000;\n    color: #3b5998;\n    padding: 10px 0px;\n    border: solid 2px #3b5998;\n    border-radius: 3px;\n    outline: none;\n    margin-top: 25px;\n    width: 20%;\n    font-size: 25px; }\n  .upgrade .price-btn b {\n      font-size: 30px;\n      color: #3b5998; }\n  .upgrade .slider-container {\n    width: 30%; }\n  ::ng-deep .slider-container .ng5-slider .ng5-slider-bar {\n  background: #1b1a1a; }\n  ::ng-deep .slider-container .ng5-slider .ng5-slider-pointer {\n  background-color: #3b5998; }\n  ::ng-deep .slider-container .ng5-slider .ng5-slider-tick {\n  width: 20px;\n  height: 20px;\n  top: -7px;\n  border-radius: 50%;\n  background: #1b1a1a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBncmFkZS9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHVwZ3JhZGVcXHVwZ3JhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxPQUFNO0VBQ04sUUFBTztFQUNQLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBdUMxQjtFQWxERDtJQWNRLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYSxFQUNoQjtFQWpCTDtJQW9CUSxvQkFBbUI7SUFDbkIsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsV0FDSixFQUFDO0VBNUJMO0lBK0JRLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YsZ0JBQWUsRUFNbEI7RUE3Q0w7TUEwQ1ksZ0JBQWU7TUFDZixlQUFjLEVBQ2pCO0VBNUNUO0lBZ0RRLFdBQVUsRUFDYjtFQUdMO0VBRVEsb0JBQW1CLEVBQ3RCO0VBSEw7RUFNUSwwQkFBeUIsRUFDNUI7RUFQTDtFQVVRLFlBQVc7RUFDWCxhQUFZO0VBQ1osVUFBUztFQUNULG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC91cGdyYWRlL3VwZ3JhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBncmFkZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAudXNlci1hdmFydGFye1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGF5LW5vdy1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZS1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjM2I1OTk4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG4gICAgICAgIGJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXItY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxYjFhMWE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci1jb250YWluZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItcG9pbnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciAubmc1LXNsaWRlciAubmc1LXNsaWRlci10aWNrIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWIxYTFhO1xyXG4gICAgfVxyXG4gICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upgrade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/upgrade.service */ "./src/app/_services/upgrade.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent(upgradeService, authService, afAuth) {
        this.upgradeService = upgradeService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.value = 5;
        this.options = {
            floor: 5,
            ceil: 30,
            step: 5,
            showTicks: true,
            showTicksValues: true
        };
        this.isLoading = true;
        this.amount = 500;
    }
    UpgradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authUser = this.afAuth.auth.currentUser;
        this.authService.getUserByIdPromise(this.authUser.uid).then(function (data) {
            _this.isLoading = false;
            if (data) {
                _this.user = data;
            }
            if (data && data.membership) {
                _this.value = data.membership.type;
            }
        });
        this.handler = StripeCheckout.configure({
            key: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].stripeKey,
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: function (token) {
                _this.upgradeService.processPayment(token, _this.amount * 50 * 100, _this.value);
            }
        });
    };
    UpgradeComponent.prototype.handlePayment = function () {
        this.handler.open({
            name: "BIM Membership",
            description: "Upgrade Membership",
            amount: this.value * 50 * 100
        });
    };
    UpgradeComponent.prototype.onpopstate = function () {
        this.handler.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:popstate'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UpgradeComponent.prototype, "onpopstate", null);
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrade',
            template: __webpack_require__(/*! ./upgrade.component.html */ "./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__(/*! ./upgrade.component.scss */ "./src/app/upgrade/upgrade.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_upgrade_service__WEBPACK_IMPORTED_MODULE_1__["UpgradeService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/user/profile.ts":
/*!*********************************!*\
  !*** ./src/app/user/profile.ts ***!
  \*********************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/wrap/wrap.component.html":
/*!******************************************!*\
  !*** ./src/app/wrap/wrap.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/wrap/wrap.component.scss":
/*!******************************************!*\
  !*** ./src/app/wrap/wrap.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyYXAvd3JhcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/wrap/wrap.component.ts":
/*!****************************************!*\
  !*** ./src/app/wrap/wrap.component.ts ***!
  \****************************************/
/*! exports provided: WrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapComponent", function() { return WrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WrapComponent = /** @class */ (function () {
    function WrapComponent() {
    }
    WrapComponent.prototype.ngOnInit = function () {
    };
    WrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wrap',
            template: __webpack_require__(/*! ./wrap.component.html */ "./src/app/wrap/wrap.component.html"),
            styles: [__webpack_require__(/*! ./wrap.component.scss */ "./src/app/wrap/wrap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WrapComponent);
    return WrapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBMChoVrmq48xoSnLwVhgX3ZIZQkHustHw",
        authDomain: "bimbackend.firebaseapp.com",
        databaseURL: "https://bimbackend.firebaseio.com",
        projectId: "bimbackend",
        storageBucket: "bimbackend.appspot.com",
        messagingSenderId: "315609333100"
    },
    stripeKey: 'pk_test_XopyJS2ntwqB3j7bd6mzHRSn'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\AngularJS\Song\bim\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map