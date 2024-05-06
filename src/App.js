import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
