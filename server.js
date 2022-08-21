const express = require('express');
const app = express();
var http = require('http').Server(app);
const port = process.env.PORT || 3000;

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
 
















// app.get('/',(req,res)=>{
//     res.render('index',{text:'World'});
// });
// app.get('/users',(req,res)=>{
//     let users = ["Elnur","Ali","Cavid"];

//     res.send(users);
// });
// app.post("/create-user",(req,res)=>{
//     console.log(req);
// });






// const http = require('http');
// const fs = require('fs');
// const port = 5500;

// const server = http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     fs.readFile('index.html',function(error,data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Error: File Not Found!');
//         }
//         else{
//             res.write(data);
//         }
//         res.end();
//     });
// });

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Something went wrong!', error);
//     }
//     else{
//         console.log('Server is listening on port' + port);
//     }
// });