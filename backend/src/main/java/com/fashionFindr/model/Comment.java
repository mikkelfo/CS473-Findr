package com.fashionFindr.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "comments")
public class Comment {
    @Id
    private String id;
    private int commentID;
    private final int postID;
    private final String username;
    private final String content;
    private int chosenByOP;
    private List<Reply> listOfReply;
    private int upvote;

    public Comment(
//            @JsonProperty("commentID") String commentID,
                   @JsonProperty("postID") int postID,
                   @JsonProperty("username") String username,
                   @JsonProperty("content") String content
//                   @JsonProperty("chosenByOP") int chosenByOP
//                   @JsonProperty("listOfReply") List<Reply> listOfReply
    ) {
        this.commentID = 0;
        this.username = username;
        this.postID = postID;
        this.content = content;
        this.chosenByOP = 0;
        this.listOfReply = new ArrayList<Reply>();
        this.upvote = 0;
//        empty list when comment is first created
    }

    public int getPostID() {
        return postID;
    }

    public String getContent() {
        return content;
    }

    public int getChosenByOP() {
        return chosenByOP;
    }

    public List<Reply> getListOfReply() {
        return listOfReply;
    }

    public int getCommentID() {
        return commentID;
    }

    public String getUsername(){
        return username;
    }

    public void setCommentID(int newCommentID){
        this.commentID = newCommentID;
    }

    public int getUpvote() {
        return upvote;
    }

    public void setUpvote(int newUpvote){
        upvote = newUpvote;
    }
}
