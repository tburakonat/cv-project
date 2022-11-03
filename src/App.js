import React from 'react';
import EditWindow from './components/EditWindow';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			personal: { first: '', last: '', email: '', phone: '' },
			educational: { institution: '', subject: '', degree: '', completion: '' },
			practical: { position: '', company: '', from: '', to: '' },
		};
	}

	render() {
		return (
			<div className="ui divided stackable grid container" style={{ marginTop: '50px' }}>
				<div className="row">
					<div className="eight wide column">
						<EditWindow />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
