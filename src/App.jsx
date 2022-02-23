import "./App.css";

function App() {

  return (
    <main>
      <h1>Formulario de registro</h1>
      <form>
        <label htmlFor="">
          Nombre
          <br />
          <input type="text" id="name" name="name" autoComplete="off" />
        </label>
        <label htmlFor="">
          Profesión
          <br />
          <input type="text" id="job" name="job" autoComplete="off" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
