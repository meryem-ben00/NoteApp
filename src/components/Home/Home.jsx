import { useEffect, useState } from "react";
import Navigation from './../Navigation';
import NotesHolder from './../NotesHolder/NotesHolder';
import DeletePopup from './../PopUp/DeletePopup';
import PopUp from './../PopUp/PopUp';
import UpdatePopup from './../PopUp/UpdatePopup';

function Home() {
  const apiEndpoint = "https://g4ubrp7tn2.execute-api.us-east-1.amazonaws.com/test";
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [tasksArray, setTasksArray] = useState([]);
  const [selectedNote, setSelect]=useState();

  const fetchAllTasksFromDynamo = () => {
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => setTasksArray(data))
    .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    fetchAllTasksFromDynamo();
  }, []);


  return (

    <div className="HomCom relative flex">
      { 
        isPopUpShow ? 
          <PopUp 
            apiEndpoint={apiEndpoint}
            fetchAllTasksFromDynamo={fetchAllTasksFromDynamo}
            setIsPopUpShow={setIsPopUpShow} 
          /> : 
        null
      }

      <Navigation 
        setIsPopUpShow={setIsPopUpShow} />

      <NotesHolder 
        tasksArray={tasksArray} 
        setTasksArray={setTasksArray} 
        setSelect={setSelect}
        />

      { selectedNote?.action==="Delete" ?
        <DeletePopup 
          apiEndpoint={apiEndpoint}
          fetchAllTasksFromDynamo={fetchAllTasksFromDynamo}
          setSelect={setSelect} 
          selectedNote={selectedNote} 
          tasksArray={tasksArray}/>
          : null
        }

      { selectedNote?.action==="Edit" ?
        <UpdatePopup 
          apiEndpoint={apiEndpoint}
          fetchAllTasksFromDynamo={fetchAllTasksFromDynamo}
          setSelect={setSelect} 
          selectedNote={selectedNote} 
          tasksArray={tasksArray}/>
        : null
      }

    </div>

  );
}

export default Home;
