import React from 'react';
import Field from './Fields';

const EditWindow = ({ handleChange }) => {
	return (
		<div>
			<form className="ui form">
				<h2 className="ui header">Edit Your CV Here</h2>
				<h4 className="ui dividing header">General Information</h4>
				<div className="two fields">
					<Field label="First Name" name={'first'} handleChange={handleChange} />
					<Field label="Last Name" name={'last'} handleChange={handleChange} />
				</div>
				<div className="two fields">
					<Field label="E-Mail" name={'email'} handleChange={handleChange} />
					<Field label="Phone Number" name={'phone'} handleChange={handleChange} />
				</div>
				<h4 className="ui dividing header">Educational Information</h4>
				<div className="two fields">
					<Field label="Institution" name={'institution'} handleChange={handleChange} />
					<Field label="Subject Of Study" name={'subject'} handleChange={handleChange} />
				</div>
				<div className="two fields">
					<Field label="Degree" name={'degree'} handleChange={handleChange} />
					<Field label="(Estimated) Completion" name={'completion'} handleChange={handleChange} />
				</div>
				<h4 className="ui dividing header">Practical Experience</h4>
				<div className="two fields">
					<Field label="Position" name={'position'} handleChange={handleChange} />
					<Field label="Company" name={'company'} handleChange={handleChange} />
				</div>
				<div className="two fields">
					<Field label="From" name={'from'} handleChange={handleChange} />
					<Field label="To" name={'to'} handleChange={handleChange} />
				</div>
			</form>
		</div>
	);
};

export default EditWindow;
