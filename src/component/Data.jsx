import React from 'react';
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

    return (
        <li>
            <div className='list-item-container'>
                <p className='list-item-p'>{props.value}</p>
                <div className='button-design'>
                    <button onClick={del} className='delete-button'>Delete</button>
                    <button onClick={edit} className='delete-button'>Edit</button>
                </div>
            </div></li>
    )
}

export default Data;
