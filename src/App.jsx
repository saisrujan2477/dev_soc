import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoticeDetail from "./pages/NoticeDetail";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notice/:id" element={<NoticeDetail />} />
      <Route path="/event/:id" element={<EventDetail />} />
    </Routes>
  );
}

export default App;