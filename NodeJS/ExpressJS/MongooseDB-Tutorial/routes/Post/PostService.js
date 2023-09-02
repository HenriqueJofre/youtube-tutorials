import Connection from "../../DB/ODM/Mongoose";
import { postSchema } from "../../DB/ODM/Mongoose/Models";

class PostService{
    constructor(){
        Connection();
    }

    async createPost(req, res){
        try {
            const { body } = req;
            await postSchema.create(body);
            res.status(200).send({message: "The post is registered with success!"})
        } catch (error) {
            res.status(500).send({message: "There is an error!"});
        }
    }

    async readPost(req, res){
        try {
            const { params } = req;
            const id = params.id;
            if(id){
                const getPost = await postSchema.findOne({_id: id});
                res.status(200).send(getPost)
            }else{
                const getPost = await postSchema.find();
                res.status(200).send(getPost)
            }
        } catch (error) {
            res.status(500).send({message: "There is an error!"});
        }
    }

    async updatePost(req, res){
        try {
            const { params, body } = req;
            let id = params.id;
            const postUpdated = await postSchema.findOneAndUpdate({_id: id}, {$set: body});
            res.status(200).send(postUpdated);
        } catch (error) {
            res.status(500).send({message: "There is an error!"});
        }
    }

    async removePost(req, res){
        try {
            const { params } = req;
            let id = params.id;
            const postDeleted = await postSchema.deleteOne({_id: id});
            res.status(200).send(postDeleted)
        } catch (error) {
            res.status(500).send({message: "There is an error!"});
        }
    }
}

export default PostService;