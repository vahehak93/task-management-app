import React from "react";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";

function Home (){
    return (
        <div>
          <Button> Hello </Button>
          <Link to='/boards'>Home</Link>
            {/*<Modal />*/}
        </div>
    )
}

export default Home