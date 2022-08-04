import Context from "./Context";
import reducer, { initState } from "./Reducer";
import logger from "./looger";

import { useReducer } from "react"

function Provider ({ children }) {

    const [state, dispatch] = useReducer(logger(reducer), initState)

    return (
        <Context.Provider value = {[state, dispatch]}>
            {children}
        </Context.Provider>      
    )
}

export default Provider