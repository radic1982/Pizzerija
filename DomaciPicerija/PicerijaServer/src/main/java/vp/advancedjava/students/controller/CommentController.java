package vp.advancedjava.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.students.model.Comment;
import vp.advancedjava.students.service.CommentService;

@RestController
public class CommentController {

	@Autowired
	CommentService commentService;
	
	@GetMapping(value = "api/comments")
    public ResponseEntity< List<Comment>> getAll(@RequestParam(required = true, defaultValue = "0") Long menuId){
    	 List<Comment> retVal = commentService.findByMenuId(menuId);
    	return new ResponseEntity<>(retVal, HttpStatus.OK);
    }
	
	@GetMapping(value = "api/comments/{id}")
    public ResponseEntity<Comment> getComment(@PathVariable Long id) {
        Comment comment = commentService.findOne(id);

        if (comment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
	
	@PostMapping(value = "api/comments")
	public ResponseEntity<Comment> create(@RequestBody Comment comment) {
        final Comment savedComment = commentService.save(comment);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

}
