package com.fashionFindr.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;


@Document(collection = "posts")
public class Post {
//    @Id
@Id
private String id;
    private int postID;
//    private User user;
    private final String title;
    private final String imageSrc;
    private final String description;
    private int correctlyAnswered;
    private final String username;
    private List<Integer> commentIDs;

    public Post(
                @JsonProperty("username") String username,
                @JsonProperty("title")String title,
                @JsonProperty("imageSrc") String imageSrc,
                @JsonProperty("description") String description
//                @JsonProperty("correctlyAnswered") int correctlyAnswered
    ) {
        this.postID = 0;
//        this.user = userService.getUserFromUsername(username);
        this.title = title;
        this.imageSrc = imageSrc;
        this.description = description;
        this.correctlyAnswered = 0;
        this.username = username;
        this.commentIDs = new ArrayList<>();
//        System.out.println("second post constructor");
    }

//    public User getUser() {
//        return user;
//    }

    public String getImageSrc() {
        return imageSrc;
    }

    public String getDescription() {
        return description;
    }

    public int getCorrectlyAnswered() {
        return correctlyAnswered;
    }

    public int getPostID() {
        return postID;
    }

    public String getTitle() {
        return title;
    }

    public String getUsername() {
        return username;
    }
    public void setPostID(int new_post_ID){
        postID = new_post_ID;
    }

    public void setCommentIDs(List<Integer> commentIDs) {
        this.commentIDs = commentIDs;
    }

    public List<Integer> getCommentIDs(){
        return this.commentIDs;
    }

    public void setCorrectlyAnswered(int newCorrectlyAnswered){
        correctlyAnswered = newCorrectlyAnswered;
    }
}
