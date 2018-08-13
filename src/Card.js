import React from 'react';


const Card = ({name, id, email}) => {
	return (
		<div className='tc bg-washed-yellow dib br3 ma2 pa2 shadow-5 grow'>
			<div>
				<img src={`https://robohash.org/${id}?size=200x200`} alt='roboti'></img>
			</div>
		<h2>{name}</h2>
		<p>{email}</p>	
		</div>
		);
};
export default Card;