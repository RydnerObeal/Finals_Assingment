import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}
