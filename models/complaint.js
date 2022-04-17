const db = require('../util/database');
module.exports = class complaint{
	constructor(technecian,rollNo){
		this.tech = technecian;
		this.rollNo = rollNo;
	};
	savetoDB(){
		return db.execute('insert into complaints values(?,?,?)',['',this.tech,this.rollNo]);
	};

	getCid(){
		this.savetoDB();
		return 	db.execute('select complaintId as id from complaints where technecian=? and rollNumber=?',[this.tech,this.rollNo]);
	};
	resolveComp(){
		return db.execute('delete from complaints where complaintId = ?',[this.tech]);
	}

}