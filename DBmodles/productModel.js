const mongoose= require("mongoose");
let CourseSchema = mongoose.Schema({
    CourseName:String,
    CourseID:Number,
    CourseDuration:String,
    CourseFee:Number,
});

let course= mongoose.model("Courses",CourseSchema);

module.exports= course;