import PostService from "./PostService";
const postService = new PostService();

class PostController{
    getPost(req, res){
        return postService.readPost(req, res);
    }

    setPost(req, res){
        return postService.createPost(req, res);
    }

    putPost(req, res){
        return postService.updatePost(req, res);
    }

    deletePost(req, res){
        return postService.removePost(req, res);
    }
}

export default PostController;