import RegisterView from '../Views/RegisterView';
import { Container } from 'flux/utils';
import ClinicStore from '../Stores/ClinicStores';
import Actions from '../Data/Actions'
import RegisterModel from '../Models/RegisterModel';
import PrescriberStore from '../Stores/PrescriberStore';
import SecondaryContactStore from '../Stores/SecondaryContactStore';
import FormStore from '../Stores/FormStore';

function getStores() {
	return [ClinicStore, PrescriberStore, SecondaryContactStore,FormStore];
}

function getState() {
	
	return {
		clinicData: ClinicStore.getState(),
		prescriberData: PrescriberStore.getState(),
		secondaryContactData: SecondaryContactStore.getState(),
		formData: FormStore.getState(),
		onNoClinicSelected: Actions.noClinicSelected,
		onClinicSelected: Actions.clinicSelected,
		onAddClinic: Actions.addClinic,
		onNoPrescriberSelected: Actions.noPrescriberSelected,
		onPrescriberSelected: Actions.prescriberSelected,
		onAddPrescriber: Actions.addPrescriber,
		onPrescriberUserTypeChanged: Actions.prescriberUserTypeChanged,
		onNoSecondaryContactSelected: Actions.noSecondaryContactSelected,
		onSecondaryContactSelected: Actions.secondaryContactSelected,
		onAddSecondaryContact: Actions.addSecondaryContact,
		onSecondaryContactUserTypeChanged: Actions.secondaryContactUserTypeChanged,
		onSendData: Actions.sendData,
		onChangeValue:Actions.changedValue
	};
}

export default Container.createFunctional(RegisterView, getStores, getState);