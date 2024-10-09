const express=require('express');
const app =new express();
const morgan =require('morgan')
app.use(morgan('dev'))

// app.use(express.static('public'))

require('dotenv').config()
const PORT=process.env.PORT
require('./db/connection')


const courseRoutes=require('./routes/courseRoutes')
app.use('/course',courseRoutes)

app.listen(PORT,()=>{
    console.log(`Server is connected to the ${PORT}`)
})