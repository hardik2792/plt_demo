
import * as express from 'express';
const app = express();

// Setting Application PORT
const appPort = process.env.PORT || 3000;

// Application Routes
const route = require('./src/route');

app.use("/",route.default(app, express))
app.use(express.json({}))
app.use(express.urlencoded({extended: true}))
const server = app.listen(appPort, () => {
    console.log("Server Started");
});
