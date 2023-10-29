import React from "react";
import Header from "../Header/Header";
import style from "./App.module.scss"
import Home from "../Pages/Home";
import {Routes, Route} from "react-router-dom";
import Notfound from "../Pages/Notfound";
import Cart from "../Pages/Cart/Cart";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </div>
    );
}

export default App;
