import React from "react";
import web from '../src/images/19198666.jpg'
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-8 mx-auto">
                <div className="card" >
                    <img src={props .imgsrc} style={{width:'100%', height:'300px', margin:'0 auto' }} className="card-img-top" alt={props .imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold" >{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to=""><button type="button" className="btn btn-outline-warning">Go somewhere</button></NavLink>
                    </div>
                </div>
            </div>




        </>
    );

};
export default Card;