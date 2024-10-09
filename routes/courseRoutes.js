const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const courseModel=require('../model/courseData');

router.get('/', async (req,res)=>{
    try{
        const data =await courseModel.find();   
        res.status(200).send(data);

    }
 catch(error){
    res.status(404).send('course not found')
 }
})

//post
router.post('/addcourse',async (req,res)=>{
    try{
        var item=req.body; 
        const data1=new courseModel(item);
  
    const saveData= await data1.save(); 
    res.status(200).send("post successful");
    }
    catch(error){
        res.status(404).send(error);  
    }
})
//put operation
router.put('/edit/:id',async (req,res)=>{
    try {
        const id =req.params.id;
        const data =await courseModel.findByIdAndUpdate(id,req.body);
        res.status(200).send("Update successful"); 
    } catch (error) {
        res.status(404).send("Update unsuccessful"); 
    }
})
//delete operation
router.delete('/delete/:id',async (req,res)=>{
    try {
        const id =req.params.id;
        const data2 =await courseModel.findByIdAndDelete(id);
        res.status(200).send("Delete successful"); 
    } catch (error) {
        res.status(404).send("Delete unsuccessful"); 
    }
})

module.exports=router;