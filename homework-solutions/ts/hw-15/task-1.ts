/*
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
4. Создайте тип UserType из объекта QA (используйте typeof)
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
*/

//1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}
const QA: IEmployee = {
    name: 'John',
    salary: 50000,
    isManager: false
};

//2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
type EmployeeKeys = keyof IEmployee; // "name" | "salary" | "isManager"

//3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys = keyof typeof QA; // "name" | "salary" | "isManager"

//4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA; // IEmployee

//5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type PartialEmployee = Partial<IEmployee>;

//6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type NameAndSalary = Pick<IEmployee, 'name' | 'salary'>;    

//7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type WithoutIsManager = Omit<IEmployee, 'isManager'>;

//8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
type ReadonlyEmployee = Readonly<IEmployee>;
const readonlyEmployee: ReadonlyEmployee = {
    name: 'Jane',
    salary: 60000,
    isManager: true
};

//9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
const recordExample: Record<string, keyof typeof QA> = {
    firstKey: 'name',
    secondKey: 'salary',
    thirdKey: 'isManager'
};
console.log(recordExample);     
