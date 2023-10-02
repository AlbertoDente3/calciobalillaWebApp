import React from "react";
import ImageComponent from "./ImageComponent";

import "./../style/result.css";

interface iResultType {
  idPartita: string;
  homePoints:string,
  awayPoints:string
}
interface iResultTypeProps {
  results: iResultType;
}

export default function ResultComponent({ results }: iResultTypeProps) {
  return (
    <div className="wrapper-result">
      <div className="contenitore-squadra squadra-casa">
        <ImageComponent />
        <ImageComponent />

        <div className="home-result"> {results.homePoints} </div>
      </div>
      <div className="separatore"> - </div>
      <div className="contenitore-squadra contenitore-squadra-trasferta">
        <div className="away-result"> {results.awayPoints} </div>
        <ImageComponent />
        <ImageComponent />
      </div>
    </div>
  );
}
