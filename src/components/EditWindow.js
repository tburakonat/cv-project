import React from 'react';

class EditWindow extends React.Component {
	render() {
		return (
			<div>
				<form className="ui form">
					<h2 className="ui header">Edit Your CV Here</h2>
					<h4 className="ui dividing header">General Information</h4>
					<div className="two fields">
						<div className="field">
							<label>First Name</label>
							<input type="text" />
						</div>
						<div className="field">
							<label>Last Name</label>
							<input type="text" />
						</div>
					</div>
					<div className="two fields">
						<div className="field">
							<label>E-Mail</label>
							<input type="text" />
						</div>
						<div className="field">
							<label>Phone Number</label>
							<input type="text" />
						</div>
					</div>
					<h4 className="ui dividing header">Educational Information</h4>
					<div className="two fields">
						<div className="field">
							<label>Institution</label>
							<input type="text" />
						</div>
						<div className="field">
							<label>Subject Of Study</label>
							<input type="text" />
						</div>
					</div>
					<div className="two fields">
						<div className="field">
							<label>Degree</label>
							<input type="text" />
						</div>
						<div className="field">
							<label>(Estimated) Completion</label>
							<input type="text" />
						</div>
					</div>
					<h4 className="ui dividing header">Practical Experience</h4>
					<div className="two fields">
						<div className="field">
							<label>Position</label>
							<input type="text" />
						</div>
						<div className="field">
							<label>Company</label>
							<input type="text" />
						</div>
					</div>
					<div className="two fields">
						<div className="field">
							<label>From</label>
							<input type="text" />
						</div>
						<div className="field">
							<label>To</label>
							<input type="text" />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default EditWindow;
