import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import Home from "./pages/home";
import MouseMoveEffect from "@/components/mouseEffect"
import AnalyticsPage from "./pages/analytics";
import Forum from "./pages/forum";
import FeedbackPage from "./pages/feedback";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <MouseMoveEffect />
    </Router>
  )
}
