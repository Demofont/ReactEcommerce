import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Product(){
	const url = 'https://62587783e4e0b731428cae28.mockapi.io/api/v1/Products/1'
	const [product, setProduct] = useState(null)
	
	useEffect(() => {
		axios.get(url)
			.then(response => {
				setProduct(response.data)
			})
	}, [url])

	return(
		<div>
			<h1>The product page</h1>
		</div>
	)

}

export default Product