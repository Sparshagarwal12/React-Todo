import React from 'react';
import './App.css';

function Data(props) {
    const del = () => {
        props.setTask((oldTask) => {
            return oldTask.filter((arr, i) => {
                return i !== props.id;
            })
        });
    }
    const edit = () => {
        props.setName(props.arr[props.id])
        props.backup(props.arr[props.id])
        props.setEdit(false);
    }
    return <div className='task-name-div'>
        <li>{props.value}</li>
        <div className='button-design'>
            <button onClick={del} className='delete-button'>Delete</button>
            <button onClick={edit} className='delete-button'>Edit</button>
        </div>
    </div>;
}

export default Data;
