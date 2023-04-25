interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];

  private temperature: string = "";
  private humidity: string = "";
  private pressure: string = "";

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const observerindex = this.observers.indexOf(observer);
    if (observerindex === -1) return console.log("Nonexistent observewr");
    this.observers.splice(observerindex, 1);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(temperature: string, humidity: string, pressure: string) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

interface Observer {
  update(temp: string, humidity: string, pressure: string): void;
}

interface DisplayElement {
  display(): void;
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: string = "";
  private humidity: string = "";
  private pressure: string = "";
  weatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temp: string, humidity: string, pressure: string): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log(
      "현재 상태: 온도 " + this.temperature + "f, 습도" + this.humidity + "%"
    );
  }
}

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements("80", "65", "30.4f");
