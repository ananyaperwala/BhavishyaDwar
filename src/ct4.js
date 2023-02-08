const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

mongoose.connect("mongodb+srv://student:kmit123@cluster0.mwifk43.mongodb.net/himalayas?retryWrites=true&w=majority", (err, ok) => {
    if (err) throw err;
    else console.log("connected to db");
})

const mod = mongoose.Schema({
    name:String,
    height : Number,
    location : String

});

const mod1 = mongoose.model("peaks",mod);
mod1.find((err,doc)=>{
    console.log(doc[0].name,doc[0].location);
    console.log(doc[1].name,doc[1].location);
    console.log(doc[2].name,doc[2].location);}
);