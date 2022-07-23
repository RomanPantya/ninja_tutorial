// Папка перекинута и потому пути не совпадут!!!!!

const fs = require('fs');
const { join } = require('path');

// fs.unlinkSync(join(__dirname, 'Node_JS_Begginer/reading_writing', 'writeMe.txt'));

// fs.mkdirSync(join(__dirname, 'Node_JS_Begginer/reading_writing', 'stuff1'));

// fs.rmdirSync(join(__dirname, 'Node_JS_Begginer/reading_writing', 'stuff1'));

/**
fs.mkdir(
    join(__dirname, 'Node_JS_Begginer/reading_writing', 'stuff1'),
    () => {
        fs.readFile(join(__dirname, 'writeMe.txt'), 'utf-8', (err, data) => {
            fs.writeFile(join(
                __dirname,
                'Node_JS_Begginer/reading_writing/stuff1',

                'writeMe.txt',
            ), data, () => {});
        });
    },
);
*/

/**
fs.unlink(join(__dirname, 'Node_JS_Begginer/reading_writing/stuff1', 'writeMe.txt'), () => {
    fs.unlink(join(__dirname, 'Node_JS_Begginer/reading_writing/stuff1', 'writeMe1.txt'), () => {
        fs.rmdir(join(__dirname, 'Node_JS_Begginer/reading_writing', 'stuff1'), () => {});
    });
});
*/
