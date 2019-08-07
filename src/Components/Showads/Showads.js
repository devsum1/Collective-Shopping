import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import adv1 from "../../assets/Carousel/1.jpeg";
import adv2 from "../../assets/Carousel/5.jpeg";
import adv3 from "../../assets/Carousel/4.jpeg";
import {Carousel} from "react-bootstrap";
import "./Showads.css";

class ShowAds extends Component{
  render(props){
    return(
        <Carousel className = "Slide-adv">
        <Carousel.Item>
          <img
            className="d-block w-60 h-10"
            src={adv1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60 h-10"
            src={adv2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60 h-10"
            src={adv3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    );
  }
}
export default ShowAds;
