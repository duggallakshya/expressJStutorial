const express = require('express');
const app = express();

app.get('/', (req , res) => {
    res.send("Welcome to home page");
})
app.get('/about', (req , res) => {
    res.send("<h1> Welcome to about page </h1>");
})
app.get('/contact', (req , res) => {
    res.send("Welcome to contact page");
})
// app.get('/temp', (req , res) => {
//     res.send({
//         id : 1 , 
//         name : "lakshya"
//     });
// });
//OR
app.get('/temp', (req , res) => {
    res.json([{
        id : 1 , 
        name : "lakshya"
    }]);
});

app.listen(3000, () => {
    console.log("listening to the port 3000");
})