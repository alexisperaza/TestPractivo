package com.backend.Tiendas.services;

import com.backend.Tiendas.models.entities.Inventario;

import java.util.List;

public interface InventarioService {

    List<Inventario> findAll();

}
