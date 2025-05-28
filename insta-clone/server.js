const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./Mongo_Connection/connectdb');
const router = require('./Routes/route.js');


const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use('/instagram',router) 
connectDB(process.env.MONGODB_URI)
=======
app.use('/instagram',router)
connectDB(process.env.MONGODB_URI);

>>>>>>> dd4150968da6a3ff93837e7f0145c582cd7044fe

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`);
});
