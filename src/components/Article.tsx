import React from "react";
import ImageComponent from "./ImageComponent";
import "./../style/article.css";

export default function Article() {
  return (
    <div className="article-wrapper">
      <div className="article-header">
        <div className="immagine-profilo">
          <ImageComponent />
        </div>
        <div className="nome-autore-articolo">Nome autore</div>
        <div className="sotto-nota-articolo">Orario</div>
      </div>
      <div className="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        animi, quas alias quibusdam velit atque unde ipsum sint, iusto pariatur
        illo ipsa hic iste est in amet doloribus et ad. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Assumenda libero perferendis facere.
        Itaque sit ratione quos inventore, numquam earum? Error, placeat.
        Pariatur rem natus libero iste. Libero temporibus maiores molestias!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea debitis
        rerum vel adipisci dolor necessitatibus corrupti cumque, explicabo
        molestiae exercitationem, iure praesentium ratione, id voluptates sunt
        aspernatur? Error, cupiditate explicabo? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Illum veritatis rerum nulla corporis earum
        nostrum, officiis provident natus? Labore delectus sint sed consequatur
        dolorem eaque harum, ipsa repudiandae corporis expedita?{" "}
      </div>
    </div>
  );
}
