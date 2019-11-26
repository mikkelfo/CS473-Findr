package com.fashionFindr.dao;

import com.fashionFindr.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDao extends MongoRepository<User, String> {

    User findByUsername(String username);
//    User insert(User user);
    User save(User user);


}
