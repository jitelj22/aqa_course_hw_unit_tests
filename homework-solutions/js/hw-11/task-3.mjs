class Employee {
  #salary;
  constructor(firstName, lastName,salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#salary = salary;
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
      throw new Error('lastName: только латиница, длина 2–50');
    }
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  } 
  set salary(value) {   
     if (typeof value !== 'number' || value <= 0 || value >= 10000) {
      throw new Error('salary: число > 0 и < 10000');
    }
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }
  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error('Язык программирования должен быть строкой.');
    }
    if (!this.programmingLanguages.includes(language)) {
      this.programmingLanguages.push(language);
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.trim() === '') {
      throw new Error('Инструмент должен быть строкой.');
    }
    if (!this.designTools.includes(tool)) {
      this.designTools.push(tool);
    }
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

  get address() {
    return this._address; 
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Можно добавлять только Employee или наследников.');
    }
    const exists = this.#employees.some(e =>
      e.firstName === employee.firstName && e.lastName === employee.lastName
    );
    if (exists) {
      throw new Error(`Сотрудник ${employee.getFullName()} уже работает в компании!`);
    }

    this.#employees.push(employee);
  }
  getEmployees() {
    return [...this.#employees];
  }

  getEmployeesByProfession(profession) {
    if (typeof profession !== 'string') {
      throw new Error('profession должен быть строкой.');
    }
    const filtered = this.#employees.filter(e => e.constructor.name === profession);
    return filtered;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nСотрудников: ${this.#employees.length}`;
  }
}

const company = new Company('Tech Corp', '123-456', 'Main Street');

const dev1 = new Developer('John', 'Doe', 3000, ['JavaScript']);
const dev2 = new Developer('Alice', 'Cooper', 3500);
dev2.addProgrammingLanguage('Python');
dev2.addProgrammingLanguage('C++');

const manager1 = new Manager('Jane', 'Smith', 5000, 5);
manager1.increaseTeamSize();

const designer1 = new Designer('Mark', 'Brown', 4000, ['Figma']);
designer1.addDesignTool('Photoshop');

company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(manager1);
company.addEmployee(designer1);


try {
  company.addEmployee(new Developer('John', 'Doe', 3200, ['Go']));
} catch (err) {
  console.error(err.message); 
}


console.log(company.getEmployeesByProfession('Developer')); // [dev1, dev2]
console.log(company.getEmployeesByProfession('Manager'));   // [manager1]
console.log(company.getEmployeesByProfession('Designer'));  // [designer1]
console.log(company.getEmployeesByProfession('QA'));

export { Employee, Company, Designer, Developer, Manager };
