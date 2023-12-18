package com.backend.Tiendas.repositories;

import java.util.Optional;

import com.backend.Tiendas.models.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository
        extends CrudRepository<User, Long> {

        Optional<User> findByUsername(String username);

        @Query("select u from User u where u.username=?1")
        Optional<User> getUserByUsername(String username);
}
