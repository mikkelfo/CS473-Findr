package com.fashionFindr.dao;

import com.fashionFindr.model.Reply;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReplyDao extends MongoRepository<Reply, String> {
    List<Reply> findByCommentID(int commentID);

}
