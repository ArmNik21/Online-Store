const {Schema,model}=require(`mongoose`);

let BiskvitSchema=new Schema({
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

let BiskvitModel=model(`Biskvit`,BiskvitSchema);

module.exports={
    BiskvitModel
}