package com.fashionFindr.dao;

import com.fashionFindr.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CommentDao extends MongoRepository<Comment, String> {
//    List<Comment> getComments(String postID);

//    @Override
    List<Comment> findAllByPostID(int postID);
}
