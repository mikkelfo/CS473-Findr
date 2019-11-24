package com.fashionFindr.service;

import com.fashionFindr.dao.CommentDao;
import com.fashionFindr.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentDao commentDao;


    @Autowired
    public CommentService(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    public List<Comment> getPostComments(int postID){
        return commentDao.findAllByPostID(postID);
    }

    public void updateOrSaveComment(Comment comment){
        commentDao.save(comment);
    }

    public void create(Comment comment){
        int currentNumberOfComment = commentDao.findAll().size();
        comment.setCommentID(currentNumberOfComment+1);
        commentDao.save(comment);
    }


}
