import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <header className="App-header">Welcome</header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Jessica Cárdenas</footer>
      </div>
    </div>
  );
}

export default App;
