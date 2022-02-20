import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Users from "./pages/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
