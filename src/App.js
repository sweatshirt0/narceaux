import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import News from './components/News'
import Blog1 from './components/Blog1'

function App() {
  return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/blogs" element={<Blog />} />
		<Route path="/blogs/:blog1" element={<Blog1 />} />
		<Route path="/news" element={<News />} />
	</Routes>
  );
}

export default App;
