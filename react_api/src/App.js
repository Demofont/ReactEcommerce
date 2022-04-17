import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

function App() {
  return (
    <div className="App">
	<Router>
		<Header/>
		<div className= "content">
		<Routes>
			<Route exact path="/" element = {<Home/>}>
			</Route>
			<Route path="/about" element = {<About/>}>	
			</Route>
			<Route path="/products/:id" element = {<Product/>}>
			</Route>
		</Routes>
		</div>
	<Footer/>
	</Router>
    </div>
  );
}

export default App;
