import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <div >
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
      
    
    </div>
  );
}

export default App;
