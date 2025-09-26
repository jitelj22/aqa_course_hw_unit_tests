/*Необходимо создать классовую структуру
1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".

2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
4. Создайте объект класса Car и проверьте работоспособность
*/

//1. Создайте интерфейс IVehicle:
interface IVehicle {
    getDetails(): string; // — возвращает информацию о транспортном средстве.
    start(): string; // — возвращает строку "The vehicle is starting".
}

//2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
abstract class Vehicle implements IVehicle {
    constructor(protected make: string, protected model: string) {} // Реализуйте конструктор с полями: make (строка), model (строка)
    start(): string { // Добавьте методы: start, возвращающего строку: "The vehicle {make} {model} is starting.".
        return `The vehicle ${this.make} ${this.model} is starting.`;
    }   
    abstract getDetails(): string; // — Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.
}   
//3. Создайте класс Car, который наследует Vehicle:
class Car extends Vehicle {
    constructor(make: string, model: string, private year: number) { // Добавляет поле year (число).    
        super(make, model);
    }   
    getDetails(): string { // Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
        return `${this.make} ${this.model}, ${this.year}`;
    }   
}
//4. Создайте объект класса Car и проверьте работоспособность
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.start()); // The vehicle Toyota Corolla is starting.
console.log(myCar.getDetails()); // Toyota Corolla, 2020
// Output:
// The vehicle Toyota Corolla is starting.
// Toyota Corolla, 2020