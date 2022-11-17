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
						<Field label="First Name" name={'first'} handleChange={this.props.handleChange} />
						<Field label="Last Name" name={'last'} handleChange={this.props.handleChange} />
					</div>
					<div className="two fields">
						<Field label="E-Mail" name={'email'} handleChange={this.props.handleChange} />
						<Field label="Phone Number" name={'phone'} handleChange={this.props.handleChange} />
					</div>
					<h4 className="ui dividing header">Educational Information</h4>
					<div className="two fields">
						<Field label="Institution" name={'institution'} handleChange={this.props.handleChange} />
						<Field label="Subject Of Study" name={'subject'} handleChange={this.props.handleChange} />
					</div>
					<div className="two fields">
						<Field label="Degree" name={'degree'} handleChange={this.props.handleChange} />
						<Field
							label="(Estimated) Completion"
							name={'completion'}
							handleChange={this.props.handleChange}
						/>
					</div>
					<h4 className="ui dividing header">Practical Experience</h4>
					<div className="two fields">
						<Field label="Position" name={'position'} handleChange={this.props.handleChange} />
						<Field label="Company" name={'company'} handleChange={this.props.handleChange} />
					</div>
					<div className="two fields">
						<Field label="From" name={'from'} handleChange={this.props.handleChange} />
						<Field label="To" name={'to'} handleChange={this.props.handleChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default EditWindow;
