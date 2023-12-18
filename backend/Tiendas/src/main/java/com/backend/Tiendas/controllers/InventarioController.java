package com.backend.Tiendas.controllers;

import com.backend.Tiendas.models.entities.Inventario;
import com.backend.Tiendas.services.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class InventarioController {

    @Autowired
    private InventarioService service;

    @GetMapping("/inventario")
    public List<Inventario> list() {
        return service.findAll();
    }
}