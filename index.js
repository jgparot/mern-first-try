import express from 'express';
import routes from './src/routes/antiracismRoutes';
import mongoose from 'mongoose';

require('dotenv').config()
const app = express();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/antiracismdb')
//bodyparser 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

routes(app);


const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => 
    res.send('Node funcionando')
)

app.listen(PORT, () => 
    console.log(' server funcionando!'))