import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
    subTitle: String,
    author: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const postSchema = mongoose.model("posts", schema);
export default postSchema;