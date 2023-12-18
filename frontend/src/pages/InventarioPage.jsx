import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { AuthContext } from "../auth/context/AuthContext";
import { findAll } from "../services/inventarioService";

export const InventarioPage = () => {

    const [products, setProducts] = useState([]);

    const { login } = useContext(AuthContext);

    const getProductos = async () =>{
        const prods = await findAll();
        setProducts(prods);
        setIsLoading(false);
    }

    useEffect(() => {
        getProductos();
    }, []);
    
    return (
        <>


            <div className="container my-4">
                <h2>Inventario</h2>
                <div className="row">
                    <div className="col">
                        {(visibleForm || !login.isAdmin) || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nueva Camioneta
                        </button>}

                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay camionetas en el inventario!</div>
                                : <UsersList />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}