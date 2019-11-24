package com.fashionFindr.dao;

import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface PostDao extends MongoRepository<Post, String> {
//    int createPost(String post_ID, String username, String title, String imageSrc, String description, int correctly_answered);
//
//    int createPost(String post_ID, User user, String title, String imageSrc, String description, int correctly_answered);
////    int updateAnswer_Status(String post_ID, int answer_status);
////    List<Post> selectAllPost();
//    List<Post> getUnansweredPosts();
//    List<Post> getTrendingPosts();
//    Post getPostInfo(String postID);


//    List<Post> selectAll_AnsweredPost();
//    List<Post> getUserFavorites(User user);
//    List<Post> getUserMatches(User user);
//    List<Post> getUserPost(User user);

    Post save(Post post);
    Post findByPostID(int postID);
    List<Post> findByCorrectlyAnswered(int correctly_answered);
}