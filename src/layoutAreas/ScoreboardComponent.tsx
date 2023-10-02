import React from "react";
import ResultComponent from "../components/ResultComponent";
import './../style/scoreboard.css'

export default function ScoreboardComponent() {
  const fooObjectResults = [
    {
      idPartita: "2",
      homePoints: "1",
      awayPoints: "0",
    },
    {
      idPartita: "2",
      homePoints: "1",
      awayPoints: "0",
    },
    {
      idPartita: "2",
      homePoints: "1",
      awayPoints: "0",
    },
    {
      idPartita: "2",
    },
  ];

  return (
    <div id="scoreboard-wrapper">
      {fooObjectResults.map((result) => {
        return <ResultComponent result={result} />;
      })}
    </div>
  );
}
