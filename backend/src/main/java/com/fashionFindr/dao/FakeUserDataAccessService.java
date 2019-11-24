//package com.fashionFindr.dao;
//
//import com.fashionFindr.model.Post;
//import com.fashionFindr.model.User;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Repository("fakeDao")
//public class FakeUserDataAccessService implements UserDao{
//    private static List<User> DB = new ArrayList<>();
//
//    @Override
//    public int insertUser(String username, User user) {
//        DB.add(new User(username, user.getPassword(),user.getReputation()));
//        return 1;
//    }
//
//    @Override
//    public int updateReputation(String username, int change_in_reputation) {
//
//        System.out.println("IWASHERE");
//        for (int i = 0; i < DB.size(); i ++){
//            if((DB.get(i).getUsername()).equals(username)){
//                User user = DB.get(i);
//                user.setReputation(user.getReputation() + change_in_reputation);
//                DB.add(i,user);
//                DB.remove(i+1);
//                break;
//            }
//        }
//
//        return 0;
//    }
//
//    @Override
//    public User getUserByUsername(String username) {
//        User user = null;
//        for (int i = 0; i < DB.size(); i ++) {
//            if ((DB.get(i).getUsername()).equals(username)) {
//                user = DB.get(i);
//            }
//        }
//
//        return user;
//    }
//
//    @Override
//    public List<Post> getUserFavorites(User user) {
//        return null;
//    }
//
//    @Override
//    public List<Post> getUserMatches(User user) {
//        return null;
//    }
//
//    @Override
//    public List<Post> getUserPost(User user) {
//        return null;
//    }
//
//    @Override
//    public User getUserInfo(String username) {
//        User user = null;
//        for (int i = 0; i < DB.size(); i ++) {
//            if ((DB.get(i).getUsername()).equals(username)) {
//                user = DB.get(i);
//            }
//        }
//
//        return user;
//    }
//
//    @Override
//    public List<User> selectAllUser() {
//        return DB;
//    }
//}
