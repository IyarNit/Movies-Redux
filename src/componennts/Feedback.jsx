import React from 'react';
import { connect } from "react-redux"



class Feedback extends React.Component {


    render() {
        // console.log("feedback", this.props)
        const commentsMapper = this.props.feedback.map(para => { return <p>{para.Title + para.feedback}</p> })

        return <div>
            {this.props.feedback.map(para => {
                return (
                    <>
                        <h1>{para.Title}</h1>
                        <p>{para.feedback}</p>
                    </>
                )
            })}
        </div>
    }
}




const mapStateToProps = (state) => {
    return {
        feedback: state.feedback
    }
}
export default connect(mapStateToProps)(Feedback)