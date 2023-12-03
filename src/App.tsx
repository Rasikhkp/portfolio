import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import GetInTouch from "./pages/GetInTouch";
import PortoPreview from "./pages/PortoPreview";
import Tes from "./pages/Tes";
import TransitionContextProvider from "./context/TransitionContextProvider";

function App() {
	return (
		<TransitionContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/getintouch" element={<GetInTouch />} />
					<Route path="/portopreview" element={<PortoPreview />} />
					<Route path="/tes" element={<Tes />} />
				</Routes>
			</Router>
		</TransitionContextProvider>
	);
}

export default App;
