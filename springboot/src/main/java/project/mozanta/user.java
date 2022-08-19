package project.mozanta;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class user {
	
	@Id
    private String id;
   
    private String name;
    
    private String email;
   
	private String dob;
   
	private String pw;
	
	private String access;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getAccess() {
		return access;
	}

	public void setAccess(String access) {
		this.access = access;
	}

	public user() {
		super();
		// TODO Auto-generated constructor stub
	}

	public user(String id, String name, String email, String dob, String pw, String access) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.dob = dob;
		this.pw = pw;
		this.access = access;
	}

	
	

}
