import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { homeData } from "../../someData";
import "./moviepage.css";

const MoviePage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null)

    useEffect(() => {
      let item = homeData.find((item) => item.id === parseInt(id))
      if (item) {
        setItem(item)
      }
    }, [id])

    return (

      <>

          {({ items }) => {
              const item = homeData.find(item => item.id === parseInt(id));
          }}
          {item ? (
          <>
            <section className='singlePage'>
              <div className='singleHeading'>
                <h1>{item.name} </h1>
              </div>
              <div className='container'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className='para'>
                  <h3>Date : {item.date}</h3>
                  <p>{item.desc}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            
              </div>
            </section>
          </>
        ) : (
          "This page doesn't exist"
        )}
      </>
    )
  };

  export default MoviePage;