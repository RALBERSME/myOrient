import React from "react";
import "./Paris.css";
import Paris1 from "../../assets/Paris1.jpg";
import Paris2 from "../../assets/Paris2.jpg";
import Paris3 from "../../assets/Paris3.jpg";
import Paris4 from "../../assets/Paris4.jpg";
import Paris5 from "../../assets/Paris5.jpg";
import Paris6 from "../../assets/Paris6.jpg";
import { useNavigate } from "react-router-dom";
const Paris = () => {
  const navigate = useNavigate();
  return (
    <div className="Paris">
      <div className="paris-container">
        <div className="paris-img-wrapper">
          <img src={Paris4} alt="Paris" />
          <ul className="paris-V">
            <h4>
              <u>Check out the sights:</u>
            </h4>
            <li>
              Eiffel Tower – The iconic landmark of Paris, completed in 1889 and
              already a symbol of the city.
            </li>
            <li>
              Louvre – The famous museum that houses works of art from around
              the world, including the Mona Lisa.
            </li>
            <li>
              Notre-Dame de Paris – The impressive Gothic-style cathedral, known
              for its architecture and history.
            </li>
            <li>
              Sacré-Cœur – The white basilica on Montmartre hill, offering great
              views over Paris.
            </li>
            <li>
              Champs-Élysées – The famous boulevard that leads from the Place de
              la Concorde to the Arc de Triomphe.
            </li>
          </ul>
        </div>
        <div className="paris-h">
          <h2>Paris in 1920</h2>
          <h3>
            The year 1920 marked a time of upheaval, new beginnings, and
            profound change for Paris. After the dark years of the First World
            War, which ended in November 1918, the French capital stood at a
            crossroads between grief and hope. The scars of the war were still
            visible, but life in Paris continued to pulsate – full of energy,
            creativity, and an unshakable belief in a better future.
            <br></br>
            The economic situation of the Parisian population was shaped by the
            aftermath of the war. Many families struggled with the consequences
            of the destruction and inflation. Unemployment was moderate, but
            insecurity was omnipresent. On average, a worker today earned about
            20,000 francs a month, which, by the standards of the time,
            represented a modest but stable existence. Nevertheless, social
            tensions were palpable: the gap between rich and poor was growing,
            and the question of fair distribution remained open.
            <br></br>
            The mood among the population was mixed. On the one hand, there was
            a certain relief at the end of the war, but on the other, grief and
            the memory of losses weighed heavily on the souls of the French.
            Women have made significant progress in recent years: They are now
            allowed to work in some areas, enjoy more rights, and are actively
            involved in social life. However, the aspirations for equality have
            not yet been fully realized.
            <br></br>
            Politically and economically, France is a significant force in
            Europe in 1920. With its influence on the League of Nations and
            efforts to ensure stability in the region, Paris strives to play a
            leading role on the continent.
          </h3>
        </div>
        <div className="paris-c">
          <img id="imgParis2" src={Paris2} alt="Paris" />
          <div>
            <h3>
              French culture, art, and literature are experiencing a golden age,
              making Paris the center of the world. In 1920, Paris was a center
              of cultural and artistic innovation, known for its cosmopolitan
              atmosphere and its attraction to artists and writers from all over
              the world. A notable event was the creation of the "Tomb of the
              Unknown Soldier" under the Arc de Triomphe on November 11, which
              served as a national memorial to the fallen of the First World
              War.
              <br></br>
              Paris attracted many American and European writers and artists,
              who established themselves in Paris as part of the "Lost
              Generation" and made the city a center of the literary
              avant-garde.
              <br></br>
              The 1920s in Paris were characterized by the flowering of
              Surrealism, Art Deco, and café culture.
              <br></br>
              Jazz, a new and exciting musical style from the USA, became very
              popular in Parisian clubs and bars and shaped the city's cultural
              landscape.
              <br></br>
              The Montparnasse district became the center of the artistic and
              intellectual scene, where the American avant-garde met European
              artists.
              <br></br>
              Paris experienced an influx of migrants and refugees from various
              parts of the world in the 1920s, including Eastern Europe,
              Armenia, and Russia.
              <br></br>
              Paris experienced an economic boom in the 1920s, fueled by trade
              and the tourist industry.
              <br></br>
              <br></br>
              On big screens hover over the Arc de Triomphe to see more details.
              <br></br>
              <div className="buttons-Paris">
                <button
                  className="btn-Paris"
                  onClick={() => {
                    navigate("/vienna");
                  }}
                >
                  Continue to Vienna{" "}
                </button>
                <button
                  className="btn-Paris"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to Main Page{" "}
                </button>
              </div>
            </h3>
          </div>{" "}
        </div>
        <div className="paris-img-wrapper-last">
          <img className="paris-small" src={Paris5} alt="Paris" />
          <img className="paris-small" src={Paris1} alt="Paris" />
          <img className="paris-small" src={Paris3} alt="Paris" />
          <img className="paris-small" src={Paris6} alt="Paris" />
        </div>
      </div>
    </div>
  );
};

export default Paris;
