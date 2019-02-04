module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define('Employee', {	
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
	  },
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true
			
		}
	},{
		freezeTableName: true,
		timestamps: false,
		// define the table's name
		tableName: 'Employee',
	});
	
	return Employee;
}