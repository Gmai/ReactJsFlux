
'use strict';

import Dispatcher from './Dispatcher';
import ActionType from './ActionType';

const DataManager = {
	getPrescribers(clinicId: string) {
		$.ajax({
			method: "GET",
			url: "/React/GetPrescribers",
			data: { clinicId: clinicId }
		})
			.done(function (result) {
				Dispatcher.dispatch({
					type: ActionType.LOAD_PRESCRIBERS,
					prescribers: result
				});
			});
	},
	getSecondaryContacts(clinicId: string, prescriberId: string) {
		$.ajax({
			method: "GET",
			url: "/React/GetSecondaryContact",
			data: { clinicId: clinicId, prescriberId: prescriberId}
		})
			.done(function (result) {
				Dispatcher.dispatch({
					type: ActionType.LOAD_SECONDARIE_CONTACTS,
					secondaryContacts: result
				});
			});
	},
	sendData(clinic,prescriber,secondaryContact){
		let data = {
			clinic:clinic,
			prescriber:prescriber,
			secondaryContact:secondaryContact
		}
		$.ajax({
			method: "POST",
			url: "/React/SendData",
			dataType:"json",
			data: data
		}).done(function (result) {
			Dispatcher.dispatch({
				type: ActionType.SEND_DATA_SUCCESS,
				data
			});
		}).fail(function (result) {
			Dispatcher.dispatch({
				type: ActionType.SEND_DATA_FAILED
			});
		});
	},
	
};


export default DataManager;