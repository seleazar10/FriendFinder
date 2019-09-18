
var path = require('path');

//Routing

module.exports = function(app){
   

    app.get('/survey.html', function(req, res){
        res.sendFile(path.join(__dirname  + '/../public/survey.html'));
    });

    

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
