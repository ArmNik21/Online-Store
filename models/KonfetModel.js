const {Schema,model}=require(`mongoose`);

let KonfetSchema=new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    content:{
        type:String,
    },
    image:{
        type:String
    }
},{
    timestamps:true
})

let KonfetModel=model(`Konfet`,KonfetSchema);

module.exports={
    KonfetModel
}