
class SecondaryContactModel {
	constructor(id,userType,name,email) {
		this.id = !id ? 0 : id;
		this.userType = !userType ? "1" : userType;
		this.name = !name ? "" : name;
		this.email = !email ? "" : email;
	}
}

export default SecondaryContactModel;