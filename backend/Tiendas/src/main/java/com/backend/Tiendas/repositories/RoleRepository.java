package com.backend.Tiendas.repositories;

import java.util.Optional;

import com.backend.Tiendas.models.entities.Role;
import org.springframework.data.repository.CrudRepository;


public interface RoleRepository
        extends CrudRepository<Role, Long> {
        Optional<Role> findByName(String name);
}
