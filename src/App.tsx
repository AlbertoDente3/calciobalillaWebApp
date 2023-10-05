import "./App.css";
import ClockComponent from "./components/ClockComponent";
import ArticlesComponent from "./layoutAreas/ArticlesComponent";
import ScooreBoardComponent from "./layoutAreas/ScoreboardComponent";

function App() {
  return (
    <div id="wrapper-app">
      <div id-="barra"> barra </div>
      <div id="lista-partite">
        <ClockComponent />
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
