import React, { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import pencilIcon from '../../assets/icons/edit.svg';

const PopUp = ({ setIsPopUpShow, tasksArray, setTasksArray }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: ""
  });

  const addNewTask = () => {
    setTasksArray([...tasksArray, taskData])
    setIsPopUpShow(false);
  }

  return (

    <div className='PopUpCom 
      absolute z-50 w-full h-full bg-[#81818150] flex justify-center items-center
      '>

      <main className='PopUpComCard bg-white p-3 w-[700px] min-w-72'>

        <div className="cardHeader mb-2 flex items-center gap-2">
          <button>
            <img 
              src={deleteIcon} alt="Delete Icon" 
              onClick={() => setIsPopUpShow(false)} 
            />
          </button>
          <button className='flex-grow'>
            <img src={pencilIcon} alt="Pencil Icon" />
          </button>
          <button>
            <img 
              src={closeIcon} alt="Close Icon" 
              onClick={() => setIsPopUpShow(false)} 
            />
          </button>
        </div>

        <div className="cardBody mb-5">
          <label htmlFor='taskTitleInput' className='font-bold text-2xl mb-1'>
            Add Note</label>
          <input 
            type="text" name="taskTitleInput" id="taskTitleInput" 
            className='w-full p-3 outline-none shadow-lg border border-black'
            value={taskData.title} 
            onChange={(e) => setTaskData({...taskData, title: e.target.value})}
          />
          <div className="noteDate flex items-center">
            <button className='py-2 pe-4'>Due date</button>
            <button className='py-2 px-4'>Today</button>
          </div>
          <div className="noteDescription flex flex-col">
            <label htmlFor="noteDescriptionTextArea" className='mb-2'>
              Description</label>
            <textarea 
              name="noteDescriptionTextArea" id="noteDescriptionTextArea" 
              className='p-3 resize-none outline-none shadow-lg h-20'
              value={taskData.description} 
              onChange={(e) => setTaskData({...taskData, description: e.target.value})}
            />
          </div>
        </div>

        <div className="cardFooter flex justify-end">
          <button 
            className={
              (!taskData.title ? "cursor-not-allowed " : "") +
              'py-1 px-4 bg-black text-white'
            } 
            disabled={!taskData.title}
            onClick={addNewTask}
          >Save</button>
        </div>

      </main>

    </div>

  )
}

export default PopUp