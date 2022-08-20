const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log('Listening to '+port);
});

// app.set('view engine', 'ejs');

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