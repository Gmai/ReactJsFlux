//import Immutable from 'immutable';
import ClinicModel from './ClinicModel'
import PrescriberModel from './PrescriberModel'
import SecondaryContactModel from './SecondaryContactModel'

//const RegisterModel = Immutable.Record({
//	clinicSelected: new ClinicModel(),
//	prescriberSelected: new PrescriberModel(),
//	secondaryContactSelected: new SecondaryContactModel(),
//	clinicList: Immutable.List(),
//});

class RegisterModel {
	constructor() { 
		this.clinicSelected = new ClinicModel();
		this.prescriberSelected= new PrescriberModel();
		this.secondaryContactSelected= new SecondaryContactModel();
		this.clinicList = [];
	}
}

//const RegisterModel = {
//	clinicSelected: new ClinicModel(),
//	prescriberSelected: new PrescriberModel(),
//	secondaryContactSelected: new SecondaryContactModel(),
//	clinicList: Immutable.List(),
//};

export default RegisterModel;