var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('..models/user');
const TWIT_API = process.env.TWITTER_API_KEY;
const TWIT_SECRET = process.env.TWITTER_API_SECRET;

passport.use('twitter', new TwitterStrategy({
	consumerKey: TWIT_API,
	consumerSecret: TWIT_SECRET,
	callbackUrl: 'http://127.0.0.1:3000/login/twitter/callback' 
},
	(token, tokenSecret, profile, done) =>{
	//code data retreival here	
	}
)
