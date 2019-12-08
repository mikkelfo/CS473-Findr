package com.fashionFindr.service;

import com.fashionFindr.dao.CommentDao;
import com.fashionFindr.dao.PostDao;
import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

//    public List<Post> getUnansweredPosts(){
//        return postDao.findByCorrectlyAnswered(0);
//    }

    public List<Post> getUnansweredPosts(String username){
        List<Post> unansweredPosts = postDao.findByCorrectlyAnswered(0);
        List<Post> swiperPosts = new ArrayList<>();
        User user = userService.getUserInfo(username);
        List<Integer> userSeenPosts = user.getUserSeenPosts();
        for (int j = 0 ; j < unansweredPosts.size(); j++){
            int postID = unansweredPosts.get(j).getPostID();
            if (userSeenPosts.contains(postID)){

            } else{
                swiperPosts.add(postDao.findByPostID(postID));
            }
        }

        return swiperPosts;
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


}
