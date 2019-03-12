// 1. Создать функцию которая принимает число и считает факториал этого числа.

function getFactorialNum(num: number): number {
    let numResult: number = 1;
    let i: number;
    for (i = 1; i <= num; i++) {
        numResult *= i;
    }
    return numResult;
}

console.log(getFactorialNum(6));

// 2. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(firstNumber: number = 0, ...numberArray: number[]): number {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result *= numberArray[i];
    }
    return result;
}

console.log(multiply(1,2,3));
console.log(multiply());

// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseStr(str: string = ''): string {
    return str.split('').reverse().join('');
}

console.log(reverseStr('Привет!'));

// 4. Создать интерфейс Админа.

interface Admin {
    name: string;
    email: string;
    password: string;
    type?: string;
}

// 1. Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).

abstract class Car {
    protected mileage: number;
    protected fuel: number;

    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }

    public abstract drive(km: number);
    public abstract refuel(l: number);
}

// 2. Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять свойство mileage и уменьшать значение свойства fuel если бензин закончился то нужно вернуть сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel. Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.
// 3. Создать публичный get для получения свойств fuel и mileage.

class Audi extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    public drive(km) {
        if (typeof km === 'number') {
            if (km > this.fuel) {
                this.mileage = this.fuel;
                this.fuel = 0; 
            } else {
                this.mileage = km;
                this.fuel -= km;
            }
            if (this.fuel <= 0) {
                this.fuel = 0;
                return 'Нужно заправиться';
            }
        } else {
            return 'Неправильно введено число';
        }
    }
    public refuel(l) {
        if (typeof l === 'number') {
            this.fuel += l;
        } else {
            return 'Неправильно введено число';
        }
    }

    public getMileage() {
        return this.mileage;
    }
    
    public getFuel() {
        return this.fuel;
    }

}

const myAudi = new Audi(20, 30);
myAudi.drive(40);
myAudi.refuel(50);
console.log(myAudi.getMileage());
console.log(myAudi.getFuel());
