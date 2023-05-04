import React from "react";
import { Link } from "react-router-dom";

export const HomeCard = ({item:{id, cover, name, rating,time, desc, starring, genres}}) => {
    return (
        <>
        <div>
        <div className="box"> 
            <div className="coverImage">
                <img src={cover} alt="" />
            </div>

            <div className="content flex">
                <h1>{name}</h1>
                <div className="rating flex">
                    <div className="details row">

                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <label>{rating}</label>
                    <label>Time: {time}</label>
                
            </div>
            <p>{desc}</p>
            <div className="cast">
                <h4>
                    <span>Starring: </span>
                    {starring}
                </h4>
                <h4>
                    <span>Genres: </span>
                    {genres}
                </h4>
            </div>
            <Link to={`/moviepage/${id}`} >
            <button className="primary btn">
                    <i className="fas fa-play"></i>PLAY
            </button>
            </Link>
            </div>
            </div> 
        </div>
        </>
    )
}