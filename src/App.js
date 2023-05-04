import React from 'react';
import './App.css';
import {HomePage} from "./home/HomePage"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Header} from "./components/header/Header"
import MoviePage  from './components/moviePage/MoviePage';
import { Footer } from './components/Footer/Footer';
import Catalog from './components/catalog/Catalog';

function App() {


  return (

    
    <>

      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/moviepage/:id' exact element={<MoviePage/>}  />
          <Route path='/catalog' exact element={<Catalog/>}/>
        </Routes>
        <Footer/>
    </Router>


    </>
  );
}

export default App;
