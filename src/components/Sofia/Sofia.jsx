import "./Sofia.css";
import { useNavigate } from "react-router-dom";
import Sofia2 from "../../assets/Sofia2.jpg";
import Sofia3 from "../../assets/Sofia3.jpg";
import Sofia4 from "../../assets/Sofia4.jpg";
import Sofia5 from "../../assets/Sofia5.jpg";
import Sofia6 from "../../assets/Sofia6.jpg";
import Sofia7 from "../../assets/Sofia7.jpg";
const Sofia = () => {
  const navigate = useNavigate();
  return (
    <div className="Sofia">
      <div className="sofia-wrapper">
        <div class="sofia-container">
          <div className="sofia-intro">
            <h1>Willkommen! - Welcome!</h1>
            <h2>
              Willkommen in Sofia im Jahre 1920! Diese lebendige Hauptstadt
              Bulgariens, die damals etwa 80.000 Einwohner zählte, ist ein
              faszinierender Ort voller Geschichte, Kultur und Charme. Nach den
              Wirren des Ersten Weltkriegs befindet sich Sofia im Umbruch, doch
              die Stadt strahlt Zuversicht und Vitalität aus.
              <br></br> <br></br>
              <span className="sofia-englisch">
                Welcome to Sofia in 1920! This vibrant capital of Bulgaria,
                which at the time had a population of around 80,000, is a
                fascinating place full of history, culture, and charm. After the
                turmoil of World War I, Sofia is in transition, but the city
                exudes confidence and vitality.
              </span>
            </h2>
            <br></br>
            <h2>
              Hover über die Bilder, um mehr zu erfahren. - Hover over the pics
              for more information.
            </h2>
          </div>

          <div class="box">
            <div class="imgBx">
              <img src={Sofia2} />
            </div>
            <div class="content">
              <div>
                <h2>Buildings</h2>
                <p>
                  The Alexander Nevsky Monument, a magnificent Orthodox
                  cathedral, is the city's landmark and impresses with its
                  golden dome. The Rotunda of St. George is one of the oldest
                  buildings in Sofia. The National Museum and the Serdica
                  Fortress are fascinating sights to visit.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={Sofia3} />
            </div>
            <div class="content">
              <div>
                <h2>Iskar</h2>
                <p>
                  The Iskar River flows through the city, giving Sofia a
                  tranquil, natural atmosphere. Walks along the banks and in the
                  parks offer relaxation and beautiful views of the surrounding
                  mountains.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={Sofia4} />
            </div>
            <div class="content">
              <div>
                <h2>Nightlife</h2>
                <p>
                  Sofia's nightlife is lively and inviting. In the numerous
                  taverns, cafes, and music venues, you can feel the joy of
                  socializing and Bulgarian music. Traditional rhythms, such as
                  the famous "horo" dance music, can be heard here regularly,
                  and the cultural scene is vibrant.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={Sofia5} />
            </div>
            <div class="content">
              <div>
                <h2>Culture</h2>
                <p>
                  Sofia's culture is characterized by a rich literary and
                  musical tradition. Names like Ivan Vazov, considered
                  Bulgaria's national poet, are closely linked to the cultural
                  identity. Music, with its folk melodies, also reflects the
                  soul of the Bulgarian people.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={Sofia6} />
            </div>
            <div class="content">
              <div>
                <h2>Politics</h2>
                <p>
                  Politically, Sofia experienced significant changes after the
                  First World War. The collapse of the Ottoman Empire and the
                  upheavals in Europe had a profound impact on the region.
                  Bulgaria is now an independent state that is embarking on a
                  journey to redefine and consolidate its national identity.
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={Sofia7} />
            </div>
            <div class="content">
              <div>
                <h2>Summary</h2>
                <p>
                  Overall, Sofia in 1920 is a city full of contrasts – between
                  ancient history and emerging modernity. With its rich culture,
                  impressive buildings, and warm atmosphere, it is a place that
                  touches the heart and delights the senses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="sofia-button">
          <a
            href="#"
            onClick={() => {
              navigate("/myOrient/constantinople");
            }}
          >
            Continue <br></br>to Constantinople{" "}
          </a>
          <a
            href="#"
            onClick={() => {
              navigate("/myOrient");
            }}
          >
            Back <br></br>to Main Page{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sofia;
