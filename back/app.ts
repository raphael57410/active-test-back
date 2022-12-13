import express from "express";
import cors from 'cors'
import numberRouter from "./routes/number/numberRoutes";

require('dotenv').config();
const mongose = require('mongoose');


const user = process.env.USERName;
const pass = process.env.PASS;
const cluster = process.env.URL;
const db = process.env.DB;

mongose.connect('mongodb://' + cluster + '/' + db,
    {
        pass,
        user: user,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connexion'))
    .catch((e) => console.log(e, 'connexion failed'));

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/ping', (req, res) => {
    res.status(200).send('ping OK');
});

app.use('/api', numberRouter);

export default  app;