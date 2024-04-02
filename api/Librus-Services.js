const { AuthenticateLibrus } = require('./utils');

exports.getGrades = async (req, res) => {
	const librusClient = await AuthenticateLibrus();
	librusClient.info.getGrades()
		.then((grades) => {
			const filteredGrades = grades.filter(
				(subject) => !isNaN(subject.tempAverage) || !isNaN(subject.average)
			);
			res.json(filteredGrades);
		})
		.catch((error) => {
			console.error('Error fetching grades:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		});
};

exports.getSubjects = async (req, res) => {
	const librusClient = await AuthenticateLibrus();
	librusClient.homework
		.listSubjects()
		.then((subjects) => {
			res.json(subjects);
		})
		.catch((error) => {
			console.error('Error fetching subjects:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		});
};

// Broken
// exports.getSchedule = async (req, res) => {
// 	const librusClient = await AuthenticateLibrus();
// 	librusClient.calendar.getCalendar()
// 		.then(data => {
// 			console.log(data);
// 		})	
// }