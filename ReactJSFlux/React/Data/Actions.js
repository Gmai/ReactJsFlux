import ActionType from './ActionType';
import Dispatcher from './Dispatcher';

const Actions = {
	clinicSelected(id) {
		Dispatcher.dispatch({
			type: ActionType.CLINIC_SELECTED,
			id
		});
	},
	noClinicSelected() {
		Dispatcher.dispatch({
			type: ActionType.NO_CLINIC_SELECTED
		});
	},
	addClinic() {
		Dispatcher.dispatch({
			type: ActionType.ADD_CLINIC
		});
	},
	prescriberSelected(id) {
		Dispatcher.dispatch({
			type: ActionType.PRESCRIBER_SELECTED,
			id
		});
	},
	noPrescriberSelected() {
		Dispatcher.dispatch({
			type: ActionType.NO_PRESCRIBER_SELECTED
		});
	},
	addPrescriber() {
		Dispatcher.dispatch({
			type: ActionType.ADD_PRESCRIBER
		});
	},
	prescriberUserTypeChanged(userType) {
		Dispatcher.dispatch({
			type: ActionType.PRESCRIBER_USERTYPE_CHANGED,
			userType: userType
		});
	},
	secondaryContactSelected(id) {
		Dispatcher.dispatch({
			type: ActionType.SECONDARY_CONTACT_SELECTED,
			id
		});
	},
	noSecondaryContactSelected() {
		Dispatcher.dispatch({
			type: ActionType.NO_SECONDARY_CONTACT_SELECTED
		});
	},
	addSecondaryContact() {
		Dispatcher.dispatch({
			type: ActionType.ADD_SECONDARY_CONTACT
		});
	},
	sendData(clinic, prescriber, secondaryContact) {
		Dispatcher.dispatch({
			type: ActionType.SEND_DATA,
			clinic, prescriber, secondaryContact
		});
	},
	changedValue(store, name, value) {
		
		Dispatcher.dispatch({
			type: ActionType.CHANGED_VALUE,
			store, name, value
		});
	}
}
export default Actions; 