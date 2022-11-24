import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GitHubStrategy } from 'passport-github2';

//When you need to deploy the website use Dotenv (.env)
//Google Key
const GOOGLE_CLIENT_ID = "159707747434-cugt3bsh0rf5dvssiurqa563gmqrfl2i.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
//GitHup key
const GITHUB_CLIENT_ID = "423bef33a5093875b3ba";
const GITHUB_CLIENT_SECRET = "930f3e3de0dfe1b73ad0f2f6dce9575af935ac6d";
//Facebook key
const FACEBOOK_APP_ID = "456133256600383";
const FACEBOOK_APP_SECRET = "065eca86465e44c89095498455040cb1"

//Google
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
(accessToken, refreshToken, profile, done) => {
done(null,profile)
}
));

//Facebook
passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
(accessToken, refreshToken, profile, done) => {
done(null,profile)
}
));

//Githup
passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
(accessToken, refreshToken, profile, done) => {
done(null,profile)
}
));

passport.serializeUser((user,done) => { 
  done(null,user)
 })


passport.deserializeUser((user,done) => { 
  done(null,user)
 })

 export default passport;