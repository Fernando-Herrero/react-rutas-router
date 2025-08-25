import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { UserProfile } from "./components/UserProfile";
import { UserSettings } from "./components/UserSettings";
import { UserDetails } from "./components/UserDetails";

export const App = () => {
	return (
		<div className="app-container">
			<Navbar></Navbar>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/user" element={<UserProfile />}>
						<Route path="/user/settings" element={<UserSettings />} />
						<Route path="/user/details" element={<UserDetails />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
};
