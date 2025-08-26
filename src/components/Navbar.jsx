import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
	const { user, setUser } = useContext(AuthContext);

	return (
		<nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
			<div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
				<NavLink style={{ textDecoration: "none" }} to="/">
					Home
				</NavLink>
				<NavLink style={{ textDecoration: "none" }} to="/about">
					About
				</NavLink>
				<NavLink style={{ textDecoration: "none" }} to="/user">
					User
				</NavLink>
				{user && (
					<NavLink style={{ textDecoration: "none" }} to="/private-1">
						Private-1
					</NavLink>
				)}
			</div>

			<button
				onClick={() => setUser((prev) => !prev)}
				style={{ border: "none", padding: "4px", borderRadius: "4px", backgroundColor: "purple" }}
			>
				{user ? "User Active" : "User Inactive"}
			</button>
		</nav>
	);
};
