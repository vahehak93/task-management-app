import React from "react";


function Task( { id, status, title, category, description, priority} ) {
    return (
        <div className="task" key={id}>
            <span>{title}</span>
            <span>{priority}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={() => editTask(id)}>Edit</button>
        </div>
    );
}

export default Task;