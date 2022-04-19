import React from "react";
import { NavLink } from 'react-router-dom';
import {useBootcampContext} from "../state";

function PrivateRoute({  children }) {
    const { state: { isLoggedIn }} = useBootcampContext()
    if (!isLoggedIn) {
       return <NavLink to="login" />
    }
    return (
        <div>

        </div>
    )
}

export default PrivateRoute;