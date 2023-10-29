import React, {useState} from "react";

const Sort = ({onChange, value, property})=>{
    const onSelectChange = (event)=>{
        onChange(event.target.value)
    }
    return <>
        <select onChange={onSelectChange} value={value} name="" id="">
            {property.map((item)=> <option key={item.sortProperty} value={item.sortProperty}>{item.name}</option>)}
        </select>
    </>
}

export  default  Sort