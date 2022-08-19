package project.mozanta;

import org.springframework.data.annotation.Id;

public class login {
	
	
   
    private String mail;
    
    private String pw;

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public login(String mail, String pw) {
		super();
		this.mail = mail;
		this.pw = pw;
	}

	
}
