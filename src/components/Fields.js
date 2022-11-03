import React from 'react';

function Field({ label }) {
	return (
		<div className="field">
			<label>{label}</label>
			<input type="text" />
		</div>
	);
}

export default Field;
