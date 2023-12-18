import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { InventarioContext } from "../context/InventarioContext";
import { AuthContext } from "../auth/context/AuthContext";

export const InventarioPage = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers,
    } = useContext(InventarioContext);

    const { login } = useContext(AuthContext);

    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <>

            {!visibleForm ||
                <UserModalForm />}
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