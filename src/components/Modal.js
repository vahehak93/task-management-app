import React, {useState} from "react";
import Input from "./Input";
import {projectFireStore} from "../firebase";
import {ACTION_TYPES, useBootcampContext} from "../state";
import {type} from "@testing-library/user-event/dist/type";

function Modal() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const { dispatch } = useBootcampContext()
    const handleCreateTask = async () => {
        const task = {title, description, category, priority: "low", status: "done" }
        try {
            let res = await projectFireStore.collection('tasks').add(task);
            console.log(res)
            dispatch( {type: ACTION_TYPES.TOGGLE_MODAL} )
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="modal">
            <div className="modalContent">
                <Input value={title} onChange={(e) => setTitle(e.target.value)} name="Title"/>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} name="Description"/>
                <Input value={category} onChange={(e) => setCategory(e.target.value)} name="Category"/>
                <button onClick={handleCreateTask}>Create task</button>
            </div>

        </div>
    );
}

export default Modal;