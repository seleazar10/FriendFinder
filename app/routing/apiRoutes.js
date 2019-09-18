//Load Data
var friends = require('../data/friends.js');

//Routing

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var match = {
			name: '',
			picture: '',
			difference: 100
		};

		var dataInput = req.body;
		var scoresInput = dataInput.scores;

		var totDiff;

		for (var i = 0; i < friends.length; i++) {
			var friend = friends[i];
			totDiff = 0;

            console.log(friend.name);
            
            for (var k = 0; k < friend.scores.length; k++) {
                var friendScores = friend.scores[k];
                var userScores = scoresInput[k];
                // totDiff = 0;
    
                totDiff = totDiff + Math.abs(parseInt(userScores) - parseInt(friendScores));
    
                // console.log(friend.name)
            }
    
            if (totDiff <= match.difference) {
                match.name = friend.name;
                match.picture = friend.picture;
                match.difference = totDiff;
            }
        }
        
        friends.push(dataInput);

        res.json(match)

		
	});
};
