import { connect } from "mongoose";

async function Connection(){
    const URI = "mongodb://localhost:27017/MongooseDB";
    const connection = await connect(URI);
    return connection;
}

export default Connection;