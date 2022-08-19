package project.mozanta;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userrepo extends MongoRepository<user, String>{


	Optional<user> findByemail(String email);

}
