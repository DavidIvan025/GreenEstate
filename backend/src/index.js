require('dotenv').config();

const app = require('./app');
require('./database');

main().catch(err => console.log(err));

async function main() {
    await app.listen(app.get('port'));
    console.log('Server is running on port: ', app.get('port'));
}

main();