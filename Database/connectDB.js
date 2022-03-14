import env from 'dotenv';
import mongoose from "mongoose";
env.config();

// connect to db
function connectDB(){
    const connectionParams={
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
    mongoose.connect(process.env.CONSTRING,connectionParams)
      .then( () => {
          console.log('Connected to database ')
      })
      .catch( (err) => {
          console.error(`Error connecting to the database. \n${err}`);
      })
    }
export default connectDB;
