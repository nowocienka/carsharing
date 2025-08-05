import "./information.scss";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Information() {
  return (
    <div className="informationCnt">
      <div className="pictureContainer">
        <span className="infoHeader">Wynajem Aut Radom</span>
        <img
          className="picture"
          src="https://shadowcode.fun/images/cars.webp"
          alt=""
        />
      </div>
      <div className="infoBoxes">
        <div className="infoBox">
          <div className="infoTitle">
            <AssignmentIcon className="icon" />{" "}
            <span className="title">Minimum formalności</span>
          </div>
          <p className="infoText">
            Skorzystaj z wygodnego i łatwego w użyciu formularza online, żeby
            zarezerwować wybrany model auta.
          </p>
        </div>
        <div className="infoBox">
          <div className="infoTitle">
            <AssignmentIcon className="icon" />{" "}
            <span className="title">Szeroki wybór</span>
          </div>
          <p className="infoText">
            Wynajmujemy auta praktycznie na każdą okazję: podróże, wesela,
            przeprowadzki czy pomoc drogowa.
          </p>
        </div>
        <div className="infoBox">
          <div className="infoTitle">
            <AssignmentIcon className="icon" />{" "}
            <span className="title">Całodobowa obsługa</span>
          </div>
          <p className="infoText">
            Jesteśmy dyspozycyjni non-stop, więc o każdej porze dnia i nocy
            możesz liczyć na nasze wsparcie.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
