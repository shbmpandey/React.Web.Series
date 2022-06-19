import React from "react";
import "./index.css";

const Card = (props) =>
        
    <>
        <div className="cards">
            <div className="card">
              <img src={props.imgscr}  alt='myPic' className='card_img'/ > 
              <div className="info">
                <span className='Card_category'>{props.title}</span>
                <h3 className='card_title'> {props.sname} </h3>
                <a href={props.link} target="">
                <button>Watch Now</button>
                </a>
              </div>
            </div>
  
        </div>
    </>
;

export default Card;