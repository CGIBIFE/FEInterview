var fs = require('fs');
module.exports = {
    attach: attach
};

function attach(app) {
    app.get('/api/twitter/feed', fileToResponse);
}

function fileToResponse(req, res) {
    var responseJson = {};
    responseJson = JSON.parse(fs.readFileSync('stubs/data.json', 'utf8'));
    res.status(200).json(responseJson);
}