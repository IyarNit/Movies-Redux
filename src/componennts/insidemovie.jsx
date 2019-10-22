import React from 'react';
import { connect } from "react-redux"



class InsideMovie extends React.Component {
    constructor(props) {
        super(props);
        this.feedbackInput = React.createRef()
    }

    addTofeedbackComponent = () => {
        // console.log(this.feedbackInput.current.value)
        this.props.dispatch({
            type: "addTofeedbackComponent",
            payload: { Title:this.props.location.props.Title,feedback: this.feedbackInput.current.value }
            })
        }

    render() {
            console.log(this.props)
        console.log("fsdfsdf", this.props.location.props)
        // console.log("fsdfsdf",this.props.location.props.movie)
        // console.log("fsdfsdf",this.props.movie.movie)

        if(this.props.location.props === undefined) {
            return <div><p>No Movie Seleted</p></div>
        }
        else {



            return <div>

                <div style={{ border: "black 1px solid", paddingBottom: "20px" }}>
                    <p>{this.props.location.props.Title}</p>
                    <p>{this.props.location.props.Actors}</p>
                    <p>{this.props.location.props.Released}</p>
                    <p>{this.props.location.props.Runtime}</p>
                    <p>{this.props.location.props.Plot}</p>
                    <p>{this.props.location.props.Website}</p>
                    <input ref={this.feedbackInput} type="text" placeholder="Your feedback" autoComplete="no" />
                    <button type="button" className="btn btn-dark" onClick={this.addTofeedbackComponent}>Submit</button>
                </div>

            </div>
        }
    }
}


const mapStateToProps = (state) => {
    return {
        feedbackInput: state.feedbackInput,
        feedback: state.feedback
    }
}




export default connect(mapStateToProps)(InsideMovie)
