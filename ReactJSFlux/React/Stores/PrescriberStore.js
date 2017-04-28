import { ReduceStore } from 'flux/utils';
import RegisterDispatcher from '../Data/Dispatcher';
import ActionTypes from '../Data/ActionType';
import RegisterModel from '../Models/RegisterModel';
import PrescriberModel from '../Models/PrescriberModel';
import DataManager from '../Data/DataManager';

class PrescriberStore extends ReduceStore {
	constructor() {
		super(RegisterDispatcher);
	}

	getInitialState() {
		return {
			prescriberSelected: new PrescriberModel(),
			prescribers: []
		};
	}

	reduce(state, action) {
		switch (action.type) {
			case ActionTypes.ADD_CLINIC:
			case ActionTypes.CLINIC_SELECTED:
				DataManager.getPrescribers(action.id);
				return state;

			case ActionTypes.LOAD_PRESCRIBERS: {
				let prescriber = new PrescriberModel();
				if (action.prescribers.length == 1) {
					prescriber = action.prescribers[0];
				}
				return {
					prescriberSelected: prescriber,
					prescribers: action.prescribers
				};
			}

			case ActionTypes.PRESCRIBER_USERTYPE_CHANGED: {
				let prescriber = state.prescriberSelected;
				prescriber.userType = action.userType;
				return {
					prescriberSelected: prescriber,
					prescribers: state.prescribers
				};
			}

			case ActionTypes.ADD_PRESCRIBER:
				let newPrescriber = new PrescriberModel();
				newPrescriber.id = -1;
				return {
					prescriberSelected: newPrescriber,
					prescribers: state.prescribers
				};

			case ActionTypes.PRESCRIBER_SELECTED:
				return {
					prescriberSelected: state.prescribers.find(x => x.id == action.id),
					prescribers: state.prescribers
				};

			case ActionTypes.NO_PRESCRIBER_SELECTED:
				let noPrescriber = new PrescriberModel();
				return {
					prescriberSelected: noPrescriber,
					prescribers: state.prescribers
				};

			case ActionTypes.CHANGED_VALUE:
				if (action.store == "prescriber") {
					let prescriberSelected = state.prescriberSelected;
					prescriberSelected[action.name] = action.value;
					return {
						prescriberSelected: prescriberSelected,
						prescribers: state.prescribers
					};
				}
				return state;

			default :
				return state;
		}
	}
}

export default new PrescriberStore();