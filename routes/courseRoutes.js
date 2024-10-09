const express = require('express');
const router = express.Router();
const courseModel = require('../model/courseData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));






router.post('/add',async(req,res)=>{
    try {
        var item = req.body;
        const data1 = new courseModel(item);
        const saveddata = await data1.save();
        res.status(200).send('Post Successful');

    } catch (error) {
      res.status(404).send('Post Unsuccessful');  
    }
})
router.get('/', async (req, res) => {
    try {
        const courses = await courseModel.find(); 
        res.status(200).json(courses); 
    } catch (error) {
        console.error('Error retrieving courses:', error);
        res.status(500).send('Error retrieving courses');
    }
});


router.get('/:id', async (req, res) => {
    try {
        const course = await courseModel.findById(req.params.id); 
        if (!course) {
            return res.status(404).send('Course not found');
        }
        res.status(200).json(course); 
    } catch (error) {
        console.error('Error retrieving course:', error);
        res.status(500).send('Error retrieving course');
    }
});
router.put('/editCourse/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await courseModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('Update successful');
    } catch (error) {
       res.status(404).send(error); 
    }
})

router.delete('/deleteCourse/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await courseModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful')
    } catch (error) {
        res.status(404).send('Delete Unsuccessful');
    }
})

module.exports = router;