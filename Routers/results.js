const express = require('express');
const router = express.Router();
var { range, cgpa, percentage, Firstyear, SecondYear, sem5, sem6, percentage, sem7core, sem7tech, sem8 } = require('../helpers/calculator.js');
const Sgpa = require("../models/sgpa");
const User = require("../models/user");





router.get("/sem1", async (req, res) => {
    const { subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8 } = req.query;
    const sub = req.query;
    const array = [subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8];
    var arr = [];
    for (let i of array) {
        let x = range(i);
        arr.push(x);

    }

    const result = Firstyear(arr);
    const per = percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
        const sgpa = await Sgpa.findOneAndUpdate({ _id: req.session.sgpa_id }, { semester1: result }, { new: true });
        console.log(sgpa);
        return res.render("sgpa/sem1", { result, sub, per });
    }
    return res.render("sgpa/sem1", { result, sub, per });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/sem2", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8 } = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
  
    const result = Firstyear(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester2:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/sem2", { result,sub,per});
    }
    return res.render("sgpa/sem2", {result, sub,per});
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/sem3", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8 ,subject9} = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8,subject9];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
 
    const result = SecondYear(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester3:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/sem3", { result,sub,per});
    }
    return res.render("sgpa/sem3", {result, sub,per});
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/sem4", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8 ,subject9} = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8,subject9];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
    console.log(arr);
    const result = SecondYear(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester4:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/sem4", { result,sub,per});
    }
    return res.render("sgpa/sem4", {result, sub,per});
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////
  
router.get("/sem5", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8 ,subject9} = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8,subject9];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
    console.log(arr);
    const result = sem5(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester5:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/sem5", { result,sub,per});
    }
    return res.render("sgpa/sem5", {result, sub,per});
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  router.get("/sem6", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8 } = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7, subject8];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
    console.log(arr);
    const result = sem6(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester6:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/sem6", { result,sub,per});
    }
    return res.render("sgpa/sem6", {result, sub,per});
  });
////////////////////////////////////////////////////////////////////////

router.get("/sem8", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5} = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
    console.log(arr);
    const result = sem8(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester8:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/sem8", { result,sub,per});
    }
    return res.render("sgpa/sem8", {result, sub,per});
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  router.get("/tech", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7} = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
    console.log(arr);
    const result = sem7tech(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester7:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/tech", { result,sub,per});
    }
    return res.render("sgpa/tech", {result, sub,per});
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  router.get("/core", async (req, res) => {
    const { subject1, subject2, subject3,subject4, subject5, subject6,subject7,subject8} = req.query;
    const sub=req.query;
    const array=[subject1, subject2, subject3,subject4, subject5, subject6,subject7,subject8];
    var arr=[];
    for(let i of array)
    {
      let x=range(i);
      arr.push(x);
      
    }
    console.log(arr);
    const result = sem7core(arr);
    const per= percentage(result);
    //if logged in
    if (req.session.sgpa_id) {
      const sgpa=await Sgpa.findOneAndUpdate({_id:req.session.sgpa_id},{semester7:result},{new:true});
      console.log(sgpa);
      return res.render("sgpa/core", { result,sub,per});
    }
    return res.render("sgpa/core", {result, sub,per});
  });

module.exports = router;