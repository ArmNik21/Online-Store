const {Schema,model}=require(`mongoose`);

let KofeSchema=new Schema({
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

let KofeModel=model(`Kofe`,KofeSchema);

module.exports={
    KofeModel
}