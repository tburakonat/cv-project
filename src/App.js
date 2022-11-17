import React from 'react';
import EditWindow from './components/EditWindow';
import DisplayWindow from './components/DisplayWindow';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			first: '',
			last: '',
			email: '',
			phone: '',
			institution: '',
			subject: '',
			degree: '',
			completion: '',
			position: '',
			company: '',
			from: '',
			to: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange({ target }) {
		const { name, value } = target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="ui divided stackable grid container" style={{ marginTop: '50px', paddingInline: '30px' }}>
				<div className="row">
					<div className="eight wide column">
						<EditWindow handleChange={this.handleChange} />
					</div>
					<div className="eight wide column">
						<DisplayWindow state={this.state} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
