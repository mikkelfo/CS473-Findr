package com.fashionFindr.service;

import com.fashionFindr.dao.ReplyDao;
import com.fashionFindr.model.Reply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyService {
    private  final ReplyDao replyDao;

    @Autowired
    public ReplyService(ReplyDao replyDao) {
        this.replyDao = replyDao;
    }

    public Reply createReply(Reply reply){
        int current_number_of_replies = replyDao.findAll().size();
        reply.setReplyID(current_number_of_replies+1);
        return replyDao.save(reply);
    }

    public List<Reply> getCommentReplies(int commentID){
        return replyDao.findByCommentID(commentID);
    }
}
