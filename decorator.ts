export abstract class Beverage {
  description: string = "제목 없음";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
  //모든 첨가물 데코레이터가 getDescription을 새로 구현하도록 만들기 위해 abstract로 선언
}

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "에스프레소";
  }

  public cost(): number {
    return 200;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "하우스 블렌드 커피";
  }

  cost(): number {
    return 300;
  }
}

export class Mocha extends CondimentDecorator {
  public beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", 모카";
  }

  /**
   * cost - 現状の価格に費用を追加する
   */
  public cost(): number {
    return this.beverage.cost() + 20;
  }
}

class main {
  main() {
    let beverage: Beverage = new Espresso();
    console.log(beverage.getDescription() + beverage.cost() + " 원");

    let beverage2: Beverage = new HouseBlend();
    //トッピング
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription() + beverage2.cost() + " 원");
  }
}

export class Whip extends CondimentDecorator {
  public beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  /**
   * getDescription - 現状の飲み物にトッピング名を追加する
   */
  getDescription(): string {
    return this.beverage.getDescription() + ", ホイップ";
  }

  /**
   * cost - 現状の価格に費用を追加する
   */
  public cost(): number {
    return 160 + this.beverage.cost();
  }
}

const m = new main();
m.main();
