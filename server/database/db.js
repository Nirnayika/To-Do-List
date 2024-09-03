import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const Connection = () => {

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@mern-todo-shard-00-00.9pmwi.mongodb.net:27017,mern-todo-shard-00-01.9pmwi.mongodb.net:27017,mern-todo-shard-00-02.9pmwi.mongodb.net:27017/?ssl=true&replicaSet=atlas-12ulka-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-todo`;
    
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected successfully');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;
