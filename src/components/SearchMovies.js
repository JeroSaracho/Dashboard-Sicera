import React from 'react';
import { useState, useEffect, useRef } from 'react';
function SearchMovies(){

	const apiKey = "1"

	const [keyword, setKeyword] = useState("");

	const [products, setProducts] = useState([]);
    const endPointProducts = "http://localhost:3000/products/api/sidras"
	const productFound = []

    useEffect(()=> {
        
        fetch(endPointProducts)
        .then(res => res.json())
        .then(dataProducts => {
        
            setProducts(dataProducts.response.data.map(function (products, i) {
				
				if (products.name == keyword) {
					productFound[i] = products[i]
				}
				return productFound
				
			}))
            
        })
        .catch(err => console.log(err))

    }, [keyword])

	console.log(productFound);

	const input = useRef(); 

	const search = e => {
		e.preventDefault();

		let inputValue = input.current.value

		setKeyword(inputValue)
	}



	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={search}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={input} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 ? products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.pathImg}
														alt=""
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{}</p>
											</div>
										</div>
									</div>
								)
							}): null
						};
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
