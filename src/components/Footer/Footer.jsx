import "./footer.scss";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="footerContainer">
      <Grid
        className="footer"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={3} sm={6}>
          <div className="infoFooter">
            <div className="logo">CARsharing</div>
            <div className="topAddres">
              <LocationOnIcon className="infoIcon" />
              <span className="address">
                ul. Żółkiewskiego 115 26-600 Radom{" "}
              </span>
            </div>
            <div className="topMail">
              <AlternateEmailIcon className="infoIcon" />
              <span className="mail">radom@carsharing.pl</span>
            </div>
            <div className="topTelephone">
              <CallIcon className="infoIcon" />
              <span className="telephone">+48 623 05 48</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <div className="citiesFooter">
            <div className="citiesTitle">PUNKTY OBSŁUGI</div>
            <div className="citiesListCnt">
              <ul className="citiesList">
                <li className="city">Radom</li>
                <li className="city">Lublin</li>
                <li className="city">Kielce</li>
                <li className="city">Ostrowiec Świętokrzyski</li>
                <li className="city">Kozienice</li>
                <li className="city">Pionki</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <div className="faqFooter">
            <div className="faqTitle">Masz Pytania?</div>
            <p className="faqText">
              Przejdź do sekcji najczęściej zadawanych pytań i odpowiedzi
            </p>
            <div className="faqButtonCnt">
              <button className="faqButton">FAQ</button>
              <img src="http://shadowcode.fun/images/curvedArrow.svg"></img>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <div className="socialFooter">
            <div className="socialFooterCnt">
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
