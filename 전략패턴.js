var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Duck = /** @class */ (function () {
    function Duck(quackBehavior, flyBehavior) {
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }
    Duck.prototype.setQuackBehavior = function (quackBehavior) {
        this.quackBehavior = quackBehavior;
    };
    Duck.prototype.setFlyBehavior = function (flyBehavior) {
        this.flyBehavior = flyBehavior;
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    return Duck;
}());
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log("날고 있어요");
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log("저는 못 날아요");
    };
    return FlyNoWay;
}());
var FlyRocketPowered = /** @class */ (function () {
    function FlyRocketPowered() {
    }
    FlyRocketPowered.prototype.fly = function () {
        console.log("로켓 추진으로 날아갑니다.");
    };
    return FlyRocketPowered;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log("꽥");
    };
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log("조용");
    };
    return MuteQuack;
}());
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log("삑");
    };
    return Squeak;
}());
// const duck = new Duck(new MuteQuack, new FlyNoWay);
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        return _super.call(this, new MuteQuack(), new FlyNoWay()) || this;
    }
    ModelDuck.prototype.display = function () { };
    return ModelDuck;
}(Duck));
var modelDuck = new ModelDuck();
modelDuck.performQuack();
modelDuck.setQuackBehavior(new Squeak());
modelDuck.performQuack();
