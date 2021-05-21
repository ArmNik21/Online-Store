const {Schema,model}=require(`mongoose`);

let PaxpaxakSchema=new Schema({
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

let PaxpaxakModel=model(`Paxpaxak`,PaxpaxakSchema);

module.exports={
    PaxpaxakModel
}