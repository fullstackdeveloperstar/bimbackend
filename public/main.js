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
                _this.router.navigate(['signin']);
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

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ApiService.prototype.sendRequest = function (url, params) {
        if (params === void 0) { params = null; }
        return this.http.post(this.apiUrl + url, params);
    };
    ApiService.prototype.localGetRequest = function (url) {
        return this.http.get(url);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
    AuthService.prototype.sendResetPasswordRequest = function (email) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(email).then(function (success) {
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
/* harmony import */ var _project_team_invite_invite_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./project/team/invite/invite.component */ "./src/app/project/team/invite/invite.component.ts");
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
                path: 'signup/:pid/:teamid',
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
            },
            {
                path: 'invite/:pid/:teamid',
                component: _project_team_invite_invite_component__WEBPACK_IMPORTED_MODULE_21__["InviteComponent"]
            },
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
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _notification_notification_item_notification_item_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./notification/notification-item/notification-item.component */ "./src/app/notification/notification-item/notification-item.component.ts");
/* harmony import */ var _project_matrix_cellpicker_cellpicker_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./project/matrix/cellpicker/cellpicker.component */ "./src/app/project/matrix/cellpicker/cellpicker.component.ts");
/* harmony import */ var _project_team_invite_invite_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./project/team/invite/invite.component */ "./src/app/project/team/invite/invite.component.ts");
/* harmony import */ var _project_meeting_organizer_organizer_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./project/meeting/organizer/organizer.component */ "./src/app/project/meeting/organizer/organizer.component.ts");
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
                _project_quality_useravatar_useravatar_component__WEBPACK_IMPORTED_MODULE_45__["UseravatarComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_46__["NotificationComponent"],
                _notification_notification_item_notification_item_component__WEBPACK_IMPORTED_MODULE_47__["NotificationItemComponent"],
                _project_matrix_cellpicker_cellpicker_component__WEBPACK_IMPORTED_MODULE_48__["CellpickerComponent"],
                _project_team_invite_invite_component__WEBPACK_IMPORTED_MODULE_49__["InviteComponent"],
                _project_meeting_organizer_organizer_component__WEBPACK_IMPORTED_MODULE_50__["OrganizerComponent"]
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

module.exports = ".avatar .avatar-img {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%; }\n\n.avatar .avatar-txt {\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZhdGFyL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcYXZhdGFyXFxhdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFMTDtFQVFRLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXZhdGFyL2F2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgICAuYXZhdGFyLWltZ3tcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdmF0YXItdHh0e1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "<div class=\"authentication\">\n  <mat-card class=\"auth-form\">\n      <mat-card-header>\n          <mat-card-title><strong>BIM</strong>.VU</mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n          <form class=\"forgetpassword-form\">\n              <mat-form-field class=\"full-width\">\n                  <mat-label>Email</mat-label>\n                  <input  matInput  placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\">\n              </mat-form-field>\n          </form>\n      </mat-card-content>\n      <mat-card-actions>\n          <button mat-raised-button (click)=\"sendRequest()\" color=\"primary\" class=\"full-width\">Submit</button>\n      </mat-card-actions>\n  </mat-card>\n\n  <mat-card class=\"auth-form-social\">\n      <mat-card-header>\n          <mat-card-title>\n              Alternative Sign in\n          </mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n          <button mat-raised-button (click)=\"tryGoogleLogin()\" color=\"primary\" class=\"full-width google-sign\"><mat-icon svgIcon=\"google-plus\"></mat-icon>Sign in with Google+</button>\n          <button mat-raised-button (click)=\"register()\" color=\"primary\" class=\"full-width linkedin-sign\"><mat-icon svgIcon=\"linkedin\"></mat-icon>Sign in with Linkedin</button>\n      </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/forgetpassword/forgetpassword.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/forgetpassword/forgetpassword.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgetpassword-form {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3dvcmQvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxmb3JnZXRwYXNzd29yZFxcZm9yZ2V0cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JnZXRwYXNzd29yZC1mb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4gICJdfQ== */"

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





var ForgetpasswordComponent = /** @class */ (function () {
    function ForgetpasswordComponent(router, authService, matIconRegistry, domSanitizer) {
        this.router = router;
        this.authService = authService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.user = { email: '', password: '' };
        this.matIconRegistry.addSvgIcon('google-plus', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google-plus.svg"));
        this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg"));
    }
    ForgetpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetpasswordComponent.prototype.sendRequest = function () {
        var _this = this;
        this.authService.sendResetPasswordRequest(this.user.email).then(function (result) {
            _this.router.navigate(['/']);
        });
    };
    ForgetpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgetpassword',
            template: __webpack_require__(/*! ./forgetpassword.component.html */ "./src/app/forgetpassword/forgetpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgetpassword.component.scss */ "./src/app/forgetpassword/forgetpassword.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row style=\"justify-content: space-between;\" class=\"header\">\r\n    <div class=left-group>\r\n      <span class=\"logo\"><a href=\"/\"><img src=\"/assets/images/BIMVULOGOLARGEWHITE.png\"></a></span>\r\n      <span class=\"sp-line\">|</span> \r\n      <span class=\"page-title\">{{projecttitle}}</span>\r\n    </div>\r\n    <div class=\"right-group\">\r\n        <div style=\"display: flex; align-items: center;\">\r\n            <span *ngIf=\"url == '/signin'\" class=\"nav-item-createaccount\" (click)=\"gotourl('/signup')\">CREATE ACCOUNT</span>\r\n            <span *ngIf=\"url == '/signup'\" class=\"nav-item-signinaccount\" (click)=\"gotourl('/home')\">SIGN IN</span>\r\n            <span (click)=\"openDialog()\" *ngIf=\"isAuth && userProfile\" style=\"margin-right: 10px;\">Hi {{userProfile.name}}</span>\r\n            <app-avatar *ngIf=\"isAuth && userProfile\" [userProfile]=\"userProfile\" (click)=\"openDialog()\"></app-avatar>\r\n        </div>\r\n        <app-notification *ngIf=\"isAuth\"></app-notification>\r\n        <button mat-flat-button color=\"white\" (click)=\"gotourl('/upgrade')\">Upgrade</button>\r\n        <mat-icon>help</mat-icon>\r\n        <mat-icon (click)=\"signout()\">cancel</mat-icon>  \r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item-signinaccount,\n.nav-item-createaccount {\n  font-size: 12px;\n  cursor: pointer; }\n\n.sp-line {\n  margin: 0;\n  font-size: 20px; }\n\n.header.mat-toolbar-row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: #181717;\n  height: 50px; }\n\n.header.mat-toolbar-row .left-group .logo a {\n    font-size: 1.5em;\n    color: #ffffff;\n    text-decoration: none;\n    cursor: pointer; }\n\n.header.mat-toolbar-row .left-group .logo a strong {\n      font-size: 1.2em;\n      color: #ffffff; }\n\n.header.mat-toolbar-row .left-group .logo a img {\n      height: 50px;\n      margin-top: 10px; }\n\n.header.mat-toolbar-row .left-group .page-title {\n    margin-left: 25px;\n    font-size: 16px;\n    font-weight: bold;\n    letter-spacing: 8px;\n    text-transform: uppercase; }\n\n.header.mat-toolbar-row .right-group {\n    display: flex;\n    align-items: center;\n    width: auto; }\n\n.header.mat-toolbar-row .right-group > div {\n      padding: 0 10px; }\n\n.header.mat-toolbar-row .right-group .small-avatar {\n      background: #2F5597;\n      border-radius: 100%;\n      padding: 5px;\n      margin-left: 10px;\n      font-size: .7em;\n      cursor: pointer; }\n\n.header.mat-toolbar-row .right-group .small-avatar-image {\n      margin-left: 10px;\n      border-radius: 50%;\n      height: 30px;\n      width: 30px;\n      border: solid 1px #2F5597;\n      cursor: pointer; }\n\n.header.mat-toolbar-row .right-group span {\n      cursor: pointer; }\n\n.header.mat-toolbar-row .right-group button {\n      background: none;\n      margin: 0 5px;\n      border: 2px solid #2F5597;\n      line-height: 25px; }\n\n.header.mat-toolbar-row .right-group mat-icon {\n      color: #3B3838;\n      font-size: 25px;\n      width: 25px;\n      height: 25px;\n      line-height: 25px;\n      margin: 0 3px;\n      cursor: pointer;\n      display: flex;\n      align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBR0ksZ0JBQWU7RUFDZixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFVBQVM7RUFDVCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsYUFBWSxFQXlFZjs7QUE5RUQ7SUFTWSxpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixnQkFBZSxFQVdsQjs7QUF2QlQ7TUFlZ0IsaUJBQWdCO01BQ2hCLGVBQWMsRUFDakI7O0FBakJiO01Bb0JnQixhQUFZO01BQ1osaUJBQWdCLEVBQ25COztBQXRCYjtJQTBCWSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLDBCQUF5QixFQUM1Qjs7QUEvQlQ7SUFrQ1EsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixZQUFXLEVBeUNkOztBQTdFTDtNQXVDWSxnQkFBZSxFQUNsQjs7QUF4Q1Q7TUEwQ1ksb0JBQW1CO01BQ25CLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osa0JBQWlCO01BQ2pCLGdCQUFlO01BQ2YsZ0JBQWUsRUFDbEI7O0FBaERUO01Ba0RZLGtCQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLFlBQVc7TUFDWCwwQkFBeUI7TUFDekIsZ0JBQWUsRUFDbEI7O0FBeERUO01BMERZLGdCQUFlLEVBQ2xCOztBQTNEVDtNQTZEWSxpQkFBZ0I7TUFDaEIsY0FBYTtNQUNiLDBCQUF5QjtNQUN6QixrQkFBaUIsRUFDcEI7O0FBakVUO01BbUVZLGVBQWM7TUFDZCxnQkFBZTtNQUNmLFlBQVc7TUFDWCxhQUFZO01BQ1osa0JBQWlCO01BQ2pCLGNBQWE7TUFDYixnQkFBZTtNQUNmLGNBQWE7TUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtLXNpZ25pbmFjY291bnQsXHJcbi5uYXYtaXRlbS1jcmVhdGVhY2NvdW50XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNwLWxpbmV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIubWF0LXRvb2xiYXItcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYmFja2dyb3VuZDogIzE4MTcxNztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIFxyXG4gICAgLmxlZnQtZ3JvdXAge1xyXG4gICAgICAgIC5sb2dvIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodC1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc21hbGwtYXZhdGFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJGNTU5NztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbWFsbC1hdmF0YXItaW1hZ2V7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyRjU1OTc7IFxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRjU1OTc7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgY29sb3I6ICMzQjM4Mzg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
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
    function HeaderComponent(router, dialog, authService, auth, databaseService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.auth = auth;
        this.databaseService = databaseService;
        this.url = '';
        this.avartarImage = {
            type: '',
            val: ''
        };
        this.projecttitle = "";
        this.router.events.subscribe(function (val) {
            _this.url = val['url'];
            var url = _this.router.url;
            var urlItems = url.split('/');
            if (urlItems.length >= 4) {
                _this.projectId = urlItems[3];
                _this.databaseService.getRowDetails('projects', _this.projectId).valueChanges().subscribe(function (data) {
                    if (data) {
                        _this.projecttitle = data.number + ' - ' + data.name;
                    }
                    else {
                        _this.projecttitle = '';
                    }
                });
            }
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
    HeaderComponent.prototype.gotohome = function () {
        location.href = "/";
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
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
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

module.exports = "<div class=\"home row\" layout=\"row\">\r\n    <div flex *ngFor=\"let project of projects\" class=\"col-md-2 card-div\" (click)=\"gotourl('/project/profile/' + project.key)\">\r\n        <mat-card class=\"project-card\">\r\n            <mat-card-header>\r\n                <mat-card-title>{{ project.number }}</mat-card-title>\r\n                <mat-card-subtitle>{{ project.name }}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <img mat-card-image *ngIf=\"project.thumb_image\" [src]=\"project.thumb_image\" [alt]=\"project.name\">\r\n              <img mat-card-image *ngIf=\"!project.thumb_image\" [alt]=\"project.name\" class=\"empty\">\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div flex class=\"col-md-2 card-div\">\r\n      <mat-card class=\"add-card\">\r\n        <mat-card-content>\r\n            <div class=\"add-project\">\r\n                <img mat-card-image src=\"/assets/icons/baseline-add-24px.svg\" alt=\"Photo of a Shiba Inu\" class=\"add-card\" (click)=\"gotourl('/project/new')\">\r\n            </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"home row\" layout=\"row\">\r\n    <div flex *ngFor=\"let project of invitedProjects\" class=\"col-md-2 card-div\" (click)=\"gotourl('/project/profile/' + project.key)\">\r\n        <mat-card class=\"project-card\">\r\n            <mat-card-header>\r\n                <mat-card-title>{{ project.number }}</mat-card-title>\r\n                <mat-card-subtitle>{{ project.name }}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <img mat-card-image *ngIf=\"project.thumb_image\" [src]=\"project.thumb_image\" [alt]=\"project.name\">\r\n                <img mat-card-image *ngIf=\"!project.thumb_image\" [alt]=\"project.name\" class=\"empty\">\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  margin: 20px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch; }\n  .home .card-div {\n    padding: 20px; }\n  .home .mat-card {\n    padding: 0;\n    position: relative;\n    height: 100%;\n    border-radius: 0;\n    background: #262626; }\n  .home .mat-card.add-card {\n      cursor: pointer; }\n  .home .mat-card .mat-card-header {\n      width: 100%;\n      padding: 20px 10px;\n      position: absolute;\n      font-stretch: expanded;\n      background: rgba(0, 0, 0, 0.5); }\n  .home .mat-card .mat-card-header .mat-card-title {\n        font-size: 20px;\n        color: #ffffff;\n        text-transform: uppercase;\n        clear: both; }\n  .home .mat-card .mat-card-header .mat-card-subtitle {\n        font-size: 14px;\n        color: #ffffff;\n        text-transform: uppercase;\n        margin-bottom: 10px;\n        clear: both; }\n  .home .mat-card .mat-card-content {\n      height: 100%; }\n  .home .mat-card .mat-card-content img {\n        height: 100%; }\n  .home .mat-card .mat-card-content img.empty {\n        padding: 40%;\n        display: none; }\n  .home .mat-card img {\n      width: 100%;\n      margin: 0; }\n  .home .mat-card .add-project {\n      width: 100%;\n      display: flex;\n      align-items: center; }\n  .home .mat-card .add-project mat-icon {\n        width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YscUJBQW9CLEVBa0V2QjtFQXRFRDtJQU9RLGNBQWEsRUFDaEI7RUFSTDtJQVdRLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFzRHRCO0VBckVMO01Ba0JZLGdCQUFlLEVBQ2xCO0VBbkJUO01Bc0JZLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsbUJBQWtCO01BQ2xCLHVCQUFzQjtNQUN0QiwrQkFBZ0MsRUFlbkM7RUF6Q1Q7UUE2QmdCLGdCQUFlO1FBQ2YsZUFBYztRQUNkLDBCQUF5QjtRQUN6QixZQUFXLEVBQ2Q7RUFqQ2I7UUFtQ2dCLGdCQUFlO1FBQ2YsZUFBYztRQUNkLDBCQUF5QjtRQUN6QixvQkFBbUI7UUFDbkIsWUFBVyxFQUNkO0VBeENiO01BMkNZLGFBQVksRUFVZjtFQXJEVDtRQThDZ0IsYUFBWSxFQUNmO0VBL0NiO1FBa0RnQixhQUFZO1FBQ1osY0FBYSxFQUNoQjtFQXBEYjtNQXdEWSxZQUFXO01BQ1gsVUFBUyxFQUNaO0VBMURUO01BNkRZLFlBQVc7TUFDWCxjQUFhO01BQ2Isb0JBQW1CLEVBS3RCO0VBcEVUO1FBa0VnQixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgXHJcbiAgICAuY2FyZC1kaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcblxyXG4gICAgICAgICYuYWRkLWNhcmQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IGV4cGFuZGVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcuZW1wdHkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGQtcHJvamVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function HomeComponent(router, projectService, databaseService, authService) {
        var _this = this;
        this.router = router;
        this.projectService = projectService;
        this.databaseService = databaseService;
        this.authService = authService;
        this.projects = [];
        this.invitedProjects = [];
        this.currentUser = this.authService.getAuthUser();
        this.maxCount = 1;
        if (this.currentUser) {
            this.databaseService.getRowDetails('/users', this.currentUser.uid).valueChanges().subscribe(function (data) {
                if (data && data.membership) {
                    _this.currentUser = data;
                    _this.maxCount = _this.currentUser.membership.type;
                }
            });
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Decide the project count by membership
        var _this = this;
        this.projectService.getProjectsList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }).filter(function (proj) { return (proj.created_by == _this.currentUser.uid && !proj.is_archive); });
        })).subscribe(function (data) {
            if (data) {
                // Check the count of the projects
                if (data.length > _this.maxCount) {
                    var projects = [];
                    data.forEach(function (item) {
                        if (projects.length < _this.maxCount) {
                            projects.push(item);
                        }
                    });
                    _this.projects = projects;
                }
                else {
                    _this.projects = data;
                    var moreCount = _this.maxCount - _this.projects.length;
                    // Add the invited projects
                    _this.databaseService.getLists('/user-project').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
                        return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }).filter(function (data) { return data.userid == _this.currentUser.uid; });
                    })).subscribe(function (data) {
                        if (data) {
                            _this.invitedProjects = [];
                            data.forEach(function (item) {
                                _this.databaseService.getRowDetails('/projects', item.projectid).valueChanges().subscribe(function (project) {
                                    project.key = item.projectid;
                                    if (_this.invitedProjects.length < moreCount) {
                                        _this.invitedProjects.push(project);
                                    }
                                });
                            });
                        }
                    });
                }
            }
        });
    };
    HomeComponent.prototype.gotourl = function (url) {
        if (url == '/project/new') {
            if (this.maxCount <= (this.projects.length + this.invitedProjects.length)) {
                this.router.navigate(['/upgrade']);
                console.log(this.maxCount <= (this.projects.length + this.invitedProjects.length));
                return;
            }
            else {
                // this.router.navigate([url]);
            }
        }
        else {
            // this.router.navigate([url]);
        }
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
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
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

module.exports = "<div class=\"main-content\">\r\n    <div class=\"content-search\">\r\n        <div class=\"search-form\">\r\n          <div>\r\n            <mat-form-field color=\"white\" class=\"\">\r\n                <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n            </mat-form-field>\r\n      \r\n            <mat-form-field color=\"white\">\r\n                <mat-select placeholder=\"Stage\" [(ngModel)]=\"stageFilter\" (selectionChange)=\"filterBySelection()\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option *ngFor=\"let stage of stageDropdown\" [value]=\"stage.key\">\r\n                      {{stage.stage}} \r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n      \r\n            <mat-form-field color=\"white\">\r\n                  <mat-select placeholder=\"Level\" [(ngModel)]=\"lodFilter\" (selectionChange)=\"filterBySelection()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let lod of dropdowns\" [value]=\"lod\">\r\n                        {{lod}}\r\n                      </mat-option>\r\n                  </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div *ngIf=\"projectRole == 1\">\r\n              <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\r\n              <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\r\n          </div>\r\n        \r\n        </div>\r\n\r\n          <div *ngIf=\"isEditable\" class=\"tool-bar\">\r\n              <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\r\n              <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\r\n              <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\r\n              <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\r\n              <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\r\n              <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\r\n          </div>\r\n      </div>\r\n    \r\n    <div class=\"table-container mat-elevation-z8\">\r\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\r\n      \r\n          <!-- No. Column -->\r\n          <ng-container matColumnDef=\"number\" sticky>\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n            <td mat-cell *matCellDef=\"let element\"> <span>D{{(\"00\"+element.number).slice(-2)}}</span> </td>\r\n          </ng-container>\r\n    \r\n          <!-- Disciple Column -->\r\n          <ng-container matColumnDef=\"disciple\" sticky>\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Disciple </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <span *ngIf=\"element.key != editableKey\">{{element.disciple}}</span>\r\n                <mat-form-field *ngIf=\"element.key == editableKey\">\r\n                    <input matInput [(ngModel)]=\"element.disciple\" required>\r\n                </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Code Column -->\r\n          <ng-container matColumnDef=\"code\" sticky>\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Code </th>\r\n            <td mat-cell *matCellDef=\"let element\">                \r\n                <span *ngIf=\"!isEditable && (element.key != editableKey)\" [style.background]=\"element.code_color\" class=\"colored text-center\">{{element.code}}</span>\r\n\r\n                <div *ngIf=\"isEditable\" class=\"discipline-code\">\r\n                    <span *ngIf=\"element.key != editableKey\" [style.background]=\"element.code_color\" class=\"color-picker-selector\"></span>\r\n                    <span *ngIf=\"element.key == editableKey\" [(colorPicker)]=\"element.code_color\" [style.background]=\"element.code_color\" class=\"color-picker-selector\"></span>\r\n                    <span *ngIf=\"element.key != editableKey\" class=\"discipline-code-label colored text-center gray-100\">{{element.code}}</span>\r\n                    <mat-form-field *ngIf=\"element.key == editableKey\">\r\n                        <input matInput [(ngModel)]=\"element.code\" required>\r\n                    </mat-form-field>\r\n                </div>\r\n            </td>\r\n          </ng-container>\r\n      \r\n          <!-- s01 Column -->\r\n          <ng-container *ngFor=\"let stage of stages\" [matColumnDef]=\"'s'+('00'+stage.number).slice(-2)\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">S{{(\"00\"+stage.number).slice(-2)}}</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"element.key != editableKey\" class=\"colored text-center\" [ngClass]=\"'gray-' + element.stages[('s'+('00'+stage.number).slice(-2))]\">{{element.stages[('s'+('00'+stage.number).slice(-2))]}}</span>\r\n              <mat-form-field *ngIf=\"element.key == editableKey\">\r\n                  <mat-select placeholder=\"\" [(ngModel)]=\"element.stages[('s'+('00'+stage.number).slice(-2))]\">\r\n                      <mat-option *ngFor=\"let option of dropdowns\" [value]=\"option\">\r\n                        {{ option }} \r\n                      </mat-option>\r\n                    </mat-select>\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n      \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/lod/lod.component.scss":
/*!****************************************!*\
  !*** ./src/app/lod/lod.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n    border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n    border: none; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell .discipline-code, .main-content .table-container .mat-table .mat-row .mat-cell .discipline-code {\n      display: flex;\n      align-items: stretch; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell .discipline-code .color-picker-selector, .main-content .table-container .mat-table .mat-row .mat-cell .discipline-code .color-picker-selector {\n        width: 10px;\n        padding: 0;\n        margin-top: 5px;\n        margin-bottom: 5px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell .discipline-code .discipline-code-label, .main-content .table-container .mat-table .mat-row .mat-cell .discipline-code .discipline-code-label {\n        margin-top: 5px;\n        margin-bottom: 5px;\n        padding-top: 10px;\n        padding-bottom: 10px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:first-child, .main-content .table-container .mat-table .mat-row .mat-table-sticky:first-child {\n    width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:nth-child(2), .main-content .table-container .mat-table .mat-row .mat-table-sticky:nth-child(2) {\n    left: 96px !important;\n    width: 150px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:nth-child(3), .main-content .table-container .mat-table .mat-row .mat-table-sticky:nth-child(3) {\n    left: 198px !important;\n    width: 100px;\n    border-right: 1px solid #e0e0e0; }\n  .main-content .table-container .mat-table .mat-row.selected .mat-cell {\n    z-index: 2 !important; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n    min-width: 100px; }\n  .gray-100 {\n  background: #ececec; }\n  .gray-200 {\n  background: #e0e0e0; }\n  .gray-300 {\n  background: #b7b7b7; }\n  .gray-400 {\n  background: #9a9a9a; }\n  .gray-500 {\n  background: #7b7b7b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9kL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcbG9kXFxsb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQTZEekI7RUFoRUQ7SUFTb0IsaUNBQWdDLEVBQ25DO0VBVmpCO0lBWW9CLGFBQVksRUFvQmY7RUFoQ2pCO01BZXdCLGNBQWE7TUFDYixxQkFBb0IsRUFldkI7RUEvQnJCO1FBbUI0QixZQUFXO1FBQ1gsV0FBVTtRQUNWLGdCQUFlO1FBQ2YsbUJBQWtCLEVBQ3JCO0VBdkJ6QjtRQTBCNEIsZ0JBQWU7UUFDZixtQkFBa0I7UUFDbEIsa0JBQWlCO1FBQ2pCLHFCQUFvQixFQUN2QjtFQTlCekI7SUFtQ3dCLGFBQVksRUFDZjtFQXBDckI7SUF1Q3dCLHNCQUFxQjtJQUNyQixhQUFZLEVBQ2Y7RUF6Q3JCO0lBNEN3Qix1QkFBc0I7SUFDdEIsYUFBWTtJQUNaLGdDQUErQixFQUNsQztFQS9DckI7SUFxRG9CLHNCQUFxQixFQUN4QjtFQXREakI7SUEwRGdCLGlCQUFnQixFQUNuQjtFQU9iO0VBQ0ksb0JBQW1CLEVBQ3RCO0VBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCO0VBRUQ7RUFDSSxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sb2QvbG9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudGFibGUtY29udGFpbmVyIHsgICAgICAgIFxyXG4gICAgICAgIC5tYXQtdGFibGUge1xyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1yb3csIC5tYXQtcm93IHtcclxuICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwubWF0LXRhYmxlLXN0aWNreSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRpc2NpcGxpbmUtY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbG9yLXBpY2tlci1zZWxlY3RvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNjaXBsaW5lLWNvZGUtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXQtdGFibGUtc3RpY2t5e1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxOThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LXJvdy5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jZWxsIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxufVxyXG5cclxuLmdyYXktMTAwIHtcclxuICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbn1cclxuXHJcbi5ncmF5LTIwMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uZ3JheS0zMDAge1xyXG4gICAgYmFja2dyb3VuZDogI2I3YjdiNztcclxufVxyXG5cclxuLmdyYXktNDAwIHtcclxuICAgIGJhY2tncm91bmQ6ICM5YTlhOWE7XHJcbn1cclxuXHJcbi5ncmF5LTUwMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2I3YjdiO1xyXG59XHJcblxyXG5cclxuICAgXHJcbiAiXX0= */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function LodComponent(activedRoute, databaseService, apiService, projectprofileService, authService, router) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.authService = authService;
        this.router = router;
        this.projectKey = null;
        this.tablePath = '/lods';
        this.isEditable = false;
        this.stages = [];
        this.dropdowns = ['NA', '100', '200', '300', '400', '500'];
        this.stageDropdown = [];
        this.displayedColumns = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
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
            _this.stageDropdown = data;
            if (_this.stageFilter) {
                _this.stages = _this.stages.filter(function (ele) { return ele.key == _this.stageFilter; });
            }
            _this.displayedColumns = ['number', 'disciple', 'code'];
            for (var _i = 0, _a = _this.stages; _i < _a.length; _i++) {
                var stage = _a[_i];
                _this.displayedColumns.push("s" + ("00" + stage.number).slice(-2));
            }
        });
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            if (data) {
                _this.elements = data;
                if (_this.lodFilter) {
                    _this.elements = _this.elements.filter(function (ele) { return JSON.stringify(ele.stages).includes(_this.lodFilter); });
                }
            }
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
            _this.dataSource.sort = _this.sort;
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
    };
    LodComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
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
            var code_color = this.getRandomColorHex();
            var newRow = { number: number, disciple: "", code: "", code_color: code_color, stages: stageValues, key: "newRow", position: position, is_new: true };
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
                    var notificationData = {
                        "sender": this.currentUser.uid,
                        "type": "add",
                        "message": "The new LOD data was added.",
                        "project": this.projectKey
                    };
                    this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
                }
            }
            if (element.key == this.editableKey) {
                if (element.disciple && element.code) {
                    this.databaseService.updateRow(this.tablePath, this.editableKey, element);
                    var notificationData = {
                        "sender": this.currentUser.uid,
                        "type": "update",
                        "message": "The new LOD data was updated.",
                        "project": this.projectKey
                    };
                    this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
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
    LodComponent.prototype.getRandomColorHex = function () {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    };
    LodComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LodComponent.prototype.filterBySelection = function () {
        this.loadData();
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
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
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_16__["ColorPickerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"]
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
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_16__["ColorPickerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/notification/notification-item/notification-item.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/notification/notification-item/notification-item.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-item\">\r\n  <div class=\"info-content\">\r\n    <app-avatar *ngIf=\"userProfile\" [userProfile]=\"userProfile\"></app-avatar>\r\n    <div class=\"user-noti-messages\">\r\n      <div class=\"user-info\">\r\n        <span class=\"user-name\" *ngIf=\"userProfile\">{{userProfile.name}}</span>\r\n        <span class=\"noti-type-invite\" *ngIf=\"notification.type == 'invite'\"> invited you to</span>\r\n        <span class=\"noti-type-comment\" *ngIf=\"notification.type == 'comment'\"> commented on</span>\r\n        <span class=\"noti-type-comment\" *ngIf=\"notification.type == 'add'\"> added on</span>\r\n        <span class=\"noti-type-comment\" *ngIf=\"notification.type == 'update'\"> updated on</span>\r\n      </div>\r\n      <div>\r\n        {{notification.message}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"diff\">{{notification.diff}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/notification/notification-item/notification-item.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/notification/notification-item/notification-item.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification-item {\n  border-top: solid 1px #000;\n  padding: 10px; }\n  .notification-item .info-content {\n    display: flex; }\n  .notification-item .info-content app-avatar {\n      margin-right: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center; }\n  .notification-item .info-content .user-noti-messages .user-info .user-name {\n      font-weight: 700;\n      font-size: 16px;\n      line-height: 16px;\n      color: #ccc; }\n  .notification-item .info-content .user-noti-messages .user-info .noti-type-invite {\n      color: red; }\n  .notification-item .info-content .user-noti-messages .user-info .noti-type-comment {\n      color: #0070ff; }\n  .notification-item .diff {\n    display: flex;\n    justify-content: flex-end;\n    font-size: 12px;\n    line-height: 12px;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1pdGVtL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24taXRlbVxcbm90aWZpY2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMEI7RUFDMUIsY0FBYSxFQXdDaEI7RUExQ0Q7SUFLUSxjQUFhLEVBNEJoQjtFQWpDTDtNQVFZLG1CQUFrQjtNQUNsQixjQUFhO01BQ2IsMEJBQXlCO01BQ3pCLG9CQUFtQixFQUN0QjtFQVpUO01Ba0JvQixpQkFBZ0I7TUFDaEIsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsWUFBVyxFQUNkO0VBdEJqQjtNQXlCb0IsV0FBVSxFQUNiO0VBMUJqQjtNQTZCb0IsZUFBYyxFQUNqQjtFQTlCakI7SUFvQ1EsY0FBYTtJQUNiLDBCQUF5QjtJQUN6QixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLWl0ZW0vbm90aWZpY2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWl0ZW17XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgLmluZm8tY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBhcHAtYXZhdGFye1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1ub3RpLW1lc3NhZ2Vze1xyXG5cclxuICAgICAgICAgICAgLnVzZXItaW5mb3tcclxuICAgICAgICAgICAgICAgIC51c2VyLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5vdGktdHlwZS1pbnZpdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubm90aS10eXBlLWNvbW1lbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDcwZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpZmZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notification/notification-item/notification-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/notification/notification-item/notification-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationItemComponent", function() { return NotificationItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
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




var NotificationItemComponent = /** @class */ (function () {
    function NotificationItemComponent(authService, databaseService, afAuth) {
        this.authService = authService;
        this.databaseService = databaseService;
        this.afAuth = afAuth;
    }
    NotificationItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var now = new Date().getTime();
        var diff = now - this.notification.created;
        var diff1 = Math.floor(diff / 1000 / 3600 / 24);
        if (diff1 > 0) {
            this.notification['diff'] = diff1 + " days ago";
        }
        else {
            diff1 = Math.floor(diff / 1000 / 3600);
            if (diff1 > 0) {
                this.notification['diff'] = diff1 + " hours ago";
            }
            else {
                diff1 = Math.floor(diff / 1000 / 60);
                if (diff1 > 0) {
                    this.notification['diff'] = diff1 + " minutes ago";
                }
                else {
                    diff1 = Math.floor(diff / 1000);
                    this.notification['diff'] = diff1 + " seconds ago";
                }
            }
        }
        // this.notification['diff'] = diff;
        this.authService.getUserByIdPromise(this.notification.sender).then(function (data) {
            _this.userProfile = data;
        });
        var curUser = this.afAuth.auth.currentUser;
        this.databaseService.updateRow('/notifications/' + curUser.uid, this.notification.key, { isread: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotificationItemComponent.prototype, "notification", void 0);
    NotificationItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-item',
            template: __webpack_require__(/*! ./notification-item.component.html */ "./src/app/notification/notification-item/notification-item.component.html"),
            styles: [__webpack_require__(/*! ./notification-item.component.scss */ "./src/app/notification/notification-item/notification-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], NotificationItemComponent);
    return NotificationItemComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notification\">\r\n  <mat-icon (click)=\"toggle()\">notifications\r\n    <span *ngIf=\"badge\" class=\"badge\">{{badge}}</span>\r\n  </mat-icon>\r\n\r\n  <div class=\"content\" *ngIf=\"isShow\">\r\n    <div class=\"arrow-icon-div\">\r\n      <img src=\"/assets/icons/triangle.svg\" alt=\"\">\r\n    </div>\r\n    <div class=\"notifications-container\">\r\n      <div class=\"header\">\r\n        <span class=\"clear-btn\" (click)=\"clear()\"> Clear all</span>\r\n      </div>\r\n      <div class=\"notification-list\" *ngIf=\"!isLoading && notifications.length > 0\">\r\n        <app-notification-item *ngFor=\"let notification of notifications\" [notification]=\"notification\"></app-notification-item>\r\n      </div>\r\n      <div *ngIf=\"!isLoading && notifications.length == 0\" class=\"no-notifications\">\r\n        <h2>No Notification</h2>\r\n      </div>\r\n      <app-loading *ngIf=\"isLoading\"></app-loading>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification {\n  position: relative; }\n  .notification mat-icon {\n    color: #3B3838;\n    font-size: 25px;\n    width: 25px;\n    height: 25px;\n    line-height: 25px;\n    margin: 0 3px;\n    cursor: pointer;\n    display: flex;\n    align-items: center; }\n  .notification mat-icon .badge {\n      position: absolute;\n      display: flex;\n      width: 20px;\n      height: 20px;\n      justify-content: center;\n      color: white;\n      background: red;\n      align-items: center;\n      border-radius: 50%;\n      top: -8px;\n      right: -3px; }\n  .notification .content {\n    position: absolute;\n    width: 380px;\n    left: -175px;\n    overflow: hidden;\n    top: 40px;\n    z-index: 1000; }\n  .notification .content .arrow-icon-div {\n      width: 100%;\n      display: flex;\n      justify-content: center; }\n  .notification .content .arrow-icon-div img {\n        width: 15px;\n        height: 15px; }\n  .notification .content .notifications-container {\n      background: #3B3838;\n      border-radius: 5px;\n      max-height: 420px;\n      overflow: scroll; }\n  .notification .content .notifications-container .header {\n        display: flex;\n        justify-content: flex-end;\n        padding: 0 10px;\n        font-size: 12px; }\n  .notification .content .notifications-container .header .clear-btn {\n          cursor: pointer;\n          color: #ddd; }\n  .notification .content .notifications-container .no-notifications {\n        display: flex;\n        justify-content: center;\n        padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUF5RXJCO0VBMUVEO0lBR1EsZUFBYztJQUNkLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLG9CQUFtQixFQWV0QjtFQTFCTDtNQWNZLG1CQUFrQjtNQUNsQixjQUFhO01BQ2IsWUFBVztNQUNYLGFBQVk7TUFDWix3QkFBdUI7TUFDdkIsYUFBWTtNQUNaLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsWUFBVyxFQUNkO0VBekJUO0lBNkJRLG1CQUFpQjtJQUNqQixhQUFZO0lBQ1osYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixVQUFTO0lBQ1QsY0FBYSxFQXVDaEI7RUF6RUw7TUFxQ1ksWUFBVztNQUNYLGNBQWE7TUFDYix3QkFBdUIsRUFLMUI7RUE1Q1Q7UUF5Q2dCLFlBQVc7UUFDWCxhQUFZLEVBQ2Y7RUEzQ2I7TUErQ1ksb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQixrQkFBaUI7TUFDakIsaUJBQWdCLEVBc0JuQjtFQXhFVDtRQW9EZ0IsY0FBYTtRQUNiLDBCQUF5QjtRQUN6QixnQkFBZTtRQUNmLGdCQUFlLEVBTWxCO0VBN0RiO1VBMERvQixnQkFBZTtVQUNmLFlBQVcsRUFDZDtFQTVEakI7UUFvRWdCLGNBQVk7UUFDWix3QkFBdUI7UUFDdkIsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF0LWljb257XHJcbiAgICAgICAgY29sb3I6ICMzQjM4Mzg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5iYWRnZXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xNzVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgICAgICAuYXJyb3ctaWNvbi1kaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3RpZmljYXRpb25zLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNCMzgzODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5jbGVhci1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLWxpc3R7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm8tbm90aWZpY2F0aW9uc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(afAuth, databaseService) {
        this.afAuth = afAuth;
        this.databaseService = databaseService;
        this.isShow = false;
        this.tablePath = '/notifications';
        this.badge = 0;
        this.isLoading = true;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.afAuth.auth.currentUser.uid;
        if (this.userId) {
            this.tablePath += '/' + this.userId;
        }
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.isLoading = false;
            _this.notifications = data;
            _this.badge = 0;
            _this.notifications.map(function (noti) {
                if (!noti.isread) {
                    _this.badge++;
                }
            });
        });
    };
    NotificationComponent.prototype.toggle = function () {
        this.isShow = !this.isShow;
    };
    NotificationComponent.prototype.clear = function () {
        this.databaseService.deleteAll(this.tablePath);
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/project/matrix/cellpicker/cellpicker.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/project/matrix/cellpicker/cellpicker.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellpicker\">\r\n  <span class=\"showtext\" (click)=\"toggle()\" [ngStyle]=\"getShowTextColor()\">{{ element.matrix[lod.key].status == \"NA\" ? (element.matrix[lod.key].priority == \"NA\" ? relationtext : element.matrix[lod.key].priority):  element.matrix[lod.key].status }}</span>\r\n  <div class=\"dropdown\" *ngIf=\"isOpen && isAdmin && isEditable\">\r\n    <div class=\"dropdown-item\" (click)=\"changeStatus('High')\">\r\n      <span class=\"color-tile color-tile-high\"></span>\r\n      <span class=\"priority\">High</span>\r\n    </div>\r\n    <div class=\"dropdown-item\" (click)=\"changeStatus('Medium')\">\r\n        <span class=\"color-tile color-tile-medium\"></span>\r\n        <span class=\"priority\">Medium</span>\r\n    </div>\r\n    <div class=\"dropdown-item\" (click)=\"changeStatus('Low')\">\r\n        <span class=\"color-tile color-tile-low\"></span>\r\n        <span class=\"priority\">Low</span>\r\n    </div>\r\n    <div class=\"dropdown-item\" (click)=\"changeStatus('NA')\">\r\n        <span class=\"color-tile color-tile-na\"></span>\r\n        <span class=\"priority\">NA</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dropdown\" *ngIf=\"isOpen && !isAdmin && isEditable\">\r\n    <div class=\"dropdown-item\" (click)=\"changeStatus('In progress')\">\r\n      <span class=\"color-tile color-tile-prgress\"></span>\r\n      <span class=\"priority\">In progress</span>\r\n    </div>\r\n    <div class=\"dropdown-item\" (click)=\"changeStatus('Done')\">\r\n        <span class=\"color-tile color-tile-done\"></span>\r\n        <span class=\"priority\">Done</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/project/matrix/cellpicker/cellpicker.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/project/matrix/cellpicker/cellpicker.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cellpicker {\n  position: relative; }\n  .cellpicker .showtext {\n    display: flex;\n    width: 80px;\n    justify-content: center;\n    height: 30px;\n    align-items: center;\n    cursor: pointer; }\n  .cellpicker .dropdown {\n    position: absolute;\n    z-index: 1;\n    background: #fff;\n    border: solid 1px #888; }\n  .cellpicker .dropdown .dropdown-item {\n      display: flex;\n      align-items: center;\n      padding: 5px 10px;\n      cursor: pointer;\n      width: 130px; }\n  .cellpicker .dropdown .dropdown-item .color-tile {\n        display: flex;\n        width: 15px;\n        height: 15px;\n        margin-right: 5px; }\n  .cellpicker .dropdown .dropdown-item .color-tile-high {\n        background: #262626; }\n  .cellpicker .dropdown .dropdown-item .color-tile-medium {\n        background: gray; }\n  .cellpicker .dropdown .dropdown-item .color-tile-low {\n        background: #d9d9d9; }\n  .cellpicker .dropdown .dropdown-item .color-tile-na {\n        background: white; }\n  .cellpicker .dropdown .dropdown-item .color-tile-prgress {\n        background: #0070c0; }\n  .cellpicker .dropdown .dropdown-item .color-tile-done {\n        background: #548235; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9tYXRyaXgvY2VsbHBpY2tlci9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHByb2plY3RcXG1hdHJpeFxcY2VsbHBpY2tlclxcY2VsbHBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQixFQXdEckI7RUF6REQ7SUFJUSxjQUFhO0lBQ2IsWUFBVztJQUNYLHdCQUF1QjtJQUN2QixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLGdCQUFlLEVBQ2xCO0VBVkw7SUFhUSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLGlCQUFnQjtJQUNoQix1QkFBc0IsRUF3Q3pCO0VBeERMO01BbUJZLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsa0JBQWlCO01BQ2pCLGdCQUFlO01BQ2YsYUFBWSxFQWdDZjtFQXZEVDtRQTBCZ0IsY0FBYTtRQUNiLFlBQVc7UUFDWCxhQUFZO1FBQ1osa0JBQWlCLEVBQ3BCO0VBOUJiO1FBaUNnQixvQkFBMkIsRUFDOUI7RUFsQ2I7UUFxQ2dCLGlCQUE4QixFQUNqQztFQXRDYjtRQXlDZ0Isb0JBQThCLEVBQ2pDO0VBMUNiO1FBNkNnQixrQkFBOEIsRUFDakM7RUE5Q2I7UUFpRGdCLG9CQUE0QixFQUMvQjtFQWxEYjtRQXFEZ0Isb0JBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9tYXRyaXgvY2VsbHBpY2tlci9jZWxscGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbGxwaWNrZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnNob3d0ZXh0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM4ODg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb2xvci10aWxle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb2xvci10aWxlLWhpZ2h7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzgsIDM4LCAzOCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb2xvci10aWxlLW1lZGl1bXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMjgsIDEyOCwgMTI4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbG9yLXRpbGUtbG93e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxNywgMjE3LCAyMTcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29sb3ItdGlsZS1uYXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbG9yLXRpbGUtcHJncmVzc3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAxMTIsIDE5Mik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb2xvci10aWxlLWRvbmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODQsIDEzMCwgNTMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/project/matrix/cellpicker/cellpicker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/project/matrix/cellpicker/cellpicker.component.ts ***!
  \*******************************************************************/
/*! exports provided: CellpickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellpickerComponent", function() { return CellpickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/api.service */ "./src/app/_services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CellpickerComponent = /** @class */ (function () {
    function CellpickerComponent(databaseService, apiService) {
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.isOpen = false;
        this.relationtext = '';
    }
    CellpickerComponent.prototype.ngOnInit = function () {
        // document.addEventListener('click', this.onDocumentClick.bind(this), true);
        var row = this.element.no.slice(1);
        var column = this.lod.number;
        this.relationtext = "R" + row + column;
    };
    CellpickerComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    CellpickerComponent.prototype.onDocumentClick = function (event) {
        this.isOpen = false;
    };
    CellpickerComponent.prototype.ngOnDestroy = function () {
        // document.removeEventListener('click', this.onDocumentClick, false);  
    };
    CellpickerComponent.prototype.getShowTextColor = function () {
        var styles = {
            'background': 'rgb(38, 38, 38)',
            'color': 'white'
        };
        if (this.element.matrix[this.lod.key].status == "NA") {
            switch (this.element.matrix[this.lod.key].priority) {
                case 'High':
                    styles.background = 'rgb(38, 38, 38)';
                    styles.color = 'white';
                    break;
                case 'Medium':
                    styles.background = 'rgb(128, 128, 128)';
                    styles.color = 'black';
                    break;
                case 'Low':
                    styles.background = 'rgb(217, 217, 217)';
                    styles.color = 'black';
                    break;
                case 'NA':
                    styles.background = 'rgb(255, 255, 255)';
                    styles.color = 'black';
                    break;
            }
        }
        else {
            switch (this.element.matrix[this.lod.key].status) {
                case 'Done':
                    styles.background = 'rgb(84, 130, 53)';
                    styles.color = 'white';
                    break;
                case 'In progress':
                    styles.background = 'rgb(0, 112, 192)';
                    styles.color = 'white';
                    break;
                case 'NA':
                    styles.background = 'rgb(255, 255, 255)';
                    styles.color = 'black';
                    break;
            }
        }
        return styles;
    };
    CellpickerComponent.prototype.changeStatus = function (status) {
        this.toggle();
        var path = '/matrix/' + this.projectId + '/' + this.configureId + '/' + this.element.key + '/' + this.lod.key;
        var data = this.element.matrix[this.lod.key];
        if (!this.isAdmin) {
            data.status = status;
        }
        else {
            data.priority = status;
        }
        this.databaseService.createRowWithKey(path, data);
        var notificationData = {
            "sender": this.currentUser.uid,
            "type": "add",
            "message": "The new Meeting was added.",
            "project": this.projectId
        };
        this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "element", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "lod", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "isAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "projectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "configureId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellpickerComponent.prototype, "isEditable", void 0);
    CellpickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cellpicker',
            template: __webpack_require__(/*! ./cellpicker.component.html */ "./src/app/project/matrix/cellpicker/cellpicker.component.html"),
            styles: [__webpack_require__(/*! ./cellpicker.component.scss */ "./src/app/project/matrix/cellpicker/cellpicker.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CellpickerComponent);
    return CellpickerComponent;
}());



/***/ }),

/***/ "./src/app/project/matrix/matrix.component.html":
/*!******************************************************!*\
  !*** ./src/app/project/matrix/matrix.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"content-search\">\r\n      <div class=\"search-form\">\r\n        <div>\r\n          <mat-form-field color=\"white\">\r\n              <mat-select placeholder=\"Configuration\" [(ngModel)]=\"selectedConfiguration\" (selectionChange)=\"changedConf()\">\r\n                <mat-option *ngFor=\"let configuration of configurations\" [value]=\"configuration.key\">\r\n                  B{{configuration.number}} {{configuration.block}}\r\n                </mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div *ngIf=\"projectRole == 1\">\r\n          <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\r\n          <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\r\n        </div>\r\n      \r\n      </div>\r\n    </div>\r\n  \r\n  <div class=\"table-container mat-elevation-z8\" *ngIf=\"dataSource\">\r\n      <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\r\n    \r\n        <!-- No. Column -->\r\n        <ng-container matColumnDef=\"no\" sticky>\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n          <td mat-cell *matCellDef=\"let element\"> <span>{{element.no}}</span> </td>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"code\" sticky>\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Code </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n              <!-- <span>{{element.code.code}}</span> -->\r\n              <span [style.background]=\"element.code.code_color\"  class=\"lod-color-span\">{{element.code.code}}</span>\r\n          </td>\r\n        </ng-container>\r\n  \r\n        <ng-container *ngFor=\"let lod of lods\" [matColumnDef]=\"lod.key\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">\r\n            <div class=\"header-lods\">\r\n              <span>D{{lod.number}}</span>\r\n              <span class=\"lod-color-span\" [style.background]=\"lod.code_color\">{{lod.code}}</span>\r\n            </div>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <!-- <span *ngIf=\"!isEditable\" [style.background]=\"lod.code_color\">{{lod.code}}</span> -->\r\n            <app-cellpicker [isEditable]=\"isEditable\" [element]=\"element\" [lod]=\"lod\" [isAdmin]=\"projectRole == 1 ? true : false\" [projectId]=\"projectId\" [configureId]=\"selectedConfiguration\" [currentUser]=\"currentUser\"></app-cellpicker>\r\n          </td>\r\n        </ng-container>\r\n    \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\"></tr>\r\n      </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/project/matrix/matrix.component.scss":
/*!******************************************************!*\
  !*** ./src/app/project/matrix/matrix.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content .table-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n  .main-content .table-container .mat-table th .header-lods span {\n    color: #000000; }\n  .main-content .table-container .mat-table .mat-header-cell, .main-content .table-container .mat-table .mat-cell {\n    color: #000000;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-align: center; }\n  .main-content .table-container .mat-table .mat-header-cell span, .main-content .table-container .mat-table .mat-cell span {\n      padding: 10px 30px; }\n  .main-content .table-container .mat-table .mat-header-cell {\n    font-weight: 800;\n    text-transform: capitalize; }\n  .main-content .table-container .mat-table .table-cell {\n    width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-header-cell.mat-table-sticky, .main-content .table-container .mat-table .mat-row .mat-header-cell.mat-table-sticky {\n    border-bottom: 1px solid #000000; }\n  .main-content .table-container .mat-table .mat-header-row .mat-cell, .main-content .table-container .mat-table .mat-row .mat-cell {\n    border: none; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:first-child, .main-content .table-container .mat-table .mat-row .mat-table-sticky:first-child {\n    width: 100px; }\n  .main-content .table-container .mat-table .mat-header-row .mat-table-sticky:nth-child(2), .main-content .table-container .mat-table .mat-row .mat-table-sticky:nth-child(2) {\n    left: 96px !important;\n    width: 150px;\n    border-right: 1px solid #e0e0e0; }\n  .gray-100 {\n  background: #ececec; }\n  .gray-200 {\n  background: #e0e0e0; }\n  .gray-300 {\n  background: #b7b7b7; }\n  .gray-400 {\n  background: #9a9a9a; }\n  .gray-500 {\n  background: #7b7b7b; }\n  .lod-color-span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #888;\n  font-weight: 100;\n  padding: 0;\n  height: 35px;\n  width: 100px; }\n  .header-lods {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9tYXRyaXgvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxwcm9qZWN0XFxtYXRyaXhcXG1hdHJpeC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVk7RUFDWixZQUFXO0VBQ1gsZUFBYyxFQXFEakI7RUExREw7SUFTZ0IsZUFBYyxFQUNqQjtFQVZiO0lBWWdCLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLG1CQUFrQixFQUtyQjtFQXBCYjtNQWtCb0IsbUJBQWtCLEVBQ3JCO0VBbkJqQjtJQXVCZ0IsaUJBQWdCO0lBQ2hCLDJCQUEwQixFQUM3QjtFQXpCYjtJQTRCZ0IsYUFBWSxFQUNmO0VBN0JiO0lBaUNvQixpQ0FBZ0MsRUFDbkM7RUFsQ2pCO0lBb0NvQixhQUFZLEVBQ2Y7RUFyQ2pCO0lBd0N3QixhQUFZLEVBQ2Y7RUF6Q3JCO0lBNEN3QixzQkFBcUI7SUFDckIsYUFBWTtJQUNaLGdDQUErQixFQUNsQztFQWdCckI7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCO0VBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7RUFFRDtFQUNJLG9CQUFtQixFQUN0QjtFQUdEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixXQUFVO0VBQ1YsYUFBWTtFQUNaLGFBQVksRUFDZjtFQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9tYXRyaXgvbWF0cml4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICBcclxuICAgIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAubWF0LXRhYmxlIHtcclxuICAgICAgICAgICAgdGggLmhlYWRlci1sb2RzIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdC1oZWFkZXItY2VsbCwgLm1hdC1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWhlYWRlci1yb3csIC5tYXQtcm93IHtcclxuICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGwubWF0LXRhYmxlLXN0aWNreSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tYXQtdGFibGUtc3RpY2t5e1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxufVxyXG5cclxuLmdyYXktMTAwIHtcclxuICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbn1cclxuXHJcbi5ncmF5LTIwMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uZ3JheS0zMDAge1xyXG4gICAgYmFja2dyb3VuZDogI2I3YjdiNztcclxufVxyXG5cclxuLmdyYXktNDAwIHtcclxuICAgIGJhY2tncm91bmQ6ICM5YTlhOWE7XHJcbn1cclxuXHJcbi5ncmF5LTUwMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2I3YjdiO1xyXG59XHJcblxyXG5cclxuLmxvZC1jb2xvci1zcGFue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbG9kc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuICJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
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








var MatrixComponent = /** @class */ (function () {
    function MatrixComponent(activedRoute, router, databaseService, apiService, projectprofileService, authService) {
        this.activedRoute = activedRoute;
        this.router = router;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.authService = authService;
        this.projectKey = null;
        this.tablePath = '/matrix';
        this.displayedColumns = ['no', 'code'];
        this.isEditable = false;
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
    }
    MatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.router.url;
        var urlItems = url.split('/');
        if (urlItems.length >= 4) {
            this.projectId = urlItems[3];
            this.databaseService.getRowDetails('projects', this.projectId).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.tablePath = _this.tablePath + '/' + _this.projectId;
                    _this.loadConfigurations();
                    // this.loadData();
                    // Get the permission to edit the project
                    if (_this.projectKey !== null) {
                        _this.projectprofileService.getProjectProfile(_this.projectKey).valueChanges().subscribe(function (data) {
                            if (data.created_by == _this.currentUser.uid) {
                                _this.projectRole = 1;
                            }
                        });
                    }
                    _this.projectprofileService.getProjectRoleInfo(_this.currentUser.uid, _this.projectKey).valueChanges().subscribe(function (info) {
                        if (info && info.length) {
                            _this.projectRole = info[0].access;
                        }
                    });
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
    MatrixComponent.prototype.loadConfigurations = function () {
        var _this = this;
        this.databaseService.getLists('/project_configuration/' + this.projectId).valueChanges().subscribe(function (data) {
            _this.configurations = data;
            if (data.length > 0) {
                _this.selectedConfiguration = data[0].key;
                _this.loadLods();
            }
        });
    };
    MatrixComponent.prototype.loadLods = function () {
        var _this = this;
        this.databaseService.getLists('/lods/' + this.projectId).valueChanges().subscribe(function (data) {
            _this.lods = data;
            if (data.length > 0) {
                _this.displayedColumns = ['no', 'code'];
                for (var _i = 0, _a = _this.lods; _i < _a.length; _i++) {
                    var lod = _a[_i];
                    _this.displayedColumns.push(lod.key);
                }
                _this.loadMatrix();
            }
        });
    };
    MatrixComponent.prototype.loadMatrix = function () {
        var _this = this;
        this.databaseService.getLists(this.tablePath + '/' + this.selectedConfiguration).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            _this.tempMatrix = data;
            _this.makeMatrix();
        });
    };
    MatrixComponent.prototype.makeMatrix = function () {
        var _this = this;
        var elements = [];
        this.lods.forEach(function (row) {
            var rowData = _this.getRow(row.key);
            var tempRow = {};
            _this.lods.forEach(function (column) {
                var cell = _this.getCell(rowData, column.key);
                tempRow[column.key] = cell;
            });
            var element = {};
            element['no'] = 'D' + row.number;
            element['code'] = {
                code: row.code,
                code_color: row.code_color
            };
            element['key'] = row.key;
            element['matrix'] = tempRow;
            elements.push(element);
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](elements);
        this.dataSource.sort = this.sort;
    };
    MatrixComponent.prototype.getCell = function (row, columnNo) {
        var cell;
        if (row[columnNo]) {
            cell = row[columnNo];
        }
        else {
            cell = {
                priority: 'NA',
                status: 'NA'
            };
        }
        return cell;
    };
    MatrixComponent.prototype.getRow = function (rowNo) {
        var returnRow;
        this.tempMatrix.forEach(function (row) {
            if (row.key == rowNo) {
                returnRow = row;
            }
        });
        if (!returnRow)
            return [];
        return returnRow;
    };
    MatrixComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
    };
    MatrixComponent.prototype.changedConf = function () {
        this.loadMatrix();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], MatrixComponent.prototype, "sort", void 0);
    MatrixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matrix',
            template: __webpack_require__(/*! ./matrix.component.html */ "./src/app/project/matrix/matrix.component.html"),
            styles: [__webpack_require__(/*! ./matrix.component.scss */ "./src/app/project/matrix/matrix.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
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

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"projectRole == 1\">\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n            <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              M{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"meeting\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Meeting </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">{{element.meeting}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.meeting\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"start\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Start </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored text-center\">{{element.start | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\" class=\"bg-white\">\n                  <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"element.start\" class=\"text-center\" required disabled>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container matColumnDef=\"frequency\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Frequency </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored text-center\">{{ element.frequency }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <mat-select name=\"meeting_frequency\" placeholder=\"\" [(ngModel)]=\"element.frequency\" class=\"text-center\" required aria-required=\"true\">\n                      <mat-option *ngFor=\"let option of frequencyOptions\" [value]=\"option\">{{ option }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s02 Column -->\n          <ng-container matColumnDef=\"organizer\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Organizer </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <app-organizer *ngIf=\"element.key != editableKey\" [projectid]=\"projectKey\" [memberid]=\"element.organizer\"></app-organizer>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <mat-select name=\"meeting_frequency\" placeholder=\"\" [(ngModel)]=\"element.organizer\" class=\"text-center\" required aria-required=\"true\">\n                  <mat-option *ngFor=\"let member of teamMembers\" [value]=\"member.key\">{{ member.name }} / {{ roles[member.role].val }}</mat-option>\n              </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/project/meeting/meeting.component.scss":
/*!********************************************************!*\
  !*** ./src/app/project/meeting/meeting.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-number {\n  width: 100px; }\n\n.mat-column-meeting {\n  width: 250px; }\n\n.mat-column-start, .mat-column-frequency {\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9tZWV0aW5nL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdFxcbWVldGluZ1xcbWVldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvbWVldGluZy9tZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tbnVtYmVyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubWF0LWNvbHVtbi1tZWV0aW5nIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG4ubWF0LWNvbHVtbi1zdGFydCwgLm1hdC1jb2x1bW4tZnJlcXVlbmN5IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufSJdfQ== */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function MeetingComponent(activedRoute, databaseService, apiService, projectprofileService, authService, router) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.authService = authService;
        this.router = router;
        this.projectKey = null;
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
        this.roles = [
            { key: 0, val: 'Owner' },
            { key: 1, val: 'Architect' },
            { key: 2, val: 'Engineer' },
            { key: 3, val: 'BIM Manager' },
            { key: 4, val: 'BIM Coordinartor' },
            { key: 5, val: 'BIM Modeller' },
            { key: 6, val: 'Cost Estimator' },
            { key: 7, val: 'MEP Engineer' },
            { key: 0, val: 'Structural Engineer' },
            { key: 0, val: 'Landscape Designer' },
            { key: 0, val: 'Project Manager' }
        ];
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
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
            _this.dataSource.sort = _this.sort;
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
        this.databaseService.getLists('/teams/' + this.projectKey).valueChanges().subscribe(function (data) {
            if (data && data.length) {
                _this.teamMembers = data;
            }
        });
    };
    MeetingComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
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
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "add",
                    "message": "The new Meeting was added.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
            }
            if (stage.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, stage);
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "update",
                    "message": "The Project Meeting was updated.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
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
    MeetingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    MeetingComponent.prototype.getOrganizerInfo = function (memberKey) {
        var _this = this;
        this.databaseService.getRowDetails('/teams/' + this.projectKey, memberKey).valueChanges().subscribe(function (data) {
            if (data) {
                return data.company + '/' + _this.roles[data.role].val;
            }
        });
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MeetingComponent);
    return MeetingComponent;
}());



/***/ }),

/***/ "./src/app/project/meeting/organizer/organizer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/project/meeting/organizer/organizer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"organizer\">\n  {{ organizer.name }} / {{ roles[organizer.role].val }}\n</span>"

/***/ }),

/***/ "./src/app/project/meeting/organizer/organizer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/project/meeting/organizer/organizer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvbWVldGluZy9vcmdhbml6ZXIvb3JnYW5pemVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/meeting/organizer/organizer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/project/meeting/organizer/organizer.component.ts ***!
  \******************************************************************/
/*! exports provided: OrganizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerComponent", function() { return OrganizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/database.service */ "./src/app/_services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganizerComponent = /** @class */ (function () {
    function OrganizerComponent(databaseService) {
        this.databaseService = databaseService;
        this.roles = [
            { key: 0, val: 'Owner' },
            { key: 1, val: 'Architect' },
            { key: 2, val: 'Engineer' },
            { key: 3, val: 'BIM Manager' },
            { key: 4, val: 'BIM Coordinartor' },
            { key: 5, val: 'BIM Modeller' },
            { key: 6, val: 'Cost Estimator' },
            { key: 7, val: 'MEP Engineer' },
            { key: 8, val: 'Structural Engineer' },
            { key: 9, val: 'Landscape Designer' },
            { key: 10, val: 'Project Manager' }
        ];
    }
    OrganizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.memberid) {
            this.databaseService.getRowDetails('/teams/' + this.projectid, this.memberid).valueChanges().subscribe(function (data) {
                if (data) {
                    _this.organizer = data;
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrganizerComponent.prototype, "projectid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrganizerComponent.prototype, "memberid", void 0);
    OrganizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organizer',
            template: __webpack_require__(/*! ./organizer.component.html */ "./src/app/project/meeting/organizer/organizer.component.html"),
            styles: [__webpack_require__(/*! ./organizer.component.scss */ "./src/app/project/meeting/organizer/organizer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], OrganizerComponent);
    return OrganizerComponent;
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

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"projectRole == 1\">\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Add</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              Q{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"discipline\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Discipline </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" [style.background]=\"getDiscipline(element.discipline).code_color\">\n                  {{ getDiscipline(element.discipline) }}\n              </span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <mat-select name=\"meeting_frequency\" placeholder=\"\" [(ngModel)]=\"element.discipline\" required aria-required=\"true\">\n                      <mat-option *ngFor=\"let option of disciplines\" [value]=\"option.key\">{{ option.disciple }}</mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"checked_by\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> User </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <!-- <span>{{ getUserData(element.checked_by) }}</span> -->\n                <!-- <app-avatar [userProfile]=\"getUserData(element.checked_by)\" ></app-avatar> -->\n                <app-useravatar ></app-useravatar>\n              </td>\n            </ng-container>\n      \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"report_date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored\">{{element.report_date | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\" class=\"bg-white\">\n                  <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"element.report_date\" required disabled>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- Visual Column -->\n          <ng-container matColumnDef=\"visual\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\"> Visual </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <div class=\"check-toggle center\" (click)=\"switchVisual()\">\n                    <div class=\"toggle-active\" *ngIf=\"element.visual\"></div>\n                    <div class=\"toggle-inactive\" *ngIf=\"!element.visual\"></div>\n                </div>\n            </td>\n          </ng-container>\n      \n          <!-- Interface Column -->\n          <ng-container matColumnDef=\"interface\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\"> Interface </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                  <div class=\"check-toggle center\" (click)=\"switchInterface()\">\n                      <div class=\"toggle-active\" *ngIf=\"element.interface\"></div>\n                      <div class=\"toggle-inactive\" *ngIf=\"!element.interface\"></div>\n                  </div>\n              </td>\n            </ng-container>\n        \n          <!-- Information Column -->\n          <ng-container matColumnDef=\"information\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\"> Information </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                  <div class=\"check-toggle center\" (click)=\"switchInformation()\">\n                      <div class=\"toggle-active\" *ngIf=\"element.information\"></div>\n                      <div class=\"toggle-inactive\" *ngIf=\"!element.information\"></div>\n                  </div>\n              </td>\n            </ng-container>\n        \n          <!-- Standards Column -->\n          <ng-container matColumnDef=\"standards\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\"> Standards </th>\n              <td mat-cell *matCellDef=\"let element\">\n                  <div class=\"check-toggle center\" (click)=\"switchStandards()\">\n                      <div class=\"toggle-active\" *ngIf=\"element.standards\"></div>\n                      <div class=\"toggle-inactive\" *ngIf=\"!element.standards\"></div>\n                  </div>\n              </td>\n            </ng-container>\n        \n          <!-- Remarks Column -->\n          <ng-container matColumnDef=\"remarks\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <div *ngIf=\"element.key != editableKey\" class=\"remarks\"><span>{{element.remarks}}</span></div>\n                <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [(ngModel)]=\"element.remarks\" required>\n                </mat-form-field>\n              </td>\n            </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/project/quality/quality.component.scss":
/*!********************************************************!*\
  !*** ./src/app/project/quality/quality.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .main-content .mat-column-number {\n    width: 100px; }\n  .main-content .mat-column-discipline {\n    width: 150px; }\n  .main-content .mat-column-checked_by {\n    width: 100px; }\n  .main-content .mat-column-report_date {\n    width: 200px; }\n  .main-content .mat-column-visual {\n    width: 100px; }\n  .main-content .mat-column-interface {\n    width: 100px; }\n  .main-content .mat-column-information {\n    width: 100px; }\n  .main-content .mat-column-standards {\n    width: 100px; }\n  .main-content .mat-column-remarks .remarks {\n    display: flex;\n    width: 100%;\n    white-space: nowrap; }\n  .main-content .check-toggle > div {\n    width: 30px;\n    height: 30px; }\n  .main-content .check-toggle > div.toggle-active {\n      background: #00B050; }\n  .main-content .check-toggle > div.toggle-inactive {\n      background: #d2d2d2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9xdWFsaXR5L0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdFxccXVhbGl0eVxccXVhbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBNkN6QjtFQWhERDtJQU1RLGFBQVksRUFDZjtFQVBMO0lBU1EsYUFBWSxFQUNmO0VBVkw7SUFZUSxhQUFZLEVBQ2Y7RUFiTDtJQWVRLGFBQVksRUFDZjtFQWhCTDtJQWtCUSxhQUFZLEVBQ2Y7RUFuQkw7SUFxQlEsYUFBWSxFQUNmO0VBdEJMO0lBd0JRLGFBQVksRUFDZjtFQXpCTDtJQTJCUSxhQUFZLEVBQ2Y7RUE1Qkw7SUErQlksY0FBYTtJQUNiLFlBQVc7SUFDWCxvQkFBbUIsRUFDdEI7RUFsQ1Q7SUFzQ1EsWUFBVztJQUNYLGFBQVksRUFRZjtFQS9DTDtNQTBDWSxvQkFBbUIsRUFDdEI7RUEzQ1Q7TUE2Q1ksb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9xdWFsaXR5L3F1YWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5tYXQtY29sdW1uLW51bWJlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tZGlzY2lwbGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tY2hlY2tlZF9ieSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tcmVwb3J0X2RhdGUge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY29sdW1uLXZpc3VhbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4taW50ZXJmYWNlIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNvbHVtbi1pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tc3RhbmRhcmRzIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNvbHVtbi1yZW1hcmtzIHtcclxuICAgICAgICAucmVtYXJrcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2stdG9nZ2xlID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICYudG9nZ2xlLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEIwNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudG9nZ2xlLWluYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2QyZDJkMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/profile */ "./src/app/user/profile.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function QualityComponent(activedRoute, databaseService, apiService, projectprofileService, auth, router) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.auth = auth;
        this.router = router;
        this.projectKey = null;
        this.tablePath = '/quality';
        this.isEditable = false;
        this.displayedColumns = ['number', 'discipline', 'checked_by', 'report_date', 'visual', 'interface', 'information', 'standards', 'remarks'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.assignedUsers = [];
        this.currentUser = new _user_profile__WEBPACK_IMPORTED_MODULE_6__["UserProfile"]();
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.auth.getAuthUser();
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
            _this.dataSource.sort = _this.sort;
            for (var _i = 0, _a = _this.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                _this.assignedUsers.push(_this.getUserData(element.checked_by));
            }
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
    };
    QualityComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
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
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "add",
                    "message": "The new Project Quality data was added.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
            }
            if (stage.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, stage);
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "update",
                    "message": "The Project Quality data was updated.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
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
    QualityComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
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

/***/ "./src/app/project/team/invite/invite.component.html":
/*!***********************************************************!*\
  !*** ./src/app/project/team/invite/invite.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>You have invited to {{project.name}}</h1>\n  <div class=\"actions\">\n    <button mat-raised-button (click)=\"accept()\">Accept</button>\n    <button mat-raised-button (click)=\"decline()\">Decline</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/project/team/invite/invite.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/project/team/invite/invite.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvdGVhbS9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/team/invite/invite.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/team/invite/invite.component.ts ***!
  \*********************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _projectprofile_projectprofile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projectprofile/projectprofile */ "./src/app/projectprofile/projectprofile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InviteComponent = /** @class */ (function () {
    function InviteComponent(activedRoute, router, authService, databaseService) {
        this.activedRoute = activedRoute;
        this.router = router;
        this.authService = authService;
        this.databaseService = databaseService;
        this.project = new _projectprofile_projectprofile__WEBPACK_IMPORTED_MODULE_4__["ProjectProfile"]();
        this.projectKey = this.activedRoute.snapshot.params['pid'];
        this.teamId = this.activedRoute.snapshot.params['teamid'];
    }
    InviteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getAuthUser();
        this.databaseService.getRowDetails('/projects', this.projectKey).valueChanges().subscribe(function (data) {
            _this.project = data;
        });
        this.databaseService.getRowDetails('/teams/' + this.projectKey, this.teamId).valueChanges().subscribe(function (data) {
            _this.team = data;
        });
    };
    InviteComponent.prototype.accept = function () {
        this.team.uid = this.currentUser.uid;
        console.log(this.team);
        this.databaseService.updateRow('/teams/' + this.projectKey, this.teamId, this.team);
        this.router.navigate(['/project/team/' + this.projectKey]);
    };
    InviteComponent.prototype.decline = function () {
    };
    InviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invite',
            template: __webpack_require__(/*! ./invite.component.html */ "./src/app/project/team/invite/invite.component.html"),
            styles: [__webpack_require__(/*! ./invite.component.scss */ "./src/app/project/team/invite/invite.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/project/team/team.component.html":
/*!**************************************************!*\
  !*** ./src/app/project/team/team.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"content-search\">\r\n        <div class=\"search-form\">\r\n          <div>\r\n            <mat-form-field color=\"white\" class=\"\">\r\n              <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n            </mat-form-field>\r\n      \r\n            <mat-form-field color=\"white\">\r\n              <mat-select placeholder=\"Discipline\" [(ngModel)]=\"disciplineFilter\" (selectionChange)=\"filterBySelection()\">\r\n                <mat-option value=\"\">All</mat-option>\r\n                <mat-option *ngFor=\"let discipline of disciplines\" [value]=\"discipline.key\">\r\n                  {{discipline.code}} \r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n      \r\n            <mat-form-field color=\"white\">\r\n              <mat-select placeholder=\"Role\" [(ngModel)]=\"roleFilter\" (selectionChange)=\"filterBySelection()\">\r\n                <mat-option value=\"\">All</mat-option>\r\n                <mat-option *ngFor=\"let role of roles\" [value]=\"role.key\">\r\n                  {{role.val}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field color=\"white\">\r\n              <mat-select placeholder=\"Access\" [(ngModel)]=\"accessFilter\" (selectionChange)=\"filterBySelection()\">\r\n                <mat-option value=\"\">All</mat-option>\r\n                <mat-option *ngFor=\"let access of accesses\" [value]=\"access.key\">\r\n                  {{access.val}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div *ngIf=\"projectRole == 1\">\r\n            <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\r\n            <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\r\n          </div>           \r\n        </div>\r\n\r\n        <div *ngIf=\"(projectRole == 1) && isEditable\" class=\"tool-bar\">\r\n          <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\r\n          <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\r\n          <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\r\n          <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\r\n        </div>\r\n      </div>\r\n    \r\n    <div class=\"table-container mat-elevation-z8\">\r\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <div style=\"display: flex;align-items: center;padding: 5px;\" *ngIf=\"element.key != editableKey\">\r\n                <app-avatar [userProfile]=\"{'name': element.name, 'avatar': '', randomColor: getDisciplineByKey(element.discipline).code_color}\"></app-avatar>\r\n                <span  class=\"no-bg\" style=\"padding-left: 10px;\">\r\n                  {{element.name}}\r\n                </span>\r\n              </div>\r\n              <mat-form-field *ngIf=\"(element.key == editableKey)\">\r\n                <input matInput [(ngModel)]=\"element.name\" placeholder=\"\" required>\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          \r\n          <ng-container matColumnDef=\"company\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"element.key != editableKey\" class=\"no-bg text-light\">{{element.company}}</span>\r\n              <mat-form-field *ngIf=\"(element.key == editableKey)\">\r\n                <input matInput [(ngModel)]=\"element.company\" required placeholder=\"\">\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          \r\n          <ng-container matColumnDef=\"discipline\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Discipline </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"(element.key != editableKey)\" [style.background]=\"getDisciplineByKey(element.discipline).code_color\" class=\"colored text-center\">{{getDisciplineByKey(element.discipline).code}}</span>\r\n              <mat-form-field color=\"white\" *ngIf=\"(element.key == editableKey)\">\r\n                <mat-select placeholder=\"\" [(ngModel)]=\"element.discipline\">\r\n                  <mat-option *ngFor=\"let discipline of disciplines\" [value]=\"discipline.key\">\r\n                    {{discipline.code}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n      \r\n          \r\n          <ng-container matColumnDef=\"role\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Role </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"element.key != editableKey\" class=\"no-bg text-light\">{{roles[element.role].val}}</span>\r\n              <mat-form-field color=\"white\" *ngIf=\"(element.key == editableKey)\">\r\n                <mat-select placeholder=\"\" [(ngModel)]=\"element.role\">\r\n                  <mat-option *ngFor=\"let role of roles\" [value]=\"role.key\">\r\n                    {{role.val}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n      \r\n          \r\n          <ng-container matColumnDef=\"access\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Access </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"(element.key != editableKey) \" class=\"no-bg text-light\">{{accesses[element.access].val}}</span>\r\n              <mat-form-field color=\"white\" *ngIf=\"(element.key == editableKey) \">\r\n                <mat-select placeholder=\"\" [(ngModel)]=\"element.access\">\r\n                  <mat-option *ngFor=\"let access of accesses\" [value]=\"access.key\">\r\n                    {{access.val}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n      \r\n          \r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <a *ngIf=\"element.key != editableKey\" class=\"text-light\">{{element.email}}</a>\r\n              <mat-form-field *ngIf=\"element.key == editableKey\">\r\n                <input matInput [(ngModel)]=\"element.email\" required placeholder=\"\">\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"phone\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"element.key != editableKey\" class=\"text-light\">{{element.phone}}</span>\r\n              <mat-form-field *ngIf=\"element.key == editableKey\">\r\n                  <!-- <span matPrefix>+1 &nbsp;</span> -->\r\n                  <input type=\"number\" matInput [(ngModel)]=\"element.phone\" placeholder=\"\">\r\n              </mat-form-field>\r\n            </td>\r\n          </ng-container>\r\n      \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/project/team/team.component.scss":
/*!**************************************************!*\
  !*** ./src/app/project/team/team.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-name {\n  width: 250px; }\n\n.mat-column-company {\n  width: 150px; }\n\n.mat-column-discipline {\n  width: 100px; }\n\n.mat-column-role {\n  width: 150px; }\n\n.mat-column-access {\n  width: 150px; }\n\n.mat-column-email {\n  width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC90ZWFtL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdFxcdGVhbVxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tbmFtZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tY29tcGFueSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tZGlzY2lwbGluZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tcm9sZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tYWNjZXNzIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG4ubWF0LWNvbHVtbi1lbWFpbCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function TeamComponent(activedRoute, databaseService, projectprofileService, router, authService, apiService) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.projectprofileService = projectprofileService;
        this.router = router;
        this.authService = authService;
        this.apiService = apiService;
        this.projectKey = null;
        this.tablePath = '/teams';
        this.isEditable = false;
        this.displayedColumns = ['name', 'company', 'discipline', 'role', 'access', 'email', 'phone'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.roles = [
            { key: 0, val: 'Owner' },
            { key: 1, val: 'Architect' },
            { key: 2, val: 'Engineer' },
            { key: 3, val: 'BIM Manager' },
            { key: 4, val: 'BIM Coordinartor' },
            { key: 5, val: 'BIM Modeller' },
            { key: 6, val: 'Cost Estimator' },
            { key: 7, val: 'MEP Engineer' },
            { key: 0, val: 'Structural Engineer' },
            { key: 0, val: 'Landscape Designer' },
            { key: 0, val: 'Project Manager' }
        ];
        this.accesses = [
            { key: 0, val: 'Viewer' },
            { key: 1, val: 'Editor' }
        ];
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
    }
    TeamComponent.prototype.ngOnInit = function () {
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
    TeamComponent.prototype.loadData = function () {
        var _this = this;
        this.databaseService.getLists('/lods/' + this.projectId).valueChanges().subscribe(function (data) {
            _this.disciplines = data;
            if (_this.disciplineFilter) {
                _this.disciplines = _this.disciplines.filter(function (ele) { return ele.key == _this.disciplineFilter; });
            }
            data.forEach(function (item) {
                // this.disciplines[item.key] = item;
                if (!_this.firstDis) {
                    _this.firstDis = item.key;
                }
            });
        });
        this.databaseService.getLists(this.tablePath).valueChanges().subscribe(function (data) {
            _this.elements = data;
            if (_this.roleFilter != null && _this.roleFilter != '') {
                _this.elements = _this.elements.filter(function (ele) { return ele.role == _this.roleFilter; });
            }
            if (_this.accessFilter != null && _this.accessFilter != undefined) {
                _this.elements = _this.elements.filter(function (ele) { return ele.access == _this.accessFilter; });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
            _this.dataSource.sort = _this.sort;
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
    };
    TeamComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    TeamComponent.prototype.selectRow = function (key) {
        if (this.isEditable) {
            this.selectedKey = key;
        }
        if (this.editableKey != this.selectedKey) {
            this.editableKey = null;
        }
    };
    TeamComponent.prototype.insertRow = function () {
        if (!this.editableKey) {
            var newRow = { name: '', company: '', discipline: this.firstDis, role: 0, access: 1, email: "", phone: "", randomColor: this.authService.getRandomColorHex(), key: 'newRow', is_new: true };
            this.selectedKey = "newRow";
            this.editableKey = this.selectedKey;
            this.elements.push(newRow);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        }
    };
    TeamComponent.prototype.getDisciplineByKey = function (key) {
        var discipline;
        this.disciplines.forEach(function (item) {
            if (item.key === key) {
                discipline = item;
            }
        });
        return discipline;
    };
    TeamComponent.prototype.saveRow = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.key == 'newRow') {
                if (element.name && element.company && element.email) {
                    element.is_new = false;
                    var result = this.databaseService.createRow(this.tablePath, element);
                    element.key = result.key;
                    this.databaseService.updateRow(this.tablePath, result.key, element);
                    // send invite email
                    var param = {
                        "teamid": element.key,
                        "project": this.projectId
                    };
                    this.apiService.sendRequest("sendInvitation", param).subscribe(function (result) { });
                    // create fake account or insert key into team member
                }
            }
            if (element.key == this.editableKey) {
                if (element.name && element.company && element.email) {
                    element.is_new = false;
                    this.databaseService.updateRow(this.tablePath, this.editableKey, element);
                    // send update email
                }
            }
        }
        this.editableKey = null;
    };
    TeamComponent.prototype.editRow = function () {
        this.editableKey = this.selectedKey;
    };
    TeamComponent.prototype.deleteRow = function () {
        if (this.selectedKey) {
            this.databaseService.deleteRow(this.tablePath, this.selectedKey);
        }
        if (this.selectedKey == 'newRow') {
        }
    };
    TeamComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TeamComponent.prototype.filterBySelection = function () {
        this.loadData();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TeamComponent.prototype, "sort", void 0);
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/project/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/project/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
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

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n          <div>\n            <mat-form-field color=\"white\" class=\"\">\n                <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\n            </mat-form-field>\n      \n            <mat-form-field color=\"white\">\n                <mat-select placeholder=\"Check\" [(ngModel)]=\"checkedFilter\" (selectionChange)=\"filterBySelection()\">\n                    <mat-option value=\"\">All</mat-option>\n                    <mat-option value=\"1\">Active</mat-option>\n                    <mat-option value=\"0\">In active</mat-option>\n                </mat-select>\n            </mat-form-field>\n      \n            <mat-form-field color=\"white\">\n                  <mat-select placeholder=\"Software\" [(ngModel)]=\"softwareFilter\" (selectionChange)=\"filterBySelection()\">\n                      <mat-option value=\"\">All</mat-option>\n                      <mat-option *ngFor=\"let software of softwares\" [value]=\"software\">\n                        {{software}}\n                      </mat-option>\n                  </mat-select>\n            </mat-form-field>\n\n            <mat-form-field color=\"white\">\n                <mat-select placeholder=\"Version\" [(ngModel)]=\"versionFilter\" (selectionChange)=\"filterBySelection()\">\n                    <mat-option value=\"\">All</mat-option>\n                    <mat-option *ngFor=\"let version of versions\" [value]=\"version.value\">\n                      {{version.value}}\n                    </mat-option>\n                </mat-select>\n          </mat-form-field>\n          </div>\n          <div *ngIf=\"projectRole == 1\">\n            <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n            <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n          </div>           \n        </div>\n\n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n          <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n          <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n          <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n          <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n          <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n          <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n      </div>\n    \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">U{{(\"00\"+element.number).slice(-2)}}</td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"bim_use\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> BIM Use </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"(element.key != editableKey) || !element.is_new\" class=\"no-bg\">{{element.bim_use}}</span>\n              <mat-form-field *ngIf=\"(element.key == editableKey) && element.is_new\">\n                <input matInput [(ngModel)]=\"element.bim_use\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"check\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Check </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <div class=\"check-toggle\" (click)=\"switchToggle()\">\n                <div class=\"toggle-active\" *ngIf=\"element.check\"><span>Active</span></div>\n                <div class=\"toggle-inactive\" *ngIf=\"!element.check\"><span>In Active</span></div>\n              </div>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container matColumnDef=\"software\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Software </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored\">{{element.software}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <mat-select placeholder=\"\" [(ngModel)]=\"element.software\">\n                    <mat-option *ngFor=\"let software of softwares\" [value]=\"software\">\n                      {{software}}\n                    </mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s02 Column -->\n          <ng-container matColumnDef=\"version\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Version </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored text-right\">{{element.version}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.version\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s03 Column -->\n          <ng-container matColumnDef=\"format\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Formats</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored\">{{element.format}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.format\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/projectbim/projectbim.component.scss":
/*!******************************************************!*\
  !*** ./src/app/projectbim/projectbim.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content .mat-column-number {\n  width: 100px; }\n\n.main-content .mat-column-bim_use {\n  width: 200px; }\n\n.main-content .mat-column-check {\n  width: 120px; }\n\n.main-content .mat-column-software {\n  width: 350px; }\n\n.main-content .mat-column-version {\n  width: 120px; }\n\n.main-content .mat-column-format {\n  width: 350px; }\n\n.main-content .check-toggle {\n  width: 100px;\n  height: 30px;\n  border-radius: 0; }\n\n.main-content .check-toggle .toggle-inactive {\n    border: 2px solid #AFABAB;\n    display: flex;\n    flex-direction: row-reverse; }\n\n.main-content .check-toggle .toggle-inactive span {\n      background: #AFABAB; }\n\n.main-content .check-toggle .toggle-active {\n    border: 2px solid #00B050;\n    display: flex; }\n\n.main-content .check-toggle .toggle-active span {\n      background: #00B050; }\n\n.main-content .check-toggle span {\n    width: 80px;\n    height: 26px;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGJpbS9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHByb2plY3RiaW1cXHByb2plY3RiaW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxhQUFZLEVBQ2Y7O0FBSEw7RUFLUSxhQUFZLEVBQ2Y7O0FBTkw7RUFRUSxhQUFZLEVBQ2Y7O0FBVEw7RUFXUSxhQUFZLEVBQ2Y7O0FBWkw7RUFjUSxhQUFZLEVBQ2Y7O0FBZkw7RUFpQlEsYUFBWSxFQUNmOztBQWxCTDtFQXFCUSxhQUFZO0VBQ1osYUFBWTtFQUNaLGlCQUFnQixFQThCbkI7O0FBckRMO0lBMEJZLDBCQUF5QjtJQUN6QixjQUFhO0lBQ2IsNEJBQTJCLEVBSzlCOztBQWpDVDtNQStCZ0Isb0JBQW1CLEVBQ3RCOztBQWhDYjtJQW9DWSwwQkFBeUI7SUFDekIsY0FBYSxFQUtoQjs7QUExQ1Q7TUF3Q2dCLG9CQUFtQixFQUN0Qjs7QUF6Q2I7SUE2Q1ksWUFBVztJQUNYLGFBQVk7SUFDWixlQUFjO0lBQ2QsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFDbkIsc0JBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdGJpbS9wcm9qZWN0YmltLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICAubWF0LWNvbHVtbi1udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY29sdW1uLWJpbV91c2Uge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY29sdW1uLWNoZWNrIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNvbHVtbi1zb2Z0d2FyZSB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tdmVyc2lvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tZm9ybWF0IHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrLXRvZ2dsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICAudG9nZ2xlLWluYWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0FGQUJBQjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQUZBQkFCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9nZ2xlLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMEIwNTA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBCMDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function ProjectbimComponent(activedRoute, databaseService, apiService, projectprofileService, authService, router) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.authService = authService;
        this.router = router;
        this.projectKey = null;
        this.tablePath = '/bims';
        this.isEditable = false;
        this.displayedColumns = ['number', 'bim_use', 'check', 'software', 'version', 'format'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.softwares = [
            "Revit",
            "Bentley BIM Suite",
            "SketchUp",
            "ArchiCAD",
            "Vectorworks",
            "Tekla Structures",
            "Vico Office",
            "Quantm",
            "Digital Project",
            "Cadpipe HVAC",
            "Fabrication CADMEP",
            "AutoCAD",
            "AutoCAD Civil 3D",
            "Robot",
            "STAAD Pro",
            "FloVent",
            "Fluent",
            "Sefaira",
            "Navisworks",
            "BIM360 Field",
            "BIM360 Glue",
            "BIM360 Layout",
            "BIM360 Plan",
            "BIM360 Docs",
            "ProectDox",
            "Project Wise",
            "Solibri Model Checker"
        ];
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
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
            if (_this.checkedFilter) {
                _this.elements = _this.elements.filter(function (ele) { return ele.check == _this.checkedFilter; });
            }
            if (_this.softwareFilter) {
                _this.elements = _this.elements.filter(function (ele) { return ele.software == _this.softwareFilter; });
            }
            if (_this.versionFilter) {
                _this.elements = _this.elements.filter(function (ele) { return ele.version == _this.versionFilter; });
            }
            _this.sortRecords();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.elements);
            _this.dataSource.sort = _this.sort;
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
    };
    ProjectbimComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
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
                if (element.bim_use) {
                    element.is_new = false;
                    var result = this.databaseService.createRow(this.tablePath, element);
                    element.key = result.key;
                    this.databaseService.updateRow(this.tablePath, result.key, element);
                    var notificationData = {
                        "sender": this.currentUser.uid,
                        "type": "add",
                        "message": "The new Project Bim data was added.",
                        "project": this.projectKey
                    };
                    this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
                }
            }
            if (element.key == this.editableKey) {
                if (element.bim_use) {
                    element.is_new = false;
                    this.databaseService.updateRow(this.tablePath, this.editableKey, element);
                    var notificationData = {
                        "sender": this.currentUser.uid,
                        "type": "update",
                        "message": "The new Project Bim data was updated.",
                        "project": this.projectKey
                    };
                    this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
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
    ProjectbimComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProjectbimComponent.prototype.filterBySelection = function () {
        this.loadData();
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"projectRole == 1\">\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n            <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              B{{(\"00\"+element.number).slice(-2)}}\n            </td>\n            <td mat-cell *matCellDef=\"let element\"></td>\n          </ng-container>\n    \n          <!-- Disciple Column -->\n          <ng-container matColumnDef=\"block\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Block </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">{{element.block}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.block\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Code Column -->\n          <ng-container matColumnDef=\"area\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Area </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored text-center\">{{element.area }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                  <input matInput [(ngModel)]=\"element.area\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s01 Column -->\n          <ng-container matColumnDef=\"levels\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Levels </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored text-center\">{{ element.levels }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.levels\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- s02 Column -->\n          <ng-container matColumnDef=\"remarks\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"gray-200\">{{element.remarks}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.remarks\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/projectconf/projectconf.component.scss":
/*!********************************************************!*\
  !*** ./src/app/projectconf/projectconf.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-number {\n  width: 100px; }\n\n.mat-column-block {\n  width: 250px; }\n\n.mat-column-area {\n  width: 150px; }\n\n.mat-column-levels {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGNvbmYvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxwcm9qZWN0Y29uZlxccHJvamVjdGNvbmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0Y29uZi9wcm9qZWN0Y29uZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLW51bWJlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tYmxvY2sge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5tYXQtY29sdW1uLWFyZWEge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5tYXQtY29sdW1uLWxldmVscyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function ProjectconfComponent(activedRoute, databaseService, apiService, projectprofileService, authService, router) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.authService = authService;
        this.router = router;
        this.projectKey = null;
        this.tablePath = '/project_configuration';
        this.isEditable = false;
        this.displayedColumns = ['number', 'block', 'area', 'levels', 'remarks'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
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
            _this.dataSource.sort = _this.sort;
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
    };
    ProjectconfComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
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
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "add",
                    "message": "The new Project Configuration data was added.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
            }
            if (stage.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, stage);
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "update",
                    "message": "The new Project Configuration data was updated.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
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
    ProjectconfComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

/***/ "./src/app/projectprofile/countries-timezones.ts":
/*!*******************************************************!*\
  !*** ./src/app/projectprofile/countries-timezones.ts ***!
  \*******************************************************/
/*! exports provided: countryTimes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryTimes", function() { return countryTimes; });
var countryTimes = {
    "countries": {
        "AD": {
            "id": "AD",
            "name": "Andorra",
            "timezones": [
                "Europe/Andorra"
            ]
        },
        "AE": {
            "id": "AE",
            "name": "United Arab Emirates",
            "timezones": [
                "Asia/Dubai"
            ]
        },
        "AF": {
            "id": "AF",
            "name": "Afghanistan",
            "timezones": [
                "Asia/Kabul"
            ]
        },
        "AG": {
            "id": "AG",
            "name": "Antigua & Barbuda",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "AI": {
            "id": "AI",
            "name": "Anguilla",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "AL": {
            "id": "AL",
            "name": "Albania",
            "timezones": [
                "Europe/Tirane"
            ]
        },
        "AM": {
            "id": "AM",
            "name": "Armenia",
            "timezones": [
                "Asia/Yerevan"
            ]
        },
        "AO": {
            "id": "AO",
            "name": "Angola",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "AQ": {
            "id": "AQ",
            "name": "Antarctica",
            "timezones": [
                "Antarctica/Rothera",
                "Antarctica/Palmer",
                "Antarctica/Mawson",
                "Antarctica/Davis",
                "Antarctica/Casey",
                "Antarctica/Vostok",
                "Antarctica/DumontDUrville",
                "Antarctica/Syowa",
                "Antarctica/Troll",
                "Pacific/Auckland"
            ]
        },
        "AR": {
            "id": "AR",
            "name": "Argentina",
            "timezones": [
                "America/Argentina/Buenos_Aires",
                "America/Argentina/Cordoba",
                "America/Argentina/Salta",
                "America/Argentina/Jujuy",
                "America/Argentina/Tucuman",
                "America/Argentina/Catamarca",
                "America/Argentina/La_Rioja",
                "America/Argentina/San_Juan",
                "America/Argentina/Mendoza",
                "America/Argentina/San_Luis",
                "America/Argentina/Rio_Gallegos",
                "America/Argentina/Ushuaia"
            ]
        },
        "AS": {
            "id": "AS",
            "name": "Samoa (American)",
            "timezones": [
                "Pacific/Pago_Pago"
            ]
        },
        "AT": {
            "id": "AT",
            "name": "Austria",
            "timezones": [
                "Europe/Vienna"
            ]
        },
        "AU": {
            "id": "AU",
            "name": "Australia",
            "timezones": [
                "Australia/Lord_Howe",
                "Antarctica/Macquarie",
                "Australia/Hobart",
                "Australia/Currie",
                "Australia/Melbourne",
                "Australia/Sydney",
                "Australia/Broken_Hill",
                "Australia/Brisbane",
                "Australia/Lindeman",
                "Australia/Adelaide",
                "Australia/Darwin",
                "Australia/Perth",
                "Australia/Eucla"
            ]
        },
        "AW": {
            "id": "AW",
            "name": "Aruba",
            "timezones": [
                "America/Curacao"
            ]
        },
        "AX": {
            "id": "AX",
            "name": "Åland Islands",
            "timezones": [
                "Europe/Helsinki"
            ]
        },
        "AZ": {
            "id": "AZ",
            "name": "Azerbaijan",
            "timezones": [
                "Asia/Baku"
            ]
        },
        "BA": {
            "id": "BA",
            "name": "Bosnia & Herzegovina",
            "timezones": [
                "Europe/Belgrade"
            ]
        },
        "BB": {
            "id": "BB",
            "name": "Barbados",
            "timezones": [
                "America/Barbados"
            ]
        },
        "BD": {
            "id": "BD",
            "name": "Bangladesh",
            "timezones": [
                "Asia/Dhaka"
            ]
        },
        "BE": {
            "id": "BE",
            "name": "Belgium",
            "timezones": [
                "Europe/Brussels"
            ]
        },
        "BF": {
            "id": "BF",
            "name": "Burkina Faso",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "BG": {
            "id": "BG",
            "name": "Bulgaria",
            "timezones": [
                "Europe/Sofia"
            ]
        },
        "BH": {
            "id": "BH",
            "name": "Bahrain",
            "timezones": [
                "Asia/Qatar"
            ]
        },
        "BI": {
            "id": "BI",
            "name": "Burundi",
            "timezones": [
                "Africa/Maputo"
            ]
        },
        "BJ": {
            "id": "BJ",
            "name": "Benin",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "BL": {
            "id": "BL",
            "name": "St Barthelemy",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "BM": {
            "id": "BM",
            "name": "Bermuda",
            "timezones": [
                "Atlantic/Bermuda"
            ]
        },
        "BN": {
            "id": "BN",
            "name": "Brunei",
            "timezones": [
                "Asia/Brunei"
            ]
        },
        "BO": {
            "id": "BO",
            "name": "Bolivia",
            "timezones": [
                "America/La_Paz"
            ]
        },
        "BQ": {
            "id": "BQ",
            "name": "Caribbean Netherlands",
            "timezones": [
                "America/Curacao"
            ]
        },
        "BR": {
            "id": "BR",
            "name": "Brazil",
            "timezones": [
                "America/Noronha",
                "America/Belem",
                "America/Fortaleza",
                "America/Recife",
                "America/Araguaina",
                "America/Maceio",
                "America/Bahia",
                "America/Sao_Paulo",
                "America/Campo_Grande",
                "America/Cuiaba",
                "America/Santarem",
                "America/Porto_Velho",
                "America/Boa_Vista",
                "America/Manaus",
                "America/Eirunepe",
                "America/Rio_Branco"
            ]
        },
        "BS": {
            "id": "BS",
            "name": "Bahamas",
            "timezones": [
                "America/Nassau"
            ]
        },
        "BT": {
            "id": "BT",
            "name": "Bhutan",
            "timezones": [
                "Asia/Thimphu"
            ]
        },
        "BW": {
            "id": "BW",
            "name": "Botswana",
            "timezones": [
                "Africa/Maputo"
            ]
        },
        "BY": {
            "id": "BY",
            "name": "Belarus",
            "timezones": [
                "Europe/Minsk"
            ]
        },
        "BZ": {
            "id": "BZ",
            "name": "Belize",
            "timezones": [
                "America/Belize"
            ]
        },
        "CA": {
            "id": "CA",
            "name": "Canada",
            "timezones": [
                "America/St_Johns",
                "America/Halifax",
                "America/Glace_Bay",
                "America/Moncton",
                "America/Goose_Bay",
                "America/Blanc-Sablon",
                "America/Toronto",
                "America/Nipigon",
                "America/Thunder_Bay",
                "America/Iqaluit",
                "America/Pangnirtung",
                "America/Resolute",
                "America/Atikokan",
                "America/Rankin_Inlet",
                "America/Winnipeg",
                "America/Rainy_River",
                "America/Regina",
                "America/Swift_Current",
                "America/Edmonton",
                "America/Cambridge_Bay",
                "America/Yellowknife",
                "America/Inuvik",
                "America/Creston",
                "America/Dawson_Creek",
                "America/Fort_Nelson",
                "America/Vancouver",
                "America/Whitehorse",
                "America/Dawson"
            ]
        },
        "CC": {
            "id": "CC",
            "name": "Cocos (Keeling) Islands",
            "timezones": [
                "Indian/Cocos"
            ]
        },
        "CD": {
            "id": "CD",
            "name": "Congo (Dem. Rep.)",
            "timezones": [
                "Africa/Maputo",
                "Africa/Lagos"
            ]
        },
        "CF": {
            "id": "CF",
            "name": "Central African Rep.",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "CG": {
            "id": "CG",
            "name": "Congo (Rep.)",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "CH": {
            "id": "CH",
            "name": "Switzerland",
            "timezones": [
                "Europe/Zurich"
            ]
        },
        "CI": {
            "id": "CI",
            "name": "Côte d'Ivoire",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "CK": {
            "id": "CK",
            "name": "Cook Islands",
            "timezones": [
                "Pacific/Rarotonga"
            ]
        },
        "CL": {
            "id": "CL",
            "name": "Chile",
            "timezones": [
                "America/Santiago",
                "Pacific/Easter"
            ]
        },
        "CM": {
            "id": "CM",
            "name": "Cameroon",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "CN": {
            "id": "CN",
            "name": "China",
            "timezones": [
                "Asia/Shanghai",
                "Asia/Urumqi"
            ]
        },
        "CO": {
            "id": "CO",
            "name": "Colombia",
            "timezones": [
                "America/Bogota"
            ]
        },
        "CR": {
            "id": "CR",
            "name": "Costa Rica",
            "timezones": [
                "America/Costa_Rica"
            ]
        },
        "CU": {
            "id": "CU",
            "name": "Cuba",
            "timezones": [
                "America/Havana"
            ]
        },
        "CV": {
            "id": "CV",
            "name": "Cape Verde",
            "timezones": [
                "Atlantic/Cape_Verde"
            ]
        },
        "CW": {
            "id": "CW",
            "name": "Curacao",
            "timezones": [
                "America/Curacao"
            ]
        },
        "CX": {
            "id": "CX",
            "name": "Christmas Island",
            "timezones": [
                "Indian/Christmas"
            ]
        },
        "CY": {
            "id": "CY",
            "name": "Cyprus",
            "timezones": [
                "Asia/Nicosia"
            ]
        },
        "CZ": {
            "id": "CZ",
            "name": "Czech Republic",
            "timezones": [
                "Europe/Prague"
            ]
        },
        "DE": {
            "id": "DE",
            "name": "Germany",
            "timezones": [
                "Europe/Zurich",
                "Europe/Berlin"
            ]
        },
        "DJ": {
            "id": "DJ",
            "name": "Djibouti",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "DK": {
            "id": "DK",
            "name": "Denmark",
            "timezones": [
                "Europe/Copenhagen"
            ]
        },
        "DM": {
            "id": "DM",
            "name": "Dominica",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "DO": {
            "id": "DO",
            "name": "Dominican Republic",
            "timezones": [
                "America/Santo_Domingo"
            ]
        },
        "DZ": {
            "id": "DZ",
            "name": "Algeria",
            "timezones": [
                "Africa/Algiers"
            ]
        },
        "EC": {
            "id": "EC",
            "name": "Ecuador",
            "timezones": [
                "America/Guayaquil",
                "Pacific/Galapagos"
            ]
        },
        "EE": {
            "id": "EE",
            "name": "Estonia",
            "timezones": [
                "Europe/Tallinn"
            ]
        },
        "EG": {
            "id": "EG",
            "name": "Egypt",
            "timezones": [
                "Africa/Cairo"
            ]
        },
        "EH": {
            "id": "EH",
            "name": "Western Sahara",
            "timezones": [
                "Africa/El_Aaiun"
            ]
        },
        "ER": {
            "id": "ER",
            "name": "Eritrea",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "ES": {
            "id": "ES",
            "name": "Spain",
            "timezones": [
                "Europe/Madrid",
                "Africa/Ceuta",
                "Atlantic/Canary"
            ]
        },
        "ET": {
            "id": "ET",
            "name": "Ethiopia",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "FI": {
            "id": "FI",
            "name": "Finland",
            "timezones": [
                "Europe/Helsinki"
            ]
        },
        "FJ": {
            "id": "FJ",
            "name": "Fiji",
            "timezones": [
                "Pacific/Fiji"
            ]
        },
        "FK": {
            "id": "FK",
            "name": "Falkland Islands",
            "timezones": [
                "Atlantic/Stanley"
            ]
        },
        "FM": {
            "id": "FM",
            "name": "Micronesia",
            "timezones": [
                "Pacific/Chuuk",
                "Pacific/Pohnpei",
                "Pacific/Kosrae"
            ]
        },
        "FO": {
            "id": "FO",
            "name": "Faroe Islands",
            "timezones": [
                "Atlantic/Faroe"
            ]
        },
        "FR": {
            "id": "FR",
            "name": "France",
            "timezones": [
                "Europe/Paris"
            ]
        },
        "GA": {
            "id": "GA",
            "name": "Gabon",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "GB": {
            "id": "GB",
            "name": "Britain (UK)",
            "timezones": [
                "Europe/London"
            ]
        },
        "GD": {
            "id": "GD",
            "name": "Grenada",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "GE": {
            "id": "GE",
            "name": "Georgia",
            "timezones": [
                "Asia/Tbilisi"
            ]
        },
        "GF": {
            "id": "GF",
            "name": "French Guiana",
            "timezones": [
                "America/Cayenne"
            ]
        },
        "GG": {
            "id": "GG",
            "name": "Guernsey",
            "timezones": [
                "Europe/London"
            ]
        },
        "GH": {
            "id": "GH",
            "name": "Ghana",
            "timezones": [
                "Africa/Accra"
            ]
        },
        "GI": {
            "id": "GI",
            "name": "Gibraltar",
            "timezones": [
                "Europe/Gibraltar"
            ]
        },
        "GL": {
            "id": "GL",
            "name": "Greenland",
            "timezones": [
                "America/Godthab",
                "America/Danmarkshavn",
                "America/Scoresbysund",
                "America/Thule"
            ]
        },
        "GM": {
            "id": "GM",
            "name": "Gambia",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "GN": {
            "id": "GN",
            "name": "Guinea",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "GP": {
            "id": "GP",
            "name": "Guadeloupe",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "GQ": {
            "id": "GQ",
            "name": "Equatorial Guinea",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "GR": {
            "id": "GR",
            "name": "Greece",
            "timezones": [
                "Europe/Athens"
            ]
        },
        "GS": {
            "id": "GS",
            "name": "South Georgia & the South Sandwich Islands",
            "timezones": [
                "Atlantic/South_Georgia"
            ]
        },
        "GT": {
            "id": "GT",
            "name": "Guatemala",
            "timezones": [
                "America/Guatemala"
            ]
        },
        "GU": {
            "id": "GU",
            "name": "Guam",
            "timezones": [
                "Pacific/Guam"
            ]
        },
        "GW": {
            "id": "GW",
            "name": "Guinea-Bissau",
            "timezones": [
                "Africa/Bissau"
            ]
        },
        "GY": {
            "id": "GY",
            "name": "Guyana",
            "timezones": [
                "America/Guyana"
            ]
        },
        "HK": {
            "id": "HK",
            "name": "Hong Kong",
            "timezones": [
                "Asia/Hong_Kong"
            ]
        },
        "HN": {
            "id": "HN",
            "name": "Honduras",
            "timezones": [
                "America/Tegucigalpa"
            ]
        },
        "HR": {
            "id": "HR",
            "name": "Croatia",
            "timezones": [
                "Europe/Belgrade"
            ]
        },
        "HT": {
            "id": "HT",
            "name": "Haiti",
            "timezones": [
                "America/Port-au-Prince"
            ]
        },
        "HU": {
            "id": "HU",
            "name": "Hungary",
            "timezones": [
                "Europe/Budapest"
            ]
        },
        "ID": {
            "id": "ID",
            "name": "Indonesia",
            "timezones": [
                "Asia/Jakarta",
                "Asia/Pontianak",
                "Asia/Makassar",
                "Asia/Jayapura"
            ]
        },
        "IE": {
            "id": "IE",
            "name": "Ireland",
            "timezones": [
                "Europe/Dublin"
            ]
        },
        "IL": {
            "id": "IL",
            "name": "Israel",
            "timezones": [
                "Asia/Jerusalem"
            ]
        },
        "IM": {
            "id": "IM",
            "name": "Isle of Man",
            "timezones": [
                "Europe/London"
            ]
        },
        "IN": {
            "id": "IN",
            "name": "India",
            "timezones": [
                "Asia/Kolkata"
            ]
        },
        "IO": {
            "id": "IO",
            "name": "British Indian Ocean Territory",
            "timezones": [
                "Indian/Chagos"
            ]
        },
        "IQ": {
            "id": "IQ",
            "name": "Iraq",
            "timezones": [
                "Asia/Baghdad"
            ]
        },
        "IR": {
            "id": "IR",
            "name": "Iran",
            "timezones": [
                "Asia/Tehran"
            ]
        },
        "IS": {
            "id": "IS",
            "name": "Iceland",
            "timezones": [
                "Atlantic/Reykjavik"
            ]
        },
        "IT": {
            "id": "IT",
            "name": "Italy",
            "timezones": [
                "Europe/Rome"
            ]
        },
        "JE": {
            "id": "JE",
            "name": "Jersey",
            "timezones": [
                "Europe/London"
            ]
        },
        "JM": {
            "id": "JM",
            "name": "Jamaica",
            "timezones": [
                "America/Jamaica"
            ]
        },
        "JO": {
            "id": "JO",
            "name": "Jordan",
            "timezones": [
                "Asia/Amman"
            ]
        },
        "JP": {
            "id": "JP",
            "name": "Japan",
            "timezones": [
                "Asia/Tokyo"
            ]
        },
        "KE": {
            "id": "KE",
            "name": "Kenya",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "KG": {
            "id": "KG",
            "name": "Kyrgyzstan",
            "timezones": [
                "Asia/Bishkek"
            ]
        },
        "KH": {
            "id": "KH",
            "name": "Cambodia",
            "timezones": [
                "Asia/Bangkok"
            ]
        },
        "KI": {
            "id": "KI",
            "name": "Kiribati",
            "timezones": [
                "Pacific/Tarawa",
                "Pacific/Enderbury",
                "Pacific/Kiritimati"
            ]
        },
        "KM": {
            "id": "KM",
            "name": "Comoros",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "KN": {
            "id": "KN",
            "name": "St Kitts & Nevis",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "KP": {
            "id": "KP",
            "name": "Korea (North)",
            "timezones": [
                "Asia/Pyongyang"
            ]
        },
        "KR": {
            "id": "KR",
            "name": "Korea (South)",
            "timezones": [
                "Asia/Seoul"
            ]
        },
        "KW": {
            "id": "KW",
            "name": "Kuwait",
            "timezones": [
                "Asia/Riyadh"
            ]
        },
        "KY": {
            "id": "KY",
            "name": "Cayman Islands",
            "timezones": [
                "America/Cayman"
            ]
        },
        "KZ": {
            "id": "KZ",
            "name": "Kazakhstan",
            "timezones": [
                "Asia/Almaty",
                "Asia/Qyzylorda",
                "Asia/Aqtobe",
                "Asia/Aqtau",
                "Asia/Oral"
            ]
        },
        "LA": {
            "id": "LA",
            "name": "Laos",
            "timezones": [
                "Asia/Bangkok"
            ]
        },
        "LB": {
            "id": "LB",
            "name": "Lebanon",
            "timezones": [
                "Asia/Beirut"
            ]
        },
        "LC": {
            "id": "LC",
            "name": "St Lucia",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "LI": {
            "id": "LI",
            "name": "Liechtenstein",
            "timezones": [
                "Europe/Zurich"
            ]
        },
        "LK": {
            "id": "LK",
            "name": "Sri Lanka",
            "timezones": [
                "Asia/Colombo"
            ]
        },
        "LR": {
            "id": "LR",
            "name": "Liberia",
            "timezones": [
                "Africa/Monrovia"
            ]
        },
        "LS": {
            "id": "LS",
            "name": "Lesotho",
            "timezones": [
                "Africa/Johannesburg"
            ]
        },
        "LT": {
            "id": "LT",
            "name": "Lithuania",
            "timezones": [
                "Europe/Vilnius"
            ]
        },
        "LU": {
            "id": "LU",
            "name": "Luxembourg",
            "timezones": [
                "Europe/Luxembourg"
            ]
        },
        "LV": {
            "id": "LV",
            "name": "Latvia",
            "timezones": [
                "Europe/Riga"
            ]
        },
        "LY": {
            "id": "LY",
            "name": "Libya",
            "timezones": [
                "Africa/Tripoli"
            ]
        },
        "MA": {
            "id": "MA",
            "name": "Morocco",
            "timezones": [
                "Africa/Casablanca"
            ]
        },
        "MC": {
            "id": "MC",
            "name": "Monaco",
            "timezones": [
                "Europe/Monaco"
            ]
        },
        "MD": {
            "id": "MD",
            "name": "Moldova",
            "timezones": [
                "Europe/Chisinau"
            ]
        },
        "ME": {
            "id": "ME",
            "name": "Montenegro",
            "timezones": [
                "Europe/Belgrade"
            ]
        },
        "MF": {
            "id": "MF",
            "name": "St Martin (French part)",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "MG": {
            "id": "MG",
            "name": "Madagascar",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "MH": {
            "id": "MH",
            "name": "Marshall Islands",
            "timezones": [
                "Pacific/Majuro",
                "Pacific/Kwajalein"
            ]
        },
        "MK": {
            "id": "MK",
            "name": "Macedonia",
            "timezones": [
                "Europe/Belgrade"
            ]
        },
        "ML": {
            "id": "ML",
            "name": "Mali",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "MM": {
            "id": "MM",
            "name": "Myanmar (Burma)",
            "timezones": [
                "Asia/Rangoon"
            ]
        },
        "MN": {
            "id": "MN",
            "name": "Mongolia",
            "timezones": [
                "Asia/Ulaanbaatar",
                "Asia/Hovd",
                "Asia/Choibalsan"
            ]
        },
        "MO": {
            "id": "MO",
            "name": "Macau",
            "timezones": [
                "Asia/Macau"
            ]
        },
        "MP": {
            "id": "MP",
            "name": "Northern Mariana Islands",
            "timezones": [
                "Pacific/Guam"
            ]
        },
        "MQ": {
            "id": "MQ",
            "name": "Martinique",
            "timezones": [
                "America/Martinique"
            ]
        },
        "MR": {
            "id": "MR",
            "name": "Mauritania",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "MS": {
            "id": "MS",
            "name": "Montserrat",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "MT": {
            "id": "MT",
            "name": "Malta",
            "timezones": [
                "Europe/Malta"
            ]
        },
        "MU": {
            "id": "MU",
            "name": "Mauritius",
            "timezones": [
                "Indian/Mauritius"
            ]
        },
        "MV": {
            "id": "MV",
            "name": "Maldives",
            "timezones": [
                "Indian/Maldives"
            ]
        },
        "MW": {
            "id": "MW",
            "name": "Malawi",
            "timezones": [
                "Africa/Maputo"
            ]
        },
        "MX": {
            "id": "MX",
            "name": "Mexico",
            "timezones": [
                "America/Mexico_City",
                "America/Cancun",
                "America/Merida",
                "America/Monterrey",
                "America/Matamoros",
                "America/Mazatlan",
                "America/Chihuahua",
                "America/Ojinaga",
                "America/Hermosillo",
                "America/Tijuana",
                "America/Santa_Isabel",
                "America/Bahia_Banderas"
            ]
        },
        "MY": {
            "id": "MY",
            "name": "Malaysia",
            "timezones": [
                "Asia/Kuala_Lumpur",
                "Asia/Kuching"
            ]
        },
        "MZ": {
            "id": "MZ",
            "name": "Mozambique",
            "timezones": [
                "Africa/Maputo"
            ]
        },
        "NA": {
            "id": "NA",
            "name": "Namibia",
            "timezones": [
                "Africa/Windhoek"
            ]
        },
        "NC": {
            "id": "NC",
            "name": "New Caledonia",
            "timezones": [
                "Pacific/Noumea"
            ]
        },
        "NE": {
            "id": "NE",
            "name": "Niger",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "NF": {
            "id": "NF",
            "name": "Norfolk Island",
            "timezones": [
                "Pacific/Norfolk"
            ]
        },
        "NG": {
            "id": "NG",
            "name": "Nigeria",
            "timezones": [
                "Africa/Lagos"
            ]
        },
        "NI": {
            "id": "NI",
            "name": "Nicaragua",
            "timezones": [
                "America/Managua"
            ]
        },
        "NL": {
            "id": "NL",
            "name": "Netherlands",
            "timezones": [
                "Europe/Amsterdam"
            ]
        },
        "NO": {
            "id": "NO",
            "name": "Norway",
            "timezones": [
                "Europe/Oslo"
            ]
        },
        "NP": {
            "id": "NP",
            "name": "Nepal",
            "timezones": [
                "Asia/Kathmandu"
            ]
        },
        "NR": {
            "id": "NR",
            "name": "Nauru",
            "timezones": [
                "Pacific/Nauru"
            ]
        },
        "NU": {
            "id": "NU",
            "name": "Niue",
            "timezones": [
                "Pacific/Niue"
            ]
        },
        "NZ": {
            "id": "NZ",
            "name": "New Zealand",
            "timezones": [
                "Pacific/Auckland",
                "Pacific/Chatham"
            ]
        },
        "OM": {
            "id": "OM",
            "name": "Oman",
            "timezones": [
                "Asia/Dubai"
            ]
        },
        "PA": {
            "id": "PA",
            "name": "Panama",
            "timezones": [
                "America/Panama"
            ]
        },
        "PE": {
            "id": "PE",
            "name": "Peru",
            "timezones": [
                "America/Lima"
            ]
        },
        "PF": {
            "id": "PF",
            "name": "French Polynesia",
            "timezones": [
                "Pacific/Tahiti",
                "Pacific/Marquesas",
                "Pacific/Gambier"
            ]
        },
        "PG": {
            "id": "PG",
            "name": "Papua New Guinea",
            "timezones": [
                "Pacific/Port_Moresby",
                "Pacific/Bougainville"
            ]
        },
        "PH": {
            "id": "PH",
            "name": "Philippines",
            "timezones": [
                "Asia/Manila"
            ]
        },
        "PK": {
            "id": "PK",
            "name": "Pakistan",
            "timezones": [
                "Asia/Karachi"
            ]
        },
        "PL": {
            "id": "PL",
            "name": "Poland",
            "timezones": [
                "Europe/Warsaw"
            ]
        },
        "PM": {
            "id": "PM",
            "name": "St Pierre & Miquelon",
            "timezones": [
                "America/Miquelon"
            ]
        },
        "PN": {
            "id": "PN",
            "name": "Pitcairn",
            "timezones": [
                "Pacific/Pitcairn"
            ]
        },
        "PR": {
            "id": "PR",
            "name": "Puerto Rico",
            "timezones": [
                "America/Puerto_Rico"
            ]
        },
        "PS": {
            "id": "PS",
            "name": "Palestine",
            "timezones": [
                "Asia/Gaza",
                "Asia/Hebron"
            ]
        },
        "PT": {
            "id": "PT",
            "name": "Portugal",
            "timezones": [
                "Europe/Lisbon",
                "Atlantic/Madeira",
                "Atlantic/Azores"
            ]
        },
        "PW": {
            "id": "PW",
            "name": "Palau",
            "timezones": [
                "Pacific/Palau"
            ]
        },
        "PY": {
            "id": "PY",
            "name": "Paraguay",
            "timezones": [
                "America/Asuncion"
            ]
        },
        "QA": {
            "id": "QA",
            "name": "Qatar",
            "timezones": [
                "Asia/Qatar"
            ]
        },
        "RE": {
            "id": "RE",
            "name": "Réunion",
            "timezones": [
                "Indian/Reunion"
            ]
        },
        "RO": {
            "id": "RO",
            "name": "Romania",
            "timezones": [
                "Europe/Bucharest"
            ]
        },
        "RS": {
            "id": "RS",
            "name": "Serbia",
            "timezones": [
                "Europe/Belgrade"
            ]
        },
        "RU": {
            "id": "RU",
            "name": "Russia",
            "timezones": [
                "Europe/Kaliningrad",
                "Europe/Moscow",
                "Europe/Simferopol",
                "Europe/Volgograd",
                "Europe/Samara",
                "Asia/Yekaterinburg",
                "Asia/Omsk",
                "Asia/Novosibirsk",
                "Asia/Novokuznetsk",
                "Asia/Krasnoyarsk",
                "Asia/Irkutsk",
                "Asia/Chita",
                "Asia/Yakutsk",
                "Asia/Khandyga",
                "Asia/Vladivostok",
                "Asia/Sakhalin",
                "Asia/Ust-Nera",
                "Asia/Magadan",
                "Asia/Srednekolymsk",
                "Asia/Kamchatka",
                "Asia/Anadyr"
            ]
        },
        "RW": {
            "id": "RW",
            "name": "Rwanda",
            "timezones": [
                "Africa/Maputo"
            ]
        },
        "SA": {
            "id": "SA",
            "name": "Saudi Arabia",
            "timezones": [
                "Asia/Riyadh"
            ]
        },
        "SB": {
            "id": "SB",
            "name": "Solomon Islands",
            "timezones": [
                "Pacific/Guadalcanal"
            ]
        },
        "SC": {
            "id": "SC",
            "name": "Seychelles",
            "timezones": [
                "Indian/Mahe"
            ]
        },
        "SD": {
            "id": "SD",
            "name": "Sudan",
            "timezones": [
                "Africa/Khartoum"
            ]
        },
        "SE": {
            "id": "SE",
            "name": "Sweden",
            "timezones": [
                "Europe/Stockholm"
            ]
        },
        "SG": {
            "id": "SG",
            "name": "Singapore",
            "timezones": [
                "Asia/Singapore"
            ]
        },
        "SH": {
            "id": "SH",
            "name": "St Helena",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "SI": {
            "id": "SI",
            "name": "Slovenia",
            "timezones": [
                "Europe/Belgrade"
            ]
        },
        "SJ": {
            "id": "SJ",
            "name": "Svalbard & Jan Mayen",
            "timezones": [
                "Europe/Oslo"
            ]
        },
        "SK": {
            "id": "SK",
            "name": "Slovakia",
            "timezones": [
                "Europe/Prague"
            ]
        },
        "SL": {
            "id": "SL",
            "name": "Sierra Leone",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "SM": {
            "id": "SM",
            "name": "San Marino",
            "timezones": [
                "Europe/Rome"
            ]
        },
        "SN": {
            "id": "SN",
            "name": "Senegal",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "SO": {
            "id": "SO",
            "name": "Somalia",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "SR": {
            "id": "SR",
            "name": "Suriname",
            "timezones": [
                "America/Paramaribo"
            ]
        },
        "SS": {
            "id": "SS",
            "name": "South Sudan",
            "timezones": [
                "Africa/Khartoum"
            ]
        },
        "ST": {
            "id": "ST",
            "name": "Sao Tome & Principe",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "SV": {
            "id": "SV",
            "name": "El Salvador",
            "timezones": [
                "America/El_Salvador"
            ]
        },
        "SX": {
            "id": "SX",
            "name": "St Maarten (Dutch part)",
            "timezones": [
                "America/Curacao"
            ]
        },
        "SY": {
            "id": "SY",
            "name": "Syria",
            "timezones": [
                "Asia/Damascus"
            ]
        },
        "SZ": {
            "id": "SZ",
            "name": "Swaziland",
            "timezones": [
                "Africa/Johannesburg"
            ]
        },
        "TC": {
            "id": "TC",
            "name": "Turks & Caicos Is",
            "timezones": [
                "America/Grand_Turk"
            ]
        },
        "TD": {
            "id": "TD",
            "name": "Chad",
            "timezones": [
                "Africa/Ndjamena"
            ]
        },
        "TF": {
            "id": "TF",
            "name": "French Southern & Antarctic Lands",
            "timezones": [
                "Indian/Reunion",
                "Indian/Kerguelen"
            ]
        },
        "TG": {
            "id": "TG",
            "name": "Togo",
            "timezones": [
                "Africa/Abidjan"
            ]
        },
        "TH": {
            "id": "TH",
            "name": "Thailand",
            "timezones": [
                "Asia/Bangkok"
            ]
        },
        "TJ": {
            "id": "TJ",
            "name": "Tajikistan",
            "timezones": [
                "Asia/Dushanbe"
            ]
        },
        "TK": {
            "id": "TK",
            "name": "Tokelau",
            "timezones": [
                "Pacific/Fakaofo"
            ]
        },
        "TL": {
            "id": "TL",
            "name": "East Timor",
            "timezones": [
                "Asia/Dili"
            ]
        },
        "TM": {
            "id": "TM",
            "name": "Turkmenistan",
            "timezones": [
                "Asia/Ashgabat"
            ]
        },
        "TN": {
            "id": "TN",
            "name": "Tunisia",
            "timezones": [
                "Africa/Tunis"
            ]
        },
        "TO": {
            "id": "TO",
            "name": "Tonga",
            "timezones": [
                "Pacific/Tongatapu"
            ]
        },
        "TR": {
            "id": "TR",
            "name": "Turkey",
            "timezones": [
                "Europe/Istanbul"
            ]
        },
        "TT": {
            "id": "TT",
            "name": "Trinidad & Tobago",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "TV": {
            "id": "TV",
            "name": "Tuvalu",
            "timezones": [
                "Pacific/Funafuti"
            ]
        },
        "TW": {
            "id": "TW",
            "name": "Taiwan",
            "timezones": [
                "Asia/Taipei"
            ]
        },
        "TZ": {
            "id": "TZ",
            "name": "Tanzania",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "UA": {
            "id": "UA",
            "name": "Ukraine",
            "timezones": [
                "Europe/Kiev",
                "Europe/Uzhgorod",
                "Europe/Zaporozhye"
            ]
        },
        "UG": {
            "id": "UG",
            "name": "Uganda",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "UM": {
            "id": "UM",
            "name": "US minor outlying islands",
            "timezones": [
                "Pacific/Pago_Pago",
                "Pacific/Wake",
                "Pacific/Honolulu"
            ]
        },
        "US": {
            "id": "US",
            "name": "United States",
            "timezones": [
                "America/New_York",
                "America/Detroit",
                "America/Kentucky/Louisville",
                "America/Kentucky/Monticello",
                "America/Indiana/Indianapolis",
                "America/Indiana/Vincennes",
                "America/Indiana/Winamac",
                "America/Indiana/Marengo",
                "America/Indiana/Petersburg",
                "America/Indiana/Vevay",
                "America/Chicago",
                "America/Indiana/Tell_City",
                "America/Indiana/Knox",
                "America/Menominee",
                "America/North_Dakota/Center",
                "America/North_Dakota/New_Salem",
                "America/North_Dakota/Beulah",
                "America/Denver",
                "America/Boise",
                "America/Phoenix",
                "America/Los_Angeles",
                "America/Metlakatla",
                "America/Anchorage",
                "America/Juneau",
                "America/Sitka",
                "America/Yakutat",
                "America/Nome",
                "America/Adak",
                "Pacific/Honolulu"
            ]
        },
        "UY": {
            "id": "UY",
            "name": "Uruguay",
            "timezones": [
                "America/Montevideo"
            ]
        },
        "UZ": {
            "id": "UZ",
            "name": "Uzbekistan",
            "timezones": [
                "Asia/Samarkand",
                "Asia/Tashkent"
            ]
        },
        "VA": {
            "id": "VA",
            "name": "Vatican City",
            "timezones": [
                "Europe/Rome"
            ]
        },
        "VC": {
            "id": "VC",
            "name": "St Vincent",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "VE": {
            "id": "VE",
            "name": "Venezuela",
            "timezones": [
                "America/Caracas"
            ]
        },
        "VG": {
            "id": "VG",
            "name": "Virgin Islands (UK)",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "VI": {
            "id": "VI",
            "name": "Virgin Islands (US)",
            "timezones": [
                "America/Port_of_Spain"
            ]
        },
        "VN": {
            "id": "VN",
            "name": "Vietnam",
            "timezones": [
                "Asia/Bangkok",
                "Asia/Ho_Chi_Minh"
            ]
        },
        "VU": {
            "id": "VU",
            "name": "Vanuatu",
            "timezones": [
                "Pacific/Efate"
            ]
        },
        "WF": {
            "id": "WF",
            "name": "Wallis & Futuna",
            "timezones": [
                "Pacific/Wallis"
            ]
        },
        "WS": {
            "id": "WS",
            "name": "Samoa (western)",
            "timezones": [
                "Pacific/Apia"
            ]
        },
        "YE": {
            "id": "YE",
            "name": "Yemen",
            "timezones": [
                "Asia/Riyadh"
            ]
        },
        "YT": {
            "id": "YT",
            "name": "Mayotte",
            "timezones": [
                "Africa/Nairobi"
            ]
        },
        "ZA": {
            "id": "ZA",
            "name": "South Africa",
            "timezones": [
                "Africa/Johannesburg"
            ]
        },
        "ZM": {
            "id": "ZM",
            "name": "Zambia",
            "timezones": [
                "Africa/Maputo"
            ]
        },
        "ZW": {
            "id": "ZW",
            "name": "Zimbabwe",
            "timezones": [
                "Africa/Maputo"
            ]
        }
    },
    "timezones": {
        "Europe/Andorra": {
            "name": "Europe/Andorra",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "AD"
            ]
        },
        "Asia/Dubai": {
            "name": "Asia/Dubai",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "AE",
                "OM"
            ]
        },
        "Asia/Kabul": {
            "name": "Asia/Kabul",
            "utcOffset": 270,
            "offsetStr": "+04:30",
            "countries": [
                "AF"
            ]
        },
        "Europe/Tirane": {
            "name": "Europe/Tirane",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "AL"
            ]
        },
        "Asia/Yerevan": {
            "name": "Asia/Yerevan",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "AM"
            ]
        },
        "Antarctica/Rothera": {
            "name": "Antarctica/Rothera",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Palmer": {
            "name": "Antarctica/Palmer",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Mawson": {
            "name": "Antarctica/Mawson",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Davis": {
            "name": "Antarctica/Davis",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Casey": {
            "name": "Antarctica/Casey",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Vostok": {
            "name": "Antarctica/Vostok",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/DumontDUrville": {
            "name": "Antarctica/DumontDUrville",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Syowa": {
            "name": "Antarctica/Syowa",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "AQ"
            ]
        },
        "Antarctica/Troll": {
            "name": "Antarctica/Troll",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "AQ"
            ]
        },
        "America/Argentina/Buenos_Aires": {
            "name": "America/Argentina/Buenos_Aires",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Cordoba": {
            "name": "America/Argentina/Cordoba",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Salta": {
            "name": "America/Argentina/Salta",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Jujuy": {
            "name": "America/Argentina/Jujuy",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Tucuman": {
            "name": "America/Argentina/Tucuman",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Catamarca": {
            "name": "America/Argentina/Catamarca",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/La_Rioja": {
            "name": "America/Argentina/La_Rioja",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/San_Juan": {
            "name": "America/Argentina/San_Juan",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Mendoza": {
            "name": "America/Argentina/Mendoza",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/San_Luis": {
            "name": "America/Argentina/San_Luis",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Rio_Gallegos": {
            "name": "America/Argentina/Rio_Gallegos",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "America/Argentina/Ushuaia": {
            "name": "America/Argentina/Ushuaia",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "AR"
            ]
        },
        "Pacific/Pago_Pago": {
            "name": "Pacific/Pago_Pago",
            "utcOffset": -660,
            "offsetStr": "-11:00",
            "countries": [
                "AS",
                "UM"
            ]
        },
        "Europe/Vienna": {
            "name": "Europe/Vienna",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "AT"
            ]
        },
        "Australia/Lord_Howe": {
            "name": "Australia/Lord_Howe",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "AU"
            ]
        },
        "Antarctica/Macquarie": {
            "name": "Antarctica/Macquarie",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Hobart": {
            "name": "Australia/Hobart",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Currie": {
            "name": "Australia/Currie",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Melbourne": {
            "name": "Australia/Melbourne",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Sydney": {
            "name": "Australia/Sydney",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Broken_Hill": {
            "name": "Australia/Broken_Hill",
            "utcOffset": 630,
            "offsetStr": "+10:30",
            "countries": [
                "AU"
            ]
        },
        "Australia/Brisbane": {
            "name": "Australia/Brisbane",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Lindeman": {
            "name": "Australia/Lindeman",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Adelaide": {
            "name": "Australia/Adelaide",
            "utcOffset": 630,
            "offsetStr": "+10:30",
            "countries": [
                "AU"
            ]
        },
        "Australia/Darwin": {
            "name": "Australia/Darwin",
            "utcOffset": 570,
            "offsetStr": "+09:30",
            "countries": [
                "AU"
            ]
        },
        "Australia/Perth": {
            "name": "Australia/Perth",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "AU"
            ]
        },
        "Australia/Eucla": {
            "name": "Australia/Eucla",
            "utcOffset": 525,
            "offsetStr": "+08:45",
            "countries": [
                "AU"
            ]
        },
        "Asia/Baku": {
            "name": "Asia/Baku",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "AZ"
            ]
        },
        "America/Barbados": {
            "name": "America/Barbados",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "BB"
            ]
        },
        "Asia/Dhaka": {
            "name": "Asia/Dhaka",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "BD"
            ]
        },
        "Europe/Brussels": {
            "name": "Europe/Brussels",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "BE"
            ]
        },
        "Europe/Sofia": {
            "name": "Europe/Sofia",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "BG"
            ]
        },
        "Atlantic/Bermuda": {
            "name": "Atlantic/Bermuda",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "BM"
            ]
        },
        "Asia/Brunei": {
            "name": "Asia/Brunei",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "BN"
            ]
        },
        "America/La_Paz": {
            "name": "America/La_Paz",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "BO"
            ]
        },
        "America/Noronha": {
            "name": "America/Noronha",
            "utcOffset": -120,
            "offsetStr": "-02:00",
            "countries": [
                "BR"
            ]
        },
        "America/Belem": {
            "name": "America/Belem",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Fortaleza": {
            "name": "America/Fortaleza",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Recife": {
            "name": "America/Recife",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Araguaina": {
            "name": "America/Araguaina",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Maceio": {
            "name": "America/Maceio",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Bahia": {
            "name": "America/Bahia",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Sao_Paulo": {
            "name": "America/Sao_Paulo",
            "utcOffset": -120,
            "offsetStr": "-02:00",
            "countries": [
                "BR"
            ]
        },
        "America/Campo_Grande": {
            "name": "America/Campo_Grande",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Cuiaba": {
            "name": "America/Cuiaba",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Santarem": {
            "name": "America/Santarem",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "BR"
            ]
        },
        "America/Porto_Velho": {
            "name": "America/Porto_Velho",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "BR"
            ]
        },
        "America/Boa_Vista": {
            "name": "America/Boa_Vista",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "BR"
            ]
        },
        "America/Manaus": {
            "name": "America/Manaus",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "BR"
            ]
        },
        "America/Eirunepe": {
            "name": "America/Eirunepe",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "BR"
            ]
        },
        "America/Rio_Branco": {
            "name": "America/Rio_Branco",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "BR"
            ]
        },
        "America/Nassau": {
            "name": "America/Nassau",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "BS"
            ]
        },
        "Asia/Thimphu": {
            "name": "Asia/Thimphu",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "BT"
            ]
        },
        "Europe/Minsk": {
            "name": "Europe/Minsk",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "BY"
            ]
        },
        "America/Belize": {
            "name": "America/Belize",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "BZ"
            ]
        },
        "America/St_Johns": {
            "name": "America/St_Johns",
            "utcOffset": -210,
            "offsetStr": "-03:30",
            "countries": [
                "CA"
            ]
        },
        "America/Halifax": {
            "name": "America/Halifax",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "CA"
            ]
        },
        "America/Glace_Bay": {
            "name": "America/Glace_Bay",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "CA"
            ]
        },
        "America/Moncton": {
            "name": "America/Moncton",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "CA"
            ]
        },
        "America/Goose_Bay": {
            "name": "America/Goose_Bay",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "CA"
            ]
        },
        "America/Blanc-Sablon": {
            "name": "America/Blanc-Sablon",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "CA"
            ]
        },
        "America/Toronto": {
            "name": "America/Toronto",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CA"
            ]
        },
        "America/Nipigon": {
            "name": "America/Nipigon",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CA"
            ]
        },
        "America/Thunder_Bay": {
            "name": "America/Thunder_Bay",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CA"
            ]
        },
        "America/Iqaluit": {
            "name": "America/Iqaluit",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CA"
            ]
        },
        "America/Pangnirtung": {
            "name": "America/Pangnirtung",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CA"
            ]
        },
        "America/Resolute": {
            "name": "America/Resolute",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CA"
            ]
        },
        "America/Atikokan": {
            "name": "America/Atikokan",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CA"
            ]
        },
        "America/Rankin_Inlet": {
            "name": "America/Rankin_Inlet",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CA"
            ]
        },
        "America/Winnipeg": {
            "name": "America/Winnipeg",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CA"
            ]
        },
        "America/Rainy_River": {
            "name": "America/Rainy_River",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CA"
            ]
        },
        "America/Regina": {
            "name": "America/Regina",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CA"
            ]
        },
        "America/Swift_Current": {
            "name": "America/Swift_Current",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CA"
            ]
        },
        "America/Edmonton": {
            "name": "America/Edmonton",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Cambridge_Bay": {
            "name": "America/Cambridge_Bay",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Yellowknife": {
            "name": "America/Yellowknife",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Inuvik": {
            "name": "America/Inuvik",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Creston": {
            "name": "America/Creston",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Dawson_Creek": {
            "name": "America/Dawson_Creek",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Fort_Nelson": {
            "name": "America/Fort_Nelson",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "CA"
            ]
        },
        "America/Vancouver": {
            "name": "America/Vancouver",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "CA"
            ]
        },
        "America/Whitehorse": {
            "name": "America/Whitehorse",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "CA"
            ]
        },
        "America/Dawson": {
            "name": "America/Dawson",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "CA"
            ]
        },
        "Indian/Cocos": {
            "name": "Indian/Cocos",
            "utcOffset": 390,
            "offsetStr": "+06:30",
            "countries": [
                "CC"
            ]
        },
        "Europe/Zurich": {
            "name": "Europe/Zurich",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "CH",
                "DE",
                "LI"
            ]
        },
        "Africa/Abidjan": {
            "name": "Africa/Abidjan",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "CI",
                "BF",
                "GM",
                "GN",
                "ML",
                "MR",
                "SH",
                "SL",
                "SN",
                "ST",
                "TG"
            ]
        },
        "Pacific/Rarotonga": {
            "name": "Pacific/Rarotonga",
            "utcOffset": -600,
            "offsetStr": "-10:00",
            "countries": [
                "CK"
            ]
        },
        "America/Santiago": {
            "name": "America/Santiago",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "CL"
            ]
        },
        "Pacific/Easter": {
            "name": "Pacific/Easter",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CL"
            ]
        },
        "Asia/Shanghai": {
            "name": "Asia/Shanghai",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "CN"
            ]
        },
        "Asia/Urumqi": {
            "name": "Asia/Urumqi",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "CN"
            ]
        },
        "America/Bogota": {
            "name": "America/Bogota",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CO"
            ]
        },
        "America/Costa_Rica": {
            "name": "America/Costa_Rica",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "CR"
            ]
        },
        "America/Havana": {
            "name": "America/Havana",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "CU"
            ]
        },
        "Atlantic/Cape_Verde": {
            "name": "Atlantic/Cape_Verde",
            "utcOffset": -60,
            "offsetStr": "-01:00",
            "countries": [
                "CV"
            ]
        },
        "America/Curacao": {
            "name": "America/Curacao",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "CW",
                "AW",
                "BQ",
                "SX"
            ]
        },
        "Indian/Christmas": {
            "name": "Indian/Christmas",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "CX"
            ]
        },
        "Asia/Nicosia": {
            "name": "Asia/Nicosia",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "CY"
            ]
        },
        "Europe/Prague": {
            "name": "Europe/Prague",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "CZ",
                "SK"
            ]
        },
        "Europe/Berlin": {
            "name": "Europe/Berlin",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "DE"
            ]
        },
        "Europe/Copenhagen": {
            "name": "Europe/Copenhagen",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "DK"
            ]
        },
        "America/Santo_Domingo": {
            "name": "America/Santo_Domingo",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "DO"
            ]
        },
        "Africa/Algiers": {
            "name": "Africa/Algiers",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "DZ"
            ]
        },
        "America/Guayaquil": {
            "name": "America/Guayaquil",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "EC"
            ]
        },
        "Pacific/Galapagos": {
            "name": "Pacific/Galapagos",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "EC"
            ]
        },
        "Europe/Tallinn": {
            "name": "Europe/Tallinn",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "EE"
            ]
        },
        "Africa/Cairo": {
            "name": "Africa/Cairo",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "EG"
            ]
        },
        "Africa/El_Aaiun": {
            "name": "Africa/El_Aaiun",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "EH"
            ]
        },
        "Europe/Madrid": {
            "name": "Europe/Madrid",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "ES"
            ]
        },
        "Africa/Ceuta": {
            "name": "Africa/Ceuta",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "ES"
            ]
        },
        "Atlantic/Canary": {
            "name": "Atlantic/Canary",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "ES"
            ]
        },
        "Europe/Helsinki": {
            "name": "Europe/Helsinki",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "FI",
                "AX"
            ]
        },
        "Pacific/Fiji": {
            "name": "Pacific/Fiji",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "FJ"
            ]
        },
        "Atlantic/Stanley": {
            "name": "Atlantic/Stanley",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "FK"
            ]
        },
        "Pacific/Chuuk": {
            "name": "Pacific/Chuuk",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "FM"
            ]
        },
        "Pacific/Pohnpei": {
            "name": "Pacific/Pohnpei",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "FM"
            ]
        },
        "Pacific/Kosrae": {
            "name": "Pacific/Kosrae",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "FM"
            ]
        },
        "Atlantic/Faroe": {
            "name": "Atlantic/Faroe",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "FO"
            ]
        },
        "Europe/Paris": {
            "name": "Europe/Paris",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "FR"
            ]
        },
        "Europe/London": {
            "name": "Europe/London",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "GB",
                "GG",
                "IM",
                "JE"
            ]
        },
        "Asia/Tbilisi": {
            "name": "Asia/Tbilisi",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "GE"
            ]
        },
        "America/Cayenne": {
            "name": "America/Cayenne",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "GF"
            ]
        },
        "Africa/Accra": {
            "name": "Africa/Accra",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "GH"
            ]
        },
        "Europe/Gibraltar": {
            "name": "Europe/Gibraltar",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "GI"
            ]
        },
        "America/Godthab": {
            "name": "America/Godthab",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "GL"
            ]
        },
        "America/Danmarkshavn": {
            "name": "America/Danmarkshavn",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "GL"
            ]
        },
        "America/Scoresbysund": {
            "name": "America/Scoresbysund",
            "utcOffset": -60,
            "offsetStr": "-01:00",
            "countries": [
                "GL"
            ]
        },
        "America/Thule": {
            "name": "America/Thule",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "GL"
            ]
        },
        "Europe/Athens": {
            "name": "Europe/Athens",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "GR"
            ]
        },
        "Atlantic/South_Georgia": {
            "name": "Atlantic/South_Georgia",
            "utcOffset": -120,
            "offsetStr": "-02:00",
            "countries": [
                "GS"
            ]
        },
        "America/Guatemala": {
            "name": "America/Guatemala",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "GT"
            ]
        },
        "Pacific/Guam": {
            "name": "Pacific/Guam",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "GU",
                "MP"
            ]
        },
        "Africa/Bissau": {
            "name": "Africa/Bissau",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "GW"
            ]
        },
        "America/Guyana": {
            "name": "America/Guyana",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "GY"
            ]
        },
        "Asia/Hong_Kong": {
            "name": "Asia/Hong_Kong",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "HK"
            ]
        },
        "America/Tegucigalpa": {
            "name": "America/Tegucigalpa",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "HN"
            ]
        },
        "America/Port-au-Prince": {
            "name": "America/Port-au-Prince",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "HT"
            ]
        },
        "Europe/Budapest": {
            "name": "Europe/Budapest",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "HU"
            ]
        },
        "Asia/Jakarta": {
            "name": "Asia/Jakarta",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "ID"
            ]
        },
        "Asia/Pontianak": {
            "name": "Asia/Pontianak",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "ID"
            ]
        },
        "Asia/Makassar": {
            "name": "Asia/Makassar",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "ID"
            ]
        },
        "Asia/Jayapura": {
            "name": "Asia/Jayapura",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "ID"
            ]
        },
        "Europe/Dublin": {
            "name": "Europe/Dublin",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "IE"
            ]
        },
        "Asia/Jerusalem": {
            "name": "Asia/Jerusalem",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "IL"
            ]
        },
        "Asia/Kolkata": {
            "name": "Asia/Kolkata",
            "utcOffset": 330,
            "offsetStr": "+05:30",
            "countries": [
                "IN"
            ]
        },
        "Indian/Chagos": {
            "name": "Indian/Chagos",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "IO"
            ]
        },
        "Asia/Baghdad": {
            "name": "Asia/Baghdad",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "IQ"
            ]
        },
        "Asia/Tehran": {
            "name": "Asia/Tehran",
            "utcOffset": 210,
            "offsetStr": "+03:30",
            "countries": [
                "IR"
            ]
        },
        "Atlantic/Reykjavik": {
            "name": "Atlantic/Reykjavik",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "IS"
            ]
        },
        "Europe/Rome": {
            "name": "Europe/Rome",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "IT",
                "SM",
                "VA"
            ]
        },
        "America/Jamaica": {
            "name": "America/Jamaica",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "JM"
            ]
        },
        "Asia/Amman": {
            "name": "Asia/Amman",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "JO"
            ]
        },
        "Asia/Tokyo": {
            "name": "Asia/Tokyo",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "JP"
            ]
        },
        "Africa/Nairobi": {
            "name": "Africa/Nairobi",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "KE",
                "DJ",
                "ER",
                "ET",
                "KM",
                "MG",
                "SO",
                "TZ",
                "UG",
                "YT"
            ]
        },
        "Asia/Bishkek": {
            "name": "Asia/Bishkek",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "KG"
            ]
        },
        "Pacific/Tarawa": {
            "name": "Pacific/Tarawa",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "KI"
            ]
        },
        "Pacific/Enderbury": {
            "name": "Pacific/Enderbury",
            "utcOffset": 780,
            "offsetStr": "+13:00",
            "countries": [
                "KI"
            ]
        },
        "Pacific/Kiritimati": {
            "name": "Pacific/Kiritimati",
            "utcOffset": 840,
            "offsetStr": "+14:00",
            "countries": [
                "KI"
            ]
        },
        "Asia/Pyongyang": {
            "name": "Asia/Pyongyang",
            "utcOffset": 510,
            "offsetStr": "+08:30",
            "countries": [
                "KP"
            ]
        },
        "Asia/Seoul": {
            "name": "Asia/Seoul",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "KR"
            ]
        },
        "America/Cayman": {
            "name": "America/Cayman",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "KY"
            ]
        },
        "Asia/Almaty": {
            "name": "Asia/Almaty",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "KZ"
            ]
        },
        "Asia/Qyzylorda": {
            "name": "Asia/Qyzylorda",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "KZ"
            ]
        },
        "Asia/Aqtobe": {
            "name": "Asia/Aqtobe",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "KZ"
            ]
        },
        "Asia/Aqtau": {
            "name": "Asia/Aqtau",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "KZ"
            ]
        },
        "Asia/Oral": {
            "name": "Asia/Oral",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "KZ"
            ]
        },
        "Asia/Beirut": {
            "name": "Asia/Beirut",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "LB"
            ]
        },
        "Asia/Colombo": {
            "name": "Asia/Colombo",
            "utcOffset": 330,
            "offsetStr": "+05:30",
            "countries": [
                "LK"
            ]
        },
        "Africa/Monrovia": {
            "name": "Africa/Monrovia",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "LR"
            ]
        },
        "Europe/Vilnius": {
            "name": "Europe/Vilnius",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "LT"
            ]
        },
        "Europe/Luxembourg": {
            "name": "Europe/Luxembourg",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "LU"
            ]
        },
        "Europe/Riga": {
            "name": "Europe/Riga",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "LV"
            ]
        },
        "Africa/Tripoli": {
            "name": "Africa/Tripoli",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "LY"
            ]
        },
        "Africa/Casablanca": {
            "name": "Africa/Casablanca",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "MA"
            ]
        },
        "Europe/Monaco": {
            "name": "Europe/Monaco",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "MC"
            ]
        },
        "Europe/Chisinau": {
            "name": "Europe/Chisinau",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "MD"
            ]
        },
        "Pacific/Majuro": {
            "name": "Pacific/Majuro",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "MH"
            ]
        },
        "Pacific/Kwajalein": {
            "name": "Pacific/Kwajalein",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "MH"
            ]
        },
        "Asia/Rangoon": {
            "name": "Asia/Rangoon",
            "utcOffset": 390,
            "offsetStr": "+06:30",
            "countries": [
                "MM"
            ]
        },
        "Asia/Ulaanbaatar": {
            "name": "Asia/Ulaanbaatar",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "MN"
            ]
        },
        "Asia/Hovd": {
            "name": "Asia/Hovd",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "MN"
            ]
        },
        "Asia/Choibalsan": {
            "name": "Asia/Choibalsan",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "MN"
            ]
        },
        "Asia/Macau": {
            "name": "Asia/Macau",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "MO"
            ]
        },
        "America/Martinique": {
            "name": "America/Martinique",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "MQ"
            ]
        },
        "Europe/Malta": {
            "name": "Europe/Malta",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "MT"
            ]
        },
        "Indian/Mauritius": {
            "name": "Indian/Mauritius",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "MU"
            ]
        },
        "Indian/Maldives": {
            "name": "Indian/Maldives",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "MV"
            ]
        },
        "America/Mexico_City": {
            "name": "America/Mexico_City",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "MX"
            ]
        },
        "America/Cancun": {
            "name": "America/Cancun",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "MX"
            ]
        },
        "America/Merida": {
            "name": "America/Merida",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "MX"
            ]
        },
        "America/Monterrey": {
            "name": "America/Monterrey",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "MX"
            ]
        },
        "America/Matamoros": {
            "name": "America/Matamoros",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "MX"
            ]
        },
        "America/Mazatlan": {
            "name": "America/Mazatlan",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "MX"
            ]
        },
        "America/Chihuahua": {
            "name": "America/Chihuahua",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "MX"
            ]
        },
        "America/Ojinaga": {
            "name": "America/Ojinaga",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "MX"
            ]
        },
        "America/Hermosillo": {
            "name": "America/Hermosillo",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "MX"
            ]
        },
        "America/Tijuana": {
            "name": "America/Tijuana",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "MX"
            ]
        },
        "America/Santa_Isabel": {
            "name": "America/Santa_Isabel",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "MX"
            ]
        },
        "America/Bahia_Banderas": {
            "name": "America/Bahia_Banderas",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "MX"
            ]
        },
        "Asia/Kuala_Lumpur": {
            "name": "Asia/Kuala_Lumpur",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "MY"
            ]
        },
        "Asia/Kuching": {
            "name": "Asia/Kuching",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "MY"
            ]
        },
        "Africa/Maputo": {
            "name": "Africa/Maputo",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "MZ",
                "BI",
                "BW",
                "CD",
                "MW",
                "RW",
                "ZM",
                "ZW"
            ]
        },
        "Africa/Windhoek": {
            "name": "Africa/Windhoek",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "NA"
            ]
        },
        "Pacific/Noumea": {
            "name": "Pacific/Noumea",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "NC"
            ]
        },
        "Pacific/Norfolk": {
            "name": "Pacific/Norfolk",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "NF"
            ]
        },
        "Africa/Lagos": {
            "name": "Africa/Lagos",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "NG",
                "AO",
                "BJ",
                "CD",
                "CF",
                "CG",
                "CM",
                "GA",
                "GQ",
                "NE"
            ]
        },
        "America/Managua": {
            "name": "America/Managua",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "NI"
            ]
        },
        "Europe/Amsterdam": {
            "name": "Europe/Amsterdam",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "NL"
            ]
        },
        "Europe/Oslo": {
            "name": "Europe/Oslo",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "NO",
                "SJ"
            ]
        },
        "Asia/Kathmandu": {
            "name": "Asia/Kathmandu",
            "utcOffset": 345,
            "offsetStr": "+05:45",
            "countries": [
                "NP"
            ]
        },
        "Pacific/Nauru": {
            "name": "Pacific/Nauru",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "NR"
            ]
        },
        "Pacific/Niue": {
            "name": "Pacific/Niue",
            "utcOffset": -660,
            "offsetStr": "-11:00",
            "countries": [
                "NU"
            ]
        },
        "Pacific/Auckland": {
            "name": "Pacific/Auckland",
            "utcOffset": 780,
            "offsetStr": "+13:00",
            "countries": [
                "NZ",
                "AQ"
            ]
        },
        "Pacific/Chatham": {
            "name": "Pacific/Chatham",
            "utcOffset": 825,
            "offsetStr": "+13:45",
            "countries": [
                "NZ"
            ]
        },
        "America/Panama": {
            "name": "America/Panama",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "PA"
            ]
        },
        "America/Lima": {
            "name": "America/Lima",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "PE"
            ]
        },
        "Pacific/Tahiti": {
            "name": "Pacific/Tahiti",
            "utcOffset": -600,
            "offsetStr": "-10:00",
            "countries": [
                "PF"
            ]
        },
        "Pacific/Marquesas": {
            "name": "Pacific/Marquesas",
            "utcOffset": -570,
            "offsetStr": "-09:30",
            "countries": [
                "PF"
            ]
        },
        "Pacific/Gambier": {
            "name": "Pacific/Gambier",
            "utcOffset": -540,
            "offsetStr": "-09:00",
            "countries": [
                "PF"
            ]
        },
        "Pacific/Port_Moresby": {
            "name": "Pacific/Port_Moresby",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "PG"
            ]
        },
        "Pacific/Bougainville": {
            "name": "Pacific/Bougainville",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "PG"
            ]
        },
        "Asia/Manila": {
            "name": "Asia/Manila",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "PH"
            ]
        },
        "Asia/Karachi": {
            "name": "Asia/Karachi",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "PK"
            ]
        },
        "Europe/Warsaw": {
            "name": "Europe/Warsaw",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "PL"
            ]
        },
        "America/Miquelon": {
            "name": "America/Miquelon",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "PM"
            ]
        },
        "Pacific/Pitcairn": {
            "name": "Pacific/Pitcairn",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "PN"
            ]
        },
        "America/Puerto_Rico": {
            "name": "America/Puerto_Rico",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "PR"
            ]
        },
        "Asia/Gaza": {
            "name": "Asia/Gaza",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "PS"
            ]
        },
        "Asia/Hebron": {
            "name": "Asia/Hebron",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "PS"
            ]
        },
        "Europe/Lisbon": {
            "name": "Europe/Lisbon",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "PT"
            ]
        },
        "Atlantic/Madeira": {
            "name": "Atlantic/Madeira",
            "utcOffset": 0,
            "offsetStr": "+00:00",
            "countries": [
                "PT"
            ]
        },
        "Atlantic/Azores": {
            "name": "Atlantic/Azores",
            "utcOffset": -60,
            "offsetStr": "-01:00",
            "countries": [
                "PT"
            ]
        },
        "Pacific/Palau": {
            "name": "Pacific/Palau",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "PW"
            ]
        },
        "America/Asuncion": {
            "name": "America/Asuncion",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "PY"
            ]
        },
        "Asia/Qatar": {
            "name": "Asia/Qatar",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "QA",
                "BH"
            ]
        },
        "Indian/Reunion": {
            "name": "Indian/Reunion",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "RE",
                "TF"
            ]
        },
        "Europe/Bucharest": {
            "name": "Europe/Bucharest",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "RO"
            ]
        },
        "Europe/Belgrade": {
            "name": "Europe/Belgrade",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "RS",
                "BA",
                "HR",
                "ME",
                "MK",
                "SI"
            ]
        },
        "Europe/Kaliningrad": {
            "name": "Europe/Kaliningrad",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "RU"
            ]
        },
        "Europe/Moscow": {
            "name": "Europe/Moscow",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "RU"
            ]
        },
        "Europe/Simferopol": {
            "name": "Europe/Simferopol",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "RU"
            ]
        },
        "Europe/Volgograd": {
            "name": "Europe/Volgograd",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "RU"
            ]
        },
        "Europe/Samara": {
            "name": "Europe/Samara",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Yekaterinburg": {
            "name": "Asia/Yekaterinburg",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Omsk": {
            "name": "Asia/Omsk",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Novosibirsk": {
            "name": "Asia/Novosibirsk",
            "utcOffset": 360,
            "offsetStr": "+06:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Novokuznetsk": {
            "name": "Asia/Novokuznetsk",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Krasnoyarsk": {
            "name": "Asia/Krasnoyarsk",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Irkutsk": {
            "name": "Asia/Irkutsk",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Chita": {
            "name": "Asia/Chita",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Yakutsk": {
            "name": "Asia/Yakutsk",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Khandyga": {
            "name": "Asia/Khandyga",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Vladivostok": {
            "name": "Asia/Vladivostok",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Sakhalin": {
            "name": "Asia/Sakhalin",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Ust-Nera": {
            "name": "Asia/Ust-Nera",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Magadan": {
            "name": "Asia/Magadan",
            "utcOffset": 600,
            "offsetStr": "+10:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Srednekolymsk": {
            "name": "Asia/Srednekolymsk",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Kamchatka": {
            "name": "Asia/Kamchatka",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Anadyr": {
            "name": "Asia/Anadyr",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "RU"
            ]
        },
        "Asia/Riyadh": {
            "name": "Asia/Riyadh",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "SA",
                "KW",
                "YE"
            ]
        },
        "Pacific/Guadalcanal": {
            "name": "Pacific/Guadalcanal",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "SB"
            ]
        },
        "Indian/Mahe": {
            "name": "Indian/Mahe",
            "utcOffset": 240,
            "offsetStr": "+04:00",
            "countries": [
                "SC"
            ]
        },
        "Africa/Khartoum": {
            "name": "Africa/Khartoum",
            "utcOffset": 180,
            "offsetStr": "+03:00",
            "countries": [
                "SD",
                "SS"
            ]
        },
        "Europe/Stockholm": {
            "name": "Europe/Stockholm",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "SE"
            ]
        },
        "Asia/Singapore": {
            "name": "Asia/Singapore",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "SG"
            ]
        },
        "America/Paramaribo": {
            "name": "America/Paramaribo",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "SR"
            ]
        },
        "America/El_Salvador": {
            "name": "America/El_Salvador",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "SV"
            ]
        },
        "Asia/Damascus": {
            "name": "Asia/Damascus",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "SY"
            ]
        },
        "America/Grand_Turk": {
            "name": "America/Grand_Turk",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "TC"
            ]
        },
        "Africa/Ndjamena": {
            "name": "Africa/Ndjamena",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "TD"
            ]
        },
        "Indian/Kerguelen": {
            "name": "Indian/Kerguelen",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "TF"
            ]
        },
        "Asia/Bangkok": {
            "name": "Asia/Bangkok",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "TH",
                "KH",
                "LA",
                "VN"
            ]
        },
        "Asia/Dushanbe": {
            "name": "Asia/Dushanbe",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "TJ"
            ]
        },
        "Pacific/Fakaofo": {
            "name": "Pacific/Fakaofo",
            "utcOffset": 780,
            "offsetStr": "+13:00",
            "countries": [
                "TK"
            ]
        },
        "Asia/Dili": {
            "name": "Asia/Dili",
            "utcOffset": 540,
            "offsetStr": "+09:00",
            "countries": [
                "TL"
            ]
        },
        "Asia/Ashgabat": {
            "name": "Asia/Ashgabat",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "TM"
            ]
        },
        "Africa/Tunis": {
            "name": "Africa/Tunis",
            "utcOffset": 60,
            "offsetStr": "+01:00",
            "countries": [
                "TN"
            ]
        },
        "Pacific/Tongatapu": {
            "name": "Pacific/Tongatapu",
            "utcOffset": 780,
            "offsetStr": "+13:00",
            "countries": [
                "TO"
            ]
        },
        "Europe/Istanbul": {
            "name": "Europe/Istanbul",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "TR"
            ]
        },
        "America/Port_of_Spain": {
            "name": "America/Port_of_Spain",
            "utcOffset": -240,
            "offsetStr": "-04:00",
            "countries": [
                "TT",
                "AG",
                "AI",
                "BL",
                "DM",
                "GD",
                "GP",
                "KN",
                "LC",
                "MF",
                "MS",
                "VC",
                "VG",
                "VI"
            ]
        },
        "Pacific/Funafuti": {
            "name": "Pacific/Funafuti",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "TV"
            ]
        },
        "Asia/Taipei": {
            "name": "Asia/Taipei",
            "utcOffset": 480,
            "offsetStr": "+08:00",
            "countries": [
                "TW"
            ]
        },
        "Europe/Kiev": {
            "name": "Europe/Kiev",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "UA"
            ]
        },
        "Europe/Uzhgorod": {
            "name": "Europe/Uzhgorod",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "UA"
            ]
        },
        "Europe/Zaporozhye": {
            "name": "Europe/Zaporozhye",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "UA"
            ]
        },
        "Pacific/Wake": {
            "name": "Pacific/Wake",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "UM"
            ]
        },
        "America/New_York": {
            "name": "America/New_York",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Detroit": {
            "name": "America/Detroit",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Kentucky/Louisville": {
            "name": "America/Kentucky/Louisville",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Kentucky/Monticello": {
            "name": "America/Kentucky/Monticello",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Indianapolis": {
            "name": "America/Indiana/Indianapolis",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Vincennes": {
            "name": "America/Indiana/Vincennes",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Winamac": {
            "name": "America/Indiana/Winamac",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Marengo": {
            "name": "America/Indiana/Marengo",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Petersburg": {
            "name": "America/Indiana/Petersburg",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Vevay": {
            "name": "America/Indiana/Vevay",
            "utcOffset": -300,
            "offsetStr": "-05:00",
            "countries": [
                "US"
            ]
        },
        "America/Chicago": {
            "name": "America/Chicago",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Tell_City": {
            "name": "America/Indiana/Tell_City",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/Indiana/Knox": {
            "name": "America/Indiana/Knox",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/Menominee": {
            "name": "America/Menominee",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/North_Dakota/Center": {
            "name": "America/North_Dakota/Center",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/North_Dakota/New_Salem": {
            "name": "America/North_Dakota/New_Salem",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/North_Dakota/Beulah": {
            "name": "America/North_Dakota/Beulah",
            "utcOffset": -360,
            "offsetStr": "-06:00",
            "countries": [
                "US"
            ]
        },
        "America/Denver": {
            "name": "America/Denver",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "US"
            ]
        },
        "America/Boise": {
            "name": "America/Boise",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "US"
            ]
        },
        "America/Phoenix": {
            "name": "America/Phoenix",
            "utcOffset": -420,
            "offsetStr": "-07:00",
            "countries": [
                "US"
            ]
        },
        "America/Los_Angeles": {
            "name": "America/Los_Angeles",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "US"
            ]
        },
        "America/Metlakatla": {
            "name": "America/Metlakatla",
            "utcOffset": -480,
            "offsetStr": "-08:00",
            "countries": [
                "US"
            ]
        },
        "America/Anchorage": {
            "name": "America/Anchorage",
            "utcOffset": -540,
            "offsetStr": "-09:00",
            "countries": [
                "US"
            ]
        },
        "America/Juneau": {
            "name": "America/Juneau",
            "utcOffset": -540,
            "offsetStr": "-09:00",
            "countries": [
                "US"
            ]
        },
        "America/Sitka": {
            "name": "America/Sitka",
            "utcOffset": -540,
            "offsetStr": "-09:00",
            "countries": [
                "US"
            ]
        },
        "America/Yakutat": {
            "name": "America/Yakutat",
            "utcOffset": -540,
            "offsetStr": "-09:00",
            "countries": [
                "US"
            ]
        },
        "America/Nome": {
            "name": "America/Nome",
            "utcOffset": -540,
            "offsetStr": "-09:00",
            "countries": [
                "US"
            ]
        },
        "America/Adak": {
            "name": "America/Adak",
            "utcOffset": -600,
            "offsetStr": "-10:00",
            "countries": [
                "US"
            ]
        },
        "Pacific/Honolulu": {
            "name": "Pacific/Honolulu",
            "utcOffset": -600,
            "offsetStr": "-10:00",
            "countries": [
                "US",
                "UM"
            ]
        },
        "America/Montevideo": {
            "name": "America/Montevideo",
            "utcOffset": -180,
            "offsetStr": "-03:00",
            "countries": [
                "UY"
            ]
        },
        "Asia/Samarkand": {
            "name": "Asia/Samarkand",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "UZ"
            ]
        },
        "Asia/Tashkent": {
            "name": "Asia/Tashkent",
            "utcOffset": 300,
            "offsetStr": "+05:00",
            "countries": [
                "UZ"
            ]
        },
        "America/Caracas": {
            "name": "America/Caracas",
            "utcOffset": -270,
            "offsetStr": "-04:30",
            "countries": [
                "VE"
            ]
        },
        "Asia/Ho_Chi_Minh": {
            "name": "Asia/Ho_Chi_Minh",
            "utcOffset": 420,
            "offsetStr": "+07:00",
            "countries": [
                "VN"
            ]
        },
        "Pacific/Efate": {
            "name": "Pacific/Efate",
            "utcOffset": 660,
            "offsetStr": "+11:00",
            "countries": [
                "VU"
            ]
        },
        "Pacific/Wallis": {
            "name": "Pacific/Wallis",
            "utcOffset": 720,
            "offsetStr": "+12:00",
            "countries": [
                "WF"
            ]
        },
        "Pacific/Apia": {
            "name": "Pacific/Apia",
            "utcOffset": 840,
            "offsetStr": "+14:00",
            "countries": [
                "WS"
            ]
        },
        "Africa/Johannesburg": {
            "name": "Africa/Johannesburg",
            "utcOffset": 120,
            "offsetStr": "+02:00",
            "countries": [
                "ZA",
                "LS",
                "SZ"
            ]
        }
    }
};


/***/ }),

/***/ "./src/app/projectprofile/projectprofile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-wrap\" *ngIf=\"project\">\r\n    <app-loading *ngIf=\"!project\"></app-loading>\r\n    <div *ngIf=\"message\" class=\"row message\">{{ message }}</div>           \r\n            \r\n    <div class=\"general-info\">\r\n      <div class=\"row\">\r\n          <div class=\"project-num\">\r\n              <mat-label>* Project Number</mat-label>\r\n              <mat-form-field>\r\n                  <input matInput name=\"number\"  placeholder=\"\" [(ngModel)]=\"project.number\" required  [disabled]=\"!isEditable\"> \r\n              </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"project-name\">\r\n              <mat-label>* Project Name</mat-label>\r\n              <mat-form-field>\r\n                  <input matInput name=\"name\"  placeholder=\"\" [(ngModel)]=\"project.name\" required [disabled]=\"!isEditable\">\r\n              </mat-form-field>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"project-type\">\r\n              <mat-label>* Project Type</mat-label>\r\n              <mat-form-field>\r\n                  <mat-select name=\"project_type\" placeholder=\"\" [(ngModel)]=\"project.project_type\" aria-required=\"true\" [disabled]=\"!isEditable\">\r\n                      <mat-option *ngFor=\"let project_type of projectTypes | async\" [value]=\"project_type\">{{ project_type }}</mat-option>\r\n                  </mat-select>\r\n              </mat-form-field>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"contract-type\">\r\n              <mat-label>Contract Type</mat-label>\r\n              <mat-form-field>\r\n                  <mat-select name=\"contract_type\" placeholder=\"\" [(ngModel)]=\"project.contract_type\" [disabled]=\"!isEditable\">\r\n                    <mat-option *ngFor=\"let contract_type of contractTypes | async\" [value]=\"contract_type\">{{ contract_type }}</mat-option>\r\n                  </mat-select>\r\n              </mat-form-field>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"address\">\r\n              <mat-label>Address</mat-label>\r\n              <mat-form-field>\r\n                  <input matInput name=\"address\"  placeholder=\"\" [(ngModel)]=\"project.address\" [disabled]=\"!isEditable\">\r\n              </mat-form-field>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"province\">\r\n              <mat-label>State/Province</mat-label>\r\n              <mat-form-field>\r\n                  <input matInput name=\"state\"  placeholder=\"\" [(ngModel)]=\"project.state\" [disabled]=\"!isEditable\">\r\n              </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"zip-code\">\r\n              <mat-label>Zip Code</mat-label>\r\n              <mat-form-field>\r\n                  <input matInput name=\"zipcode\"  placeholder=\"\" [(ngModel)]=\"project.zipcode\" [disabled]=\"!isEditable\">\r\n              </mat-form-field>\r\n          </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n          <div class=\"country\" *ngIf=\"countries\">\r\n              <mat-label>* Country</mat-label>\r\n              <mat-form-field>\r\n                  <mat-select name=\"country\" placeholder=\"\" [value]=\"project.country\" [(ngModel)]=\"project.country\" aria-required=\"true\" [disabled]=\"!isEditable\" (selectionChange)=\"countryChange()\" required>\r\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">{{ country.name }}</mat-option>\r\n                  </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n      </div>\r\n    \r\n      <div class=\"row\">\r\n          <div class=\"time-zone\" *ngIf=\"timezones\">\r\n              <mat-label>* Project Time zone</mat-label>\r\n              <mat-form-field>\r\n                  <mat-select name=\"timezone\" placeholder=\"\" [(ngModel)]=\"project.timezone\" aria-required=\"true\" [disabled]=\"!isEditable\" required>\r\n                        <mat-option *ngFor=\"let timezone of timezones\" [value]=\"timezone.name\">{{ timezone.name + \"  (UTC \" + timezone.offsetStr + \")\" }}</mat-option>\r\n                  </mat-select>\r\n              </mat-form-field>\r\n          </div>\r\n      </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"details\">\r\n\r\n      <div class=\"row\">\r\n          <mat-label>Model Units</mat-label>\r\n    \r\n          <mat-label>Rounding</mat-label>\r\n\r\n          <mat-label class=\"geo-location\">Geo Location</mat-label>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n          <mat-form-field>\r\n              <mat-select name=\"length\" placeholder=\"\" [(ngModel)]=\"project.length\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let length of lengths | async\" [value]=\"length\">{{ length }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n              <mat-select name=\"length_rounding\" placeholder=\"\" [(ngModel)]=\"project.length_rounding\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"geo-location\">\r\n              <input matInput name=\"geolocation_1\" placeholder=\"\" [(ngModel)]=\"project.geolocation_1\" [disabled]=\"!isEditable\">\r\n          </mat-form-field>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n          <mat-form-field>\r\n              <mat-select name=\"area\" placeholder=\"\" [(ngModel)]=\"project.area\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let area of areas | async\" [value]=\"area\">{{ area }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n              <mat-select name=\"area_rounding\" placeholder=\"\" [(ngModel)]=\"project.area_rounding\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"geo-location\">\r\n            <input matInput name=\"geolocation_2\" placeholder=\"\" [(ngModel)]=\"project.geolocation_2\" [disabled]=\"!isEditable\">\r\n          </mat-form-field>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n          <mat-form-field>\r\n              <mat-select name=\"volumn\" placeholder=\"\" [(ngModel)]=\"project.volumn\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let volumn of volumns | async\" [value]=\"volumn\">{{ volumn }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n              <mat-select name=\"volumn_rounding\" placeholder=\"\" [(ngModel)]=\"project.volumn_rounding\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"geo-location\">\r\n              <input matInput name=\"geolocation_3\" placeholder=\"\" [(ngModel)]=\"project.geolocation_3\" [disabled]=\"!isEditable\">\r\n          </mat-form-field>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n          <mat-form-field>\r\n              <mat-select name=\"angle\" placeholder=\"\" [(ngModel)]=\"project.angle\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let angle of angles | async\" [value]=\"angle\">{{ angle }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n              <mat-select name=\"angle_rounding\" placeholder=\"\" [(ngModel)]=\"project.angle_rounding\" [disabled]=\"!isEditable\">\r\n                <mat-option *ngFor=\"let rounding of roundings | async\" [value]=\"rounding\">{{ rounding }}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"geo-location\">\r\n              <input matInput name=\"geolocation_4\" placeholder=\"\" [(ngModel)]=\"project.geolocation_4\" [disabled]=\"!isEditable\">\r\n          </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"!projectKey\">\r\n        <div class=\"bim-standard\">\r\n          <mat-label>BIM Standard</mat-label>\r\n          <mat-form-field>\r\n              <mat-select name=\"bim_template\" placeholder=\"\" [(ngModel)]=\"project.bim_template\" [disabled]=\"!isEditable || projectKey\">\r\n                <mat-option value=\"default\">Default</mat-option>\r\n                <mat-option *ngFor=\"let template of templates\" [value]=\"template.key\">{{ template.templatename }}</mat-option>\r\n              </mat-select>\r\n              <mat-hint align=\"end\">Note : BIM Standard can not be changed ones saved !</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"projectKey && isEditable\">\r\n          <div class=\"open-dialogs\">\r\n                <a class=\"save-project\" (click)=\"saveTemplateDialog()\">Save Project as Template</a>\r\n                <a class=\"archive-project\" (click)=\"archiveProjectDialog()\">Archive Project</a>\r\n          </div>\r\n      </div>\r\n  \r\n      <div *ngIf=\"projectRole == 1 || !projectKey\" class=\"actions\">\r\n        <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"saveProject()\">Save Project</button>\r\n        <button mat-stroked-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"cancel()\">Cancel</button>\r\n        <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projectprofile/projectprofile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/projectprofile/projectprofile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: calc(100% - 50px);\n  margin-top: 20px;\n  padding: 20px 15px;\n  overflow-y: scroll; }\n  .project-wrap .mat-form-field {\n    width: 100%;\n    padding: 3px; }\n  .project-wrap .row {\n    display: flex; }\n  .project-wrap .general-info {\n    width: 50%;\n    padding: 0 30px; }\n  .project-wrap .general-info .project-num {\n      max-width: 150px; }\n  .project-wrap .general-info .project-num input {\n        text-transform: uppercase; }\n  .project-wrap .general-info .project-name {\n      flex: 100%; }\n  .project-wrap .general-info .project-name input {\n        text-transform: uppercase; }\n  .project-wrap .general-info .project-type {\n      width: 100%; }\n  .project-wrap .general-info .contract-type {\n      width: 100%; }\n  .project-wrap .general-info .address {\n      width: 100%; }\n  .project-wrap .general-info .province {\n      flex: 100%; }\n  .project-wrap .general-info .zip-code {\n      max-width: 100px; }\n  .project-wrap .general-info .country {\n      width: 100%; }\n  .project-wrap .general-info .time-zone {\n      width: 100%; }\n  .project-wrap .details {\n    width: 50%;\n    padding: 0 30px; }\n  .project-wrap .details .row > * {\n      flex: 1 1 100%;\n      width: 33%; }\n  .project-wrap .details .geo-location {\n      max-width: 100px; }\n  .project-wrap .details .actions {\n      display: flex;\n      flex-direction: row-reverse;\n      margin-top: 30px; }\n  .project-wrap .details .actions button {\n        margin-left: 20px; }\n  .project-wrap .details .open-dialogs {\n      display: flex;\n      flex-direction: column;\n      align-content: flex-end;\n      align-items: flex-end; }\n  .project-wrap .details .open-dialogs .save-project {\n        margin-top: 20px;\n        text-decoration: underline;\n        font-style: italic; }\n  .project-wrap .details .open-dialogs .archive-project {\n        margin-top: 20px;\n        text-decoration: underline;\n        font-style: italic;\n        color: #FF3960; }\n  .project-wrap .mat-dialog-container .template-title {\n    text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHByb2ZpbGUvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxwcm9qZWN0cHJvZmlsZVxccHJvamVjdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBMEdyQjtFQWpIRDtJQVVRLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7RUFaTDtJQWNRLGNBQWEsRUFDaEI7RUFmTDtJQWtCUSxXQUFVO0lBQ1YsZ0JBQWUsRUE2Q2xCO0VBaEVMO01Bc0JZLGlCQUFnQixFQUtuQjtFQTNCVDtRQXlCZ0IsMEJBQXlCLEVBQzVCO0VBMUJiO01BOEJZLFdBQVUsRUFLYjtFQW5DVDtRQWlDZ0IsMEJBQXlCLEVBQzVCO0VBbENiO01Bc0NZLFlBQVcsRUFDZDtFQXZDVDtNQTBDWSxZQUFXLEVBQ2Q7RUEzQ1Q7TUE4Q1ksWUFBVyxFQUNkO0VBL0NUO01Ba0RZLFdBQVUsRUFDYjtFQW5EVDtNQXNEWSxpQkFBZ0IsRUFDbkI7RUF2RFQ7TUEwRFksWUFBVyxFQUNkO0VBM0RUO01BOERZLFlBQVcsRUFDZDtFQS9EVDtJQW1FUSxXQUFVO0lBQ1YsZ0JBQWUsRUF3Q2xCO0VBNUdMO01BdUVZLGVBQWM7TUFDZCxXQUFVLEVBQ2I7RUF6RVQ7TUE0RVksaUJBQWdCLEVBQ25CO0VBN0VUO01BZ0ZZLGNBQWE7TUFDYiw0QkFBMkI7TUFDM0IsaUJBQWdCLEVBS25CO0VBdkZUO1FBcUZnQixrQkFBaUIsRUFDcEI7RUF0RmI7TUEwRlksY0FBYTtNQUNiLHVCQUFzQjtNQUN0Qix3QkFBdUI7TUFDdkIsc0JBQXFCLEVBY3hCO0VBM0dUO1FBZ0dnQixpQkFBZ0I7UUFDaEIsMkJBQTBCO1FBQzFCLG1CQUFrQixFQUNyQjtFQW5HYjtRQXNHZ0IsaUJBQWdCO1FBQ2hCLDJCQUEwQjtRQUMxQixtQkFBa0I7UUFDbEIsZUFBYyxFQUNqQjtFQTFHYjtJQStHUSwyQkFBMEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cHJvZmlsZS9wcm9qZWN0cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5nZW5lcmFsLWluZm8ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG5cclxuICAgICAgICAucHJvamVjdC1udW0ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3QtbmFtZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC10eXBlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udHJhY3QtdHlwZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm92aW5jZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuemlwLWNvZGUge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLXpvbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG5cclxuICAgICAgICAucm93ID4gKiB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdlby1sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wZW4tZGlhbG9ncyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAuc2F2ZS1wcm9qZWN0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5hcmNoaXZlLXByb2plY3Qge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjM5NjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIC50ZW1wbGF0ZS10aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_evented__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/evented */ "./src/app/_services/evented.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _countries_timezones__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./countries-timezones */ "./src/app/projectprofile/countries-timezones.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function ProjectprofileComponent(activedRoute, router, location, databaseService, apiService, projectprofileService, dropdownService, authService, dialog, http) {
        this.activedRoute = activedRoute;
        this.router = router;
        this.location = location;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.dropdownService = dropdownService;
        this.authService = authService;
        this.dialog = dialog;
        this.http = http;
        this.projectKey = null;
        // Create new project profile object
        this.project = new _projectprofile__WEBPACK_IMPORTED_MODULE_4__["ProjectProfile"]();
        // Define Country/timezones
        this.countries = [];
        this.timezones = [];
        this.isEditable = true;
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.teamid = this.activedRoute.snapshot.params['teamid'];
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
        this.currentUser = this.authService.getAuthUser();
        this.databaseService.getLists('/savedtemplates/' + this.currentUser.uid).valueChanges().subscribe(function (data) {
            _this.templates = data;
        });
        if (this.teamid) {
            this.databaseService.updateRow('/teams/' + this.projectKey, this.teamid, { uid: this.currentUser.userid });
        }
        this.loadData();
        // Get the permission to edit the project
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
        var countryIds = Object.keys(_countries_timezones__WEBPACK_IMPORTED_MODULE_11__["countryTimes"].countries);
        countryIds.forEach(function (item, index) {
            _this.countries.push(_countries_timezones__WEBPACK_IMPORTED_MODULE_11__["countryTimes"].countries[item]);
        });
        var timezoneIds = Object.keys(_countries_timezones__WEBPACK_IMPORTED_MODULE_11__["countryTimes"].timezones);
        timezoneIds.forEach(function (item, index) {
            _this.timezones.push(_countries_timezones__WEBPACK_IMPORTED_MODULE_11__["countryTimes"].timezones[item]);
        });
        _services_evented__WEBPACK_IMPORTED_MODULE_9__["Evented"].on('updateProjectImage', function (e) {
            _this.project.thumb_image = e.args.imgUrl;
            _this.saveProject();
        });
    };
    ProjectprofileComponent.prototype.loadData = function () {
        var _this = this;
        // Fetch project profile information
        if (this.projectKey !== null && this.projectKey !== undefined) {
            this.isEditable = false;
            // Get the permission to edit the project
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                _this.project = data;
                if (_this.project.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        else {
            this.project = new _projectprofile__WEBPACK_IMPORTED_MODULE_4__["ProjectProfile"]();
            this.project.created_by = this.authService.getAuthUser().uid;
            this.project.bim_template = 'default';
        }
    };
    ProjectprofileComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        _services_evented__WEBPACK_IMPORTED_MODULE_9__["Evented"].fire('editmod', {
            mode: this.isEditable
        });
    };
    ProjectprofileComponent.prototype.cancel = function () {
        if (this.projectKey !== null && this.projectKey !== undefined) {
            this.switchEditable();
            this.loadData();
        }
        else {
            this.location.back();
        }
    };
    ProjectprofileComponent.prototype.saveProject = function () {
        var _this = this;
        if (this.projectKey !== null && this.projectKey !== undefined) {
            this.projectprofileService.updateProject(this.projectKey, this.project);
            this.switchEditable();
            var notificationData = {
                "sender": this.currentUser.uid,
                "type": "update",
                "message": "The Project was updated.",
                "project": this.projectKey
            };
            this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) {
            });
        }
        else {
            var result = this.projectprofileService.createProject(this.project);
            var notificationData = {
                "sender": this.currentUser.uid,
                "type": "add",
                "message": "The new Project was added.",
                "project": this.projectKey
            };
            var params = {
                templateid: this.project.bim_template,
                userid: this.currentUser.uid,
                projectid: result.ref.key
            };
            this.projectprofileService.loadTemplate(params).subscribe(function (data) {
                _this.router.navigate(['/project/profile/' + result.ref.key]);
            });
        }
    };
    ProjectprofileComponent.prototype.countryChange = function () {
        this.project.timezone = _countries_timezones__WEBPACK_IMPORTED_MODULE_11__["countryTimes"].countries[this.project.country]['timezones'][0];
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
                // var template = this.project;
                // template.template_title = result;
                // this.databaseService.createRow('/templates', template).then(result => {
                //   if(result.key) {
                //     // this.message = "Template was saved successfully!";
                //   }
                // });
                var param = {
                    projectid: _this.projectKey,
                    templatename: result,
                    userid: _this.authService.afAuth.auth.currentUser.uid
                };
                _this.projectprofileService.saveTemplate(param).subscribe(function (data) {
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
                _this.projectprofileService.updateProject(_this.projectKey, _this.project);
                var notificationData = {
                    "sender": _this.currentUser.uid,
                    "type": "archived",
                    "message": "The Project was archived.",
                    "project": _this.projectKey
                };
                _this.apiService.sendRequest('sendNotification', notificationData);
                _this.router.navigate(['/']);
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
            _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _projectprofile_service__WEBPACK_IMPORTED_MODULE_3__["ProjectprofileService"],
            _services_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]])
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
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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
    function ProjectprofileService(db, http) {
        this.db = db;
        this.http = http;
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
    ProjectprofileService.prototype.getProjectRoleInfo = function (userId, projectId) {
        return this.db.list('/teams/' + projectId, function (ref) { return ref.orderByChild('userid').equalTo(userId); });
    };
    ProjectprofileService.prototype.handleError = function (error) {
        console.log(error);
    };
    ProjectprofileService.prototype.saveTemplate = function (params) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'saveTemplate', params);
    };
    ProjectprofileService.prototype.loadTemplate = function (params) {
        console.log(params);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'loadTemplate', params);
    };
    ProjectprofileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = "<div class=\"main-content\">\n    <div class=\"content-search\">\n        <div class=\"search-form\">\n            <div>\n                <mat-form-field color=\"white\" class=\"\">\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"projectRole == 1\">\n                <button mat-stroked-button color=\"blue\" *ngIf=\"!isEditable\" (click)=\"switchEditable()\">Edit</button>\n                <button mat-raised-button color=\"blue\" *ngIf=\"isEditable\" (click)=\"switchEditable()\">Done</button>\n            </div>        \n        </div>\n    \n        <div *ngIf=\"isEditable\" class=\"tool-bar\">\n            <div class=\"movedown\" (click)=\"moveDown()\"><mat-icon>keyboard_arrow_down</mat-icon>Move down</div>\n            <div class=\"moveup\" (click)=\"moveUp()\"><mat-icon>keyboard_arrow_up</mat-icon>Move up</div>\n            <div class=\"insert\" (click)=\"insertRow()\"><mat-icon>add</mat-icon>Insert</div>\n            <div class=\"delete\" (click)=\"deleteRow()\"><mat-icon>clear</mat-icon>Delete</div>\n            <div class=\"edit\" *ngIf=\"!editableKey\" (click)=\"editRow()\"><mat-icon>edit</mat-icon>Edit</div>\n            <div class=\"edit\" *ngIf=\"editableKey\" (click)=\"saveRow()\"><mat-icon>save</mat-icon>Save</div>\n        </div>\n    </div>\n  \n    <div class=\"table-container mat-elevation-z8\">\n        <table mat-table color=\"white\" [dataSource]=\"dataSource\" matSort>\n      \n          <!-- No. Column -->\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n            <td mat-cell *matCellDef=\"let element\">\n              S{{(\"00\"+element.number).slice(-2)}}\n            </td>\n          </ng-container>\n    \n          <!-- Stage Name Column -->\n          <ng-container matColumnDef=\"stage\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Stage </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\">{{element.stage}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.stage\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n    \n          <!-- Start date Column -->\n          <ng-container matColumnDef=\"start\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Start </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored\">{{element.start | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\" class=\"bg-white\">\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"\" [(ngModel)]=\"element.start\" required disabled>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- End date Column -->\n          <ng-container matColumnDef=\"end\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> End </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.key != editableKey\" class=\"bg-gray colored\">{{ element.end | date }}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\" class=\"bg-white\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"\" [(ngModel)]=\"element.end\" required disabled>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <!-- Remarks Column -->\n          <ng-container matColumnDef=\"remarks\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.key != editableKey\" class=\"gray-200\">{{element.remarks}}</span>\n              <mat-form-field *ngIf=\"element.key == editableKey\">\n                <input matInput [(ngModel)]=\"element.remarks\" required>\n              </mat-form-field>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'selected' : (row.key == selectedKey)}\" (click)=\"selectRow(row.key)\"></tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projectstage/projectstage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/projectstage/projectstage.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-number {\n  width: 100px; }\n\n.mat-column-stage {\n  width: 250px; }\n\n.mat-column-start, .mat-column-end {\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHN0YWdlL0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxccHJvamVjdHN0YWdlXFxwcm9qZWN0c3RhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0c3RhZ2UvcHJvamVjdHN0YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tbnVtYmVyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubWF0LWNvbHVtbi1zdGFnZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tc3RhcnQsIC5tYXQtY29sdW1uLWVuZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projectprofile/projectprofile.service */ "./src/app/projectprofile/projectprofile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
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
    function ProjectstageComponent(activedRoute, databaseService, apiService, projectprofileService, authService, router) {
        this.activedRoute = activedRoute;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.projectprofileService = projectprofileService;
        this.authService = authService;
        this.router = router;
        this.projectKey = null;
        this.tablePath = '/stages';
        this.isEditable = false;
        this.displayedColumns = ['number', 'stage', 'start', 'end', 'remarks'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
        this.projectKey = this.activedRoute.snapshot.params['id'];
        this.currentUser = this.authService.getAuthUser();
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
            _this.dataSource.sort = _this.sort;
        });
        // Get the permission to edit the project
        if (this.projectKey !== null) {
            this.projectprofileService.getProjectProfile(this.projectKey).valueChanges().subscribe(function (data) {
                if (data.created_by == _this.currentUser.uid) {
                    _this.projectRole = 1;
                }
            });
        }
        this.projectprofileService.getProjectRoleInfo(this.currentUser.uid, this.projectKey).valueChanges().subscribe(function (info) {
            if (info && info.length) {
                _this.projectRole = info[0].access;
            }
        });
    };
    ProjectstageComponent.prototype.switchEditable = function () {
        this.isEditable = !this.isEditable;
        if (!this.isEditable) {
            this.editableKey = null;
            this.selectedKey = null;
            this.elements = this.elements.filter(function (ele) { return ele.key != "newRow"; });
            this.loadData();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.elements);
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
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "add",
                    "message": "The new Project Stage was added.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
            }
            if (element.key == this.editableKey) {
                this.databaseService.updateRow(this.tablePath, this.editableKey, element);
                var notificationData = {
                    "sender": this.currentUser.uid,
                    "type": "update",
                    "message": "The Project Stage data was updated.",
                    "project": this.projectKey
                };
                this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (result) { });
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
    ProjectstageComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _projectprofile_projectprofile_service__WEBPACK_IMPORTED_MODULE_4__["ProjectprofileService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<div class=\"profile\">\r\n  <p class=\"title\">\r\n    <span>MY SETTINGS</span>\r\n    <mat-icon class=\"close-icon\" (click)=\"onNoClick()\">close</mat-icon>\r\n  </p>\r\n  <div class=\"tab-header\">\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'Profile'}\" (click)=\"activeTab = 'Profile'\">Profile</span>\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'Account'}\" (click)=\"activeTab = 'Account'\">Account</span>\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'My Templates'}\" (click)=\"activeTab = 'My Templates'\">My Templates</span>\r\n    <span class=\"tab-header-item\" [ngClass]=\"{'active': activeTab == 'Apps'}\" (click)=\"activeTab = 'Apps'\">Apps</span>\r\n  </div>\r\n\r\n  <div class=\"tab-body\">\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'Profile'\">\r\n      <div class=\"tab-profile\">\r\n        <div class=\"left-side-for-image\">\r\n          <img [src]=\"userProfile.avatar == '' ? '/assets/images/avatar.png' : userProfile.avatar\" alt=\"\" class=\"profile-image\">\r\n          <input type=\"file\" #images_for_profile accept=\"image/*\" id=\"images-for-profile\" (change)=\"handleFileInput($event.target.files)\">\r\n          <p class=\"change-delete-profile-image\">\r\n            <span class=\"change-btn\" (click)=\"popupforImage()\">Change</span> | \r\n            <span class=\"delete-btn\" (click)=\"deleteProfileImage()\">Delete</span>\r\n          </p>\r\n        </div>\r\n        <div class=\"right-side-for-info\">\r\n            <mat-label>* Full Name</mat-label>\r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"\" [(ngModel)]='userProfile.name'>\r\n          </mat-form-field>\r\n          \r\n            <mat-label>* Email</mat-label>  \r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"\" [(ngModel)]='userProfile.email'>\r\n          </mat-form-field>\r\n\r\n            <mat-label>Phone Number</mat-label>\r\n          <mat-form-field class=\"\">\r\n            <input type=\"number\" matInput placeholder=\"\" [(ngModel)]='userProfile.phone'>\r\n          </mat-form-field>\r\n\r\n            <mat-label>Company</mat-label>\r\n          <mat-form-field class=\"\">\r\n            <input matInput placeholder=\"\" [(ngModel)]='userProfile.company_name'>\r\n          </mat-form-field>\r\n\r\n          <div class=\"update-btn-div\">\r\n            <button (click)=\"updateProfile()\">Update Profile</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'Account'\">\r\n      <div class=\"tab-account\">\r\n        <button class=\"upgrade-btn\">Upgrade</button>\r\n\r\n        <p class=\"freetrial-explain\">Your free trial expires in <span class=\"trial-days\">25 days</span>!</p>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Old Password</mat-label>\r\n          <input  matInput type=\"password\"  placeholder=\"Old Password\" [(ngModel)]=\"passwordUpdateInfo.old\" >\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>New Password</mat-label>\r\n          <input  matInput type=\"password\"  placeholder=\"New Password\" [(ngModel)]=\"passwordUpdateInfo.new\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Confirm</mat-label>\r\n          <input  matInput type=\"password\"  placeholder=\"Confirm\" [(ngModel)]=\"passwordUpdateInfo.confirm\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"update-pwd-div\">\r\n          <button class=\"update-pwd-btn\" (click)=\"updatePassword()\">Update</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'My Templates'\">\r\n      <div class=\"tab-my-template\">\r\n        <p class=\"template-title\">\r\n          <span class=\"title-name\">Name</span>\r\n          <span class=\"title-created\">Created on</span>\r\n        </p>\r\n\r\n        <p class=\"template-item\" *ngFor=\"let template of templates\">\r\n            <span class=\"title-name\">{{template.templatename}}</span>\r\n            <span class=\"title-created\">{{template.created_at}}</span>\r\n            <!-- <span class=\"title-edit\"><mat-icon class=\"close-icon\">edit</mat-icon>Edit</span> -->\r\n            <span class=\"title-delete\" (click)=\"deleteTemplate(template.key)\"><mat-icon class=\"close-icon\">close</mat-icon>Delete</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tab-body-item\" *ngIf=\"activeTab == 'Apps'\">\r\n      <div class=\"tab-apps\">\r\n        <button class=\"upgrade-btn\">Upgrade</button>\r\n\r\n        <p class=\"upgrade-details\">Upgrade now for unlimited access to apps !</p>\r\n\r\n        <button class=\"contact-btn\">Contact Sales</button>\r\n\r\n        <p class=\"contact-details\">Contact sales for additional help !</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile .title {\n  color: black;\n  padding-left: 20px;\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .profile .title span {\n    color: #000000;\n    font-family: \"AvenirNextLTPro-Bold\"; }\n  .profile .title .close-icon {\n    margin-right: 20px;\n    cursor: pointer; }\n  .profile .tab-header {\n  display: flex;\n  width: 100%;\n  border: none;\n  border-bottom: solid 1px #888; }\n  .profile .tab-header .tab-header-item {\n    padding: 5px 30px;\n    font-size: 15px;\n    cursor: pointer; }\n  .profile .tab-header .tab-header-item:hover {\n      color: #000; }\n  .profile .tab-header .active {\n    color: #000; }\n  .profile .tab-body .tab-body-item .tab-profile {\n  display: flex;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image {\n    min-width: 300px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .profile-image {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      background: #F2F2F2; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image #images-for-profile {\n      display: none; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .change-delete-profile-image {\n      margin-top: 30px; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .change-delete-profile-image .change-btn {\n        color: #000;\n        cursor: pointer;\n        margin-right: 10px; }\n  .profile .tab-body .tab-body-item .tab-profile .left-side-for-image .change-delete-profile-image .delete-btn {\n        margin-left: 10px;\n        color: #000;\n        cursor: pointer; }\n  .profile .tab-body .tab-body-item .tab-profile .right-side-for-info {\n    min-width: 400px;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    padding: 10px;\n    padding-right: 50px; }\n  .profile .tab-body .tab-body-item .tab-profile .right-side-for-info .update-btn-div {\n      display: flex;\n      justify-content: flex-end; }\n  .profile .tab-body .tab-body-item .tab-profile .right-side-for-info .update-btn-div button {\n        border: 2px solid #2F5597;\n        color: #2F5597;\n        background: #fff;\n        padding: 5px 20px;\n        outline: none; }\n  .profile .tab-body .tab-body-item .tab-account {\n  padding: 40px 150px;\n  display: flex;\n  flex-direction: column;\n  width: 600px; }\n  .profile .tab-body .tab-body-item .tab-account .upgrade-btn {\n    background: #2F5597;\n    color: #fff;\n    border: none;\n    outline: none;\n    padding: 5px 15px;\n    width: 100px; }\n  .profile .tab-body .tab-body-item .tab-account .freetrial-explain {\n    font-style: italic;\n    margin-top: 20px; }\n  .profile .tab-body .tab-body-item .tab-account .freetrial-explain .trial-days {\n      color: #2F5597; }\n  .profile .tab-body .tab-body-item .tab-account .update-pwd-div {\n    display: flex;\n    justify-content: flex-end; }\n  .profile .tab-body .tab-body-item .tab-account .update-pwd-div .update-pwd-btn {\n      background: #2F5597;\n      color: #fff;\n      padding: 5px 15px;\n      border: none;\n      outline: none; }\n  .profile .tab-body .tab-body-item .tab-my-template {\n  padding: 30px 20px; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-title {\n    display: flex; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-title .title-name {\n      width: 150px;\n      color: black;\n      font-size: 15px;\n      font-weight: bold; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-title .title-created {\n      color: black;\n      font-size: 15px;\n      font-weight: bold; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-item {\n    display: flex; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-item .title-name {\n      width: 150px;\n      color: black;\n      font-size: 15px;\n      font-weight: bold; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-item .title-created {\n      color: black;\n      font-size: 15px;\n      font-weight: bold; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-item .title-edit {\n      margin-left: 40px;\n      display: flex;\n      cursor: pointer; }\n  .profile .tab-body .tab-body-item .tab-my-template .template-item .title-delete {\n      margin-left: 40px;\n      display: flex;\n      cursor: pointer; }\n  .profile .tab-body .tab-body-item .tab-apps {\n  padding: 150px 150px;\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  justify-content: center;\n  align-items: center; }\n  .profile .tab-body .tab-body-item .tab-apps .upgrade-btn {\n    background: #2F5597;\n    color: #fff;\n    padding: 5px 15px;\n    width: 200px;\n    border: none;\n    outline: none; }\n  .profile .tab-body .tab-body-item .tab-apps .upgrade-details {\n    font-style: italic;\n    margin-top: 15px; }\n  .profile .tab-body .tab-body-item .tab-apps .contact-btn {\n    background: #fff;\n    color: #2F5597;\n    padding: 5px 15px;\n    width: 200px;\n    border: solid 2px #2F5597;\n    outline: none;\n    margin-top: 50px; }\n  .profile .tab-body .tab-body-item .tab-apps .contact-details {\n    font-style: italic;\n    margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFXdEI7RUFuQkw7SUFXWSxlQUFjO0lBQ2Qsb0NBQW1DLEVBQ3RDO0VBYlQ7SUFnQlksbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQ2xCO0VBbEJUO0VBc0JRLGNBQWE7RUFDYixZQUFXO0VBQ1gsYUFBWTtFQUNaLDhCQUE2QixFQWVoQztFQXhDTDtJQTRCWSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixnQkFBZSxFQUtsQjtFQW5DVDtNQWlDZ0IsWUFBVyxFQUNkO0VBbENiO0lBc0NZLFlBQVcsRUFDZDtFQXZDVDtFQTZDZ0IsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixxQkFBb0IsRUF3RHZCO0VBdkdiO0lBa0RvQixpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFDbkIsdUJBQXNCLEVBMEJ6QjtFQWhGakI7TUF5RHdCLGFBQVk7TUFDWixjQUFhO01BQ2IsbUJBQWtCO01BQ2xCLG9CQUFtQixFQUN0QjtFQTdEckI7TUErRHdCLGNBQWEsRUFDaEI7RUFoRXJCO01BbUV3QixpQkFBZ0IsRUFZbkI7RUEvRXJCO1FBcUU0QixZQUFXO1FBQ1gsZ0JBQWU7UUFDZixtQkFBa0IsRUFDckI7RUF4RXpCO1FBMkU0QixrQkFBaUI7UUFDakIsWUFBVztRQUNYLGdCQUFlLEVBQ2xCO0VBOUV6QjtJQW1Gb0IsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsc0JBQXFCO0lBQ3JCLHVCQUFzQjtJQUN0QixjQUFhO0lBQ2Isb0JBQW1CLEVBYXRCO0VBdEdqQjtNQTRGd0IsY0FBYTtNQUNiLDBCQUF5QixFQVE1QjtFQXJHckI7UUErRjRCLDBCQUF5QjtRQUN6QixlQUFjO1FBQ2QsaUJBQWdCO1FBQ2hCLGtCQUFpQjtRQUNqQixjQUFhLEVBQ2hCO0VBcEd6QjtFQTBHZ0Isb0JBQW1CO0VBQ25CLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQWdDZjtFQTdJYjtJQWdIb0Isb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxhQUFZO0lBQ1osY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixhQUFZLEVBQ2Y7RUF0SGpCO0lBeUhvQixtQkFBa0I7SUFDbEIsaUJBQWdCLEVBS25CO0VBL0hqQjtNQTZId0IsZUFBYyxFQUNqQjtFQTlIckI7SUFrSW9CLGNBQWE7SUFDYiwwQkFBeUIsRUFTNUI7RUE1SWpCO01Bc0l3QixvQkFBbUI7TUFDbkIsWUFBVztNQUNYLGtCQUFpQjtNQUNqQixhQUFZO01BQ1osY0FBYSxFQUNoQjtFQTNJckI7RUFnSmdCLG1CQUFrQixFQTZDckI7RUE3TGI7SUFtSm9CLGNBQWEsRUFhaEI7RUFoS2pCO01BcUp3QixhQUFZO01BQ1osYUFBWTtNQUNaLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ3BCO0VBekpyQjtNQTRKd0IsYUFBWTtNQUNaLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ3BCO0VBL0pyQjtJQW1Lb0IsY0FBYSxFQXlCaEI7RUE1TGpCO01BcUt3QixhQUFZO01BQ1osYUFBWTtNQUNaLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ3BCO0VBektyQjtNQTRLd0IsYUFBWTtNQUNaLGdCQUFlO01BQ2Ysa0JBQWlCLEVBQ3BCO0VBL0tyQjtNQWtMd0Isa0JBQWlCO01BQ2pCLGNBQWE7TUFDYixnQkFBZSxFQUNsQjtFQXJMckI7TUF3THdCLGtCQUFpQjtNQUNqQixjQUFhO01BQ2IsZ0JBQWUsRUFDbEI7RUEzTHJCO0VBZ01nQixxQkFBb0I7RUFDcEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQThCdEI7RUFuT2I7SUF3TW9CLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixhQUFZO0lBQ1osY0FBYSxFQUNoQjtFQTlNakI7SUFpTm9CLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDbkI7RUFuTmpCO0lBc05vQixpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osMEJBQXlCO0lBQ3pCLGNBQWE7SUFDYixpQkFBZ0IsRUFDbkI7RUE3TmpCO0lBZ09vQixtQkFBa0I7SUFDbEIsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcclxuXHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXJOZXh0TFRQcm8tQm9sZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFiLWhlYWRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzg4ODtcclxuXHJcbiAgICAgICAgLnRhYi1oZWFkZXItaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi1ib2R5e1xyXG4gICAgICAgIC50YWItYm9keS1pdGVte1xyXG4gICAgICAgICAgICAudGFiLXByb2ZpbGV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubGVmdC1zaWRlLWZvci1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICNpbWFnZXMtZm9yLXByb2ZpbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlLWRlbGV0ZS1wcm9maWxlLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsZXRlLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0LXNpZGUtZm9yLWluZm97XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZS1idG4tZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMkY1NTk3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRjU1OTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFiLWFjY291bnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnVwZ3JhZGUtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyRjU1OTc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mcmVldHJpYWwtZXhwbGFpbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWFsLWRheXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkY1NTk3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudXBkYXRlLXB3ZC1kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUtcHdkLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFiLW15LXRlbXBsYXRle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50ZW1wbGF0ZS10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUtY3JlYXRlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGVtcGxhdGUtaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUtY3JlYXRlZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlLWVkaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUtZGVsZXRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhYi1hcHBze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAudXBncmFkZS1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnVwZ3JhZGUtZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdC1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzJGNTU5NztcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
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
    function SettingsComponent(dialogRef, auth, authService, afStorage, router, databaseService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.authService = authService;
        this.afStorage = afStorage;
        this.router = router;
        this.databaseService = databaseService;
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
        this.databaseService.getLists('/savedtemplates/' + auth.auth.currentUser.uid).valueChanges().subscribe(function (data) {
            _this.templates = data;
            if (_this.templates.length > 0) {
                _this.templates.map(function (template) {
                    var date = new Date(template.created_at);
                    template.created_at = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
                });
            }
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
    SettingsComponent.prototype.deleteTemplate = function (key) {
        this.databaseService.deleteRow('/savedtemplates/' + this.auth.auth.currentUser.uid, key);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
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

module.exports = "<div class=\"project-sidebar\">\n    <div class=\"project-thumb\" (click)=\"popupforImage()\">\n        <img  *ngIf=\"!project || !project.thumb_image\" src=\"/assets/images/photo-camera.png\" class=\"camera\">\n        <img *ngIf=\"project && project.thumb_image\" [src]=\"project.thumb_image\">\n        <input type=\"file\" *ngIf=\"editMod\" #load_project_img accept=\"image/*\" id=\"load_project_img\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n\n    <ul class=\"sidebar-list\">\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'new' || activate == 'profile')}\" (click)=\"gotourl('project/profile/' + projectKey)\"><span>Profile</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'stage')}\" (click)=\"gotourl('project/stage/' + projectKey)\"><span>Stages</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'bim')}\" (click)=\"gotourl('project/bim/' + projectKey)\"><span>Bim Uses</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'lod')}\" (click)=\"gotourl('project/lod/' + projectKey)\"><span>Lod</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'conf')}\" (click)=\"gotourl('project/conf/' + projectKey)\"><span>Configuration</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'team')}\" (click)=\"gotourl('project/team/' + projectKey)\"><span>Team</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'meeting')}\" (click)=\"gotourl('project/meeting/' + projectKey)\"><span>Meetings</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'matrix')}\" (click)=\"gotourl('project/matrix/' + projectKey)\"><span>Clash Matrix</span></li>\n        <li class=\"sidebar-item\" [ngClass]=\"{'active' : (activate == 'quality')}\" (click)=\"gotourl('project/quality/' + projectKey)\"><span>BIM Quality</span></li>\n    </ul>\n</div>\n  "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-sidebar {\n  color: #ffffff;\n  top: 50px;\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .project-sidebar .project-thumb {\n    background: #595959;\n    cursor: pointer; }\n  .project-sidebar .project-thumb img {\n      width: 100%; }\n  .project-sidebar .project-thumb img.camera {\n      padding: 40%; }\n  .project-sidebar .project-thumb .mat-icon {\n      width: 70px;\n      color: #ffffff;\n      font-size: 5em;\n      padding: 50% 0;\n      margin: auto;\n      text-align: center;\n      display: flex;\n      align-items: center; }\n  .project-sidebar .project-thumb #load_project_img {\n      display: none; }\n  .project-sidebar .sidebar-list {\n    padding-top: 30px;\n    overflow-y: scroll; }\n  .project-sidebar .sidebar-list .sidebar-item {\n      min-height: 50px;\n      padding: 10px 20px; }\n  .project-sidebar .sidebar-list .sidebar-item span {\n        font-size: 16px;\n        text-transform: uppercase;\n        cursor: pointer; }\n  .project-sidebar .sidebar-list .sidebar-item.active span {\n        font-weight: bold;\n        color: #ffffff;\n        display: flex;\n        align-items: center; }\n  .project-sidebar .sidebar-list .sidebar-item.active span::after {\n          content: '';\n          width: 15px;\n          height: 15px;\n          margin-top: -1px;\n          margin-left: 20px;\n          border-radius: 100%;\n          background: #4472C4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsVUFBUztFQUNULGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBOER6QjtFQW5FRDtJQVFRLG9CQUFtQjtJQUNuQixnQkFBZSxFQXdCbEI7RUFqQ0w7TUFZWSxZQUFXLEVBQ2Q7RUFiVDtNQWdCWSxhQUFZLEVBQ2Y7RUFqQlQ7TUFvQlksWUFBVztNQUNYLGVBQWM7TUFDZCxlQUFjO01BQ2QsZUFBYztNQUNkLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsY0FBYTtNQUNiLG9CQUFtQixFQUN0QjtFQTVCVDtNQStCWSxjQUFhLEVBQ2hCO0VBaENUO0lBb0NRLGtCQUFpQjtJQUNqQixtQkFBa0IsRUE2QnJCO0VBbEVMO01Bd0NZLGlCQUFnQjtNQUNoQixtQkFBa0IsRUF3QnJCO0VBakVUO1FBNENnQixnQkFBZTtRQUNmLDBCQUF5QjtRQUN6QixnQkFBZSxFQUNsQjtFQS9DYjtRQWtEZ0Isa0JBQWlCO1FBQ2pCLGVBQWM7UUFDZCxjQUFhO1FBQ2Isb0JBQW1CLEVBV3RCO0VBaEViO1VBd0RvQixZQUFXO1VBQ1gsWUFBVztVQUNYLGFBQVk7VUFDWixpQkFBZ0I7VUFDaEIsa0JBQWlCO1VBQ2pCLG9CQUFtQjtVQUNuQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1zaWRlYmFye1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAucHJvamVjdC10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzU5NTk1OTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcuY2FtZXJhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogNTAlIDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xvYWRfcHJvamVjdF9pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci1saXN0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAgIC5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDcyQzQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = "<div class=\"msg-sender\" *ngIf=\"user\">\r\n  <app-avatar [userProfile]=\"user\" *ngIf=\"user\"></app-avatar>\r\n  <div class=\"msg-sender-detail\">\r\n    <p class=\"name\">{{user.name}} / <span class=\"role\">BIM Manager</span></p>\r\n    \r\n  </div>\r\n</div>\r\n\r\n<div class=\"msg-content\" *ngIf=\"user\">\r\n  <span *ngIf=\"message.type == 'txt'\">{{message.message}}</span>\r\n  <a target=\"_blank\" [href]='message.message' *ngIf=\"message.type == 'img'\">\r\n    <img [src]=\"message.message\" class=\"chat-img\">\r\n  </a>\r\n\r\n  <a target=\"_blank\" [href]='message.message' *ngIf=\"message.type == 'file'\" class=\"msg-attach-item\">\r\n    <mat-icon>attach_file</mat-icon>{{message.name}}\r\n  </a>\r\n</div>\r\n\r\n<div class=\"msg-date\">\r\n  <span> {{ message.timesent | date:'d MMM y' }}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebarright/message/message.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/sidebarright/message/message.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-sender {\n  display: flex; }\n  .msg-sender img {\n    width: 50px;\n    height: 50px;\n    border-radius: 100%;\n    background: #a7a7a7;\n    float: left; }\n  .msg-sender .msg-sender-detail {\n    display: flex;\n    padding-left: 20px;\n    align-items: center; }\n  .msg-sender .msg-sender-detail p {\n      display: block;\n      width: 100%;\n      margin: 0; }\n  .msg-sender .msg-sender-detail .name {\n      font-size: 1.3em;\n      font-weight: 800;\n      color: #000; }\n  .msg-sender .msg-sender-detail .role {\n      color: #000;\n      font-size: .7em;\n      font-style: italic; }\n  .msg-sender:after {\n    content: \"\";\n    display: block;\n    clear: both; }\n  .msg-content {\n  padding: 15px 0;\n  font-style: italic; }\n  .msg-content .chat-img {\n    width: 100%; }\n  .msg-content .msg-attach-item {\n    display: flex;\n    align-items: center; }\n  .msg-content span {\n    color: #000000; }\n  .msg-date {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhcnJpZ2h0L21lc3NhZ2UvRTpcXEFuZ3VsYXJKU1xcU29uZ1xcYmltL3NyY1xcYXBwXFxzaWRlYmFycmlnaHRcXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBcUNoQjtFQXRDRDtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixZQUFXLEVBQ2Q7RUFUTDtJQVlRLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsb0JBQW1CLEVBaUJ0QjtFQS9CTDtNQWlCWSxlQUFjO01BQ2QsWUFBVztNQUNYLFVBQVMsRUFDWjtFQXBCVDtNQXNCWSxpQkFBZ0I7TUFDaEIsaUJBQWdCO01BQ2hCLFlBQVcsRUFDZDtFQXpCVDtNQTJCWSxZQUFXO01BQ1gsZ0JBQWU7TUFDZixtQkFBa0IsRUFDckI7RUE5QlQ7SUFrQ1EsWUFBVztJQUNYLGVBQWM7SUFDZCxZQUFXLEVBQ2Q7RUFHTDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCLEVBY3JCO0VBaEJEO0lBS1EsWUFBVyxFQUNkO0VBTkw7SUFTUSxjQUFhO0lBQ2Isb0JBQW1CLEVBQ3RCO0VBWEw7SUFjUSxlQUFjLEVBQ2pCO0VBR0w7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFycmlnaHQvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zZy1zZW5kZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhN2E3YTc7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1zZy1zZW5kZXItZGV0YWlsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb2xle1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tc2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBcclxuICAgIC5jaGF0LWltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubXNnLWF0dGFjaC1pdGVte1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxufVxyXG5cclxuLm1zZy1kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

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

module.exports = "<div class=\"right-panel\">\r\n  <div class=\"search-bar\" >\r\n      <form class=\"search-form\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Search\" (keyup)=\"search($event.target.value)\">\r\n          </mat-form-field>\r\n        </form>\r\n  </div>\r\n  \r\n  <app-loading *ngIf=\"isLoading\"></app-loading>\r\n\r\n  <ul class=\"msg-list\"  *ngIf=\"!isLoading && messagesShow.length == 0\">\r\n    <h2 class=\"no-messages\">No Messages</h2>\r\n  </ul>\r\n  <ul class=\"msg-list\" *ngIf=\"!isLoading && messagesShow && messagesShow.length>0\" #feedContainer>\r\n    <li class=\"msg-list-item\" *ngFor=\"let message of messagesShow\">\r\n      <app-message [message]=\"message\"></app-message>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <div class=\"msg-box\">\r\n    <textarea class=\"input-message-to-send\" placeholder=\"Type something to send!\" [(ngModel)]=\"msgtext\"  (keyup)=\"handleSubmit($event)\"></textarea>\r\n    <mat-progress-bar *ngIf=\"isProgressForuploading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <div class=\"chat-tools\">\r\n      <div class=\"adding-tools\">\r\n        <mat-icon (click)=\"popupforFile()\">attach_file</mat-icon>\r\n        <input type=\"file\" #files_for_send id=\"files-for-send\" (change)=\"handleFileInputFile($event.target.files)\">\r\n        <mat-icon (click)=\"popupforImage()\">photo_camera</mat-icon>\r\n        <input type=\"file\" #images_for_send accept=\"image/*\" id=\"images-for-send\" (change)=\"handleFileInput($event.target.files)\">\r\n        <!-- <mat-icon (click)=\"isEmojji = !isEmojji\">mood</mat-icon>\r\n        <emoji-mart (emojiClick)=\"addEmoji($event)\" *ngIf=\"isEmojji\" [style]=\"{ position: 'absolute', bottom: '20px', right: '20px' }\"></emoji-mart> -->\r\n      </div>\r\n      <div class=\"send-button-tool\">\r\n        <div class=\"send-btn-round\">\r\n          <mat-icon (click)=\"sendMsg()\" >send</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebarright/sidebarright.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sidebarright/sidebarright.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-panel {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px 10px; }\n  .right-panel .search-bar {\n    width: 100%; }\n  .right-panel .msg-list {\n    height: 100%;\n    overflow-y: scroll; }\n  .right-panel .msg-list .no-messages {\n      text-align: center; }\n  .right-panel .msg-list::-webkit-scrollbar {\n      width: 5px; }\n  .right-panel .msg-list::-webkit-scrollbar-track {\n      background: #e0dfde; }\n  .right-panel .msg-list::-webkit-scrollbar-thumb {\n      background: #888; }\n  .right-panel .msg-list .msg-list-item {\n      padding: 10px;\n      border-bottom: 1px solid #a7a7a7;\n      list-style: none; }\n  .right-panel .msg-box {\n    min-height: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  .right-panel .msg-box .input-message-to-send {\n      border: none;\n      width: 100%;\n      resize: none;\n      padding: 5px; }\n  .right-panel .msg-box .input-message-to-send::-webkit-input-placeholder {\n        font-style: oblique; }\n  .right-panel .msg-box .input-message-to-send::-ms-input-placeholder {\n        font-style: oblique; }\n  .right-panel .msg-box .input-message-to-send::placeholder {\n        font-style: oblique; }\n  .right-panel .msg-box .input-message-to-send:focus {\n        border: grey;\n        outline: none; }\n  .right-panel .msg-box .chat-tools {\n      display: flex;\n      justify-content: space-between;\n      padding: 5px 10px;\n      align-items: center; }\n  .right-panel .msg-box .chat-tools .adding-tools {\n        display: flex;\n        align-items: center; }\n  .right-panel .msg-box .chat-tools .adding-tools mat-icon {\n          color: black;\n          cursor: pointer;\n          font-size: 21px; }\n  .right-panel .msg-box .chat-tools .adding-tools #images-for-send {\n          display: none; }\n  .right-panel .msg-box .chat-tools .adding-tools #files-for-send {\n          display: none; }\n  .right-panel .msg-box .chat-tools .send-button-tool .send-btn-round {\n        background: #344456;\n        border-radius: 50%;\n        padding: 4px 0px 2px 5px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n  .right-panel .msg-box .chat-tools .send-button-tool .send-btn-round mat-icon {\n          color: white;\n          cursor: pointer;\n          font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhcnJpZ2h0L0U6XFxBbmd1bGFySlNcXFNvbmdcXGJpbS9zcmNcXGFwcFxcc2lkZWJhcnJpZ2h0XFxzaWRlYmFycmlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsbUJBQWtCLEVBa0dyQjtFQXZHRDtJQVFRLFlBQVcsRUFDZDtFQVRMO0lBWVEsYUFBWTtJQUNaLG1CQUFrQixFQXVCckI7RUFwQ0w7TUFnQlksbUJBQWtCLEVBQ3JCO0VBakJUO01Bb0JZLFdBQVUsRUFDYjtFQXJCVDtNQXdCWSxvQkFBbUIsRUFDdEI7RUF6QlQ7TUE0QlksaUJBQWdCLEVBQ25CO0VBN0JUO01BZ0NZLGNBQWE7TUFDYixpQ0FBZ0M7TUFDaEMsaUJBQWdCLEVBQ25CO0VBbkNUO0lBdUNRLGtCQUFpQjtJQUNqQixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLCtCQUE4QixFQTREakM7RUF0R0w7TUE2Q1ksYUFBWTtNQUNaLFlBQVc7TUFDWCxhQUFZO01BQ1osYUFBWSxFQVVmO0VBMURUO1FBbURnQixvQkFBbUIsRUFDdEI7RUFwRGI7UUFtRGdCLG9CQUFtQixFQUN0QjtFQXBEYjtRQW1EZ0Isb0JBQW1CLEVBQ3RCO0VBcERiO1FBdURnQixhQUFZO1FBQ1osY0FBYSxFQUNoQjtFQXpEYjtNQTZEWSxjQUFhO01BQ2IsK0JBQThCO01BQzlCLGtCQUFpQjtNQUNqQixvQkFBbUIsRUFxQ3RCO0VBckdUO1FBbUVnQixjQUFhO1FBQ2Isb0JBQW1CLEVBZXRCO0VBbkZiO1VBdUVvQixhQUFZO1VBQ1osZ0JBQWU7VUFDZixnQkFBZSxFQUNsQjtFQTFFakI7VUE2RW9CLGNBQWEsRUFDaEI7RUE5RWpCO1VBaUZvQixjQUFhLEVBQ2hCO0VBbEZqQjtRQXVGb0Isb0JBQW1CO1FBQ25CLG1CQUFrQjtRQUNsQix5QkFBd0I7UUFDeEIsY0FBYTtRQUNiLCtCQUE4QjtRQUM5QixvQkFBbUIsRUFPdEI7RUFuR2pCO1VBK0Z3QixhQUFZO1VBQ1osZ0JBQWU7VUFDZixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXJyaWdodC9zaWRlYmFycmlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuXHJcbiAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1zZy1saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgICAgICAubm8tbWVzc2FnZXN7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZGZkZTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4ODg7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1zZy1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E3YTdhNztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1zZy1ib3gge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIC5pbnB1dC1tZXNzYWdlLXRvLXNlbmR7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGF0LXRvb2xze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmFkZGluZy10b29sc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNpbWFnZXMtZm9yLXNlbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjZmlsZXMtZm9yLXNlbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlbmQtYnV0dG9uLXRvb2x7XHJcbiAgICAgICAgICAgICAgICAuc2VuZC1idG4tcm91bmR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0NDQ1NjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDBweCAycHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
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
    function SidebarrightComponent(router, chatService, afStorage, auth, apiService) {
        var _this = this;
        this.router = router;
        this.chatService = chatService;
        this.afStorage = afStorage;
        this.auth = auth;
        this.apiService = apiService;
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
            var notificationData = {
                "sender": this.authUser.uid,
                "type": "comment",
                "message": "Project commented",
                "project": this.projectId
            };
            this.apiService.sendRequest('sendNotification', notificationData).subscribe(function (data) { });
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
        if (this.feedContainer) {
            this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
        }
    };
    SidebarrightComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    SidebarrightComponent.prototype.popupforImage = function () {
        if (this.images_for_send) {
            this.images_for_send.nativeElement.click();
        }
    };
    SidebarrightComponent.prototype.popupforFile = function () {
        if (this.files_for_send) {
            this.files_for_send.nativeElement.click();
        }
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
                var notificationData = {
                    "sender": me.authUser.uid,
                    "type": "comment",
                    "message": "Project commented",
                    "project": me.projectId
                };
                me.apiService.sendRequest('sendNotification', notificationData).subscribe(function (data) { });
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
                var notificationData = {
                    "sender": me.authUser.uid,
                    "type": "comment",
                    "message": "Project commented",
                    "project": me.projectId
                };
                me.apiService.sendRequest('sendNotification', notificationData).subscribe(function (data) { });
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
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
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
        if (!this.authService.authUser) {
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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/database.service */ "./src/app/_services/database.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
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
    function SignupComponent(activedRoute, router, authService, matIconRegistry, domSanitizer, databaseService, apiService, afAuth) {
        // if (localStorage.getItem('currentUser') !== 'undefined' && localStorage.getItem('currentUser') !== null) {
        //   this.router.navigate(['/']);
        // }
        var _this = this;
        this.activedRoute = activedRoute;
        this.router = router;
        this.authService = authService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.databaseService = databaseService;
        this.apiService = apiService;
        this.afAuth = afAuth;
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
        this.projectId = this.activedRoute.snapshot.params['pid'];
        this.teamId = this.activedRoute.snapshot.params['teamid'];
        if (this.projectId && this.teamId) {
            this.apiService.sendRequest('getTeamMemberInfo', { project: this.projectId, teamid: this.teamId }).subscribe(function (data) {
                if (data.data) {
                    _this.teamInfo = data.data;
                    _this.user.name = data.data.name;
                    _this.user.cname = data.data.company;
                    _this.user.email = data.data.email;
                }
            });
        }
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
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
            if (_this.projectId && _this.teamId) {
                if (_this.teamInfo) {
                    _this.teamInfo.userid = _this.afAuth.auth.currentUser.uid;
                    _this.databaseService.updateRow('/teams/' + _this.projectId, _this.teamId, _this.teamInfo);
                    _this.databaseService.createRow('/user-project', { userid: _this.teamInfo.userid, projectid: _this.projectId });
                }
            }
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
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

module.exports = ".upgrade {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background: black;\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .upgrade .user-avartar {\n    width: 100px;\n    border-radius: 50%;\n    height: 100px; }\n  .upgrade .pay-now-btn {\n    background: #3b5998;\n    color: white;\n    padding: 10px 0px;\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    margin-top: 25px;\n    width: 20%; }\n  .upgrade .price-btn {\n    background: #000;\n    color: #3b5998;\n    padding: 10px 0px;\n    border: solid 2px #3b5998;\n    border-radius: 3px;\n    outline: none;\n    margin-top: 25px;\n    width: 20%;\n    font-size: 25px; }\n  .upgrade .price-btn b {\n      font-size: 30px;\n      color: #3b5998; }\n  .upgrade .slider-container {\n    width: 30%; }\n  ::ng-deep .slider-container .ng5-slider .ng5-slider-bar {\n  background: #1b1a1a; }\n  ::ng-deep .slider-container .ng5-slider .ng5-slider-pointer {\n  background-color: #3b5998;\n  outline: none; }\n  ::ng-deep .slider-container .ng5-slider .ng5-slider-tick {\n  width: 20px;\n  height: 20px;\n  top: -7px;\n  border-radius: 50%;\n  background: #1b1a1a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBncmFkZS9FOlxcQW5ndWxhckpTXFxTb25nXFxiaW0vc3JjXFxhcHBcXHVwZ3JhZGVcXHVwZ3JhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxPQUFNO0VBQ04sUUFBTztFQUNQLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBdUMxQjtFQWxERDtJQWNRLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYSxFQUNoQjtFQWpCTDtJQW9CUSxvQkFBbUI7SUFDbkIsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsV0FDSixFQUFDO0VBNUJMO0lBK0JRLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YsZ0JBQWUsRUFNbEI7RUE3Q0w7TUEwQ1ksZ0JBQWU7TUFDZixlQUFjLEVBQ2pCO0VBNUNUO0lBZ0RRLFdBQVUsRUFDYjtFQUdMO0VBRVEsb0JBQW1CLEVBQ3RCO0VBSEw7RUFNUSwwQkFBeUI7RUFDekIsY0FBYSxFQUNoQjtFQVJMO0VBV1EsWUFBVztFQUNYLGFBQVk7RUFDWixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGUvdXBncmFkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGdyYWRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC51c2VyLWF2YXJ0YXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXktbm93LWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB3aWR0aDogMjAlXHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMzYjU5OTg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbiAgICAgICAgYntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIC5zbGlkZXItY29udGFpbmVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFiMWExYTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci1jb250YWluZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItdGljayB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFiMWExYTtcclxuICAgIH1cclxuICAgICBcclxufSJdfQ== */"

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
            image: '/assets/images/logo-stripe.png',
            locale: 'auto',
            token: function (token) {
                _this.upgradeService.processPayment(token, _this.amount * 50 * 100, _this.value);
                location.href = '/';
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
    stripeKey: 'pk_test_XopyJS2ntwqB3j7bd6mzHRSn',
    apiUrl: 'https://us-central1-bimbackend.cloudfunctions.net/'
    // apiUrl: 'http://localhost:5001/bimbackend/us-central1/'
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