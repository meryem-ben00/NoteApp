import { useState } from "react";
import Navigation from "./components/Navigation";
import NotesHolder from "./components/NotesHolder/NotesHolder";
import PopUp from "./components/PopUp/PopUp";
import DeletePopup from "./components/PopUp/DeletePopup";
import UpdatePopup from "./components/PopUp/UpdatePopup";




function App() {
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [tasksArray, setTasksArray] = useState([]);
  const [selectedNote,setSelect]=useState();

  return (
    <div className="AppCom relative flex">
      { 
        isPopUpShow ? 
          <PopUp 
            setIsPopUpShow={setIsPopUpShow} 
            tasksArray={tasksArray} setTasksArray={setTasksArray} 
          /> : 
        null
      }
      <Navigation setIsPopUpShow={setIsPopUpShow} />
      <NotesHolder tasksArray={tasksArray} setTasksArray={setTasksArray} setSelect={setSelect}/>

      {selectedNote?.action==="Delete"?<DeletePopup setSelect={setSelect} selectedNote={selectedNote} setTasksArray={setTasksArray} />:null}
      {selectedNote?.action==="Edit"?<UpdatePopup setSelect={setSelect} selectedNote={selectedNote} tasksArray={tasksArray} setTasksArray={setTasksArray}/>:null}
    </div>
  );
}

export default App;
