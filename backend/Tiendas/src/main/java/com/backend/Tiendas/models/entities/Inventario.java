package com.backend.Tiendas.models.entities;


import jakarta.persistence.*;

@Entity
@Table(name="inventario")
public class Inventario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProducto;

    private String HAWA;

    private String nombreProducto;

    private Double precioLista;

    private Double descuentoProducto;

    private Integer existencias;


    public Long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public String getHAWA() {
        return HAWA;
    }

    public void setHAWA(String HAWA) {
        this.HAWA = HAWA;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public Double getPrecioLista() {
        return precioLista;
    }

    public void setPrecioLista(Double precioLista) {
        this.precioLista = precioLista;
    }

    public Double getDescuentoProducto() {
        return descuentoProducto;
    }

    public void setDescuentoProducto(Double descuentoProducto) {
        this.descuentoProducto = descuentoProducto;
    }

    public Integer getExistencias() {
        return existencias;
    }

    public void setExistencias(Integer existencias) {
        this.existencias = existencias;
    }
}
