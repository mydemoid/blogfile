package project.mozanta;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface blogrepo extends MongoRepository<blog, String>{

	List<blog> findBycreatorid(String creatorid);

	

}
