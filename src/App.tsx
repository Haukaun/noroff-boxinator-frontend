import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/customComponents/header/header";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/customComponents/footer/Footer";



function App() {
	return (
		<BrowserRouter>
			{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Header />}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
			{window.location.pathname === "/signin" || window.location.pathname === "/signup" ? null : <Footer />}
		</BrowserRouter>
	);
}

export default App;
