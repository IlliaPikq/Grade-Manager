const express = require('express');
const app = express();
const { getGrades, getSubjects, getSchedule } = require('./Librus-Services');

app.use(require('cors')());


const PORT = 3000;

app.use('/api/getSubjects', getSubjects);
// app.use('/api/getschedule', getSchedule);
app.use('/api/getGrades', getGrades);

app.listen(PORT, () =>
	console.log('Server is listening on http://localhost:' + PORT)
);
