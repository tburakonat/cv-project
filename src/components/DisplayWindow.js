import React from 'react';

const DisplayWindow = ({ state }) => {
	const fullName = `${state.first} ${state.last}`;

	return (
		<div className="ui piled segments">
			<header className="ui segment">
				<h2 className="ui header">{state.first || state.last ? `${fullName}` : `Your Name`}</h2>
				<div>
					{state.phone && <i className="phone square icon"></i>}
					{state.phone}
				</div>
				<div>
					{state.email && <i className="at icon"></i>}
					{state.email}
				</div>
			</header>
			<div className="ui segment">
				<h2 className="ui header">Educational Information</h2>
				<div>
					{state.institution && <i className="university icon"></i>}
					{state.institution}
				</div>
				<div>
					{(state.subject || state.degree) && <i className="pencil alternate icon"></i>}
					{state.subject} {state.degree}
				</div>
				<div>
					{state.completion && <i className="calendar alternate icon"></i>}
					{state.completion}
				</div>
			</div>
			<div className="ui segment">
				<h2 className="ui header">Practical Experience</h2>
				<div>
					{state.position && <i className="user icon"></i>}
					{state.position}
				</div>
				<div>
					{state.company && <i className="building icon"></i>}
					{state.company}
				</div>
				<div>
					{(state.from || state.to) && <i className="calendar outline icon"></i>}
					{state.from ? `From: ${state.from} - ` : ''}
					{state.to ? `To: ${state.to}` : ''}
				</div>
			</div>
			<div className="ui segment">
				<button className="ui primary button">Print PDF</button>
			</div>
		</div>
	);
};

export default DisplayWindow;
