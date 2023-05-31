class Pizza {
  #name: string = "";
  #dough: string = "";
  #source: string = "";
  #toppings: string[] = [];

  constructor(name: string, dough: string, source: string, toppings: string[]) {
    this.#name = name;
    this.#dough = dough;
    this.#source = source;
    this.#toppings = toppings;
  }
  prepare() {
    console.log(`준비 중: ${this.#name}`);
    console.log("도우를 돌리는 중.. ");
    console.log("소스를 뿌리는 중..");
    console.log("토핑을 올리는 중.. ");
    for (const topping of this.#toppings) {
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

  getName(): string {
    return this.#name;
  }
}

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super("뉴욕 스타일 소스와 치즈 피자", "씬 크러스트 도우", "마리나라 소스", [
      "잘게 썬 레지아노 치즈",
    ]);
  }
  // super("뉴욕 스타일 소스와 치즈 피자", )
  // public NYStyleCheesePizza(){
  //   this.#name = ;
  //   doubh = "씬 크러스트 도우";
  //   sauce = "마리나라 소스";

  //   topping.add("잘게 썬 레지아노 치즈");
  // }
}

abstract class PizzaStore {
  orderPizza(type: string): Pizza | null {
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

  abstract createPizza(type: string): Pizza | null;
}
/**NYstylePizza Store 클래스의 createPizza 예시*/

class NYPizzaStore extends PizzaStore {
  createPizza(type: string) {
    if (type === "cheese") {
      const pizza = new NYStyleCheesePizza();
      return pizza;
    } else {
      return null;
    }
  }
}

const nyStore = new NYPizzaStore();
// const chicagoStore = new ChicagoPizzaStore();

const pizza = nyStore.orderPizza("cheese");
if (pizza) console.log(`에단이 주문한${pizza.getName()}`);

// const pizza= chicagoStore.orderPizza("cheese");
// console.log(`조엘이 주문한${pizza.getName()}`);
