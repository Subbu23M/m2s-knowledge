import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Error from "../pages/Error";

const NavBar = () =>{
    return(
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/about'
                    element={<About/>}
                />
                <Route
                    path='/products'
                    element={<Products/>}
                />
                <Route
                    path='*'
                    element={<Error/>}
                />
            </Routes>
        </>
    )
}

export default NavBar;