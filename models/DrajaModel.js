const {Schema,model}=require(`mongoose`);

let DrajaSchema=new Schema({
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

let DrajaModel=model(`Draja`,DrajaSchema);

module.exports={
    DrajaModel
}