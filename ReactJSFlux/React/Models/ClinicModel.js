
//import Immutable from 'immutable';

class ClinicModel {
	constructor(id, name, postalcode, province) { 
		this.id = !id ? 0 : id;
		this.name = !name ? "" : name;
		this.postalcode = !postalcode ? "" : postalcode;
		this.province = !province ? "" : province;
	}
}

export default ClinicModel;