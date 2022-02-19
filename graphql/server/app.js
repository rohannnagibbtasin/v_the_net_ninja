const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://joe:joe420@cluster0.kektu.mongodb.net/test');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT,() => {
    console.log('listening on port 3300');
});