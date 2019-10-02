import { EntitySchema } from "typeorm";

class Student {
	constructor(id, name, dob) {
		this.id = id;
		this.name = name;
		this.dob = dob;
	}
}
export default new EntitySchema({
	name: "Student",
	target: Student,
	columns: {
		id: {
			primary: true,
			type: "int",
			generated: true,
		},
		name: {
			type: "varchar",
		},
		dob: {
			type: "date",
		},
	},
});
