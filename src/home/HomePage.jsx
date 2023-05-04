import React, {useState} from "react";
import { Homes } from "../components/Homes/Homes";
import { NewMovies } from "../components/NewMovies/NewMovies";
import { homeData, newest, tvseries } from "../someData";


export const HomePage = () => {
    const[items, setItems] = useState(newest)
    const[item, setItem] = useState(tvseries)
    return (

        <>
        
            <Homes/>
            <NewMovies items = {items} title = "New Movies"/>
            <NewMovies items = {item} title = "TV series"/>
        </>

    )
}