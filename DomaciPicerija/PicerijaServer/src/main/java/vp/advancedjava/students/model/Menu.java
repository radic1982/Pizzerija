package vp.advancedjava.students.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity
public class Menu {
	
	@Id
	@GeneratedValue
	private Long id;

	private String name;
	
	
	private double price;
	
	@ManyToOne(fetch = FetchType.EAGER) 
	private Category category;
	
	//@OneToMany(mappedBy = "menu", fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
	//private Set<Comment> comments = new HashSet<Comment>();

	public Menu() {
		super();
	}

	public Menu(Long id, String name, double price, Category category) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	/*public Set<Comment> getComments() {
		return comments;
	}

	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}*/
	
	
	

}
