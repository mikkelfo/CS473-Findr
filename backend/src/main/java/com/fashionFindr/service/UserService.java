package com.fashionFindr.service;

import com.fashionFindr.dao.PostDao;
import com.fashionFindr.dao.UserDao;
import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserDao userDao;
    private final PostDao postDao;

    @Autowired
//    change the qualifieer to correct name when database is connected
    public UserService(UserDao userDao, PostDao postDao) {
        this.userDao = userDao;
        this.postDao = postDao;
    }

    public User addUser(User user){
//        return userDao.insertUser(user);
        System.out.println("insert user service");
        return userDao.save(user);
    }

    public void addUserPosts(String username, int postID){

        User user = userDao.findByUsername(username);
        user.setUserPosts(postID);
        userDao.save(user);
    }



    public void saveOrUpdateUser(User user){
        userDao.save(user);
    }
//
//    public List<User> getAllUser(){
//        return userDao.selectAllUser();
//    }
//
//    public int updateReputation(String username, int change_in_reputation){
//        return userDao.updateReputation(username, change_in_reputation);
//    }
//
//    public User getUserFromUsername(String username){
//        System.out.println("getting user with username");
//        return userDao.getUserByUsername(username);
//    }
//
    public void addUserFavorites(String username, int postID){
        User user = userDao.findByUsername(username);
        user.setUserFavorites(postID);
        userDao.save(user);
    }

    public void addUserMatches(String username, int postID){
        User user = userDao.findByUsername(username);
        user.setUserMatches(postID);
        userDao.save(user);
    }
//
//    public List<Post> getUserMatches(User user){
//        return userDao.getUserMatches(user);
//    }
//
//    public List<Post> getUserPost(User user){
//        return userDao.getUserPost(user);
//    }

    public User getUserInfo(String username){
//        return userDao.getUserInfo(username);
        System.out.println("getuserinfo user service");

        return userDao.findByUsername(username);
    }

    public List<Post> getUserFavorites(String username){
        User user  = getUserInfo(username);
        List<Integer> userFavorites = user.getUserFavorites();
        List<Post> userFavPosts = new ArrayList<Post>();
        for (int i = 0; i < userFavorites.size(); i++){
            userFavPosts.add(postDao.findByPostID(userFavorites.get(i)));
        }
        return userFavPosts;
    }

    public  List<Post> getUserMatches(String username){
        User user  = getUserInfo(username);
        List<Integer> userMatches = user.getUserMatches();
        List<Post> userMatchesPosts = new ArrayList<Post>();
        for (int i = 0; i < userMatches.size(); i++){
            userMatchesPosts.add(postDao.findByPostID(userMatches.get(i)));
        }
        return userMatchesPosts;
    }

    public  List<Post> getUserPosts(String username){
        User user  = getUserInfo(username);
        List<Integer> userPosts = user.getUserPosts();
        List<Post> userPostsPosts = new ArrayList<Post>();
        for (int i = 0; i < userPosts.size(); i++){
            userPostsPosts.add(postDao.findByPostID(userPosts.get(i)));
        }
        return userPostsPosts;
    }
}
