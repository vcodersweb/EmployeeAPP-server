module.exports = (sequelize, Sequelize) => {
	const Salary = sequelize.define('Salary', {
	  salary: {
			type: Sequelize.DECIMAL
	  },
	  employeeid: {
		  type: Sequelize.INTEGER
	  },
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		}
	},{
		freezeTableName: true,
		timestamps: false,
		// define the table's name
		tableName: 'Salary',
	});
	
	return Salary;
}