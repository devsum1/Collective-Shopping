import React,{Component} from 'react';
import ShowAds from "../../Showads/Showads"
import Categories from "../../Categories/Categories"
import Products from "../../../Components/Products/Products"

class Home extends Component{
  render(props){
    return(
     <div>
     <Categories/>
     <ShowAds/>
     <Products/>
     </div>
    );
  }
}
export default Home;
