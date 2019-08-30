import React,{Component} from 'react';
import Items from  "../../data/products.json";
import ShowProduct from "../Products/ShowProduct/ShowProduct"
import  "./products.css"

class Products extends Component{
  render(props){
    return (
        <div class ="show-product">
     {
         Items.map((item)=><ShowProduct
         imageUrl ={item.image.slice(2,item.image.indexOf(",")-1)}
         price ={item.retail_price}
         name ={item.product_name}/>)
     }
     </div>
    );
  }
}
export default Products;
