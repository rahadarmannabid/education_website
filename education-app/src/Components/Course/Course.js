import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const Course = (props) => {
    const {author,width,download_url,height}=props.name;
    console.log(props);
    

    return (
        <div className="product">
            <div>
                <img style={{width:'200px'}} src={download_url} alt=""/>

            </div>



            <div className="product-name">
               <h3>{author}</h3> 
                <h5><small>
                Price: $ {width}
                </small></h5>
                <h5><small>
                Enrolled {height}
                </small></h5>
                <button className="main-button"
                onClick={()=> props.handleAddProduct(props.name)}
                > 
                <FontAwesomeIcon icon={faShoppingBag} />  Add to Cart</button>


            </div>

            
            
        </div>
    );
};

export default Course;