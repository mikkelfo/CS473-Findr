package com.fashionFindr.dao;

import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

public interface UserDao extends MongoRepository<User, String> {
//    int insertUser(String username, User user);
//    int updateReputation (String username, int change_in_reputation);
//    default int insertUser(User user){
//        return insertUser(user.getUsername(), user);
//    }
//    User getUserByUsername(String username);
//    List<Post> getUserFavorites(User user);
//    List<Post> getUserMatches(User user);
//    List<Post> getUserPost(User user);
//    User getUserInfo(String username);
    User findByUsername(String username);
//    User insert(User user);
    User save(User user);



//    List<User> selectAllUser();
}
