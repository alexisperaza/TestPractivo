import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { UserProvider } from "../context/UserProvider"
import { RegisterPage } from "../pages/RegisterPage"
import { InventarioPage } from "../pages/InventarioPage"
import { UsersPage } from "../pages/UsersPage"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"
import { CartPage } from "../pages/CartPage"
import { useItemsCart } from "../auth/hooks/useItemsCart"

export const UserRoutes = () => {
    const { login } = useContext(AuthContext);
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="inventario" element={<InventarioPage handler={handlerAddProductCart}  />} />

                    {!login.isAdmin || <>
                        <Route path="cart" element={(
                    cartItems?.length <= 0 ?
                    <div className="alert alert-warning">No hay productos en el carrito de pedidos!</div>
                    :
                        (
                        <div className="my-4 w-50">
                            <CartPage items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                        )
                    )} />  
                        <Route path="users" element={<UsersPage />} />
                        <Route path="users/register" element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>
                    }
                    <Route path="/" element={<Navigate to="/Inventario" />} />
                </Routes>
            </UserProvider>
        </>
    )
}