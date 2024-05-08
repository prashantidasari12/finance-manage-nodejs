const express = require('express');
const mongoose = require('mongoose');



const dbURI= 'mongodb+srv://prashantidasari:YGXk9mSmxJdl1T9g@cluster0.mongodb.net/';

mongoose.connect(
   dbURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
     
    const contactSchema = {
        email: String,
        query: String,
    };
     
    const Contact =
        mongoose.model("Contact", contactSchema);
     
     
    app.set("view engine", "ejs");
     
    app.use(bodyParser.urlencoded({
        extended: true
    }));
     
    app.use(express.static(__dirname + '/public'));
     
    // app.get("/contact",
    //     function (req, res) {
    //         res.render("contact");
    //     });
     
    // app.post("/contact",
    //     function (req, res) {
    //         console.log(req.body.email);
    //         const contact = new Contact({
    //             email: req.body.email,
    //             query: req.body.query,
    //         });
    //         contact.save(function (err) {
    //             if (err) {
    //                 throw err;
    //             } else {
    //                 res.render("contact");
    //             }
    //         });
    //     });
     

    const app = express();


    app.get('/', (req, res) => {
        res.sendFile('index.html', {root:__dirname});
    });


    app.listen(5000,
        function () {
            console.log("App is running on Port 3000");
        });

