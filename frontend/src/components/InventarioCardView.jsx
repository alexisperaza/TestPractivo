import { useNavigate } from "react-router-dom";

export const InventarioCardView = ({ id,handler,hawa, descuentoProducto, name, cantidad, price }) => {

    const navigate = useNavigate();

    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
        navigate('/cart');
    }
    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Hawa: {hawa}</p>
                    <div className="row">
                        <div className="col-sm">
                                Precio ${price}
                        </div>                        
                        <div className="col-sm">
                                Descuento {descuentoProducto}
                        </div>
                    </div>
                    <p className="card-text">Existencia: {cantidad}</p>

                    <button className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, cantidad, price })}>Agregar</button>
                </div>
            </div>
        </>
    )
}
