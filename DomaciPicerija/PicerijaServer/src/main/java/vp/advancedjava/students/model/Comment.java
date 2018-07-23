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
public class Comment {

	@Id
	@GeneratedValue
	private long id;
	
	//@ManyToOne
	//public SecurityUser author;
	
	private String authorName; 
	
	private String content;
	
	@ManyToOne
	private Menu menu;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	private Set<Comment> subComments = new HashSet<Comment>();

	public Comment() {
		super();
	}

	public Comment(long id, String authorName, String content, Menu menu) {
		super();
		this.id = id;
		this.authorName = authorName;
		this.content = content;
		this.menu = menu;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Set<Comment> getSubComments() {
		return subComments;
	}

	public void setSubComments(Set<Comment> subComments) {
		this.subComments = subComments;
	}
	
	
	
	
}
