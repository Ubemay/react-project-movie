import React from "react";

export const NWCard = ({item:{id, cover, name, time }}) => {
    return <>
    
        <div className="MovieBox">
            <div className="img"> 
                <img src={cover} alt="" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <span>{time}</span> <br /> <br /> <br /> <br />
                <button className="primary-btn">
                    <i className="fa fa-play"></i> PLAY
                </button>
            </div>
        </div>

    </>
}