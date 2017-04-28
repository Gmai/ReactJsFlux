import { ReduceStore } from 'flux/utils';
import RegisterDispatcher from '../Data/Dispatcher';
import ActionTypes from '../Data/ActionType';
import RegisterModel from '../Models/RegisterModel';
import ClinicModel from '../Models/ClinicModel';

class ClinicStore extends ReduceStore {
	constructor() {
		super(RegisterDispatcher);
	}

	getInitialState() {
		let clinics = _initialClinics;
		if (!clinics) { clinics = []; }
		let defaultClinic;
		if (typeof (_defaultClinicId)=="undefined") { defaultClinic = new ClinicModel(); }
		else { defaultClinic = clinics.find(x => x.id == _defaultClinicId); }
		return {
			clinicSelected: defaultClinic,
			clinics: clinics
		};
	}

	reduce(state, action) {
		
		switch (action.type){
			case ActionTypes.ADD_CLINIC:
				let newClinic = new ClinicModel();
				newClinic.id = -1;
				return {
					clinicSelected: newClinic,
					clinics: state.clinics
				};

			case ActionTypes.CLINIC_SELECTED:
				return {
					clinicSelected: state.clinics.find(x => x.id == action.id),
					clinics: state.clinics
				};

			case ActionTypes.NO_CLINIC_SELECTED:
				let noClinic = new ClinicModel();
				return {
					clinicSelected: noClinic,
					clinics: state.clinics
				};

			case ActionTypes.CHANGED_VALUE:
				
				if (action.store == "clinic") {
					let clinicSelected = state.clinicSelected;
					clinicSelected[action.name] = action.value;
					return {
						clinicSelected: clinicSelected,
						clinics: state.clinics
					}; 
				}
				return state;

			default :
				return state;
		}
	}
}

export default new ClinicStore();