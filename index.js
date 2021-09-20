require('dotenv').config();

const express = require('express');
const app = express();
const mongooseConnection = require('./db')
const router = require('./router');


app.use(express.json());
app.use(router);

mongooseConnection()

app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port ...');
})