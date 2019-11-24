package com.fashionFindr.api;

import com.fashionFindr.model.Post;
import com.fashionFindr.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/post")
@RestController
public class PostController {
    private final PostService postService;

    @Autowired
//    spring boot injects the actual service into this constructor
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("post")
    public void addPost(@RequestBody Post post){
//        taking the request body sent in and send to the USer and the JSon object turns into an Post
        postService.createPost(post);
    }

    @GetMapping(value = "getPost/{postID}")
    public Post getPost(@PathVariable("postID") int postID){
        return postService.getPost(postID);
    }

    @GetMapping ("getSwiperPosts")
    public List<Post> getSwiperPosts(){
        return postService.getUnansweredPosts();
    }

    @PostMapping(value="updateCorrectlyAnswered/{username}/{postID}/{correctlyAnswered}")
    public void updateCorrectlyAnswered(@PathVariable("postID") int postID, @PathVariable("username") String username,
                                        @PathVariable("correctlyAnswered") int correctlyAnswered){
        postService.updateCorrectlyAnswered(username, postID, correctlyAnswered);
    }

    @GetMapping ("getExplorePosts")
    public List<Post> getExplorePosts(){
        return postService.getAllPosts();
    }


}
