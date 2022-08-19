package project.mozanta;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "blog")
public class blog {
	
	@Id   
    private String id;
	private String bid;
	private String creatorid;
    private String creator;
    private String heading;
    private String readme;
    private String content;
    private String time;
    private String like;
    private String user;
    private List<String> likedusers;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBid() {
		return bid;
	}
	public void setBid(String bid) {
		this.bid = bid;
	}
	public String getCreatorid() {
		return creatorid;
	}
	public void setCreatorid(String creatorid) {
		this.creatorid = creatorid;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getReadme() {
		return readme;
	}
	public void setReadme(String readme) {
		this.readme = readme;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getLike() {
		return like;
	}
	public void setLike(String like) {
		this.like = like;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public List<String> getLikedusers() {
		return likedusers;
	}
	public void setLikedusers(List<String> likedusers) {
		this.likedusers = likedusers;
	}
	public blog(String id, String bid, String creatorid, String creator, String heading, String readme, String content,
			String time, String like, String user, List<String> likedusers) {
		super();
		this.id = id;
		this.bid = bid;
		this.creatorid = creatorid;
		this.creator = creator;
		this.heading = heading;
		this.readme = readme;
		this.content = content;
		this.time = time;
		this.like = like;
		this.user = user;
		this.likedusers = likedusers;
	}
	public blog() {
		super();
		// TODO Auto-generated constructor stub
	}
	
    
    
	
    
    
    
    
    
 
}
