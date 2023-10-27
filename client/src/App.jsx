import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/school/nav";
import Home from './pages/Home';

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App
