import React,{Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ShowAds from "./Components/Showads/Showads"
import Categories from "./Components/Categories/Categories"

class App extends Component{
  
  render(props){
    return(
     <div>
     <Navbar/>
     <Categories/>
     <ShowAds/>
     </div>

    );
  }
}
export default App;
