import React from 'react';
import Search from "./Search";
import axios from "axios"
import MovieList from "./MovieList"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "../componennts/Header"
import { connect } from "react-redux"





class MoviePage extends React.Component {


    titleSearch = () => {

        if (this.props.input === "") {
            console.log(this.props.input)
            this.loaderEnder()
            return
        }
        else {
            this.loaderstart(true)
            axios.get(this.props.APISearchTitle + this.props.input + this.props.apiKey)

                .then(res => {
                    console.log("respone", res)
                    if (res.data.Response === "False") {
                        this.loaderEnder()
                        return
                    }
                    this.props.dispatch({
                        type: "AfterAPIRanAndWorked",
                        payload: { arrayOfMovies: [...this.props.arrayOfMovies, res.data], input: "", apiRunning: false }
                    })
                    // this.setState({ arrayOfMovies: [...this.props.arrayOfMovies, res.data] })
                    // this.setState({ input: "" })
                    // this.setState({ apiRunning: false })

                    console.log(this.props.arrayOfMovies)

                }).catch(err => {
                    console.log(err)
                })

        }
    }

    Changer = (event) => {
        // this.setState({ input: event.target.value })
        this.props.dispatch({
            type: "Changes Search Input",
            payload: { input: event.target.value }
        })
    }

    loaderstart = (newVal) => {
        this.props.dispatch({
            type: "LoaderStart",
            payload: { apiRunning: newVal }
        })
        // this.setState({ apiRunning: newVal })

    }

    loaderEnder = () => {
        this.props.dispatch({
            type: "LoaderEnder",
            payload: { apiRunning: false }
        })
        // this.setState({ apiRunning: false })
    }

    enterFeedbackInput = (event) => {
        this.props.dispatch({
            type: "feedbackInput",
            payload: { feedbackInput: event.target.value }
        })
    }





    render() {
        console.log("movie page", this.props)
        // console.log(this.state)
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <Header title={"Movie Search"} />
                        <Search titleSearch={this.titleSearch} Changer={this.Changer} input={this.props.input} loaderstart={this.loaderstart} />

                        {this.props.apiRunning === true ? <div className="loader">
                        </div> : this.loaderEnder}

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="container row" style={{ width: "1000px", margin: "auto", justifyContent: "center" }}>
                        <div className="col-8">

                            <MovieList arrayOfMovies={this.props.arrayOfMovies} />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        apiKey: state.apiKey,
        APISearchTitle: state.APISearchTitle,
        input: state.input,
        arrayOfMovies: state.arrayOfMovies,
        apiRunning: state.apiRunning,
        apiReturned: state.apiReturned,
        feedbackInput: state.feedbackInput,
        feedback: state.feedback
    }
}



export default connect(mapStateToProps)(MoviePage)