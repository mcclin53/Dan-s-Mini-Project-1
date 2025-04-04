// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
const employees = [];
let addanother = true;
  while (addanother = true) {

 let firstName = prompt('Enter First Name');
  let lastName = prompt('Enter Last Name');
  let salary = prompt('Enter Salary');
  if (isNaN(salary)) {
    salary = 0;
  }

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
  employees.push(employee);
  addanother = confirm ('Add another employee?');
  }
  return employees;
}  
  // TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let sum = 0; 
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
    }
    const averageSalary = sum / employeesArray.length;
    console.log (`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
  // TODO: Calculate and display the average salary
};
// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employeesArray[randomIndex];
  // TODO: Select and display a random employee
};

const randomEmployee = getRandomEmployee;
console.log (`Congratulations to ${randomEmployee.firstname},${randomEmployee.lastname}. Our random drawing winner!`);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
