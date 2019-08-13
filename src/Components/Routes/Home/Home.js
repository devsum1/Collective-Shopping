import React,{Component} from 'react';
import ShowAds from "../../Showads/Showads"
import Categories from "../../Categories/Categories"

class Home extends Component{
  render(props){
    return(
     <div>
     <Categories/>
     <ShowAds/>
     </div>
    );
  }
}
export default Home;
