package com.backend.Tiendas.services;

import com.backend.Tiendas.models.dto.UserDto;
import com.backend.Tiendas.models.entities.User;
import com.backend.Tiendas.models.request.UserRequest;

import java.util.List;
import java.util.Optional;


public interface UserService {
    
    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);
    Optional<UserDto> update(UserRequest user, Long id);

    void remove(Long id);
}
