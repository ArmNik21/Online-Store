const { ArticleModel } = require("../models/ArticleModel");
const { TortModel } = require("../models/TortModel");
const { KonfetModel,}=require(`../models/KonfetModel`)
const { BiskvitModel}=require(`../models/BiskvitModel`)
const { PaxpaxakModel}=require(`../models/PaxpaxakModel`)
const { DrajaModel}=require(`../models/DrajaModel`)
const { KofeModel}=require(`../models/KofeModel`)

const nodemailer = require('nodemailer');
class IndexController{
    async indexView(req,res){
        let articles=await ArticleModel.find().sort(`-createdAt`).lean();
        res.render('index',{articles});
    }
    async searcView(req,res){
        let search=req.body.search;
        console.log(search);
        var query = { title:{$regex:new RegExp(search,'i')}  };
        let articles1=await TortModel.find(query).select().lean().exec()
        let articles2=await ArticleModel.find(query).select().lean().exec()
        let articles3=await KonfetModel.find(query).select().lean().exec()
        let articles4=await BiskvitModel.find(query).select().lean().exec()
        let articles5=await PaxpaxakModel.find(query).select().lean().exec()
        let articles6=await DrajaModel.find(query).select().lean().exec()
        let articles7=await KofeModel.find(query).select().lean().exec()
        res.render('search',{articles1,articles2,articles3,articles4,articles5,articles6,articles7})
    }
    async patverView(req,res){
        var smtpConfig={
            service: 'gmail',
             auth: {
               user: 'nodejsarman@gmail.com', // replace by your email to practice
               pass: 'Arman-1999'
             },
           tls: {
               // do not fail on invalid certs
               rejectUnauthorized: false
           },
           debug: true, // show debug output
       }
       var transporter = nodemailer.createTransport(smtpConfig);
       let from=req.body.anun
       let text=req.body.text
       let qanak=req.body.qanak
       let hasce=req.body.hasce
       let her=req.body.her
       var mailOptions = {
        from: 'Patver',
        to:"armannikolyan21@gmail.com",
        subject: from,
        
        html: '<h1>'+text+'<br>'+ qanak+'<br>'+hasce+'<br>'+ her+'</h1>',
       
     
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
         res.render('patver');
      });
    }
    async tortView(req,res){
        let torts=await TortModel.find().sort(`-createdAt`).lean();
        res.render('tort',{torts});
    }
    async konfetView(req,res){
      let konfets=await KonfetModel.find().sort(`-createdAt`).lean();
      res.render('konfet',{konfets});
  }
  async biskvitView(req,res){
    let biskvits=await BiskvitModel.find().sort(`-createdAt`).lean();
    res.render('biskvit',{biskvits});
}
async paxpaxakView(req,res){
  let paxpaxaks=await PaxpaxakModel.find().sort(`-createdAt`).lean();
  res.render('paxpaxak',{paxpaxaks});
}
async drajaView(req,res){
  let drajas=await DrajaModel.find().sort(`-createdAt`).lean();
  res.render('draja',{drajas});
}
async kofeView(req,res){
  let kofes=await KofeModel.find().sort(`-createdAt`).lean();
  res.render('kofe',{kofes});
}
}

module.exports=new IndexController()