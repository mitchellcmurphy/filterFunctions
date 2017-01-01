var ac_main =
webpackJsonpac__name_([1],{

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__(71);
var core_1 = __webpack_require__(0);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    core_1.enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        platform_browser_1.disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppState);
exports.AppState = AppState;


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(503));


/***/ },

/***/ 362:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__(500));


/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(0);
var app_service_1 = __webpack_require__(325);
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            __webpack_require__(670)
        ],
        template: "\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <footer>\n    </footer>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppState !== "undefined" && app_service_1.AppState) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;


/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(71);
var forms_1 = __webpack_require__(238);
var http_1 = __webpack_require__(239);
var router_1 = __webpack_require__(240);
var hmr_1 = __webpack_require__(103);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(241);
var app_routes_1 = __webpack_require__(502);
// App is our top level component
var app_component_1 = __webpack_require__(499);
var app_resolver_1 = __webpack_require__(501);
var app_service_1 = __webpack_require__(325);
var home_1 = __webpack_require__(326);
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true, preloadingStrategy: router_1.PreloadAllModules })
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ApplicationRef !== "undefined" && core_1.ApplicationRef) === "function" && _a || Object, typeof (_b = typeof app_service_1.AppState !== "undefined" && app_service_1.AppState) === "function" && _b || Object])
], AppModule);
exports.AppModule = AppModule;
var _a, _b;


/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(10);
__webpack_require__(656);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataResolver);
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var home_1 = __webpack_require__(326);
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent }
];


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var angular2_uuid_1 = __webpack_require__(505);
var HomeComponent = (function () {
    function HomeComponent() {
        this.emailNumber = 100000;
        this.randomPercentage = 50;
        this.ticksArray = 0;
        this.ticksMap = 0;
        this.expectedCount = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.emails = [];
        this.filteredEmails = [];
        this.filteredEmailsMap = new Map();
        this.filteredResult = [];
    };
    //Generates a list of random emails with a unique percentage
    //Inputs:
    //this.randomPercentage : the percentage set by the user that is used to calculate how many dupes per entry
    //this.emailNumber : the number of emails to generate, set by the user
    //Outputs:
    //this.emails : adds the randomly generated emails to this object
    //this.expectedCount : calculated and set here, used for a check in the html
    //Uses:
    //this.shuffleEmails() : used to shuffle the email list
    HomeComponent.prototype.generateEmails = function () {
        //Calculate the percentage
        var percentage = this.randomPercentage / 100;
        //Calculate the number of unique values to create
        var uniques = percentage > 0 ? Math.round(this.emailNumber * percentage) : 1;
        //Calculate the number of dupes to make
        var dupes = this.emailNumber - uniques;
        //Create a loop to add entries into this.emails
        for (var i = 0; i < uniques; i++) {
            //Create a new email and push it
            var newEmail = angular2_uuid_1.UUID.UUID() + '@email.com';
            this.emails.push(newEmail);
        }
        for (var j = 0; j < dupes; j++) {
            var dupe = this.emails[Math.floor((Math.random() * this.emails.length))];
            this.emails.push(dupe);
        }
        //Calculate the expected count of unique emails
        this.expectedCount = percentage > 0 ? Math.round(this.emailNumber * percentage) : 1;
        //Shuffle the list so the duplicates are not close to each other
        this.shuffleEmails();
    };
    //Shuffles an array of strings
    //Inputs:
    //this.emails : shuffles this array so entries are not close to their initial placement
    //Outputs:
    //this.emails : changes the structure of this array
    HomeComponent.prototype.shuffleEmails = function () {
        //Loop through our email list
        for (var i = this.emails.length; i; i--) {
            //Generate a random number
            var j = Math.floor(Math.random() * i);
            //Swap the two entires
            _a = [this.emails[j], this.emails[i - 1]], this.emails[i - 1] = _a[0], this.emails[j] = _a[1];
        }
        console.log("Emails after shuffle, before sort", this.emails);
        var _a;
    };
    //THIS IS AN OLD FUNCTION THAT DIDN'T PERFORM AS WELL AS NEEDED, LEAVING TO SHOW THOUGHT PROCESS AND PROGRESSION
    HomeComponent.prototype.filterEmailsArray = function () {
        var start = new Date();
        var length = this.emails.length;
        for (var i = 0; i < length; i++) {
            var email = this.emails[i];
            if (this.filteredEmails.indexOf(email) < 0) {
                this.filteredEmails.push(email);
            }
        }
        this.ticksArray = Math.abs(new Date().getTime() - start.getTime());
        console.log("Emails", this.emails.length);
        console.log("Filtered", this.filteredEmails.length);
        console.log("Contents:", this.filteredEmails);
    };
    //Filters an array of randomly generated emails into a mapping with only unique entries, no duplicates
    //Inputs:
    //this.emails : filters this list down but not by removing any entries
    //Outputs:
    //this.filteredEmailsMap : creates this mapping with only unique entries
    //this.ticksMap : a calulation of how long it took to filter the data
    HomeComponent.prototype.filterEmailsMap = function () {
        //Start our timer (essentually)
        var start = new Date();
        var length = this.emails.length;
        //For every entry in our email list, check if that email's key (which is this case is the email itself)
        //is not already in our mapping.
        //If we don't find the entry in the map, add it
        //If it already exists, move on
        for (var i = 0; i < length; i++) {
            var email = this.emails[i];
            if (!(email in this.filteredEmailsMap)) {
                this.filteredEmailsMap.set(email, email);
                this.filteredResult.push(email);
            }
        }
        //Calculate how long it took to process the filter
        this.ticksMap = Math.abs(new Date().getTime() - start.getTime());
        // console.log("Emails", this.emails.length);
        // console.log("Filtered", this.filteredEmailsMap.size);
        // console.log("Contents:", this.filteredEmailsMap);
        console.log("Results", this.filteredResult);
    };
    //Clears all data used to create and filter data
    //Inputs:
    //this.emails : clears this
    //this.filteredEmails : clears this
    //this.filteredEmailsMap : clears this
    //Outputs:
    //this.emails : cleared
    //this.filteredEmails : cleared
    //this.filteredEmailsMap : cleared
    HomeComponent.prototype.clearAll = function () {
        this.emails = [];
        this.filteredEmails = [];
        this.filteredEmailsMap.clear();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        styles: [__webpack_require__(671)],
        template: __webpack_require__(651)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ },

/***/ 505:
/***/ function(module, exports) {

"use strict";
"use strict";
var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(362)();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif !important;\n  background-color: #213A72 !important;\n  color: #edc940 !important;\n}\n\nspan.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ },

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(362)();
// imports


// module
exports.push([module.i, ".card-container{\n    text-align: center;\n     -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\n       -moz-animation: fadein 2s; /* Firefox < 16 */\n        -ms-animation: fadein 2s; /* Internet Explorer */\n         -o-animation: fadein 2s; /* Opera < 12.1 */\n            animation: fadein 2s;\n}\n\n.title{\n    font: 22px bold;\n    padding-bottom: 20px;\n}\n\n.email-generator-container{\n    /*border: 1px yellow solid;*/\n    width: 50%;\n    min-height: 80px;\n    margin: 0 auto;\n}\n\ninput[type=text] {\n    text-align: center;\n    width: 150px;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    font-size: 18px;\n}\n\n.awesome-button{\n    width: 200px;\n    height: 50px;\n    line-height: 50px;\n    margin: 0 auto;\n    display: inline-block;\n    border: #edc940 1px solid;\n    cursor: pointer;\n}\n\n.awesome-button:hover{\n    color: #213A72;\n    background-color: #edc940;\n}\n\n.initial-info{\n    margin: 0 auto;\n    width: 200px;\n    text-align: center;\n    padding: 20px;\n}\n\n.emails-to-sort{\n    font-size: 20px;\n    padding: 10px;\n}\n\n.filters{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.email-filter-container{\n    padding: 20px;\n}\n\n.hugeText{\n    font-size: 30px;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Internet Explorer */\n@-ms-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}", ""]);

// exports


/***/ },

/***/ 651:
/***/ function(module, exports) {

module.exports = "<div class=\"card-container\">\n  <div class='title'>\n    FILTER SOME DANG EMAILS\n  </div>\n  <div class=\"email-generator-container\">\n    Enter number of emails to generate: <br>\n    (Be as mean as you want, but it can only handle 10,000. No More. No Less) <br>\n    <input type=\"text\" [(ngModel)]=\"emailNumber\"><br>\n    How unique do you want the entries (in %)?: <br>\n    (You know, 50% if half are copied and 25% for 4 dupes and 100% for no dupes and -24.7% if you want to break it) <br>\n    <input type=\"text\" [(ngModel)]=\"randomPercentage\">%<br>\n    <div class='awesome-button' (click)=generateEmails()>Generate Emails</div>\n  </div>\n  <div class=\"initial-info\">\n    <span id=\"emails-to-sort\">Emails to sort: {{emails.length}}</span><br>\n    <span *ngIf=\"emails.length > 0 && emails.length < 1000\">That's not enough, it probably won't work out of spite</span>\n    <span *ngIf=\"emails.length >= 1000 && emails.length < 5000\">Getting better, but I'm pretty sure that number breaks it</span>\n    <span *ngIf=\"emails.length >= 5000 && emails.length < 10000\">Yeah we can test with this number, but only if you hate puppies. You don't hate puppies do you?</span>\n    <span *ngIf=\"emails.length >= 10000 && emails.length < 50000\">Wow, that's obviously too much. Probably won't work</span>\n    <span *ngIf=\"emails.length >= 50000\">No way. This will break it for sure...Do it.</span>\n  </div>\n  <div class=\"filters\">\n    <!--<div class=\"email-filter-container\">\n      <div class='awesome-button' (click)=filterEmailsArray()>Filter Emails Array</div><br>\n      <span>Sorted emails (Array):{{filteredEmails.length}}</span><br>\n      <span>Total time this whole thing took: {{ticksArray}}ms</span>\n    </div>-->\n    <div class=\"email-filter-container\">\n      <div class='awesome-button' (click)=filterEmailsMap()>Filter Emails Into A Map</div><br>\n      <span>Sorted emails count: <br>\n      Should be: {{expectedCount}} <br>\n      Actually: {{filteredEmailsMap.size}}</span><br>\n      <span *ngIf=\"filteredEmailsMap.size > 0 && expectedCount == filteredEmailsMap.size\">Holy cow! It worked! It probably still didn't work</span>\n      <span *ngIf=\"filteredEmailsMap.size > 0 && expectedCount !== filteredEmailsMap.size\">Great, now I'm a failure and I can't spell Colonel</span>\n      <br>\n      <span>Total time this whole mess took to sort: {{ticksMap}}ms</span><br>\n      <span *ngIf=\"ticksMap > 60000\">You're still here? It failed like an hour ago!</span>\n      <span *ngIf=\"ticksMap <= 60000 && ticksMap >= 30000\">This probably isn't going to go over well with anyone</span>\n      <span *ngIf=\"ticksMap < 30000 && ticksMap >= 10000\">That's too long, any longer and I bet you would throw your computer</span>\n      <span *ngIf=\"ticksMap < 10000 && ticksMap >= 5000\">Close but it's still a colosal failure</span>\n      <span *ngIf=\"ticksMap < 5000 && ticksMap > 1000\">Try a little harder, and also stop mumbling swear words to yourself</span>\n      <span *ngIf=\"ticksMap == 1000\">Hot dog! Right on the money!</span>\n      <span *ngIf=\"ticksMap < 1000 && ticksMap >= 500\">Less than a second, what a world!</span>\n      <span *ngIf=\"ticksMap < 500 && ticksMap >= 100\">If only I could cook this fast!</span>\n      <span *ngIf=\"ticksMap < 100 && ticksMap > 0\">Ok that's too fast. This thing is obviously cheating</span>\n    </div>\n  </div>\n  <div class='awesome-button' (click)=clearAll()>Clear all this junk</div>\n</div>\n"

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(10);
var of_1 = __webpack_require__(70);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(648);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(649);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(147);
var environment_1 = __webpack_require__(241);
var hmr_1 = __webpack_require__(103);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(377);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }

},[672]);
//# sourceMappingURL=main.map