import React, { Component } from 'react';
import './App.css';
import Header from "./componennts/Header"
import MoviePage from "./componennts/MoviePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/loader.css";
import { BrowserRouter, Route, Link } from "react-router-dom"
import Something from "../src/componennts/Something"
import InsideMovie from './componennts/insidemovie';
import Navbar from "./componennts/navbar"
import Feedback from "./componennts/Feedback";

function App() {
  return (
    <div className="App">
      {/* <Header title={"Home Page"} /> */}

      <BrowserRouter>
        {/* <span>
          <br />
          <Link to="/">Home</Link>
          <br />
          <Link to="/moviepage">Movies</Link>
        </span> */}
        <Navbar />
        <Route exact path="/http://localhost:3000/" />
        <Route exact path="/moviepage" component={MoviePage} />
        <Route exact path="/insidemovie" component={InsideMovie} />
        <Route exact path="/Feedback" component={Feedback} />


        {/* <Route exact path="/Something" render={(props) => <Something {...props} movie={this.props.movie} />} /> */}

      </BrowserRouter>


    </div>


  );
}

export default App;
