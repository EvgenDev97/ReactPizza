import React from "react";
import styles from "./cart.module.scss"

const minus = require('../../assets/minus.png')
const plus = require('../../assets/plus.png')
const del = require('../../assets/delete.png')
const Cart = () => {
    return <div className={styles.container}>
        <div className={styles.flex}>
            <h1>CART</h1>
            <button>Clear cart</button>
        </div>
        <div className={`flex flex-wrap gap-x-32`}>
            <div >
                <img src="" alt=""/>
                <h1>describe</h1>
            </div>
            <div className={`flex flex-wrap gap-x-6`}>
                <button>
                    <img src={minus} alt="-"/>
                </button>
                <h1>counter</h1>
                <button>
                    <img src={plus} alt="+"/>
                </button>
            </div>
            <div className={`flex flex-wrap gap-x-6`}>
                <h1>price</h1>
                <button>
                    <img src={del} alt="delete"/>
                </button>
            </div>
        </div>
        <div>

        </div>
    </div>
}

export default Cart