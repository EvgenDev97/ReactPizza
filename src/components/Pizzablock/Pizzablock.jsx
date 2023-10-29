import React, {useState} from "react";
import styles from "./Pizzablock.module.scss"

const typeNames = ["thin", "traditional"]
const Pizzablock = (props) => {

    const {id, imageUrl, title, types, sizes, price, category, rating} = props
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    return <div>
        <div className={`flex w-60 items-center justify-center pb-1.5`}>
            <img src={imageUrl} alt="pizza sort"/>
        </div>
        <div className={`flex w-60 items-center justify-center pb-1.5`}>
            <b>{title}</b>
        </div>
        <div className={` bg-slate-200 w-60 rounded-3xl items-center justify-center mb-3.5`}>
            <div className={`flex gap-3 items-center justify-center pb-1.5`}>
                {/*unic key for react*/}
                {types.map((typeIndex) => <button key={`button${id}_type${typeIndex}`}
                                                  onClick={() => setActiveType(typeIndex)}
                                                  className={`bg-slate-300 rounded-xl w-24
                     ${activeType === typeIndex ? styles.active : ""}`}>
                    {typeNames[typeIndex]}
                </button>)}
            </div>
            <div className={`flex gap-3 items-center justify-center`}>
                {sizes.map((size, i) => <button key={`button${id}_size${size}`} onClick={() => setActiveSize(i)}
                                                className={`bg-slate-300 rounded-xl w-24
                                              ${activeSize === i ? styles.active : ""}`}>
                    {size} sm
                </button>)}
            </div>
        </div>
        <div className={`w-60  flex justify-between`}>
            <span>price: {price}$</span>
            <button
                className={`border-amber-400 border-2 h-8 w-36 flex flex-wrap gap-5 items-center  justify-center rounded-xl`}>
                Add
                <span className={`bg-orange-600 rounded-xl w-6 h-5.5 `}>0</span>
            </button>
        </div>
    </div>

}

export default Pizzablock