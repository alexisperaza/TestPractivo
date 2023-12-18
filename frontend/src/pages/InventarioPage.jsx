import { useContext, useEffect, useState } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { AuthContext } from "../auth/context/AuthContext";
import { findAll } from "../services/inventarioService";
import { InventarioCardView } from "../components/InventarioCardView";

export const InventarioPage = () => {

    const [products, setProducts] = useState([]);

    const { login } = useContext(AuthContext);

    const getProductos = async () =>{
        const prods = await findAll();
        console.log(prods);
        setProducts(prods);
    }

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <>


            <div className="container my-4">
                <h2>Inventario</h2>
                <div className="row">
                    {products.map(({idProducto,hawa, descuentoProducto,nombreProducto,existencias,precioLista}) => (
                        <div className="col-4 my-2"
                            key={idProducto}>
                            <InventarioCardView
                                id={idProducto}
                                hawa={hawa}
                                descuentoProducto={descuentoProducto}
                                name={nombreProducto}
                                cantidad={existencias}
                                price={precioLista}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}