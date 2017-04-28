import { ReduceStore } from 'flux/utils';
import RegisterDispatcher from '../Data/Dispatcher';
import ActionTypes from '../Data/ActionType';
import RegisterModel from '../Models/RegisterModel';
import SecondaryContactModel from '../Models/SecondaryContactModel';
import DataManager from '../Data/DataManager';

class SecondaryContactStore extends ReduceStore {
	constructor() {
		super(RegisterDispatcher);
	}

	getInitialState() {
		return {
			secondaryContactSelected: new SecondaryContactModel(),
			secondaryContacts: [],
			clinicSelected: 0
		};
	}

	reduce(state, action) {
		
		switch (action.type) {
			case ActionTypes.ADD_CLINIC:
				return {
					secondaryContactSelected: state.secondaryContactSelected,
					secondaryContacts: state.secondaryContacts,
					clinicSelected: -1
				};

			case ActionTypes.CLINIC_SELECTED:
				return {
					secondaryContactSelected: state.secondaryContactSelected,
					secondaryContacts: state.secondaryContacts,
					clinicSelected: action.id
				};

			case ActionTypes.PRESCRIBER_SELECTED:
			case ActionTypes.ADD_PRESCRIBER:
				DataManager.getSecondaryContacts(state.clinicSelected, action.id);
				return state;

			case ActionTypes.LOAD_SECONDARIE_CONTACTS: {
				let secondaryContact = new SecondaryContactModel();
				if (action.secondaryContacts.length == 1) {
					secondaryContact = action.secondaryContacts[0];
				}
				
				return {
					secondaryContactSelected: secondaryContact,
					secondaryContacts: action.secondaryContacts,
					clinicSelected: state.clinicSelected
				};
			}
				
			case ActionTypes.ADD_SECONDARY_CONTACT:
				let newsecondaryContact = new SecondaryContactModel();
				newsecondaryContact.id = -1;
				
				return {
					secondaryContactSelected: newsecondaryContact,
					secondaryContacts: state.secondaryContacts,
					clinicSelected: state.clinicSelected
				};

			case ActionTypes.SECONDARY_CONTACT_SELECTED:
				
				return {
					secondaryContactSelected: state.secondaryContacts.find(x => x.id == action.id),
					secondaryContacts: state.secondaryContacts,
					clinicSelected: state.clinicSelected
				};

			case ActionTypes.NO_SECONDARY_CONTACT_SELECTED:
				let nosecondaryContact = new secondaryContactModel();
				
				return {
					secondaryContactSelected: nosecondaryContact,
					secondaryContacts: state.secondaryContacts,
					clinicSelected: state.clinicSelected
				};

			case ActionTypes.CHANGED_VALUE:
				debugger;
				if (action.store == "secondary-contact") {
					let secondaryContactSelected = state.secondaryContactSelected;
					secondaryContactSelected[action.name] = action.value;
					return {
						secondaryContactSelected: secondaryContactSelected,
						secondaryContacts: state.secondaryContacts,
						clinicSelected: state.clinicSelected
					};
				}
				return state;

			default:
				return state;
		}
	}
}

export default new SecondaryContactStore();