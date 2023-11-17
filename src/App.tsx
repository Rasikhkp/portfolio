import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import GetInTouch from "./pages/GetInTouch";
import Nav from "./pages/Nav";
import PortoPreview from "./pages/PortoPreview";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/getintouch" element={<GetInTouch />} />
				<Route path="/nav" element={<Nav />} />
				<Route path="/portopreview" element={<PortoPreview />} />
			</Routes>
		</Router>
	);
}

export default App;
