class Duck {
  private quackBehavior: QuackBehavior;
  private flyBehavior: FlyBehavior;

  constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
    this.quackBehavior = quackBehavior;
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }
}

interface FlyBehavior {
  fly(): void;
}

class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log("날고 있어요");
  }
}

class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log("저는 못 날아요");
  }
}

class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log("로켓 추진으로 날아갑니다.");
  }
}

interface QuackBehavior {
  quack(): void;
}

class Quack implements QuackBehavior {
  public quack(): void {
    console.log("꽥");
  }
}

class MuteQuack implements QuackBehavior {
  public quack(): void {
    console.log("조용");
  }
}

class Squeak implements QuackBehavior {
  public quack(): void {
    console.log("삑");
  }
}

// const duck = new Duck(new MuteQuack, new FlyNoWay);

class ModelDuck extends Duck {
  constructor() {
    super(new MuteQuack(), new FlyNoWay());
  }

  public display(): void {}
}

const modelDuck = new ModelDuck();

modelDuck.performQuack();

modelDuck.setQuackBehavior(new Squeak());

modelDuck.performQuack();
