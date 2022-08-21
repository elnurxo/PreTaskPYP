const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

const url = 'http://localhost:3000/';

axios(url).then(response=>{
    const html = response.data;
});

app.listen(port,()=>{
    console.log('Listening to '+port);
});

//Static Files
app.use('/assets',express.static('assets'));
app.use('/style/css',express.static(__dirname + '/assets/style/css'));
app.use('/js',express.static(__dirname + 'assets/js'));
app.use('/media/home',express.static(__dirname + 'assets/media/home'));
app.use('/media/favicon',express.static(__dirname + 'assets/media/favicon'));

//Set Views
app.set('views','./views');
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('index');
});