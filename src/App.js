import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/signIn" element={< SignIn />} />
      <Route path="/signUp" element={< SignUp />} />
    </Routes>
  );
}

export default App;
