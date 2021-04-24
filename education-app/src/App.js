import './App.css';
import React, {useEffect, useState} from 'react';
import Course from './Components/Course/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';



function App() {

const [course,setCourse]=useState([]);
const [cart,setCart]= useState([]);

const handleAddProduct=(product) =>{
  const newCart=[...cart,product];
  setCart(newCart);
}

useEffect(()=>{

  fetch('https://picsum.photos/v2/list')
  .then(res=> res.json())
  .then(datas => {

  setCourse(datas);

  
})
.catch(error=>console.log(error));
}
,[])

  return (     

<div>
  <Header></Header>
  
    
<div className="shop-container">  



<div className="product-container">
  
 {
   
  course.map (app => <Course handleAddProduct={handleAddProduct} name={app}></Course>  )
 }
  
</div>

<div>
  <h3> Cart Summary </h3>
  <h4>Product Added: { cart.length} </h4>
  <Cart cart={cart}></Cart>
</div>

</div>
</div>
 
  
  )
}

export default App;
