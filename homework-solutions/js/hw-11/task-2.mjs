class Employee {
  #salary; 
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;   
    this.lastName = lastName;     
    this.profession = profession; 
    this.salary = salary;         
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    const re = /^[A-Za-z]{2,50}$/;
    if (typeof value !== 'string' || !re.test(value)) {
      throw new Error('firstName: только латинские буквы, длина 2–50.');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    const re = /^[A-Za-z]{2,50}$/;
    if (typeof value !== 'string' || !re.test(value)) {
      throw new Error('lastName: только латинские буквы, длина 2–50.');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error('profession должен быть строкой.');
    }
    const trimmed = value.trim();
    const re = /^[A-Za-z ]+$/;
    if (!trimmed || !re.test(trimmed)) {
      throw new Error('profession: только латинские буквы и пробелы, не пусто.');
    }
    this._profession = trimmed;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0 || value >= 10000) {
      throw new Error('salary: число > 0 и < 10000.');
    }
    this.#salary = value;
  }

  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Company {
  #employees; 

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;       
    this._address = address;
    this.#employees = [];
  }


  get title(){
    return this._title; 
  }

  get phone(){ 
    return this._phone; 
  }

  get address(){
    return this._address; 
  }

  #getEmployeeIndex(firstName) {
    if (typeof firstName !== 'string' || !firstName) {
      throw new Error('Имя для поиска должно быть непустой строкой.');
    }
    return this.#employees.findIndex(e => e.firstName === firstName);
  }

  
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Можно добавлять только экземпляры Employee.');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const idx = this.#getEmployeeIndex(firstName);
    if (idx === -1) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден.`);
    }
    return this.#employees[idx];
  }

  removeEmployee(firstName) {
    const idx = this.#getEmployeeIndex(firstName);
    if (idx === -1) {
      throw new Error(`Нельзя удалить: сотрудник "${firstName}" не найден.`);
    }
    this.#employees.splice(idx, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}



const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);


export { Employee, Company };
