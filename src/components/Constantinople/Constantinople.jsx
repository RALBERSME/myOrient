import React from "react";
import "./Constantinople.css";
import { useNavigate } from "react-router-dom";
const Constantinople = () => {
  const navigate = useNavigate();
  return (
    <div className="Constantinople">
      <div className="constantinople-info">
        <div className="constantinople-left">
          <h1>
            Gönnen Sie sich eine Tasse türkischen Kaffees in Konstantinopel!
            <br></br>
            <span className="constantinople-english">
              Treat yourself to a cup of Turkish coffee in Constantinople!
            </span>{" "}
            <br></br>
          </h1>
          <h3>
            Stell dir vor, du befindest dich in einer Stadt voller Geschichte,
            Kultur und lebendiger Atmosphäre. Im Jahr 1920 zählt Konstantinopel
            etwa 800.000 Einwohner und ist eine faszinierende Mischung aus Ost
            und West, Tradition und Moderne. Nach den Wirren des Ersten
            Weltkriegs hat sich die politische Lage verändert: Das Osmanische
            Reich ist im Wandel, und die Stadt steht an der Schwelle zu
            bedeutenden Umbrüchen, doch ihre Schönheit und Bedeutung bleiben
            ungebrochen.<br></br>
            <br></br>
            <span className="constantinople-english">
              Imagine yourself in a city full of history, culture, and a vibrant
              atmosphere. In 1920, Constantinople had a population of
              approximately 800,000 and was a fascinating mix of East and West,
              tradition and modernity. After the turmoil of World War I, the
              political situation had changed: the Ottoman Empire was in flux,
              and the city was on the verge of significant upheaval, but its
              beauty and significance remained undiminished.
            </span>
            <br></br> <br></br>
            Die Sehenswürdigkeiten in Konstantinopel sind atemberaubend. Das
            berühmte Hagia Sophia, einst Kirche, dann Moschee, ist ein
            Meisterwerk byzantinischer Architektur und beeindruckt durch ihre
            riesige Kuppel und kunstvollen Mosaike. Der Topkapi-Palast, Residenz
            der osmanischen Sultane, bietet einen Einblick in die Pracht
            vergangener Zeiten. Die Blaue Moschee mit ihren sechs Minaretten ist
            ein weiteres Highlight, das Besucher in Staunen versetzt. Die engen
            Gassen des alten Stadtteils Sultanahmet laden zum Bummeln ein,
            während der Bosporus mit seinen schimmernden Wasserstraßen eine
            magische Kulisse bildet.
            <br></br>
            <br></br>
            <span className="constantinople-english">
              The sights in Constantinople are breathtaking. The famous Hagia
              Sophia, once a church and then a mosque, is a masterpiece of
              Byzantine architecture and impresses with its enormous dome and
              ornate mosaics. Topkapi Palace, residence of the Ottoman sultans,
              offers a glimpse into the splendor of times past. The Blue Mosque,
              with its six minarets, is another highlight that amazes visitors.
              The narrow streets of the old Sultanahmet district are ideal for
              strolling, while the Bosphorus, with its shimmering waterways,
              provides a magical backdrop.
            </span>
            <br></br> <br></br>
            Das Nachtleben in Konstantinopel pulsiert vor Leben. In den Tavernen
            und Kaffeehäusern erklingen türkische Melodien, begleitet von der
            Saz oder der Oud. Die Stadt ist ein Zentrum für Musik und Literatur:
            Berühmte Persönlichkeiten wie der Dichter Yahya Kemal oder der
            Komponist Dede Efendi haben hier gewirkt. Die kulturelle Vielfalt
            spiegelt sich in den zahlreichen Veranstaltungen wider, die das
            kreative Herz der Stadt schlagen lassen.
            <br></br>
            <br></br>
            <span className="constantinople-english">
              Constantinople's nightlife is vibrant. In the taverns and coffee
              houses, Turkish melodies resonate, accompanied by the saz or oud.
              The city is a center for music and literature: Famous figures such
              as the poet Yahya Kemal and the composer Dede Efendi have worked
              here. The cultural diversity is reflected in the numerous events
              that keep the creative heart of the city beating.
            </span>
            <br></br> <br></br>
            Konstantinopel ist auch ein bedeutendes kulturelles Zentrum Europas.
            Es verbindet die europäische und asiatische Welt, was sich in seiner
            Architektur, seinen Menschen und seiner Geschichte widerspiegelt.
            Die Stadt ist ein lebendiges Symbol für den Austausch zwischen Ost
            und West, für Vielfalt und Tradition.
            <br></br>
            <br></br>
            <span className="constantinople-english">
              Constantinople is also an important cultural center in Europe. It
              connects the European and Asian worlds, which is reflected in its
              architecture, its people, and its history. The city is a living
              symbol of exchange between East and West, of diversity and
              tradition.
            </span>{" "}
            <br></br> <br></br>
            Insgesamt ist Konstantinopel im Jahr 1920 eine faszinierende Stadt
            voller Leben, Geschichte und Kultur. Sie strahlt eine einzigartige
            Anziehungskraft aus, die jeden Besucher begeistert und tief
            beeindruckt. Ein Ort, der die Seele berührt und die Fantasie
            beflügelt!
            <br></br>
            <br></br>
            <span className="constantinople-english">
              Overall, Constantinople in 1920 is a fascinating city full of
              life, history, and culture. It exudes a unique attraction that
              delights and deeply impresses every visitor. A place that touches
              the soul and inspires the imagination!
            </span>{" "}
            <br></br>
          </h3>
        </div>
        <div className="constantinople-right">
          <div id="constantinople-container">
            <div class="steam" id="steam1"></div>
            <div class="steam" id="steam2"></div>
            <div class="steam" id="steam3"></div>
            <div class="steam" id="steam4"></div>
            <div class="steam" id="steam5"></div>
            <div class="steam" id="steam6"></div>
            <div class="steam" id="steam7"></div>
            <div class="steam" id="steam8"></div>
            <div id="tasse">
              <div id="tassenkoerper"></div>
              <div id="tassenhenkel"></div>
            </div>

            <div id="untertasse"></div>

            <div id="shadow"></div>
          </div>
        </div>
        <div className="constantinople-button">
          <a
            href="#"
            onClick={() => {
              navigate("/adventure");
            }}
          >
            Start<br></br>the Adventure{" "}
          </a>
          <a
            href="#"
            onClick={() => {
              navigate("/");
            }}
          >
            Back <br></br>to Main Page{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Constantinople;
