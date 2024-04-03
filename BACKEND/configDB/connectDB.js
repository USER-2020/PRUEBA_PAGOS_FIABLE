import mongoose from "mongoose";

try{
    await mongoose.connect(process.env.URI_MONGODB);
    console.log('Conect DB ok 👍');
}catch (error){
    console.log("Error al conect a mongodb: "+ error);
}