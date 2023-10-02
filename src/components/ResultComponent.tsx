import React from "react";
import ImageComponent from "./ImageComponent";

import "./../style/result.css";

interface iResultType {
  idPartita: string;
  homePoints?:string,
  awayPoints?:string
}
interface iResultTypeProps {
  result: iResultType;
}

export default function ResultComponent({ result }: iResultTypeProps) {
  return (
    <div className="wrapper-result">
      <div className="contenitore-squadra squadra-casa">
        <ImageComponent />
        <ImageComponent />

        <div className="home-result"> {result.homePoints} </div>
      </div>
      <div className="separatore"> VS </div>
      <div className="contenitore-squadra contenitore-squadra-trasferta">
        <div className="away-result"> {result.awayPoints} </div>
        <ImageComponent />
        <ImageComponent />
      </div>
    </div>
  );
}
