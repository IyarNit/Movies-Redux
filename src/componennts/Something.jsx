import React from 'react';
import InsideMovie from "./insidemovie"
import { BrowserRouter, Route, Link } from "react-router-dom"



class Some extends React.Component {

    render() {
        console.log("somethng props", this.props)

        return <div>

            {<InsideMovie movie={this.props.location.props} />}

        </div>
    }
}

export default Some