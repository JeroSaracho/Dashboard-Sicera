import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';

function ContentRowMovies(){

    const [products, setProducts] = useState([]);
    const endPointProducts = "http://localhost:3000/products/api/sidras"
    
    const [users, setUsers] = useState([]);
    const endPointUsers = "http://localhost:3000/users/api/allusers"

    useEffect(()=> {
        
        fetch(endPointProducts)
        .then(res => res.json())
        .then(dataProducts => {
            
            setProducts({
                title: 'Total de productos',
                color: 'primary', 
                cuantity: dataProducts.response.total,
                icon: 'fa-clipboard-list'})
            
        })
        .catch(err => console.log(err))

    }, [])


    useEffect(()=> {
        
        fetch(endPointUsers)
        .then(res => res.json())
        .then(dataUsers => {
            
            setUsers({
                title:'Total de usuarios', 
                color:'success', 
                cuantity: dataUsers.response.total,
                icon:'fa-user-check'
            })
            
        })
        .catch(err => console.log(err))

    }, [])



    const cartProps = [products, users];



    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;