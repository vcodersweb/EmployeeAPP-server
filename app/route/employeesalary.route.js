module.exports = function(app) {
 
    const employee = require('../controller/employee.controller.js');

    const salary = require('../controller/salary.controller.js');
    
    // Retrieve all employees
    app.get('/api/employees', employee.findAll);
 
    // Retrieve a employee by Id
    app.get('/api/employees/:employeeId', employee.findById);
 
    // Retrieve all salaries
    app.get('/api/salaries', salary.findAll);
 
    // Retrieve a salary by employeeid
    app.get('/api/salaries/:employeeId', salary.findById);
}