import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import Games from './components/Games'
import News from './components/News'

function App() {
  return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/games" element={<Games />} />
		<Route path="/news" element={<News />} />
	</Routes>
  );
}

export default App;
