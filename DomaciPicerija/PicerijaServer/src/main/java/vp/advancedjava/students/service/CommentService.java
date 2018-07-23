package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Comment;
import vp.advancedjava.students.repository.CommentRepository;

@Component
public class CommentService {

	@Autowired
	CommentRepository commentRepository;
	
	public List<Comment> findAll() {
		return commentRepository.findAll();
	}

	public Comment findOne(Long id) {
		return commentRepository.findOne(id);
	}

	public Comment save(Comment comment) {
		return commentRepository.save(comment);
	}
	
	public List<Comment> findByMenuId(Long id) {
		return commentRepository.findByMenuId(id);
	}

}
