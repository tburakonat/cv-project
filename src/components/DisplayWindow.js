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
					{state.email && <i class="at icon"></i>}
					{state.email}
				</div>
			</header>
			<div className="ui segment">
				<h2 className="ui header">Educational Information</h2>
				<div>
					{state.institution && <i class="university icon"></i>}
					{state.institution}
				</div>
				<div>
					{(state.subject || state.degree) && <i class="pencil alternate icon"></i>}
					{state.subject} {state.degree}
				</div>
				<div>
					{state.completion && <i class="calendar alternate icon"></i>}
					{state.completion}
				</div>
			</div>
			<div className="ui segment">
				<h2 className="ui header">Practical Experience</h2>
				<div>
					{state.position && <i class="user icon"></i>}
					{state.position}
				</div>
				<div>
					{state.company && <i class="building icon"></i>}
					{state.company}
				</div>
				<div>
					{(state.from || state.to) && <i class="calendar outline icon"></i>}
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
