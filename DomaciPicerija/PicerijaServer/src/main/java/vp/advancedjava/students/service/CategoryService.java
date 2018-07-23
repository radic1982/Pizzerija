package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Category;
import vp.advancedjava.students.repository.CategoryRepository;

@Component
public class CategoryService {
	@Autowired 
	private CategoryRepository categoryRepository;
	
	public List<Category> findAll() {
		return categoryRepository.findAll();
	}

}
