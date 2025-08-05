import "./blog.scss";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Blog() {
  return (
    <>
      <div className="blogContainer">
        <div className="blogItem">
          <div className="top">
            <div className="badge">
              <BookOutlinedIcon className="blogIcon" /> Blog
            </div>
            <div className="pictureContainer">
              <img
                className="picture"
                src="http://shadowcode.fun/images/dywaniki.webp"
                alt=""
              />
            </div>
          </div>
          <div className="bottom">
            <div className="authorCnt">
              <PersonOutlineOutlinedIcon className="authorIcon" />
              <span className="author">CARsharing Redakcja</span>
            </div>
            <div className="title">
              Jakie Dywaniki Samochodowe Wybrać Na Zimę?
            </div>
            <p className="text">
              Jeśli chcesz bez większego wysiłku utrzymać czystość i porządek we
              wnętrzu swojego auta, zainwestuj w odpowiednie do pory roku
              dywaniki samochodowe. Dzięki nim szybko pozbędziesz się piachu i
              śniegu naniesionego na butach, a do tego zabezpieczysz wnętrze
            </p>
            <button className="more">
              Czytaj więcej <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="blogItem">
          <div className="top">
            <div className="badge">
              <BookOutlinedIcon className="blogIcon" /> Blog
            </div>
            <div className="pictureContainer">
              <img
                className="picture"
                src="http://shadowcode.fun/images/pokrowiec.webp"
                alt=""
              />
            </div>
          </div>
          <div className="bottom">
            <div className="authorCnt">
              <PersonOutlineOutlinedIcon className="authorIcon" />
              <span className="author">CARsharing Redakcja</span>
            </div>
            <div className="title">
              Jaki Kupić Pokrowiec Samochodowy Na Zimę - Co Warto Wiedzieć?
            </div>
            <p className="text">
              Po latach zapomnienia pokrowce na samochody znów wracają do łask.
              Stanowią one bardzo dobrą ochronę przed śniegiem i deszczem, ale
              pod warunkiem, że są odpowiednio dobrane.
            </p>
            <button className="more">
              Czytaj więcej <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="blogItem">
          <div className="top">
            <div className="badge">
              <BookOutlinedIcon className="blogIcon" /> Blog
            </div>
            <div className="pictureContainer">
              <img
                className="picture"
                src="http://shadowcode.fun/images/lancuchy.webp"
                alt=""
              />
            </div>
          </div>
          <div className="bottom">
            <div className="authorCnt">
              <PersonOutlineOutlinedIcon className="authorIcon" />
              <span className="author">CARsharing Redakcja</span>
            </div>
            <div className="title">
              Jak Dobrać Łańcuchy Śniegowe Na Koła Samochodowe?
            </div>
            <p className="text">
              Przy oblodzonych i pokrytych śniegiem drogach kierowcy powinni
              stosować łańcuchy na koła. Dodatek ten znacznie poprawia
              bezpieczeństwo na drodze, zwłaszcza tam, gdzie występują strome
              podjazdy i zjazdy, dlatego powinny one stanowić podstawowy element
              wypo
            </p>
            <button className="more">
              Czytaj więcej
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
      <button className="allBlogs">ZOBACZ WSZYSTKIE WPISY</button>
    </>
  );
}

export default Blog;
