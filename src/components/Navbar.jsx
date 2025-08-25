import { NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
			<NavLink style={{ textDecoration: "none" }} to="/">
				Home
			</NavLink>
			<NavLink style={{ textDecoration: "none" }} to="/about">
				About
			</NavLink>
			<NavLink style={{ textDecoration: "none" }} to="/user">
				User
			</NavLink>
		</nav>
	);
};
