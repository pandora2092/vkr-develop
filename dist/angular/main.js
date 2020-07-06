(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/add.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/add.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"\" #addForm=\"ngForm\" class=\"addItems\">\n  <!-- <input matInput type=\"text\" required [(ngModel)]=\"addName\" name=\"addName\"> -->\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Название</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"addName\" name=\"addName\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Шифр рукописи</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"addCode\" name=\"addCode\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Сведения о рукописи</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"addManuscript\" name=\"addManuscript\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Заглавие</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"addInfo\" name=\"addInfo\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Библиография</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"addBibliography\" name=\"addBibliography\">\n  </mat-form-field>\n\n  <button class=\"btn\" type=\"submit\" id=\"addNews\" (click)=\"addNews()\"> Опубликовать </button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  contact works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit/edit.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit/edit.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form action=\"\" #editForm=\"ngForm\" class=\"addItems\">\n  <!-- <input matInput type=\"text\" required [(ngModel)]=\"addName\" name=\"addName\"> -->\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Название</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"editName\" name=\"editName\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Шифр рукописи</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"editCode\" name=\"editCode\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Сведения о рукописи</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"editManuscript\" name=\"editManuscript\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Заглавие</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"editInfo\" name=\"editInfo\">\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" class=\"width-100\" hideRequiredMarker=\"true\" class=\"addItems__field\">\n    <mat-label>Библиография</mat-label>\n    <input matInput type=\"text\" required [(ngModel)]=\"editBibliography\" name=\"editBibliography\">\n  </mat-form-field>\n\n  <button class=\"btn\" type=\"submit\" id=\"editNews\" (click)=\"editRow(editId)\"> Редактировать </button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul>\n  <li><a href=\"/\">О проекте</a></li>\n  <li><a href=\"/search\">Поиск</a></li>\n  <li><a href=\"/contact\">Обратная связь</a></li>\n  <li><a href=\"/add\">Добавить</a></li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table border=\"1\">\n  <tr>\n    <th>Название произведения</th>\n    <th>Шифр рукописи</th>\n    <th>Сведения о рукописи</th>\n    <th>Заглавие</th>\n    <th>Библиография</th>\n   </tr>\n  <tr *ngFor=\"let item of table\">\n    <td>{{item.name}}</td>\n    <td>{{item.code}}</td>\n    <td>{{item.manuscript}}</td>\n    <td>{{item.info}}</td>\n    <td>{{item.bibliography}}</td>\n    <td> <button (click)=\"deleteRow(item._id)\">delete</button> </td>\n    <td> <button (click)=\"editRow(item._id)\">edit</button> </td>\n  </tr>\n\n</table>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");






var routes = [
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'add', component: _components_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'express-angular';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_effects_list_news__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/effects/list-news */ "./src/app/store/effects/list-news.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_21__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(Object(_store_reducers__WEBPACK_IMPORTED_MODULE_18__["reducers"])()),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production,
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([
                    _store_effects_list_news__WEBPACK_IMPORTED_MODULE_19__["NewsListEffects"]
                ]),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            exports: [
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_21__["EditComponent"]
            ],
            entryComponents: [
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_21__["EditComponent"]
            ],
            providers: [
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogRef"], useValue: {} },
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_DATA"], useValue: [] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add/add.component.styl":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.styl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addItems {\n  width: 500px;\n}\n.addItems__field {\n  width: 100%;\n}\n/*# sourceMappingURL=src/app/components/add/add.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvc3JjL2FwcC9jb21wb25lbnRzL2FkZC9hZGQuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQU07QUNDUjtBREFFO0VBQ0UsV0FBTTtBQ0VWO0FBQ0EsbUVBQW1FIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZEl0ZW1zXHJcbiAgd2lkdGggNTAwcHhcclxuICAmX19maWVsZFxyXG4gICAgd2lkdGggMTAwJVxyXG4iLCIuYWRkSXRlbXMge1xuICB3aWR0aDogNTAwcHg7XG59XG4uYWRkSXRlbXNfX2ZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/actions/list-news */ "./src/app/store/actions/list-news.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");




var AddComponent = /** @class */ (function () {
    function AddComponent(store) {
        this.store = store;
        this.addName = '';
        this.addCode = '';
        this.addManuscript = '';
        this.addInfo = '';
        this.addBibliography = '';
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addNews = function () {
        this.store.dispatch(new _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__["AddNewsAction"](this.addName, this.addCode, this.addManuscript, this.addInfo, this.addBibliography));
    };
    AddComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('addForm'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddComponent.prototype, "addForm", void 0);
    AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/add.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add.component.styl */ "./src/app/components/add/add.component.styl")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.styl":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.styl ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/components/contact/contact.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnN0eWwifQ== */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.styl */ "./src/app/components/contact/contact.component.styl")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.styl":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.styl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/components/edit/edit.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0L2VkaXQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0L2VkaXQuY29tcG9uZW50LnN0eWwifQ== */");

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/actions/list-news */ "./src/app/store/actions/list-news.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _store_reducers_list_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/list-news */ "./src/app/store/reducers/list-news.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");






var EditComponent = /** @class */ (function () {
    function EditComponent(store, data) {
        this.store = store;
        this.data = data;
        this.editName = '';
        this.editCode = '';
        this.editManuscript = '';
        this.editInfo = '';
        this.editBibliography = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_reducers_list_news__WEBPACK_IMPORTED_MODULE_4__["gettOneUnits"]).subscribe(function (value) {
            _this.editName = value.name;
            _this.editCode = value.code;
            _this.editManuscript = value.manuscript;
            _this.editInfo = value.info;
            _this.editBibliography = value.bibliography;
            _this.editId = value._id;
        });
        this.store.dispatch(new _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__["GetNewsByIdAction"](this.data.id));
    };
    EditComponent.prototype.editRow = function (id) {
        this.store.dispatch(new _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__["EditNewsByIdAction"](id, this.editName, this.editCode, this.editManuscript, this.editInfo, this.editBibliography));
    };
    EditComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit/edit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.component.styl */ "./src/app/components/edit/edit.component.styl")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], Object])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.styl":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.styl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/components/menu/menu.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnN0eWwifQ== */");

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.component.styl */ "./src/app/components/menu/menu.component.styl")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.styl":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.styl ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/components/search/search.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUF5RSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc3R5bCJ9 */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/actions/list-news */ "./src/app/store/actions/list-news.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _store_reducers_list_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/list-news */ "./src/app/store/reducers/list-news.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");







var SearchComponent = /** @class */ (function () {
    function SearchComponent(store, dialog) {
        this.store = store;
        this.dialog = dialog;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_reducers_list_news__WEBPACK_IMPORTED_MODULE_4__["gettUnits"]).subscribe(function (value) {
            _this.table = value;
        });
        this.store.dispatch(new _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__["GetAllNewsAction"]());
    };
    SearchComponent.prototype.deleteRow = function (id) {
        this.store.dispatch(new _store_actions_list_news__WEBPACK_IMPORTED_MODULE_1__["DeleteNewsByIdAction"](id));
    };
    SearchComponent.prototype.editRow = function (id) {
        this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], {
            panelClass: 'main',
            data: { id: id },
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.styl */ "./src/app/components/search/search.component.styl")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getAllItem = function () {
        return this.http.get("/api/search/all");
    };
    ApiService.prototype.getItemById = function (id) {
        return this.http.get("/api/search/" + id);
    };
    ApiService.prototype.addItemToTable = function (name, code, manuscript, info, bibliography) {
        var item = { name: name, code: code, manuscript: manuscript, info: info, bibliography: bibliography };
        return this.http.post("/api/search/save", item);
    };
    ApiService.prototype.deteleFromTable = function (id) {
        return this.http.post("/api/search/item/" + id, {});
    };
    ApiService.prototype.editRow = function (id, name, code, manuscript, info, bibliography) {
        var item = { name: name, code: code, manuscript: manuscript, info: info, bibliography: bibliography };
        return this.http.post("/api/search/item/" + id + "/edit", item);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/store/actions/list-news.ts":
/*!********************************************!*\
  !*** ./src/app/store/actions/list-news.ts ***!
  \********************************************/
/*! exports provided: ListNewsActionTypes, GetAllNewsAction, GetAllNewsSuccessAction, GetAllNewsFailureAction, AddNewsAction, AddNewsSuccessAction, DeleteNewsByIdAction, DeleteNewsByIdSuccessAction, EditNewsByIdAction, EditNewsByIdSuccessAction, GetNewsByIdAction, GetNewsByIdSuccessAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsActionTypes", function() { return ListNewsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllNewsAction", function() { return GetAllNewsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllNewsSuccessAction", function() { return GetAllNewsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllNewsFailureAction", function() { return GetAllNewsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsAction", function() { return AddNewsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsSuccessAction", function() { return AddNewsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNewsByIdAction", function() { return DeleteNewsByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNewsByIdSuccessAction", function() { return DeleteNewsByIdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsByIdAction", function() { return EditNewsByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsByIdSuccessAction", function() { return EditNewsByIdSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsByIdAction", function() { return GetNewsByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsByIdSuccessAction", function() { return GetNewsByIdSuccessAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ListNewsActionTypes;
(function (ListNewsActionTypes) {
    ListNewsActionTypes["ActionGetAllNews"] = "ACTION_GET_ALL_NEWS";
    ListNewsActionTypes["ActionGetAllNewsSuccess"] = "ACTION_GET_ALL_NEWS_SUCCESS";
    ListNewsActionTypes["ActionGetAllNewsFailure"] = "ACTION_GET_ALL_NEWS_FAILURE";
    ListNewsActionTypes["ActionAddNews"] = "ACTION_ADD_NEWS";
    ListNewsActionTypes["ActionAddNewsSuccess"] = "ACTION_ADD_NEWS_SUCCUSS";
    ListNewsActionTypes["ActionDeleteNewsById"] = "ACTION_DETELE_NEWS_BY_ID";
    ListNewsActionTypes["ActionDeleteNewsByIdSuccess"] = "ACTION_DETELE_NEWS_BY_ID_SUCCESS";
    ListNewsActionTypes["ActionEditNewsById"] = "ACTION_EDIT_NEWS_BY_ID";
    ListNewsActionTypes["ActionEditNewsByIdSuccess"] = "ACTION_EDIT_NEWS_BY_ID_SUCCESS";
    ListNewsActionTypes["ActionGetNewsById"] = "ACTION_GET_NEWS_BY_ID";
    ListNewsActionTypes["ActionGetNewsByIdSuccess"] = "ACTION_GET_NEWS_BY_ID_SUCCESS";
})(ListNewsActionTypes || (ListNewsActionTypes = {}));
var GetAllNewsAction = /** @class */ (function () {
    function GetAllNewsAction() {
        this.type = ListNewsActionTypes.ActionGetAllNews;
        this.payload = {};
    }
    return GetAllNewsAction;
}());

var GetAllNewsSuccessAction = /** @class */ (function () {
    function GetAllNewsSuccessAction(news) {
        this.type = ListNewsActionTypes.ActionGetAllNewsSuccess;
        this.payload = { news: news };
    }
    return GetAllNewsSuccessAction;
}());

var GetAllNewsFailureAction = /** @class */ (function () {
    function GetAllNewsFailureAction(err) {
        this.type = ListNewsActionTypes.ActionGetAllNewsFailure;
        this.payload = {
            err: err,
        };
    }
    return GetAllNewsFailureAction;
}());

var AddNewsAction = /** @class */ (function () {
    function AddNewsAction(name, code, manuscript, info, bibliography) {
        this.type = ListNewsActionTypes.ActionAddNews;
        this.payload = { name: name, code: code, manuscript: manuscript, info: info, bibliography: bibliography };
    }
    return AddNewsAction;
}());

var AddNewsSuccessAction = /** @class */ (function () {
    function AddNewsSuccessAction() {
        this.type = ListNewsActionTypes.ActionAddNewsSuccess;
        this.payload = {};
    }
    return AddNewsSuccessAction;
}());

var DeleteNewsByIdAction = /** @class */ (function () {
    function DeleteNewsByIdAction(id) {
        this.type = ListNewsActionTypes.ActionDeleteNewsById;
        this.payload = { id: id };
    }
    return DeleteNewsByIdAction;
}());

var DeleteNewsByIdSuccessAction = /** @class */ (function () {
    function DeleteNewsByIdSuccessAction() {
        this.type = ListNewsActionTypes.ActionDeleteNewsByIdSuccess;
        this.payload = {};
    }
    return DeleteNewsByIdSuccessAction;
}());

var EditNewsByIdAction = /** @class */ (function () {
    function EditNewsByIdAction(id, name, code, manuscript, info, bibliography) {
        this.type = ListNewsActionTypes.ActionEditNewsById;
        this.payload = { id: id, name: name, code: code, manuscript: manuscript, info: info, bibliography: bibliography };
    }
    return EditNewsByIdAction;
}());

var EditNewsByIdSuccessAction = /** @class */ (function () {
    function EditNewsByIdSuccessAction() {
        this.type = ListNewsActionTypes.ActionEditNewsByIdSuccess;
        this.payload = {};
    }
    return EditNewsByIdSuccessAction;
}());

var GetNewsByIdAction = /** @class */ (function () {
    function GetNewsByIdAction(id) {
        this.type = ListNewsActionTypes.ActionGetNewsById;
        this.payload = { id: id };
    }
    return GetNewsByIdAction;
}());

var GetNewsByIdSuccessAction = /** @class */ (function () {
    function GetNewsByIdSuccessAction(row) {
        this.type = ListNewsActionTypes.ActionGetNewsByIdSuccess;
        this.payload = { row: row };
    }
    return GetNewsByIdSuccessAction;
}());



/***/ }),

/***/ "./src/app/store/effects/list-news.ts":
/*!********************************************!*\
  !*** ./src/app/store/effects/list-news.ts ***!
  \********************************************/
/*! exports provided: NewsListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListEffects", function() { return NewsListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_list_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/list-news */ "./src/app/store/actions/list-news.ts");







var NewsListEffects = /** @class */ (function () {
    function NewsListEffects(actions$, apiService) {
        var _this = this;
        this.actions$ = actions$;
        this.apiService = apiService;
        this.news$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_list_news__WEBPACK_IMPORTED_MODULE_6__["ListNewsActionTypes"].ActionGetAllNews), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.apiService
                .getAllItem()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return new _actions_list_news__WEBPACK_IMPORTED_MODULE_6__["GetAllNewsSuccessAction"](value);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_list_news__WEBPACK_IMPORTED_MODULE_6__["GetAllNewsFailureAction"](err));
            }));
        }));
        this.newsAdd$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_list_news__WEBPACK_IMPORTED_MODULE_6__["ListNewsActionTypes"].ActionAddNews), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.apiService
                .addItemToTable(action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return new _actions_list_news__WEBPACK_IMPORTED_MODULE_6__["AddNewsSuccessAction"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }));
        }));
        this.deleteNews$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_list_news__WEBPACK_IMPORTED_MODULE_6__["ListNewsActionTypes"].ActionDeleteNewsById), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.apiService
                .deteleFromTable(action.payload.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return new _actions_list_news__WEBPACK_IMPORTED_MODULE_6__["DeleteNewsByIdSuccessAction"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }));
        }));
        this.editNews$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_list_news__WEBPACK_IMPORTED_MODULE_6__["ListNewsActionTypes"].ActionEditNewsById), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.apiService
                .editRow(action.payload.id, action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return new _actions_list_news__WEBPACK_IMPORTED_MODULE_6__["EditNewsByIdSuccessAction"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }));
        }));
        this.getNewsById$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_list_news__WEBPACK_IMPORTED_MODULE_6__["ListNewsActionTypes"].ActionGetNewsById), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.apiService
                .getItemById(action.payload.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
                return new _actions_list_news__WEBPACK_IMPORTED_MODULE_6__["GetNewsByIdSuccessAction"](value[0]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            }));
        }));
    }
    NewsListEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], NewsListEffects.prototype, "news$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], NewsListEffects.prototype, "newsAdd$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], NewsListEffects.prototype, "deleteNews$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], NewsListEffects.prototype, "editNews$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], NewsListEffects.prototype, "getNewsById$", void 0);
    NewsListEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], NewsListEffects);
    return NewsListEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm5/router-store.js");
/* harmony import */ var _list_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-news */ "./src/app/store/reducers/list-news.ts");



function reducers() {
    return {
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
        newsList: _list_news__WEBPACK_IMPORTED_MODULE_2__["newsListReducer"],
    };
}


/***/ }),

/***/ "./src/app/store/reducers/list-news.ts":
/*!*********************************************!*\
  !*** ./src/app/store/reducers/list-news.ts ***!
  \*********************************************/
/*! exports provided: newsListReducer, getUnits, getOneUnits, getUnitsState, gettUnits, getOneUnitsState, gettOneUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListReducer", function() { return newsListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnits", function() { return getUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOneUnits", function() { return getOneUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnitsState", function() { return getUnitsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettUnits", function() { return gettUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOneUnitsState", function() { return getOneUnitsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettOneUnits", function() { return gettOneUnits; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _actions_list_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/list-news */ "./src/app/store/actions/list-news.ts");



var initialState = {
    newsList: '',
    oneNews: '',
};
function newsListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_list_news__WEBPACK_IMPORTED_MODULE_2__["ListNewsActionTypes"].ActionGetAllNewsSuccess: {
            var payload = action.payload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { newsList: payload.news });
        }
        case _actions_list_news__WEBPACK_IMPORTED_MODULE_2__["ListNewsActionTypes"].ActionGetNewsByIdSuccess: {
            var payload = action.payload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { oneNews: payload.row });
        }
        default:
            return state;
    }
}
var getUnits = function (state) { return state.newsList; };
var getOneUnits = function (state) { return state.oneNews; };
var getUnitsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('newsList');
var gettUnits = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUnitsState, getUnits);
var getOneUnitsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('oneNews');
var gettOneUnits = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUnitsState, getOneUnits);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pando\OneDrive\Desktop\test full\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map