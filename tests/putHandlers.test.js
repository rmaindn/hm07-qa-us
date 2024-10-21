// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 175
}

test('price should be ok', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('price should return status ok', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse.ok).toBe(true);
});
