const db = require('../config/db.config.js');
const Salary = db.salary;
const Employee = db.employee;
// Fetch all Employees
exports.findAll = (req, res) => {
	Salary.findAll({include: [Employee]}).then(employees => {
	  // Send all employees to Client
	  res.json(employees);
	});
};

// Find a salary by empId
exports.findById = (req, res) => {	
	Salary.findById(req.params.employeeId).then(employees => {
		res.json(employees);
	})
};