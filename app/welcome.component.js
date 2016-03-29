System.register(['angular2/core', './github.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, github_service_1, auto_grow_directive_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(_githubService) {
                    this._githubService = _githubService;
                    this.title = "Welcome to NYC Data Science";
                    this.onClick = function ($event) {
                        console.log('button clicked', $event);
                        this._githubService.authorize()
                            .subscribe(function (data) { return console.log(data); });
                    };
                }
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        templateUrl: 'app/welcome.html',
                        providers: [github_service_1.GithubService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map