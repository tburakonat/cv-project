import React from 'react';
import Field from './Fields';

class EditWindow extends React.Component {
	render() {
		return (
			<div>
				<form className="ui form">
					<h2 className="ui header">Edit Your CV Here</h2>
					<h4 className="ui dividing header">General Information</h4>
					<div className="two fields">
						<Field label="First Name" />
						<Field label="Last Name" />
					</div>
					<div className="two fields">
						<Field label="E-Mail" />
						<Field label="Phone Number" />
					</div>
					<h4 className="ui dividing header">Educational Information</h4>
					<div className="two fields">
						<Field label="Institution" />
						<Field label="Subject Of Study" />
					</div>
					<div className="two fields">
						<Field label="Degree" />
						<Field label="(Estimated) Completion" />
					</div>
					<h4 className="ui dividing header">Practical Experience</h4>
					<div className="two fields">
						<Field label="Position" />
						<Field label="Company" />
					</div>
					<div className="two fields">
						<Field label="From" />
						<Field label="To" />
					</div>
				</form>
			</div>
		);
	}
}

export default EditWindow;
