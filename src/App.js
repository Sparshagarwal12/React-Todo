import { useState } from 'react';
import './App.css';
import Data from './Data';

const App = () => {
  const [name, setName] = useState("");
  const [backup, setBackup] = useState("");
  const [taskList, setTask] = useState([]);
  const [isEdit, setEdit] = useState(true);

  const onEdit = (e) => {
    setName(e.target.value);
  }

  const add = () => {
    setTask((oldTask) => { return [...oldTask, name] });
    setName("")
  }
  const check = () => {
    setTask((oldTask) => {
      const newIndex = oldTask.indexOf(backup);

      const newData = oldTask.map((value, index) => {
        if (newIndex === index) {
          return oldTask[index] = name;
        }
        else {
          return oldTask[index];
        }
      });
      return newData;
    })
    setEdit(true);
    setBackup("");
    setName("");
  }


  return (
    <>
      <div className='main-div'>
        <div className='card-div'>
          <div className='heading-div'>
            <p> ToDo List</p>
          </div>
          <div className='field'>
            <input placeholder='Enter Task' value={name} onChange={onEdit}></input>
            <button onClick={isEdit === true ? add : check} className='add-button'>{isEdit === true ? "+" : "o"}</button>
          </div>
          {isEdit === true ? <div className='task-div'>
            <ol>
              {taskList.map((value, index) => {
                return <Data id={index} value={value} key={index} setTask={setTask} setName={setName} setEdit={setEdit} arr={taskList} backup={setBackup}></Data>
              })}
            </ol>
          </div> : <div></div>}
        </div>
      </div>
    </>
  );
}

export default App;