package com.fashionFindr.api;

import com.fashionFindr.model.Post;
import com.fashionFindr.model.User;
import com.fashionFindr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/user")
@RestController
public class UserController {
    private final UserService userService;
    private User currentUser;

    @Autowired
//    spring boot injects the actual service into this constructor
    public UserController(UserService userService) {
        this.userService = userService;
        this.currentUser = null;
    }

    @GetMapping("login/{username}/{password}")
    public User handleLogin(@PathVariable("username") String username, @PathVariable("password") String password){
        currentUser = userService.handleLogin(username, password);
        return currentUser;
    }

//    @GetMapping("currentUser")
//    public User getCurrentUser(){
//        return currentUser;
//    }

    @GetMapping("currentUser")
    public String getCurrentUser(){
        return currentUser.getUsername();
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

    @GetMapping(value = "getUserMatches/{username}")
    public List<Post> getUserMatches(@PathVariable("username") String username){
        return userService.getUserMatches(username);
    }

    @GetMapping(value = "getUserPosts/{username}")
    public List<Post> getUserPosts(@PathVariable("username") String username){
        return userService.getUserPosts(username);
    }
}
