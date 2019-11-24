//package com.fashionFindr.dao;
//
//import com.fashionFindr.model.Post;
//import com.fashionFindr.model.User;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Repository("dummyPostDao")
//public class DummyPostDataAccessService implements PostDao{
//    @Override
//    public int createPost(String post_ID, String username, String title, String imageSrc, String description, int correctly_answered) {
//        return 0;
//    }
//
//    @Override
//    public int createPost(String post_ID, User user, String title, String imageSrc, String description, int correctly_answered) {
//        return 0;
//    }
//
//    @Override
//    public List<Post> getUnansweredPosts() {
//        return null;
//    }
//
//    @Override
//    public List<Post> getTrendingPosts() {
//        return null;
//    }
//
//    @Override
//    public Post getPostInfo(String postID) {
//        return null;
//    }
////    private static List<Post> DB = new ArrayList<>();
////
////
////    @Override
////    public int createPost(String post_ID, String email, String picture, String description, int answer_status) {
////        DB.add(new Post(post_ID, email, title, picture, description, answer_status));
////        return 1;
////    }
////
////    @Override
////    public int updateAnswer_Status(String post_ID, int answer_status) {
////
////        return 1;
////    }
////
////    @Override
////    public List<Post> selectAllPost() {
////        return null;
////    }
////
////    @Override
////    public List<Post> selectAll_UnansweredPost() {
////        return null;
////    }
////
////    @Override
////    public List<Post> selectAll_AnsweredPost() {
////        return null;
////    }
////
//}
