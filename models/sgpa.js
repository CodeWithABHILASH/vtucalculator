const mongoose=require('mongoose');
const sgpaSchema= new mongoose.Schema({
    username:{
        type:String
    },
    semester1:{
        type:Number
    },
    semester2:{
        type:Number
       
    },
    semester3:{
        type:Number
    },
    semester4:{
        type:Number
    },
    semester5:{
        type:Number
       
    },
    semester6:{
        type:Number
    },
    semester7:{
        type:Number
    },
    semester8:{
        type:Number
       
    }
})

module.exports=mongoose.model('Sgpa',sgpaSchema);