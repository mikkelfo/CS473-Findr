package com.fashionFindr.service;

import com.fashionFindr.dao.CommentDao;
import com.fashionFindr.dao.PostDao;
import com.fashionFindr.dao.UserDao;
import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import javafx.geometry.Pos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostDao postDao;
    private final CommentDao commentDao;
    private final UserService userService;


    @Autowired
//    change the qualifieer to correct name when database is connected
    public PostService(PostDao postDao, CommentDao commentDao, UserService userService) {
        this.postDao = postDao;
        this.commentDao = commentDao;
        this.userService = userService;
    }

//    public int createPost(Post post){
//        return postDao.createPost(post.getPostID(), post.getUser(),post.getTitle(), post.getImageSrc(), post.getDescription(), post.getCorrectlyAnswered());
//
//    }
    public Post createPost(Post post){
        int current_number_of_posts = postDao.findAll().size();
        post.setPostID(current_number_of_posts+1);
        userService.addUserPosts(post.getUsername(), post.getPostID());
//        return postDao.createPost(post.getPostID(), post.getUsername(),post.getTitle(), post.getImageSrc(), post.getDescription(), post.getCorrectlyAnswered());
        return postDao.save(post);
    }

    public Post getPost(int postID){
        System.out.println(postID);
        Post post = postDao.findByPostID(postID);
        System.out.println(post.getPostID());
        return postDao.findByPostID(postID);
    }

    public List<Post> getUnansweredPosts(){
        return postDao.findByCorrectlyAnswered(0);
    }

    public  List<Post> getAllPosts(){
        return postDao.findAll();
    }

    public void updateCorrectlyAnswered(String username, int postID, int correctlyAnswered){
        Post post = postDao.findByPostID(postID);
        if (post.getUsername().equals(username)){
            post.setCorrectlyAnswered(correctlyAnswered);
            postDao.save(post);
        } else{
            System.out.println("user does not have right to change satus ");
        }
    }

//    public List<Post> getUnansweredPosts(){
//        return postDao.getUnansweredPosts();
//    }
//
//    public List<Post> getTrendingPosts(){
//        return postDao.getTrendingPosts();
//    }
//
//    public Post getPostInfo(String postID){
//        return postDao.getPostInfo(postID);
//    }
//
//    public List<Comment> getComments(String postID){
//        return commentDao.getComments(postID);
//    }

//    public List<Post> selectAll_AnsweredPost(){
//        return postDao.selectAll_AnsweredPost();
//
//    }
//    public List<Post> selectAll_UnansweredPost() {
//        return postDao.selectAll_UnansweredPost();
//
//    }
//
//    public List<Post> selectAllPost() {
//        return postDao.selectAllPost();
//    }
//
//    public int updateAnswer_Status(String post_ID, int answer_status) {
//        return postDao.updateAnswer_Status(post_ID, answer_status);
//    }

}
