import React, { useState } from 'react';

export const SearchMovie = ({ onSubmit }) => {
	const [nombre,setNombre] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(nombre);
	};

    const handleChange = (e) => {
		setNombre(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input value={nombre} onChange={handleChange} placeholder="search movie" />
			</form>
		</>
	);
};
