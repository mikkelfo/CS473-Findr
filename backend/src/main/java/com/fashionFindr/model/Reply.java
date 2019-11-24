package com.fashionFindr.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "replies")
public class Reply {
    @Id
    private String id;
    private int replyID;
    private int commentID;
    private final String username;
    private final String content;

    public Reply(
//            @JsonProperty("replyID") int replyID,
                   @JsonProperty("commentID") int commentID,
                   @JsonProperty("username") String username,
                   @JsonProperty("content") String content) {
        this.username = username;
        this.replyID = 0;
        this.content = content;
        this.commentID = commentID;
    }

    public int getReplyID() {
        return replyID;
    }

    public String getContent() {
        return content;
    }

    public String getUsername(){
        return username;
    }

//    public String getId() {
//        return id;
//    }

    public int getCommentID() {
        return commentID;
    }

    public void setReplyID(int newReplyID){
        this.replyID = newReplyID;
    }
}
