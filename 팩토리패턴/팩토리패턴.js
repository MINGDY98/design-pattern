var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Pizza_name, _Pizza_dough, _Pizza_source, _Pizza_toppings;
class Pizza {
    constructor(name, dough, source, toppings) {
        _Pizza_name.set(this, "");
        _Pizza_dough.set(this, "");
        _Pizza_source.set(this, "");
        _Pizza_toppings.set(this, []);
        __classPrivateFieldSet(this, _Pizza_name, name, "f");
        __classPrivateFieldSet(this, _Pizza_dough, dough, "f");
        __classPrivateFieldSet(this, _Pizza_source, source, "f");
        __classPrivateFieldSet(this, _Pizza_toppings, toppings, "f");
    }
    prepare() {
        console.log(`준비 중: ${__classPrivateFieldGet(this, _Pizza_name, "f")}`);
        console.log("도우를 돌리는 중.. ");
        console.log("소스를 뿌리는 중..");
        console.log("토핑을 올리는 중.. ");
        for (const topping of __classPrivateFieldGet(this, _Pizza_toppings, "f")) {
            console.log(topping);
        }
    }
    bake() {
        console.log("175도에서 25분 간 굽기");
    }
    cut() {
        console.log("피자를 사선으로 자르기");
    }
    box() {
        console.log("상자에 피자 담기");
    }
    getName() {
        return __classPrivateFieldGet(this, _Pizza_name, "f");
    }
}
_Pizza_name = new WeakMap(), _Pizza_dough = new WeakMap(), _Pizza_source = new WeakMap(), _Pizza_toppings = new WeakMap();
class NYStyleCheesePizza extends Pizza {
    constructor() {
        super("뉴욕 스타일 소스와 치즈 피자", "씬 크러스트 도우", "마리나라 소스", [
            "잘게 썬 레지아노 치즈",
        ]);
    }
}
class PizzaStore {
    orderPizza(type) {
        const pizza = this.createPizza(type);
        if (pizza === null) {
            throw new Error("pizza 종류에 문제가 있습니다.");
        }
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
/**NYstylePizza Store 클래스의 createPizza 예시*/
class NYPizzaStore extends PizzaStore {
    createPizza(type) {
        if (type === "cheese") {
            const pizza = new NYStyleCheesePizza();
            return pizza;
        }
        else {
            return null;
        }
    }
}
const nyStore = new NYPizzaStore();
// const chicagoStore = new ChicagoPizzaStore();
const pizza = nyStore.orderPizza("cheese");
if (pizza)
    console.log(`에단이 주문한${pizza.getName()}`);
// const pizza= chicagoStore.orderPizza("cheese");
// console.log(`조엘이 주문한${pizza.getName()}`);
