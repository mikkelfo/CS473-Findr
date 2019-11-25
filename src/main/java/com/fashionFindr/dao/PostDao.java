package com.fashionFindr.dao;

import com.fashionFindr.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostDao extends MongoRepository<Post, String> {


    Post save(Post post);
    Post findByPostID(int postID);
    List<Post> findByCorrectlyAnswered(int correctly_answered);
}