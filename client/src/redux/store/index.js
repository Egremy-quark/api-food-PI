import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; 
import rootReducer from "../reducers";


export const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
); 

/*
Redux thunk: Permite usar actionsCreators que devuelven un objeto
El actionCreator será el encargado de recuperar los datos

*/