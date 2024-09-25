const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../backend/data/books.json'), 'utf8');
        return {
            statusCode: 200,
            body: data,
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'Error reading books data',
        };
    }
};
