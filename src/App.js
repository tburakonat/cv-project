import React, { useState } from 'react';
import EditWindow from './components/EditWindow';
import DisplayWindow from './components/DisplayWindow';

const App = () => {
	const [state, setState] = useState({
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
	});

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setState(prevState => {
			return { ...prevState, [name]: value };
		});
	};

	return (
		<div className="ui divided stackable grid container" style={{ marginTop: '50px', paddingInline: '30px' }}>
			<div className="row">
				<div className="eight wide column">
					<EditWindow handleChange={handleChange} />
				</div>
				<div className="eight wide column">
					<DisplayWindow state={state} />
				</div>
			</div>
		</div>
	);
};

export default App;
