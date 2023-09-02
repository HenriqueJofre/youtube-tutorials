import PostController from "./Post/PostController";
const postController = new PostController();

function Routes(app){

    app.get('/post/:id?', postController.getPost);
    app.post('/post', postController.setPost);
    app.put('/post/:id', postController.putPost);
    app.delete('/post/:id', postController.deletePost);
}

export default Routes;