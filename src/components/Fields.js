import React from 'react';

function Field({ label, handleChange, name }) {
	return (
		<div className="field">
			<label>{label}</label>
			<input type="text" name={name} onChange={handleChange} />
		</div>
	);
}

export default Field;
