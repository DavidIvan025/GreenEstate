const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const connectDB = require('./database');
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/members'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));

/* require('dotenv').config();

const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server is running on port: ', app.get('port'));
}

main(); */