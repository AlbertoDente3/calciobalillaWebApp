import "./App.css";
import ArticlesComponent from "./layoutAreas/ArticlesComponent";
import ScooreBoardComponent from "./layoutAreas/ScoreboardComponent";

function App() {
  return (
    <div id="wrapper-app">
      <div id-="barra"> barra </div>
      <div id="lista-partite">
        <ScooreBoardComponent />
      </div>

      <div id="lista-articoli">
        <div className="articolo">
          <ArticlesComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
