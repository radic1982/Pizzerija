package vp.advancedjava.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Category;

@Component
public interface CategoryRepository extends JpaRepository<Category, Long>  {

}
