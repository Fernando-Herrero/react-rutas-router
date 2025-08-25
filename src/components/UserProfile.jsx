import { Link, Outlet } from "react-router-dom";

export const UserProfile = () => {
	return (
		<section>
			<h1>UserProfile</h1>
			{/* Teoría corta:

to="settings" → relativo → resultado /user/settings

to="/user/settings" → absoluto → resultado siempre /user/settings (aunque esté anidado en otra ruta).

Ambos funcionan, pero la forma relativa (to="settings") es la recomendada porque aprovecha la anidación y mantiene tu código más limpio.*/}

			<Link
				to="settings"
				style={{
					textDecoration: "none",
					backgroundColor: "aqua",
					padding: "4px",
					borderRadius: "4px",
					marginRight: "2px",
				}}
			>
				User Settings
			</Link>

			<Link
				to="details"
				style={{
					textDecoration: "none",
					backgroundColor: "aqua",
					padding: "4px",
					borderRadius: "4px",
					marginRight: "2px",
				}}
			>
				User Details
			</Link>

			<Outlet />
		</section>
	);
};
