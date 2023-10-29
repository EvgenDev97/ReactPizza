import React, {useState} from "react";
import styles from "./Navbar.module.scss"

const Navbar = ({categoryId, onClickCategory}) => {
    const navigation = ["All", "Meat", "Vegan", "Grill", "Spicy", "Closed"]
    const navStyle = `w-20 h-10 bg-orange-300 flex items-center
     justify-center rounded-3xl hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-600 cursor-pointer`
    return <div>
        <div className={`flex flex-wrap justify-between pb-24`}>
            <div>
                <ul className={`flex flex-wrap gap-5`}>
                    {navigation.map((item,index)=>{
                        return <li key={index} className={`${navStyle} ${categoryId === index? styles.active : ""} `}
                                   onClick={()=> onClickCategory(index)}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}

export default Navbar