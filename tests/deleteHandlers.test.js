// eslint-disable-next-line no-undef
const config = require('../config');

test('deleting the kit', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});

test('deleting the kit info should be ok', async () => {
    let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/10`, {
			method: 'DELETE',
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	console.log(actualResponse)
	expect(actualResponse.ok).toBe(true)
});