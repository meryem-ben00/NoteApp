import React from 'react';

const DeletePopup = ({
  selectedNote,
  setSelect,
  tasksArray,
  apiEndpoint,
  fetchAllTasksFromDynamo
}) => {

  const deleteNote= () => {
    const wantedItem = 
      tasksArray.find((item, index) => index === selectedNote.index);

    fetch(apiEndpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wantedItem), 
    }).then(() => fetchAllTasksFromDynamo())

    setSelect();

  }

  return (
    <div className='absolute z-50 w-full h-full bg-[#81818150] flex justify-center items-center'>
        <div className='bg-white p-10 min-w-[50%] rounded-lg text-center'>
        <h2 className='text-2xl mb-8 font-medium'>Delete Note</h2>
        <div>
          <button className='bg-green-600 px-[30px] py-[10px] text-white font-semibold rounded-lg mr-8'
            onClick={ deleteNote }>
            Yes
            </button> 
           <button className='bg-red-500 px-[30px] py-[10px] text-white font-semibold rounded-lg' onClick={()=> setSelect({})}>No</button> 
        </div>
        </div>
    </div>
  )
}

export default DeletePopup