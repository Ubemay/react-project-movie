import React, {useState} from "react";
import { homeData } from "../../someData";
import { Home } from "./Home";
import "./home-style.css"

export const Homes = () => {
    const[items, setItems] = useState(homeData)

    return (
        <>
        
            <section className="home">
                <Home items = {items}/>
            </section>

            <div className="margin"></div>
        
        </>
    )
}