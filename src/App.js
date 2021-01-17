import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes/Routes";
//import {Provider} from "react-redux";
//import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
//import thunk from 'redux-thunk';
//import auth from "./store/reducers/auth";
//import CssBaseline from "@material-ui/core/CssBaseline";

/*const initialState = {};
const middleware = [thunk]*/

/*const rootReducer = combineReducers({
    auth
})*/

/*const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, initialState, composeEnhances(
    applyMiddleware(...middleware)
));*/

function App() {
    return (
            <Router>
                <Routes/>
            </Router>
    );
    /*
    <CssBaseline/>
        <Provider store={store}></Provider>
    */
}

export default App;
