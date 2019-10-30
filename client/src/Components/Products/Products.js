import React,{Component} from 'react';
import Items from  "../../data/products.json";
import ShowProduct from "../Products/ShowProduct/ShowProduct";
import  "./products.css"
import {connect} from 'react-redux';

class Products extends Component{
 
  
  render(props){
    
    return (
        <div class ="show-product">
     {
         Items.map((item,i)=>
            <ShowProduct
            number = {i+1}
            key = {item.uniq_id}
            id = {item.uniq_id}
            imageUrl ={item.image.slice(2,item.image.indexOf(",")-1)}
            price ={item.retail_price}
            name ={item.product_name}/>
                    
         )
     }
     </div>
    );
  }
}
function mapStateToProps(state) {
  return {
  search: state.search
  };
}

 export default connect(mapStateToProps)(Products);
