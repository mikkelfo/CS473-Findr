package com.fashionFindr.api;

import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import com.fashionFindr.service.UserService;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final UserService userService;

    @Autowired
//    spring boot injects the actual service into this constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("user")
    public void addUser(@RequestBody User user){
//        taking the request body sent in and send to the USer and the JSon object turns into an User
        System.out.println(user.getPassword());
        if (getUserInfo(user.getUsername()) == null){
            userService.saveOrUpdateUser(user);
        } else {
            System.out.println("user alr exists");
        }

    }

//
//    @GetMapping
//    public List<User> getAllUser(){
//        return userService.getAllUser();
//    }
//
//    @PostMapping("updateReputation")
//    public void updateReputation(@RequestParam(value = "username") String username, @RequestParam(value = "change_in_reputation")int change_in_reputation){
//        System.out.println("user service");
//        System.out.println(username);
//        userService.updateReputation(username, change_in_reputation);
//    }
//
//    @GetMapping("getUserFavorites")
//    public List<Post> getUserFavorites(@RequestParam(value = "username") String username){
//        User user = userService.getUserInfo(username);
//        return  userService.getUserFavorites(user);
//    }
//
//    @GetMapping("getUserMatches")
//    public List<Post> getUserMatches(@RequestParam(value = "username") String username){
//        User user = userService.getUserInfo(username);
//        return userService.getUserMatches(user);
//    }
//
//    @GetMapping("getUserPost")
//    public List<Post> getUserPost(@RequestParam(value = "username") String username){
//        User user = userService.getUserInfo(username);
//        return userService.getUserPost(user);
//    }

    @GetMapping(value = "/getUserInfo/{username}")
    public User getUserInfo(@PathVariable("username") String username){
        System.out.println("getuserinfo user controller");
        return userService.getUserInfo(username);

    }

    @GetMapping(value = "/getUserFavorites/{username}")
    public List<Post> getUserFavorites(@PathVariable("username") String username){
        return userService.getUserFavorites(username);
    }

    @PostMapping(value = "/addFavorites/{username}/{postID}")
    public void addFavorites(@PathVariable("username") String username, @PathVariable("postID") int postID){
        userService.addUserFavorites(username, postID);
    }

    @GetMapping(value = "/getUserMatches/{username}")
    public List<Post> getUserMatches(@PathVariable("username") String username){
        return userService.getUserMatches(username);
    }

    @GetMapping(value = "/getUserPosts/{username}")
    public List<Post> getUserPosts(@PathVariable("username") String username){
        return userService.getUserPosts(username);
    }

}
