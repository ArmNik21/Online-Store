const {Schema,model}=require(`mongoose`);

let TortSchema=new Schema({
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

let TortModel=model(`Tort`,TortSchema);

module.exports={
    TortModel
}