export const ApiCall = (link) => {
	return fetch(link).then(res => res.json())
}