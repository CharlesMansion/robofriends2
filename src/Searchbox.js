import React from 'react';


const Searchbox = ({searchChange}) => {
	return (
		<div className='pa2'>
		<input 
		className='pa3 ba b--blue bg-light-yellow' 
		type='search' 
		placeholder='Search robots...'
		onChange={searchChange}></input>
		</div>
		);
};
export default Searchbox;