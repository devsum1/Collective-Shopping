import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Sidebar extends Component{
  render(props){
    return(
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                 <div className="carousel-item active">
                    <img className="d-block w-100" src="..." alt="First slide"/>
                 </div>
    
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Second slide"/>
                </div>
    
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide"/>
                </div>
            </div>
        </div>

    </div>

    );
  }
}
export default Sidebar;
