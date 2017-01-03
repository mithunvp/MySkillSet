"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SkillAPIServiceProvider_1 = require('./services/SkillAPIServiceProvider');
var MySkillComponent = (function () {
    function MySkillComponent(_dataService) {
        this._dataService = _dataService;
        this.message = "Hello from HomeComponent constructor";
    }
    MySkillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService
            .GetAll()
            .subscribe(function (data) { return _this.values = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    };
    MySkillComponent = __decorate([
        core_1.Component({
            selector: 'my-skill',
            templateUrl: './myskill.component.html',
            providers: [SkillAPIServiceProvider_1.SkillAPIServiceProvider]
        }), 
        __metadata('design:paramtypes', [SkillAPIServiceProvider_1.SkillAPIServiceProvider])
    ], MySkillComponent);
    return MySkillComponent;
}());
exports.MySkillComponent = MySkillComponent;
//# sourceMappingURL=myskill.component.js.map