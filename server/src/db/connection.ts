import mongoose from "mongoose";

export function connectDb(connectedCallBack: (isConnected: boolean) => void) {
    if (!process.env.MONGO_URI) {
        return;
    }
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log('connected to database');
            connectedCallBack(true);
        }).catch(error => {
            console.error('Error occurred while connected to database', error);
        });
}


