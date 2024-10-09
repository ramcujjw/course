const mongoose=require('mongoose') 

const courseSchema=mongoose.Schema({
    Courseid: Number,
    CourseName: String,
    CourseCategory: String,
    CourseDescription: String,
    CourseImage: String,
    CourseDuration: Number,
    fee:Number

})

const courseData=mongoose.model('course',courseSchema)
module.export=courseData;