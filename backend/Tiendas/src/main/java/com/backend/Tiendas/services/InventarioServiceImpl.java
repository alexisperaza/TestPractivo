package com.backend.Tiendas.services;

import com.backend.Tiendas.models.entities.Inventario;
import com.backend.Tiendas.repositories.InventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class InventarioServiceImpl implements InventarioService{


    @Autowired
    private InventarioRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Inventario> findAll() {
        return (List<Inventario>) repository.findAll();
    }
}
