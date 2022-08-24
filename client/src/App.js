import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Signup";
import Signin from "./Signin";
import Welcom from "./Welcom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/welcom" element={<Welcom />} />
      </Routes>
    </div>
  );
}

export default App;
