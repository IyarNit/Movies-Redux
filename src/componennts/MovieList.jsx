import React from 'react';
import Movies from "./Movies"


class MovieList extends React.Component {




    render() {
        console.log("movie list props",this.props)
        // console.log(this.props.arrayOfMovies)


        const blabla = this.props.arrayOfMovies.map(movie => { return <Movies movie={movie} arrayOfMovies={this.props.arrayOfMovies} enterFeedbackInput={this.props.enterFeedbackInput} feedbackInput={this.feedbackInput} feedback={this.props.feedback}/> })
        // console.log(this.props.arrayOfMovies[0].Title)

        return <div>
            {blabla}
        </div>
    }

}

export default MovieList