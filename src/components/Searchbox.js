import React from 'react';


const Searchbox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<label for="search">
			<input 
			className='pa3 ba b--blue bg-light-yellow' 
			type='search' 
			placeholder='Search robots...'
			onChange={searchChange}
			id="search">
			</input>
			</label>
		</div>
		);
};
export default Searchbox;