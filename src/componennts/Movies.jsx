import React from 'react';
import InsideMovie from "./insidemovie"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Something from "../componennts/Something"


class Movies extends React.Component {




    render() {

        console.log("inside movie card", this.props)
        // console.log(this.props.arrayOfMovies)
        // console.log(this.props.movie)



        return <div>

            <div className="card">
                <img src={this.props.movie.Poster} className="card-img-top" alt="No Picture" style={{ height: "250px", width: "400px", margin: "auto" }} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.Title}</h5>
                    <p className="card-text"> <Link to={{
                        pathname: "/insidemovie",
                        props: this.props.movie
                    }}>Movie Details</Link> </p>


                    {/* to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }} */}


                </div>
            </div>

        </div>
    }
}


export default Movies



                        // newProps: enterFeedbackInput = { this.props.enterFeedbackInput } feedbackInput={ this.feedbackInput } feedback={ this.props.feedback }