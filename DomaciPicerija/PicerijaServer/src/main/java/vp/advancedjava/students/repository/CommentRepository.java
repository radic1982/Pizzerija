package vp.advancedjava.students.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Comment;

@Component
public interface CommentRepository extends JpaRepository<Comment, Long>{
	List<Comment> findByMenuId(Long id);

}
