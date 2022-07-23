const fs = require('fs');
const { join } = require('path');

const readMe = fs.readFileSync(join(__dirname, '../..', 'readMe.txt'), 'utf-8');

fs.writeFileSync(join(__dirname, '../..', 'writeMe.txt'), readMe);

fs.readFile(join(__dirname, 'readMe.txt'), 'utf-8', (err, data) => {
    fs.writeFile(join(__dirname, 'writeMe.txt'), data, () => {});
});
