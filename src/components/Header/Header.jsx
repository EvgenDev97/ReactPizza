import React from "react";
import s from "./Header.module.scss"
import { Link } from "react-router-dom";
const Header = () => {
    return <>
        <div className={`flex  justify-between items-center flex-wrap ${s.padding}`}>
            <Link to={"/"} className="flex flex-wrap gap-4 items-center">
                <div>
                    <img className={s.logo} src={require('../assets/logopizza.jpg')} alt="logo pizza"/>
                </div>
                <div>
                    <b>Pizza Project</b>
                    <h1>the most delicious pizza in the world</h1>
                </div>
            </Link>
            <Link to={`/cart`} className="bg-amber-500 h-11 w-36 flex flex-wrap gap-5 items-center  justify-center rounded-3xl">
                <span>money</span>
                <span> <img src={require('../assets/stick.png')} alt=""/></span>
                <div>
                    <button >
                        <img src={require('../assets/cart.png')} alt="card"/>
                        <span>c</span>
                    </button>
                </div>
            </Link>
        </div>
    </>
}

export default Header