import React from "react";
import ResultComponent from "../components/ResultComponent";

export default function ScoreboardComponent() {

    const fooObjectResults = {
        idPartita:"2",
        homePoints:"1",
        awayPoints:"0"
    }

  return (
    <div>
      <ResultComponent results={fooObjectResults}/>
    </div>
  );
}
