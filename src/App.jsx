import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { UserProfile } from "./components/UserProfile";
import { UserSettings } from "./components/UserSettings";
import { UserDetails } from "./components/UserDetails";
import { PrivateRoute } from "./components/PrivateRout";

export const App = () => {
	return (
		<div className="app-container">
			<Navbar></Navbar>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/user" element={<UserProfile />}>
						<Route path="settings" element={<UserSettings />} />
						<Route path="details" element={<UserDetails />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path="/private-1" element={<h1>Private Rout</h1>} />
					</Route>
				</Routes>
			</main>
		</div>
	);
};
