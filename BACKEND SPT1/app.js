const express = require("express");
const bodyparser = require("body-parser");
const hashing = require("bcrypt");
const app = express();

app.get("/register" ,function(req ,res){
    res.render("register");
});
app.post("/register" ,function(req, res){
    bcrypt.hash(req.body.password , saltRounds ,function(err ,hash){
        const newUser = new User ({
            email :req.body.email,
            password :req.body.password
        })
        newUser.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.render("/login")
            }
        })
    })
})
let Books = ["mybook" ,"yourbook" ,"librarybook"];
app.set('view engine' ,'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.get("/" , function(req ,res){
    res.render("Books" ,{newbooks:Books});
});
    app.post ("/" , function(req , res){
        let  book = req.body.newBook;
        Books.push(book);
        res.redirect("/index");
});
app.post ("/login" , function(req ,res){
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email} ,function(err , foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){
                if(foundUser.password === password){
                    res.render("/index")
                }
            }
        }
    })
})
app.listen(3000 , function(){
    console.log("the server is running on port 3000")
});






