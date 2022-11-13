const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");
const { send } = require("process");
const bcrypt = require("bcrypt");
const session = require("express-session");
const Sgpa = require("./models/sgpa");
var { range,cgpa,percentage,Firstyear, SecondYear,sem5,sem6,percentage,sem7core,sem7tech,sem8 } = require("./helpers/calculator");
const { Console } = require("console");
const flash=require('connect-flash');
const sessionOptions={secret:'thisisnotagoodsecret',resave:false,saveUnintialized:false}
const resultRoutes = require('./Routers/results.js');


mongoose
  .connect(
    "mongodb+srv://ABHILASH_A:Abhilash2002@cluster0.askpc.mongodb.net/tie?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO MONGO ERROR");
    console.log(err);
  });
app.use('/assets',express.static('assets'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());
app.use(helmet());
app.use(session(sessionOptions));
app.use(flash());


app.use('/result',resultRoutes);

app.use((req,res,next)=>{
res.locals.success=req.flash('success');
res.locals.error=req.flash('error');
res.locals.success1=req.flash('success1');
next();
})

//logout request
app.get("/logout", (req, res) => {
  if( req.session.user_id )
  {
   req.session.user_id = null;
   req.session.sgpa_id = null;
   
    req.flash('success',"Succesfully logged out");
    res.redirect('/home');
  }
 
  else{
    req.flash('error',"You are not logged in");
    res.redirect('/home');
  }

});


app.get('/cgpa',(req,res)=>{
  res.render('cgpa');
})
//register page rendering
app.get("/register", (req, res) => {
  res.render("register");
});


//////////////////////////////////////////////////////////////////////////////////////////
//semester page rendering
app.get("/semester", async (req, res) => {
  res.render("semester");
});

app.get("/semester/sem1", async (req, res) => {
  res.render("sem/sem1");
});
app.get("/semester/sem2", async (req, res) => {
  res.render("sem/sem2");
});
app.get("/semester/sem3", async (req, res) => {
  res.render("sem/sem3");
});
app.get("/semester/sem4", async (req, res) => {
  res.render("sem/sem4");
});
app.get("/semester/sem5", async (req, res) => {
  res.render("sem/sem5");
});
app.get("/semester/sem6", async (req, res) => {
  res.render("sem/sem6");
});
app.get("/semester/sem7", async (req, res) => {
  res.render("sem/sem7");
});
app.get("/semester/tech", async (req, res) => {
  res.render("sem/tech");
});
app.get("/semester/core", async (req, res) => {
  res.render("sem/core");
});
app.get("/semester/sem8", async (req, res) => {
  res.render("sem/sem8");
});

//////////////////////////////////////////////////////////////////////////

app.get("/resultcgpa",(req,res)=>{

  const {s1,s2,s3,s4,s5,s6,s7,s8}=req.query;
  const obj=req.query;
  let array=[s1,s2,s3,s4,s5,s6,s7,s8];
  let finalresult=cgpa(array);
  let per=percentage(finalresult);
  res.render("sgpa/result",{finalresult,obj,per});

  
});

//register request
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const reqUsername = await User.findOne({ username });
  if (reqUsername) {
    req.flash('error','Username is already taken');
    return res.redirect("/register");
  }

  const hash = await bcrypt.hash(password, 12);
  const user = new User({ username, password: hash });
  await user.save();
  const sgpa = new Sgpa({ username, semester1: 0, semester2: 0, semester3: 0,semester4: 0, semester5: 0, semester6: 0 ,semester7: 0, semester8: 0});
  await sgpa.save();
  req.session.user_id = user._id;
  req.session.sgpa_id = sgpa._id;
  req.flash('success','you have signed up');
  req.flash('success1','Your calculations will be automatically saved to report card');
  res.redirect("/home");
});




//login page rendering
app.get("/login", (req, res) => {
  res.render("login");
});


//login request
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const sgpa = await Sgpa.findOne({ username });
  if (!user) {
    req.flash('error',"Invalid credentials")
    res.redirect("/login");
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      req.session.user_id = user._id;
      req.session.sgpa_id = sgpa._id;
      req.flash('success','Succesfully logged in');
      req.flash('success1','Your calculations will be automatically saved to report card');
      res.redirect("/home");
    
    } else {
      req.flash('error',"Invalid credentials")
      res.redirect("/login");
    }
  }
});

//reportcard
app.get('/reportcard',async(req,res)=>{
//if logged in
if(req.session.user_id)
{
  const user= await Sgpa.findById(req.session.sgpa_id);
  return res.render('reportcard',{user});
}
req.flash('error','Please login to view your Report Card');
return res.redirect('/home');
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  res.render("secret");
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Seems you got lost",
  });
});
app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server started");
  }
});
