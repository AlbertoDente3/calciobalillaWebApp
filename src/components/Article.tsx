import React from "react";
import ImageComponent from "./ImageComponent";
import './../style/article.css'

export default function Article() {
  return (
    <div className="article-wrapper">
      <div className="article-header">
        <div className="immagine-profilo">
          <ImageComponent />
        </div>
        <div className="nome-autore-articolo">Prova pippo</div>
        <div className="sotto-nota-articolo">sotto nota</div>
      </div>
      <div className="body">body</div>
      <div className="footer">footer</div>
    </div>
  );
}
