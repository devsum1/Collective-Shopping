import React,{Component} from 'react';
import Items from  "../../data/wholeproducts.json";
import ShowProduct from "../Products/ShowProduct/ShowProduct";
import  '../Products/products.css'
import {connect} from 'react-redux';

class SearchedProducts extends Component{
 
  render(props){
    
    return (
        <div class ="show-product">
     {
         Items.map((item,i)=>{
          if(item.product_name.toLowerCase().includes(this.props.search.toLowerCase())||
            item.product_category_tree.toLowerCase().includes(this.props.search.toLowerCase())||
             item.description.toLowerCase().includes(this.props.search.toLowerCase())||
            item.product_specifications.toLowerCase().includes(this.props.search.toLowerCase()))
            return <ShowProduct
            number = {i+1}
            key = {item.uniq_id}
            id = {item.uniq_id}
            imageUrl ={item.image.slice(2,item.image.indexOf(",")-1)}
            price ={item.retail_price}
            name ={item.product_name}/>
           
         }
        
         
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

 export default connect(mapStateToProps)(SearchedProducts);
