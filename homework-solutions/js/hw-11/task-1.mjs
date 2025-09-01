class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value === "number" && value >= 0) {
      this.#salary = value;
    } else {
      throw new Error("Salary must be a positive number");
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;
  constructor(title, phome,address, employees = []) {
    this.title = title;
    this.phone = phome;
    this.address = address;
    this.#employees = employees;
  }
  get title() {
    return this._title;
  } 

  set title(value) {
    this._title = value;
  }
  
  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  get employees() {
    return this.#employees;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) throw new TypeError('employee needs to be an instance of Employee');
    this.#employees.push(employee);
  } 

  getEmployees() {
    return this.#employees;
  }
  
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);

company.addEmployee(emp1);
company.addEmployee(emp2);

export { Employee, Company };
