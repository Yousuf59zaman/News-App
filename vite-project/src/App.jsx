import Navbar from "./Components/Navbar.jsx";
import Newsboard from "./Components/Newsboard.jsx";
import { useState } from "react";
function App() {
  
  const [category, setCategory] = useState("general");
  return (
    <div>
       <Navbar setCategory={setCategory}/>
       <Newsboard category={category}/>
    </div>
  );
}

export default App;
