const Librus = require('librus-api');
require('dotenv').config();

exports.AuthenticateLibrus = async () => {
	try {
		const librusClient = new Librus();
		await librusClient.authorize(process.env.LOGIN, process.env.PASS);
		return librusClient;
	} catch (error) {
		console.error('Authentication failed', error);
		process.exit(1);
	}
};
