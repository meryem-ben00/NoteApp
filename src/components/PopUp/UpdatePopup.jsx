import React, { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg';


const UpdatePopup = ({setSelect,selectedNote,setTasksArray,tasksArray}) => {
    const [newNote,setNote]=useState({
        title: tasksArray[selectedNote.index].title,
        description: tasksArray[selectedNote.index].description
    });
    const updateNotes=()=>{
        setTasksArray(items=>{
            return items.map((e,i)=>(i===selectedNote.index?newNote:e))
        });
        setSelect();
    }
  return (
    <div className='absolute z-50 w-full h-full bg-[#81818150] flex justify-center items-center'>

    <main className=' bg-white p-8 w-[700px] min-w-72 rounded-lg'>

      <div className="mb-2 text-right">
        <button onClick={()=>setSelect()} className='p-1'>
          <img src={closeIcon} alt="Close Icon"/>
        </button>
      </div>

      <div className="mb-5">
        <h2 className='font-bold text-2xl my-4'>Edit Note</h2>
        <label className='font-semibold'>Title</label>
        
        <input type="text" className='w-full p-3 outline-none shadow-md border-gray-400 border rounded-md mb-8 mt-3' 
        defaultValue={newNote.title} onChange={(e) => setNote({...newNote,title: e.target.value})}/>
        

        <div className="flex flex-col">
          <label className='font-semibold'>Description</label>
          <textarea className='p-3 resize-none outline-none shadow-md border-gray-400 border rounded-md h-20 mt-3'
          defaultValue={newNote.description} onChange={(e) => setNote({...newNote,description: e.target.value})}/>
        </div>
      </div>

      <div className="flex justify-end">
        <button className='py-1 px-8 bg-black text-white rounded-md' onClick={updateNotes}>Save</button>
      </div>

    </main>

  </div>
  )
}

export default UpdatePopup