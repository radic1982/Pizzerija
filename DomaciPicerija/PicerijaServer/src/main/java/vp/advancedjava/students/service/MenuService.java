package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Menu;
import vp.advancedjava.students.repository.MenuRepository;

@Component
public class MenuService {
	
	@Autowired
	MenuRepository menuRepository;
	
	public Page<Menu> findAll(Pageable page) {
		return menuRepository.findAll(page);
	}

	public Menu findOne(Long id) {
		return menuRepository.findOne(id);
	}

	public Menu save(Menu menu) {
		return menuRepository.save(menu);
	}

	public void remove(Long id) {
		menuRepository.delete(id);
	}

	public List<Menu>filter(String menuName){
		return menuRepository.filter(menuName);
	}
}
