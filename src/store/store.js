// import { createStore } from "redux"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));







const initState = {
    apiKey: "&apikey=2378c83b",
    APISearchTitle: "http://www.omdbapi.com/?t=",
    input: "",
    arrayOfMovies: [],
    apiRunning: false,
    apiReturned: false,
    feedback: [],
    feedbackInput: ""
}


function moviesReducer(state = initState, action) {
    console.log("state", state)
    console.log(action, "action")
    switch (action.type) {

        case "Changes Search Input": {
            // console.log("case")
            return { ...state, input: action.payload.input }
        }

        case "AfterAPIRanAndWorked": {
            return { ...state, arrayOfMovies: action.payload.arrayOfMovies, input: action.payload.input, apiRunning: action.payload.apiRunning }
            // { arrayOfMovies: [...this.props.arrayOfMovies, res.data], input: "", apiRunning: false }
        }

        case "LoaderStart": {
            return { ...state, apiRunning: action.payload.apiRunning }
        }

        case "LoaderEnder": {
            return { ...state, apiRunning: action.payload.apiRunning }
        }
        case "addTofeedbackComponent": {
            const newFeedback = [...state.feedback]
            newFeedback.push(action.payload)
            console.log(newFeedback)
            return { ...state, feedback: newFeedback }
        }


        default: return state
    }

}






export default createStore(moviesReducer, composeEnhancers(applyMiddleware(thunk)))