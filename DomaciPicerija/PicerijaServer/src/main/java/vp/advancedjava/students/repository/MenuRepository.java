package vp.advancedjava.students.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Menu;

@Component
public interface MenuRepository extends JpaRepository<Menu, Long> {
	
	@Query("SELECT m FROM Menu m WHERE m.category.name LIKE %:menuName%")
	List<Menu>filter( @Param("menuName") String menuName);

}
