package com.fashionFindr.api;


import com.fashionFindr.model.Reply;
import com.fashionFindr.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/reply")
@RestController
public class ReplyController {
    private final ReplyService replyService;

    @Autowired
    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    @PostMapping("reply")
    public void addReply(@RequestBody Reply reply){
        replyService.createReply(reply);
    }

    @GetMapping(value = "/getCommentReplies/{commentID}")
    public List<Reply> getCommmentReplies(@PathVariable("commentID") int commentID){
        return replyService.getCommentReplies(commentID);
    }

}
