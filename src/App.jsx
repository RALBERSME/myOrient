import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
// import Programs from './components/Programs/Programs'
// import Reasons from './components/Reasons/Reasons'
// import Plans from './components/Plans/Plans'
// import Testimonials from './components/Testimonials/Testimonials'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paris from "./components/Paris/Paris";
import Vienna from "./components/Vienna/Vienna";
import Budapest from "./components/Budapest/Budapest";
import Zagreb from "./components/Zagreb/Zagreb";
import Belgrad from "./components/Belgrad/Belgrad";
import Sofia from "./components/Sofia/Sofia";
import Constantinople from "./components/Constantinople/Constantinople";
import Adventure from "./components/Adventure/Adventure";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import Book from "./components/Book/Book";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/myOrient" exact element={<Hero />} />
          <Route path="/myOrient/paris" element={<Paris />} />
          <Route path="/myOrient/vienna" element={<Vienna />} />
          <Route path="/myOrient/budapest" element={<Budapest />} />
          <Route path="/myOrient/zagreb" element={<Zagreb />} />
          <Route path="/myOrient/belgrad" element={<Belgrad />} />
          <Route path="/myOrient/sofia" element={<Sofia />} />
          <Route path="/myOrient/constantinople" element={<Constantinople />} />

          <Route path="/myOrient/adventure" element={<Adventure />} />
          <Route path="/myOrient/moreInfo" element={<MoreInfo />} />
          <Route path="/myOrient/book" element={<Book />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
