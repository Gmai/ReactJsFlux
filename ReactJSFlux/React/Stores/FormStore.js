import { ReduceStore } from 'flux/utils';
import RegisterDispatcher from '../Data/Dispatcher';
import ActionTypes from '../Data/ActionType';
import RegisterModel from '../Models/RegisterModel';
import DataManager from '../Data/DataManager';

class FormStore extends ReduceStore {
	constructor() {
		super(RegisterDispatcher);
	}

	getInitialState() {
		return {
			enabled: true,
			success:false,
			sent:false
		};
	}

	reduce(state, action) {
		switch (action.type){
			case ActionTypes.SEND_DATA:
				DataManager.sendData(action.clinic,action.prescriber,action.secondaryContact);
				return {
					enabled: false,
					success:false,
					sent:true
				};
				
			case ActionTypes.SEND_DATA_FAILED:
				return {
					enabled: true,
					success:false,
					sent:true
				};
				
			case ActionTypes.SEND_DATA_SUCCESS:
				$("#result").html(JSON.stringify(action.data, null, 4));
				return {
					enabled: false,
					success:true,
					sent:true
				};

			default :
				return state;
		}
	}
}

export default new FormStore();