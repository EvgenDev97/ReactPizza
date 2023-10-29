import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import style from "../App/App.module.scss";
import Skeleton from "../Pizzablock/PizzablockSkeleton";
import Pizzablock from "../Pizzablock/Pizzablock";
import Sort from "../Sort/Sort";
import {fetchPizza} from "../../API";

const property = [
    {
        name: "priceAsc",
        sortProperty: "price|asc",

    },
    {
        name: "priceDesc",
        sortProperty: "price|desc",

    },
    {
        name: "ratingAsc",
        sortProperty: "rating|asc"
    },
    {
        name: "ratingDesc",
        sortProperty: "rating|desc"
    }]
const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)

    const [sortArgs, setSortArgs] = useState("price|asc")
    const onClickCategory = (n) => {
        setCategoryId(n)
    }
    useEffect(() => {
        setIsLoading(true)
        const [sortType,sortOrder ] = sortArgs.split('|')
        fetchPizza(categoryId,sortType, sortOrder)
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            })
    }, [categoryId, sortArgs]);

    return <>
        <div className={`flex gap-16`}>
            <Navbar categoryId={categoryId} onClickCategory={onClickCategory}/>
            <Sort onChange={setSortArgs} value={sortArgs} property={property}/>
        </div>
        <div className={style.grid}>
            {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                : items.map((obj) => <Pizzablock{...obj} key={obj.id}/>)}
        </div>
    </>

}
export default Home