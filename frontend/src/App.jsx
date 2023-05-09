import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Insert from "./components/Insert";
import Veiw from "./components/Veiw";
import Edit from "./components/Edit";
import StudentProvider from "./context/StudentProvider";
import ModalProvider from "./context/ModalProvider";

function App() {
  return (
    <div className=" flex flex-col h-screen items-center justify-center bg-slate-50">
      <StudentProvider>
        <ModalProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<Veiw />}></Route>
          <Route exact path="/insert" element={<Insert />}></Route>
          <Route exact path="/edit" element={<Edit />}></Route>
        </Routes>
      </Router>
      </ModalProvider>
      </StudentProvider>
    </div>
  );
}

export default App;
