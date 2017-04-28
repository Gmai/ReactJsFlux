
//import Immutable from 'immutable';

class PrescriberModel {
	constructor(id, userType, name, email, license) {
		this.id = !id?0:id;
		this.userType = !userType ? "1" : userType;
		this.name = !name ? "" : name;
		this.email = !email ? "" : email;
		this.license = !license ? "" : license;
	}
}

export default PrescriberModel;