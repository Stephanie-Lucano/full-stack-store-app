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
      <Navbar />
      <Routes>
        <Route to="/" element={<Home />}></Route>
        <Route to="/products" element={<Index />}></Route>
        <Route to="/products/:id" element={<Show />}></Route>
        <Route to="/products/new" element={<New />}></Route>
        <Route to="/products/:id/edit" element={<Edit />}></Route>
        <Route to="*" element={<FourOFour />}></Route>
      </Routes>
    </div>
  );
}

export default App;
