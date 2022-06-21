const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// app.get(route , (req,res))

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath)

// app.use(express.static(staticPath));

// app.get('/', (req,res) => {
//     res.send("Hello world");
// });

//template engine route
app.get("/" , (req,res) => {
    res.render('index',{
        name: "lakshya"
    });
})

app.get('/about',(req,res)=>{
    requests(`https://api.weatherapi.com/v1/current.json?key=b1e00f72f6ef4f06b0485523222101&q=${req.query.name}`)
        .on("data" , (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            console.log(`${arrData[0].current.temp_c}`);
            res.write(arrData[0].location.name);
})
});

// app.get('/about/*', (req,res) => {
//     res.render("404", {
//         errorcomment: "about us inside page is not present"
//     });
// })
// app.get('*', (req,res) => {
//     res.render("404", {
//         errorcomment: "page is not present"
//     });
// })

app.listen(8000 , () => {
    console.log('listening at port 8000');
})