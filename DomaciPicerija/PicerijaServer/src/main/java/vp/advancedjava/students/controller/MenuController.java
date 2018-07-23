package vp.advancedjava.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.students.model.Menu;
import vp.advancedjava.students.service.MenuService;

@RestController
public class MenuController {
	
	@Autowired
	private MenuService menuService;
	
	 @GetMapping(value = "api/menu")
	    public Page<Menu> getAll(Pageable pageable){
	    	final Page<Menu> retVal = menuService.findAll(pageable);
	    	return retVal;
	    }
	    
	    @GetMapping(value = "api/menu/{id}")
	    public ResponseEntity<Menu> getMenu(@PathVariable Long id) {
	        Menu menu = menuService.findOne(id);

	        if (menu == null) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

	        return new ResponseEntity<>(menu, HttpStatus.OK);
	    }
	    
	    @PostMapping(value = "api/menu")
	    public ResponseEntity<Menu> create(@RequestBody Menu menu) {
	        final Menu savedMenu = menuService.save(menu);
	        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
	    }

	    @PutMapping(value = "api/menu/{id}")
	    public ResponseEntity<Menu> update(	@PathVariable Long id,
	    									@RequestBody Menu menu) {
	        Menu foundMenu = menuService.findOne(id);
	        if (menu == null) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	        foundMenu.setName(menu.getName());;
	        foundMenu.setPrice(menu.getPrice());;
	        foundMenu.setCategory(menu.getCategory());;
	        
	        Menu savedMenu = menuService.save(foundMenu);
	        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
	    }
	    
	    @SuppressWarnings("rawtypes")
		@DeleteMapping(value = "api/menu/{id}")
	    public ResponseEntity delete(@PathVariable Long id) {
	    	Menu menu = menuService.findOne(id);
	        if (menu != null) {
				menuService.remove(id);
				
				return new ResponseEntity(HttpStatus.OK);
			} 
	        else {
				return new ResponseEntity(HttpStatus.NOT_FOUND);
			}

	    }

	    @RequestMapping(value = "api/menu", params = "menuName")
		public ResponseEntity<List<Menu>> getMenuByName(
				@RequestParam String menuName) {
	    	List<Menu>menues = menuService.filter(menuName);
	    	return new ResponseEntity<>(menues, HttpStatus.OK);
	    	
	    }
}
