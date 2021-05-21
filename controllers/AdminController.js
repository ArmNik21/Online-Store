const { ArticleModel,}=require(`../models/ArticleModel`)
const { TortModel,}=require(`../models/TortModel`)
const { KonfetModel,}=require(`../models/KonfetModel`)
const { BiskvitModel,}=require(`../models/BiskvitModel`)
const { PaxpaxakModel}=require(`../models/PaxpaxakModel`)
const { DrajaModel}=require(`../models/DrajaModel`)
const { KofeModel}=require(`../models/KofeModel`)

class AdminController{
    async adminView(req,res){
        console.log(req.session.user.username);
        let articles=await ArticleModel.find().sort(`-createdAt`).lean();
        let torts=await TortModel.find().sort(`-createdAt`).lean();
        let konfets=await KonfetModel.find().sort(`-createdAt`).lean();
        let biskvits=await BiskvitModel.find().sort(`-createdAt`).lean();
        let paxpaxaks=await PaxpaxakModel.find().sort(`-createdAt`).lean();
        let drajas=await DrajaModel.find().sort(`-createdAt`).lean();
        let kofes=await KofeModel.find().sort(`-createdAt`).lean();

        let username=req.session.user.username;
        res.render('admin',{username,articles, torts,konfets,biskvits,paxpaxaks,drajas,kofes})
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    createArticleView(req,res){
        res.render(`articleCreate`)
    }

    async saveNewArticle(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let article=new ArticleModel({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newArticle= await article.save();
      console.log(newArticle);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/createArticle`)
      }
    }
    createBiskvitView(req,res){
        res.render(`createBiskvit`)
    }

    async saveNewBiskvit(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let biskvit=new BiskvitModel({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newBiskvit= await biskvit.save();
      console.log(newBiskvit);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/createBiskvit`)
      }
    }
    createTortView(req,res){
        res.render(`tortCreate`)
    }

    async saveNewTort(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let Tort=new TortModel ({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newTort= await Tort.save();
      console.log(newTort);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/tortCreate`)
      }
    }
    createKonfetView(req,res){
        res.render(`konfetCreate`)
    }

    async saveNewKonfet(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let Konfet=new KonfetModel ({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newKonfet= await Konfet.save();
      console.log(newKonfet);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/createKonfet`)
      }
    }
    createPaxpaxakView(req,res){
        res.render(`paxpaxakCreate`)
    }

    async saveNewPaxpaxak(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let paxpaxak=new PaxpaxakModel({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newPaxpaxak= await paxpaxak.save();
      console.log(newPaxpaxak);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/paxpaxakCreate`)
      }
    }
    createDrajaView(req,res){
        res.render(`drajaCreate`)
    }

    async saveNewDraja(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let draja=new DrajaModel({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newDraja= await draja.save();
      console.log(newDraja);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/drajaCreate`)
      }
    }
    createKofeView(req,res){
        res.render(`kofeCreate`)
    }

    async saveNewKofe(req,res){
     try{
      let imageName;
      console.log(`req,file`,req.file)
       if(req.file.filename){
             imageName=req.file.filename
       }else{
           imageName=""
       }
       let kofe=new KofeModel({
           title:req.body.title,
           description:req.body.description,
           content:req.body.content,
           image:imageName

       })
      let newKofe= await kofe.save();
      console.log(newKofe);
       res.redirect("/admin")
      }catch(err){
        console.log(err.message);
        res.redirect(`/admin/kofeCreate`)
      }
    }



    async updateArticleView(req,res){
        
        let id=req.params.id;
        let article=await ArticleModel.findOne({_id:id});
        console.log(46,article);
        res.render(`articleUpdate`,{article})
    }

    async updateArticleDb(req,res){
        console.log(54,req.body);
       let id=req.body.id;
       console.log(55,id);
       let article=await ArticleModel.findOne({_id:id});  
       console.log(56,article)
       try{ 
       
        article.title=req.body.title;
        article.description=req.body.description;
        article.content=req.body.content;
        if(req.file){
            article.image=req.file.filename; 
        }
        await article.save();
        res.redirect(`/admin`)
     }catch(err){
         console.log(err);
         res.render(`articleUpdate`,{article})
         
     }
       
    }
   
    async deleteArticle(req,res){
       try{ 
        let id=req.params.id;
        await ArticleModel.deleteOne({_id:id});
        await TortModel.deleteOne({_id:id});
        await KonfetModel.deleteOne({_id:id});
        await BiskvitModel.deleteOne({_id:id});
        await PaxpaxakModel.deleteOne({_id:id});
        await DrajaModel.deleteOne({_id:id});
        await KofeModel.deleteOne({_id:id});
        res.redirect("/admin")
       }catch(err){
           console.log(err);
           res.redirect("/admin")
       } 
    }


    //read

    async readArticleView(req,res){
        
        let id=req.params.id;
        let article=await ArticleModel.findOne({_id:id});
        let tort=await TortModel.findOne({_id:id});
        let konfet=await KonfetModel.findOne({_id:id});
        let biskvit=await BiskvitModel.findOne({_id:id});
        let paxpaxak=await PaxpaxakModel.findOne({_id:id});
        let draja=await DrajaModel.findOne({_id:id});
        let kofe=await KofeModel.findOne({_id:id});
        res.render(`articleRead`,{article,tort,konfet,biskvit,paxpaxak,draja,kofe})
    }
 
}

module.exports=new AdminController();