import {createContext, useContext, useReducer} from "react";

const defaultState = {
    isLoggedIn: true,
    user: null,
    tasks: [],
    isModalOpen: false
};

const ACTION_TYPES = {
    SET_TASKS: "SET_TASKS",
    TOGGLE_MODAL: "TOGGLE_MODAL"
}

const Context = createContext(defaultState);
function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_TASKS: {
            console.log("action", action.tasks)
            return {...state, tasks: action.tasks}
        }
        case ACTION_TYPES.TOGGLE_MODAL: {
            return {...state, isModalOpen: !state.isModalOpen}
        }
    }
}
const useBootcampContext = () => useContext(Context)

function ContextProvider({ children }) {
    const [ state, dispatch ] = useReducer(reducer, defaultState);
    return <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
}

export { ContextProvider, useBootcampContext, ACTION_TYPES };