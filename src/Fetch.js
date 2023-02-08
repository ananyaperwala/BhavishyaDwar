const mongoose =require("mongoose");
mongoose.set('strictQuery', false);
// const { Schema } = require("mongoose");

const mongoURL = "mongodb+srv://user1:kmit1@cluster0.0csl8ss.mongodb.net/BhavishyaDwar?retryWrites=true&w=majority";
mongoose.connect(mongoURL).then(console.log('Database Connected')).catch('Database is not connected');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    name:String,
    about: String
    
}, {
    collection:"Users"
})
const User = mongoose.model(" ",itemSchema);
User.find({},(err, items) =>{
    if(err){
            console.log(err);
    }
    else{
            console.log(items)
    }
}
)
    
    

