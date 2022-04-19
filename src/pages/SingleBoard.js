import React, {useEffect, useState} from 'react';
import {projectFireStore } from './../firebase';
import {ACTION_TYPES, useBootcampContext} from "../state";
import Modal from "../components/Modal";

function SingleBoard (){
    const [ isLoading, setIsLoading ] = useState(false);
    const { state, dispatch } = useBootcampContext()
    useEffect(() => {
        setIsLoading(true);
        let unsub = projectFireStore.collection('/tasks').onSnapshot(snapshot => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({id: doc.id, ...doc.data()})
            })
            dispatch({type: ACTION_TYPES.SET_TASKS, tasks: results})
            setIsLoading(false)
        })
        return () => unsub();
    }, [])
    const openModal = () => {
        dispatch({type: ACTION_TYPES.TOGGLE_MODAL})
    }
    const deleteTask = (id) => {
        projectFireStore.collection('/tasks').doc(id).delete(id);
    }
    const editTask = (id) => {
        projectFireStore.collection('/tasks').doc(id).update({ title: "Vahe"});
    }

    return (
        <div>
            {isLoading ? <div>...loading</div> : <>
                {state.tasks.map(task => <div className="task" key={task.id}>
                    <span>{task.title}</span>
                    <span>{task.priority}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    <button onClick={() => editTask(task.id)}>Edit</button>
                </div>)}
                <button onClick={openModal}>Create Task</button>
            </>}
            {state.isModalOpen && <Modal />}
        </div>
    )
}

export default SingleBoard;