var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.temperature = "";
        this.humidity = "";
        this.pressure = "";
    }
    // constructor(observers : Observer[]) {
    //   this.observers = observers;
    // }
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        var observerindex = this.observers.indexOf(observer);
        if (observerindex === -1)
            return console.log("Nonexistent observewr");
        this.observers.splice(observerindex, 1);
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.temperature = "";
        this.humidity = "";
        this.pressure = "";
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("현재 상태: 온도 " + this.temperature + "f, 습도" + this.humidity + "%");
    };
    return CurrentConditionsDisplay;
}());
var weatherData = new WeatherData();
var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements("80", "65", "30.4f");
