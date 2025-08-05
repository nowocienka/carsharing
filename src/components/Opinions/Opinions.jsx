import { useState } from "react";
import "./opinions.scss";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

function Opinions() {
  return (
    <div className="opinionContainer">
      <div className="opinionsHeader">
        <h1>Opinie klientów</h1>
      </div>
      <div className="opinionsCnt">
        <div className="opiinionBox">
          <div className="innerBox">
            <div className="titleCnt">
              <div className="title">
                <span className="name">Justyna Malczak</span>
                <span className="type">Biznesowy</span>
              </div>
              <FormatQuoteOutlinedIcon className="opinionIcon" />
            </div>
            <p className="opinion">
              Jestem bardzo zadowolona z usług tej wypożyczalni samochodów.
              Obsługa była profesjonalna i przyjazna. Samochód, który
              otrzymałam, był w doskonałym stanie czysty i pachnący. Proces
              wypożyczenia był prosty i szybki. Cena była konkurencyjna, a
              warunki umowy jasno przedstawione. Polecam tę wypożyczalnię
              każdemu, kto potrzebuje sprawdzonego partnera do wynajmu
              samochodów.
            </p>
          </div>
        </div>
        <div className="opiinionBox">
          <div className="innerBox">
            <div className="titleCnt">
              <div className="title">
                <span className="name">Piotr Żmuda</span>
                <span className="type">Indywidualny</span>
              </div>
              <FormatQuoteOutlinedIcon className="opinionIcon" />
            </div>
            <p className="opinion">
              Firma naprawdę na wysokim poziomie!! Samochód podstawiony w
              godzinę czasu. Bez zbędnych pytań i formalności. Pozdrawiam cały
              zespół który bardzo dobrze dba o wizerunek tej firmy!!! Pełna
              Profeska jednym słowem.
            </p>
          </div>
        </div>
        <div className="opiinionBox">
          <div className="innerBox">
            <div className="titleCnt">
              <div className="title">
                <span className="name">Magdalena Jachimczuk</span>
                <span className="type">Biznesowy</span>
              </div>
              <FormatQuoteOutlinedIcon className="opinionIcon" />
            </div>
            <p className="opinion">
              Najbardziej profesjonalna wypożyczalnia w regionie, a współpracuję
              z nią od ponad 7 lat. Zadbana technicznie flota samochodów. Auta
              bez błędów na desce, usterek i z bezpiecznym ogumieniem. Bardzo
              miła obsługa. Rozsądne ceny. Serdecznie polecam i życzę stałego
              powiększania oferty i floty ;)
            </p>
          </div>
        </div>
        <div className="opiinionBox">
          <div className="innerBox">
            <div className="titleCnt">
              <div className="title">
                <span className="name">Konrad Golec</span>
                <span className="type">Indywidualny</span>
              </div>
              <FormatQuoteOutlinedIcon className="opinionIcon" />
            </div>
            <p className="opinion">
              Jestem bardziej niż zadowolony z usług tej firmy. Samochody
              czyste, zadbane, nowe i wygodne, kontakt z Panem Danielem i Panią
              Aleksandrą bez zarzutu. Podczas rozmowy telefonicznej, gdy
              przekazałem moje potrzeby został mi zaproponowany samochód który
              idealnie je spełnił. Na pewno do was wrócę!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinions;
