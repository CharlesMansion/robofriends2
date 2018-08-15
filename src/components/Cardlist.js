import React from 'react';
import Card from './Card'


const Cardlist = ({robots}) => {
	if (true) {
		throw new Error('nooooo!');
	} else
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
						 key={robots.id} 
						 id={robots[i].id} 
						 name={robots[i].name} 
						 email={robots[i].email} 
						 />
					);
				})
			}
		</div>
	);
};
export default Cardlist;