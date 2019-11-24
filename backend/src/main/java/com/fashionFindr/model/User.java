package com.fashionFindr.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Document(collection="users")
public class User {
    @Id
    private String id;
    private final String username;
    private final String password;
    private int reputation;
    List<Integer> userFavorites;
    List<Integer> userMatches;
    List<Integer> userPosts;

    public User(@JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty ("reputation") int reputation) {
        this.username = username;
        this.password = password;
//        empty list when user is first created
        this.reputation = reputation;
        this.userFavorites = new ArrayList();
        this.userMatches = new ArrayList();
        this.userPosts = new ArrayList();
    }

    public String getUsername() {
        return username;
    }

    public String getPassword(){
        return password;
    }

    public int getReputation() {
        return reputation;
    }

    public List<Integer> getUserFavorites() {
        return userFavorites;
    }

    public List<Integer> getUserMatches() {
        return userMatches;
    }

    public List<Integer> getUserPosts() {
        return userPosts;
    }

    public void setReputation(int new_reputation){
        reputation = new_reputation;
    }

    public void setUserFavorites(int postID){
        userFavorites.add(postID);
    }
    public void setUserMatches(int postID){
        userMatches.add(postID);
    }
    public void setUserPosts(int postID){
        userPosts.add(postID);
    }
}
