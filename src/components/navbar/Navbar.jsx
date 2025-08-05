import "./navbar.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

function Navbar() {
  const [otherPlace, setOtherPlace] = useState(false);
  const [calendarOn, setCalendarOn] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="navbarContainer">
      <div className="top">
        <div className="topLine">
          <div className="left">
            <div className="topAddres">
              <LocationOnIcon />
              <span className="address">
                ul. Żółkiewskiego 115 26-600 Radom{" "}
              </span>
            </div>
            <div className="topMail">
              <AlternateEmailIcon />
              <span className="mail">radom@carsharing.pl</span>
            </div>
            <div className="topTelephone">
              <CallIcon />
              <span className="telephone">+48 623 05 48</span>
            </div>
          </div>
          <div className="right">
            <div className="socialLogo">
              <FacebookIcon />
            </div>
            <div className="socialLogo">
              <InstagramIcon />
            </div>
            <div className="socialLogo">
              <WhatsAppIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="menuContainer">
        <div className="logoCnt">
          <span className="logo">CARsharing</span>
        </div>
        <ul className="menuList">
          <li className="menuElement">Home</li>
          <li className="menuElement">Flota</li>
          <li className="menuElement">Blog</li>
          <li className="menuElement">Rezerwacja</li>
          <li className="menuElement">Dokumenty</li>
          <li className="menuElement">FAQ</li>
          <li className="menuElement">Kontakt</li>
        </ul>
      </div>
      <div className="pictureContainer">
        <img
          src="https://shadowcode.fun/images/slider_home.webp"
          alt=""
          className="slider"
        />
      </div>
      <div className="reservationLine">
        <div className="reservationCnt">
          <div className="reservationTop">
            <div className="startPlace">
              <label htmlFor="">Wybierz miasto odbioru: </label>
              <select id="startPlace">
                <option value="radom">Radom</option>
                <option value="kielce">Kielce</option>
                <option value="ostrowiec">Ostrowiec Świętokrzyski</option>
                <option value="lublin">Lublin</option>
                <option value="kozienice">Kozienice</option>
              </select>
            </div>
            <div className="dateInput">
              <label>Wybierz okres:</label>
              <div
                className="date"
                onClick={() => {
                  setCalendarOn(!calendarOn);
                }}
              >
                <CalendarMonthIcon className="icon" />
                <input
                  type="text"
                  value={`${format(
                    date[0].startDate,
                    "dd/MM/yyyy"
                  )} do ${format(date[0].endDate, "dd/MM/yyyy")}`}
                />
              </div>
              {!calendarOn ? (
                ""
              ) : (
                <DateRange
                  className="calendar"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>

            <button className="reservationButton">
              <SearchIcon className="icon" />
              Wyszukaj
            </button>
          </div>
          <div className="reservationBottom">
            <div className="otherPlace">
              <input
                type="checkbox"
                onClick={() => {
                  setOtherPlace(!otherPlace);
                }}
              />
              <label>Zwrot w innym miejscu</label>
            </div>

            {!otherPlace ? (
              ""
            ) : (
              <div className="endPlace">
                <label htmlFor="">Wybierz miasto zwrotu: </label>
                <select id="endPlace">
                  <option value="radom">Radom</option>
                  <option value="kielce">Kielce</option>
                  <option value="ostrowiec">Ostrowiec Świętokrzyski</option>
                  <option value="lublin">Lublin</option>
                  <option value="kozienice">Kozienice</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
