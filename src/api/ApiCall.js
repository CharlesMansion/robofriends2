require('es6-promise').polyfill();
require('isomorphic-fetch');

export const ApiCall = (link) => {
	return fetch(link).then(res => res.json())
}