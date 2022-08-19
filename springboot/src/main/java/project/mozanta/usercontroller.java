package project.mozanta;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class usercontroller {
	

	
	@Autowired
	private userrepo userrepo;
	@Autowired
	private blogrepo blogrepo;
	
	@PostMapping("/create")
	public void createuser(@RequestBody user user) {
		
		userrepo.insert(user);
	}
	
//	@PostMapping("/delete/(id)")
//    public void deletestudent(@PathVariable String id) {
//		studentrepo.deleteById(id);
//		
//	}

      @GetMapping("/list")
    public  int listuser() {
    	//find and return number of elements in database for user idnumber
	     List<user> data=userrepo.findAll(); 
	     int num=data.size();
	     System.out.println(num);
    	return num;
    }	
      
      
      @PostMapping("/createblog")
  	public void createblog(@RequestBody blog blog) {
  		
  		blogrepo.insert(blog);
  	}
      
      @PostMapping("/checklogin")
      public user checklogin(@RequestBody login login) {
    	 
    	        String mail=login.getMail();
    	        String pw=login.getPw();
//    		System.out.println(	mail);
//    		System.out.println(	pw);
    	    	user value=null;
    		List<user> data=userrepo.findAll();
    		for(int i=0;i<data.size();i++){
    			user a=data.get(i);
    			boolean b=Objects.equals(a.getEmail(),mail);
    			boolean c=Objects.equals(a.getPw(),pw);
    			boolean e=true;
    			if(b==e && c==e) {value=data.get(i); a.setPw(null);System.out.println(a.getPw());break;}
    			else {value=null;}
   			
    			
    		} 
    		System.out.println(value);
    		return value;
    		
    	}
      

      @GetMapping("/bloglist")
      public  List<blog> listblog() {
      	//find and return number of elements in database for user idnumber
  	     List<blog> data=blogrepo.findAll(); 
  	     
      	return data;
      }	
      
      @GetMapping("/mybloglist/{creatorid}")
      public List<blog> getblogBycreatorid(@PathVariable("creatorid") String creatorid) {
    	  List<blog> variable = blogrepo.findBycreatorid(creatorid);
        
          return variable;
       
      }
      
      @DeleteMapping("/deleteblog/{id}")
      public String deleteblog(@PathVariable("id") String id) {
    	  blogrepo.deleteById(id);
		return "deleted successfully";
        
      }
      
      @PutMapping("/updateuser/{id}")
      public ResponseEntity<user> updateuser(@PathVariable("id") String id, @RequestBody user tutorial) {
        Optional<user> tutorialData = userrepo.findById(id);
        if (tutorialData.isPresent()) {
        	user user = tutorialData.get();
        	user.setName(tutorial.getName());
        	user.setEmail(tutorial.getEmail());
        	user.setDob(tutorial.getDob());
        	user.setPw(tutorial.getPw());
        	userrepo.save(user);
          return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
      }
      

      
      @PutMapping("/updateblog/{id}")
      public ResponseEntity<blog> updateblog(@PathVariable("id") String id, @RequestBody blog tutorial) {
        Optional<blog> tutorialData = blogrepo.findById(id);
        if (tutorialData.isPresent()) {
        	blog blog = tutorialData.get();
        	blog.setCreatorid(tutorial.getCreatorid());
        	blog.setCreator(tutorial.getCreator());
        	blog.setHeading(tutorial.getHeading());
        	blog.setReadme(tutorial.getReadme());
        	blog.setContent(tutorial.getContent());
        
          return new ResponseEntity<>(blogrepo.save(blog), HttpStatus.OK);
        } else {
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
      }
      
      @PutMapping("/updatelike/{id}")
      public ResponseEntity<blog> updatelike(@PathVariable("id") String id, @RequestBody blog tutorial) {
        Optional<blog> tutorialData = blogrepo.findById(id);
        if (tutorialData.isPresent()) {
        	blog blog = tutorialData.get();
        	blog.setCreatorid(tutorial.getCreatorid());
        	blog.setCreator(tutorial.getCreator());
        	blog.setHeading(tutorial.getHeading());
        	blog.setReadme(tutorial.getReadme());
        	blog.setContent(tutorial.getContent());
        	List<String> a = new ArrayList<>();
        	a=blog.getLikedusers();
        	a.add(tutorial.getUser());
        	System.out.println(a);
        	blog.setLikedusers(a);
        	int like=Integer.parseInt(tutorial.getLike())+1;
        	blog.setLike(Integer.toString(like));
        System.out.println(blog.getLike());
        
          return new ResponseEntity<>(blogrepo.save(blog), HttpStatus.OK);
        } else {
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
      }
      
      @GetMapping("/checkemail/{email}")
      public String checkemail(@PathVariable("email") String email) {
    	  Optional<user> variable = userrepo.findByemail(email);
    	  String a = null;
    	  if (variable.isPresent()) {
    		   a="mail is already used" ;
    	  }
          return a;
       
      }
      
      
      @GetMapping("/bloglistnumber")
      public  int bloglistnumber() {
      	//find and return number of elements in database for user idnumber
  	     List<blog> data=blogrepo.findAll(); 
  	     int num=data.size();
  	     System.out.println(num);
      	return num;
      }	
      
      
      
      
      
      
      
      

}
