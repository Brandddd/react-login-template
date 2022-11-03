import './App.css';

function App() {

  return (<div className= "main">	
		<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Bienvenido</label>
					<input type="text" name="txt" placeholder="Usuario" required=""></input>
					<input type="email" name="email" placeholder="Correo" required=""></input>
					<input type="password" name="pswd" placeholder="Contraseña" required=""></input>
					<button>Registrarse</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Ingresar</label>
					<input type="email" name="email" placeholder="Correo" required=""></input>
					<input type="password" name="pswd" placeholder="Contraseña" required=""></input>
					<button>Ingresar</button>
				</form>
			</div>
</div>
 )}

export default App;
