package com.backend.Tiendas.repositories;
import com.backend.Tiendas.models.entities.Product;
import org.springframework.data.repository.CrudRepository;


public interface ProductRepository extends CrudRepository<Product, Long> {



}
