package com.fashionFindr.api;


import com.fashionFindr.model.Comment;
import com.fashionFindr.service.CommentService;
import com.fashionFindr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/comment")
@RestController
public class CommentController {
    private final CommentService commentService;
    private final UserService userService;

    @Autowired
    public CommentController(CommentService commentService, UserService userService) {
        this.commentService = commentService;
        this.userService = userService;
    }

    @GetMapping(value = "/getPostComment/{postID}")
    public List<Comment> getPostComment(@PathVariable int postID){
        return commentService.getPostComments(postID);
    }

    @PostMapping("comment")
    public void addComment(@RequestBody Comment comment){
        commentService.create(comment);
        userService.addUserMatches(comment.getUsername(), comment.getPostID());
    }



}
