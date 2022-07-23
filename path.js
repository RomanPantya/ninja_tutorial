const { join } = require('path');
const { readFileSync } = require('fs');

const fileName = '.eslintrc.js';
const text = readFileSync(join(__dirname, '../..', fileName), { encoding: 'utf-8' });

console.log(text);
