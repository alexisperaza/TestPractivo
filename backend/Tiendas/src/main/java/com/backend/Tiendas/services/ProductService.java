package com.backend.Tiendas.services;
import com.backend.Tiendas.models.entities.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

}
