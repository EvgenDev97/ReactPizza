export const fetchPizza =(categoryId, sortType, sortOrder)=>{
     return fetch(`https://65229ac5f43b17938414af92.mockapi.io/items?${categoryId>0 ? `category=${categoryId}` :''
    }&sortBy=${sortType}&order=${sortOrder}`)
        .then((res)=>{
            return res.json()
        })
}