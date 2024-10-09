const mongoose=require('mongoose') 

const courseSchema=mongoose.Schema({
    CourseId: Number,
    CourseName: String,
    CourseCategory: String,
    CourseDescription: String,
    CourseImage: String,
    CourseDuration: Number,
    CourseFee:Number

})

const courseData=mongoose.model('course',courseSchema)
module.exports=courseData;