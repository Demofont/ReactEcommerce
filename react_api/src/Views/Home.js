import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(){
	return(
		<div>
			<h1>This is home page</h1>

			<HelloWorld name= "Mike" />
		</div>
	)
}

export default Home