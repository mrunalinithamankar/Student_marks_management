const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Registration = require('./models/registration');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

const dbURI = "mongodb+srv://@cluster0.hk4en.mongodb.net/placementwebapp?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('home');
});

app.get('/register', (req, res) => {

    res.render('register');
});

app.get('/login', (req, res) => {

    res.render('login');
});

app.get('/home', (req, res) => {

    res.redirect('/');
});

app.get('/sem1', (req, res) => {

    //console.log(srn);
    res.render('sem1');
});

app.get('/sem2', (req, res) => {

    //console.log(srn);
    res.render('sem2');
});

app.get('/sem3', (req, res) => {

    //console.log(srn);
    res.render('sem3');
});

app.get('/sem4', (req, res) => {

    //console.log(srn);
    res.render('sem4');
});

app.get('/sem5', (req, res) => {

    //console.log(srn);
    res.render('sem5');
});

app.get('/resumetips', (req, res) => {

    res.render('resumetips');
})

app.get('/afterlogin', (req, res) => {

    res.render('afterlogin');
})

app.get('/faq', (req, res) => {
    
    res.render('faq');
})

app.get('/afterlogin', (req, res) => {

    res.render('afterlogin');
})

app.get('/about', (req, res) => {

    res.render('about');
})

app.get('/dev', (req, res) => {

    res.render('dev');
})

app.get('/network', (req, res) => {

    res.render('network');
})

app.get('/database', (req, res) => {

    res.render('database');
})

app.get('/datascience', (req, res) => {

    res.render('datascience');
})

app.post("/registrations",async(req,res) => {

    let data = {"name" : req.body.name, "srn" : req.body.srn, "sem" : req.body.sem, "email" : req.body.email, "password" : req.body.password};
    //console.log(data);
    const registration = new Registration(req.body);

    registration.save()
        .then((result) =>{

            res.redirect('/login');
        })
        .catch((err) => {

            console.log(err);
        })
});

app.post("/login", async(req, res) => {

    try {

        const srn = req.body.srn;
        const password = req.body.password;

        const user = await Registration.findOne({srn:srn});

        if(user.password === password) {

            res.status(201).render('afterlogin');
        }
        else {

            res.send("Invalid Credentials");
        }

    } catch (error) {
        
        res.status(400).send("Invalid Credentials");
    }
});

app.post("/sem1", async(req, res) => {

    try {

        const srn = req.body.srn;
        const sem1sgpa = Number(req.body.sgpa);
        await Registration.findOneAndUpdate({srn:srn}, {sem1 : sem1sgpa});
        await Registration.findOneAndUpdate({srn:srn}, {totalsgpa : sem1sgpa});

        res.redirect('/afterlogin');

    } catch (error) {
        
        console.log(error);
        res.status(400).send("Invalid Credentials");
    }
});

app.post("/sem2", async(req, res) => {

    try {

        const srn = req.body.srn;
        const sem2sgpa = Number(req.body.sgpa);
        await Registration.findOneAndUpdate({srn:srn}, {sem2 : sem2sgpa});
        const user = await Registration.findOne({srn:srn});
        const cgpa = Number(user.totalsgpa) + sem2sgpa;
        await Registration.findOneAndUpdate({srn : srn}, {totalsgpa : cgpa});

        res.redirect('/afterlogin');

    } catch (error) {
        
        console.log(error);
        res.status(400).send("Invalid Credentials");
    }
});

app.post("/sem3", async(req, res) => {

    try {

        const srn = req.body.srn;
        const sem3sgpa = Number(req.body.sgpa);
        await Registration.findOneAndUpdate({srn:srn}, {sem3 : sem3sgpa});
        const user = await Registration.findOne({srn:srn});
        const cgpa = Number(user.totalsgpa) + sem3sgpa;
        await Registration.findOneAndUpdate({srn : srn}, {totalsgpa : cgpa});

        res.redirect('/afterlogin');

    } catch (error) {
        
        console.log(error);
        res.status(400).send("Invalid Credentials");
    }
});

app.post("/sem4", async(req, res) => {

    try {

        const srn = req.body.srn;
        const sem4sgpa = Number(req.body.sgpa);
        await Registration.findOneAndUpdate({srn:srn}, {sem4 : sem4sgpa});
        const user = await Registration.findOne({srn:srn});
        const cgpa = Number(user.totalsgpa) + sem4sgpa;
        await Registration.findOneAndUpdate({srn : srn}, {totalsgpa : cgpa});

        res.redirect('/afterlogin');

    } catch (error) {
        
        console.log(error);
        res.status(400).send("Invalid Credentials");
    }
});

app.post("/sem5", async(req, res) => {

    try {

        const srn = req.body.srn;
        const sem5sgpa = Number(req.body.sgpa);
        await Registration.findOneAndUpdate({srn:srn}, {sem5 : sem5sgpa});
        const user = await Registration.findOne({srn:srn});
        const cgpa = Number(user.totalsgpa) + sem5sgpa;
        await Registration.findOneAndUpdate({srn : srn}, {totalsgpa : cgpa});

        res.redirect('/afterlogin');

    } catch (error) {
        
        console.log(error);
        res.status(400).send("Invalid Credentials");
    }
});

app.use((req, res) => {

    res.status(404).render('404');
});
