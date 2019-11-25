package com.fashionFindr.api;


import com.fashionFindr.model.Comment;
import com.fashionFindr.service.CommentService;
import com.fashionFindr.service.PostService;
import com.fashionFindr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/comment")
@RestController
public class CommentController {
    private final CommentService commentService;
    private final UserService userService;
    private final PostService postService;

    @Autowired
    public CommentController(CommentService commentService, UserService userService, PostService postService) {
        this.commentService = commentService;
        this.userService = userService;
        this.postService = postService;
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

    @PostMapping("upvoteComment/{commentID}")
    public void upvoteComment(@PathVariable(value = "commentID") int commentID){
        Comment comment = commentService.getCommentByID(commentID);
        comment.setUpvote(comment.getUpvote()+1);
        commentService.updateOrSaveComment(comment);
    }

    @PostMapping("chooseCommentAsCorrectAnswer/{commentID}/{username}/{postID}/{correctlyAnswered}")
    public void chooseCommentAsCorrectAnswer(@PathVariable("commentID") int commentID,
                                             @PathVariable("postID") int postID,
                                             @PathVariable("username") String username,
                                             @PathVariable("correctlyAnswered") int correctlyAnswered){
        postService.updateCorrectlyAnswered(username, postID, correctlyAnswered);
        commentService.updateChosenByOP(commentID);
    }


}
