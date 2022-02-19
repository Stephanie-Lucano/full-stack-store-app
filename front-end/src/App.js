import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <p>CSS</p>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Index />}></Route>
        <Route path="/products/:id" element={<Show />}></Route>
        <Route path="/products/new" element={<New />}></Route>
        <Route path="/products/:id/edit" element={<Edit />}></Route>
        <Route path="*" element={<FourOFour />}></Route>
      </Routes>
    </div>
  );
}

export default App;
