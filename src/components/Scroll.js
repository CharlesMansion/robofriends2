import React from 'react';


const Scroll = (props) => {
	return (
	<div style={{overflowY: 'scroll', border:'2px solid black', height:'680px'}}>
		{props.children}
	</div>	
	)
};
export default Scroll;