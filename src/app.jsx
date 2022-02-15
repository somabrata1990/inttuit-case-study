import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppReducer from "./reducer";
import apiMiddleware from "./containers/meetings/apiMiddleware";
import "./global.css";
import AppRoutes from "./routes";

const store = createStore(AppReducer, applyMiddleware(apiMiddleware));

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <AppRoutes />
            </div>
        </Provider>
    );
}

render(<App />, document.getElementById("app"));