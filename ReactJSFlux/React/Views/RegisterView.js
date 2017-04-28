import React from 'react';

function RegisterView(props) {
	return (
		<div>
			<form id="register">
				<Clinic {...props} />
				<hr className={props.clinicData.clinicSelected.id == 0 ? "hide" : ""} />
				<Prescriber {...props} />
				<hr className={props.prescriberData.prescriberSelected.id == 0 ? "hide" : ""}  />
				<SecondaryContact {...props} />
				<hr className={props.prescriberData.prescriberSelected.id == 0 ? "hide" : ""} />
				<Button {...props}/>
			</form>
		</div>
	);
}

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(ev){
		this.props.onSendData(
			this.props.clinicData.clinicSelected,
			this.props.prescriberData.prescriberSelected,
			this.props.secondaryContactData.secondaryContactSelected
		);
	}
	render() {
		return <button type="button" onClick={this.handleClick} className={this.props.prescriberData.prescriberSelected.id == 0 ? "hide" : ""}>Save</button>;
	}
}

class Clinic extends React.Component {
	constructor(props) {
		super(props);
		this.handleClinicChanged = this.handleClinicChanged.bind(this);
		this.handleChangedValue = this.handleChangedValue.bind(this);
	}
	handleClinicChanged(ev) {
		if (ev.target.value == 0) {
			this.props.onNoClinicSelected();
		} else if (ev.target.value == -1) {
			this.props.onAddClinic();
		} else {
			this.props.onClinicSelected(ev.target.value);
		}
	}
	handleChangedValue(ev) {
		this.props.onChangeValue("clinic", ev.target.name, ev.target.value);
	}
	render() {
		let clinicSelectedId= this.props.clinicData.clinicSelected.id;
		clinicSelectedId = (!clinicSelectedId ? 0 : clinicSelectedId);
		return(
			<div className="clinic">
				<div className="section-header">
					<h3>Clinic</h3>
				</div>
				<div className="select-clinic">
					<select name="clinic" value={clinicSelectedId} onChange={this.handleClinicChanged} >
						<option key="0" value="0">Select Clinic</option>
						{[...this.props.clinicData.clinics].map(x => (
							<option key={x.id} value={x.id}>{x.name}</option>
						))}
						<option key="-1" value="-1">Add Clinic</option>
					</select>
				</div>
				<div className={"new-clinic " + (clinicSelectedId == 0 ? "hide" : "")}>
					<label>Province</label>
					<input type="text" onChange={this.handleChangedValue} value={this.props.clinicData.clinicSelected.province} name="province" />
					<label>Postal Code</label>
					<input type="text" onChange={this.handleChangedValue} value={this.props.clinicData.clinicSelected.postalcode} name="postalcode" />
				</div>
			</div>
			);
	}
}

class Prescriber extends React.Component {
	constructor(props) {
		super(props);
		this.handlePrescriberChanged = this.handlePrescriberChanged.bind(this);
		this.handleChangeUserType = this.handleChangeUserType.bind(this);
		this.handleChangedValue = this.handleChangedValue.bind(this);
	}
	handlePrescriberChanged(ev) {
		if (ev.target.value == 0) {
			this.props.onNoPrescriberSelected();
		} else if (ev.target.value == -1) {
			this.props.onAddPrescriber();
		} else {
			this.props.onPrescriberSelected(ev.target.value);
		}
	}
	handleChangeUserType(ev) {
		this.props.onPrescriberUserTypeChanged(ev.target.value);
	}
	handleChangedValue(ev) {
		this.props.onChangeValue("prescriber", ev.target.name, ev.target.value);
	}
	render() {
		let prescriberSelectedId = this.props.prescriberData.prescriberSelected.id;
		prescriberSelectedId = (!prescriberSelectedId ? 0 : prescriberSelectedId);
		return (
			<div className={"prescriber "+(this.props.clinicData.clinicSelected.id==0?"hide":"")}>
				<div className="section-header">
					<h3>Prescriber</h3>
				</div>
				<div className="select-prescriber">
					<select name="prescriber" value={prescriberSelectedId} onChange={this.handlePrescriberChanged} >
						<option key="0" value="0">Select Clinic</option>
						{[...this.props.prescriberData.prescribers].map(x =>
							<option key={x.id} value={x.id}>{x.name}</option>
						)}
						<option key="-1" value="-1">Add Prescriber</option>
					</select>
				</div>
				<div className={"new-prescriber " + (prescriberSelectedId == 0 ? "hide" : "")}>
					<label>Role</label>
					<select name="usertype" value={this.props.prescriberData.prescriberSelected.userType} onChange={this.handleChangeUserType}>
						<option key="1" value="1">Doctor</option>
						<option key="2" value="2">Nurse Practioner</option>
					</select>
					<label>Name</label>
					<input type="text" onChange={this.handleChangedValue} value={this.props.prescriberData.prescriberSelected.name} name="name" />
					<label>Email</label>
					<input type="text" onChange={this.handleChangedValue} value={this.props.prescriberData.prescriberSelected.email} name="email" />
					<label className={((this.props.prescriberData.prescriberSelected.userType==1)?"":"hide")}>License</label>
					<input onChange={this.handleChangedValue} className={((this.props.prescriberData.prescriberSelected.userType == 1) ? "" : "hide")} type="text" value={this.props.prescriberData.prescriberSelected.license} name="license" />
				</div>
			</div>
		);
	}
}

class SecondaryContact extends React.Component {
	constructor(props) {
		super(props);
		this.handleSecondaryContactChanged = this.handleSecondaryContactChanged.bind(this);
		this.handleChangeUserType = this.handleChangeUserType.bind(this);
		this.handleChangedValue = this.handleChangedValue.bind(this);
	}
	handleSecondaryContactChanged(ev) {
		if (ev.target.value == 0) {
			this.props.onNoSecondaryContactSelected();
		} else if (ev.target.value == -1) {
			this.props.onAddSecondaryContact();
		} else {
			this.props.onSecondaryContactSelected(ev.target.value);
		}
	}
	handleChangeUserType(ev) {
		this.props.onSecondaryContactUserTypeChanged(ev.target.value);
	}
	handleChangedValue(ev) {
		this.props.onChangeValue("secondary-contact", ev.target.name, ev.target.value);
	}
	render() {
		let secondaryContactSelectedId = this.props.secondaryContactData.secondaryContactSelected.id;
		secondaryContactSelectedId = (!secondaryContactSelectedId ? 0 : secondaryContactSelectedId); 
		return (
			<div className={"secondary-contact " + (this.props.prescriberData.prescriberSelected.id == 0 ? "hide" : "")}>
				<div className="section-header">
					<h3>Secondary Contact</h3>
				</div>
				<div className="select-secondaryContact">
					<select name="secondaryContact" value={secondaryContactSelectedId} onChange={this.handleSecondaryContactChanged} >
						<option key="0" value="0">Select Clinic</option>
						{[...this.props.secondaryContactData.secondaryContacts].map(x =>
							<option key={x.id} value={x.id}>{x.name}</option>
						)}
						<option key="-1" value="-1">Add secondaryContact</option>
					</select>
				</div>
				<div className={"new-secondary-contact " + (secondaryContactSelectedId == 0 ? "hide" : "")}>
					<label>Role</label>
					<select name="usertype" value={this.props.secondaryContactData.secondaryContactSelected.userType} onChange={this.handleChangeUserType}>
						<option key="2" value="2">Nurse Practioner</option>
						<option key="3" value="4">Nurse</option>
						<option key="4" value="3">Other</option>
					</select>
					<label>Name</label>
					<input type="text" onChange={this.handleChangedValue}  value={this.props.secondaryContactData.secondaryContactSelected.name} name="name" />
					<label>Email</label>
					<input type="text" onChange={this.handleChangedValue}  value={this.props.secondaryContactData.secondaryContactSelected.email} name="email" />
				</div>
			</div>
		);
	}
}

export default  RegisterView;