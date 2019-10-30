import React,{Component} from 'react';
import "./Categories.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Categories extends Component{

  showByChoice(choice){
    console.log(choice);
		  axios.get('/search',{
        params:{
          item:choice
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err))
		}
  
 
  render(props){
      return(
     <div class = "Categories">
       <ul class="list-group  list-group-flush">
       <li class="list-group-item font-weight-bold .text-light top-category">Top Categories</li>
       <li class="list-group-item" onClick = {()=>this.showByChoice("Lifestyle")}><i class="fa fa-male " aria-hidden="true"></i>Lifestyle</li>
        <li class="list-group-item " onClick = {()=>this.showByChoice("Electronics")}><i class="fa fa-laptop " aria-hidden="true"></i>Electronics</li>
        <li class="list-group-item" onClick = {()=>this.showByChoice("Gifts")}><i class="fa fa-gift " aria-hidden="true"></i>Gifts</li>
        <li class="list-group-item" onClick = {()=>this.showByChoice("Home")}><i class="fa fa-home " aria-hidden="true"></i>Home </li>
        <li class="list-group-item" onClick = {()=>this.showByChoice("Music")}><i class="fa fa-music " aria-hidden="true"></i>Music</li>
        <li class="list-group-item" onClick = {()=>this.showByChoice("Sports")}><i class="fa fa-futbol-o" aria-hidden="true"></i>Sports</li>
        <button class="btn Category-btn  font-weight-bold">Huge Sale - 70% Off</button>
     </ul>
     </div>
    );
  }
}
export default Categories;
