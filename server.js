const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

const url = 'http://localhost:3000/';

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

//get json data async Apartment
async function getApartments(){
    const res = await axios.get('http://localhost:3001/apartment');
    return res.data;
}
let apartments = getApartments();
let apartment;
apartments.then((value)=>{
    apartment = value;
});
//get json data async Settings
async function getSettings(){
    const res = await axios.get('http://localhost:3001/settings');
    return res.data;
}
let settings = getSettings();
let setting;
settings.then((value)=>{
    setting = value;
});
//get json data async Amenities
async function getAmenities(){
    const res = await axios.get('http://localhost:3001/amenities');
    return res.data;
}
let amenities = getAmenities();
let amenity;
amenities.then((value)=>{
    amenity = value;
});
//get json data async ExtraInfo
async function getExtraInfo(){
    const res = await axios.get('http://localhost:3001/extrainfo');
    return res.data;
}
let extrainfo = getExtraInfo();
let info;
extrainfo.then((value)=>{
    info = value;
});
//get json data async Rules
async function getRules(){
    const res = await axios.get('http://localhost:3001/rules');
    return res.data;
}
let rules = getRules();
let rule;
rules.then((value)=>{
    rule = value;
    console.log(rule[0].desc);
});

app.get('/', function(request, response){
    response.render('index', {apartment: apartment[0],setting: setting,amenity: amenity,info:info[0],rules:rule[0]});
});