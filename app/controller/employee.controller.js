const db = require('../config/db.config.js');
const Employee = db.employee;

// Fetch all Employees
exports.findAll = (req, res) => {
	Employee.findAll().then(employee => {
		// Send all employees to Client
		console.log(employee);
	  res.json(employee);
	});
};

// Find a employee by Id
exports.findById = (req, res) => {	
	Employee.findById(req.params.employeeId).then(employee => {
		res.json(employee);
	})
};