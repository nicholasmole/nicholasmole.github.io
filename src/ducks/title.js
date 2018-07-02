export function updateTitle(text) {
	return {
		type: 'UPDATE_TITLE',
		text
	};
}

export function myStore(state = [], action) {
	if (action === undefined) {
		return state;
	}
	switch (action.type) {
		case 'UPDATE_TITLE':
			return {
				id: Math.random().toString(36).substring(2),
				title: action.text
			};
		default:
			return state;
	}
}

export default myStore;
