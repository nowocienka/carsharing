import "./bestsellers.scss";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Bestsellers() {
  return (
    <div className="bestsellerContainer">
      <h1>Bestsellery</h1>

      <div className="carsCnt">
        <div className="carBox">
          <div className="top">
            <div className="left">
              <div className="carPictureCnt">
                <img
                  className="carPicture"
                  src="http://shadowcode.fun/images/hyundaielentra.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <div className="carInfo">
                <div className="carTitle">HYUNDAI ELENTRA</div>
                <div className="carDetailCnt">
                  <WarehouseOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Dostępność: </span>
                    <span className="value">Dostępny</span>
                  </div>
                </div>
                <div className="carDetailCnt">
                  <SpeedOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Limit kilometrów: </span>
                    <span className="value">500</span>
                  </div>
                </div>
                <div className="carDetailCnt">
                  <PersonOutlineOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Liczba osób: </span>
                    <span className="value">5</span>
                  </div>
                </div>
                <div className="carDetailCnt">
                  <LocalGasStationOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Spalanie: </span>
                    <span className="value">6.1 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="priceCnt">
                Od <span className="price">199.00 zł</span> za dzień
              </div>
              <div className="class">Klasa D</div>
            </div>
            <div className="right">
              <button>Wybierz</button>
            </div>
          </div>
        </div>
        <div className="carBox">
          <div className="top">
            <div className="left">
              <div className="carPictureCnt">
                <img
                  className="carPicture"
                  src="http://shadowcode.fun/images/peugeot508kombi.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <div className="carInfo">
                <div className="carTitle">PEUGEOT 508 KOMBI</div>
                <div className="carDetailCnt">
                  <WarehouseOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Dostępność: </span>
                    <span className="value">Dostępny</span>
                  </div>
                </div>
                <div className="carDetailCnt">
                  <SpeedOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Limit kilometrów: </span>
                    <span className="value">500</span>
                  </div>
                </div>
                <div className="carDetailCnt">
                  <PersonOutlineOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Liczba osób: </span>
                    <span className="value">5</span>
                  </div>
                </div>
                <div className="carDetailCnt">
                  <LocalGasStationOutlinedIcon className="icon" />
                  <div className="carDetail">
                    <span className="title">Spalanie: </span>
                    <span className="value">6.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="priceCnt">
                Od <span className="price">239.00 zł</span> za dzień
              </div>
              <div className="class">Klasa D</div>
            </div>
            <div className="right">
              <button>Wybierz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
