import expressSession from "express-session";
import express from "express";
import passport from "passport";
import cors from "cors"
import passportSetup from "./passport.js"
const app = express();
import authRoute from "./routes/auth.js"

app.use(
  expressSession({
    name: "session",
    keys: ["Deyaa"],
    maxAge: 24 * 60 * 60 * 100,
    secret: 'somevalue'
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth",authRoute)

app.listen("5000", () => {
  console.log("Server is running!");
});
