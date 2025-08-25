export const UserSettings = () => {
	return (
		<section>
			<h2>⚙️ User Settings</h2>
			<p>Desde aquí puedes configurar tus preferencias:</p>
			<form>
				<label>
					Notificaciones:
					<input type="checkbox" defaultChecked />
				</label>
				<br />
				<label>
					Tema oscuro:
					<input type="checkbox" />
				</label>
				<br />
				<button type="submit">Guardar cambios</button>
			</form>
		</section>
	);
};
