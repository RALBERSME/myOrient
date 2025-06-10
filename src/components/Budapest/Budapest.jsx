import React from "react";
import "./Budapest.css";
import { useNavigate } from "react-router-dom";
import Budapest2 from "../../assets/Budapest2.jpg";
import Budapest3 from "../../assets/Budapest3.jpg";
import Budapest4 from "../../assets/Budapest4.jpg";
const Budapest = () => {
  const navigate = useNavigate();
  return (
    <div className="Budapest">
      <div className="budapest-animation">
        <div class="budapest-cradle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="budapest-cradle2">
          <span>B</span>
          <span>U</span>
          <span>D</span>
          <span>A</span>
          <span>P</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
        </div>
      </div>
      <h2 className="budapest-text">
        Willkommen in Budapest im Jahre 1920! Diese faszinierende Stadt, die
        damals etwa 800.000 Einwohner zählte, ist ein wahres Juwel
        Mitteleuropas, das mit seiner reichen Geschichte, beeindruckenden
        Architektur und lebendigen Kultur begeistert. Nach den turbulenten
        Jahren des Ersten Weltkriegs hat Budapest eine spannende Wandlung
        durchlaufen und präsentiert sich nun als eine Stadt voller Hoffnung und
        neuer Möglichkeiten.
        <br></br> <br></br>
        <span className="budapest-textE">
          Welcome to Budapest in 1920! This fascinating city, which at that time
          had a population of approximately 800,000, is a true gem of Central
          Europe, captivating visitors with its rich history, impressive
          architecture, and vibrant culture. After the turbulent years of the
          First World War, Budapest has undergone an exciting transformation and
          now presents itself as a city full of hope and new opportunities.
        </span>
        <br></br> <br></br>
        Die Sehenswürdigkeiten in Budapest sind einfach atemberaubend. Das
        majestätische Parlament am Ufer der Donau ist eines der bekanntesten
        Bauwerke und beeindruckt durch seine prächtige neugotische Architektur.
        Die Kettenbrücke, die Buda und Pest verbindet, ist ein Symbol der
        Verbindung und des Fortschritts. In Buda lockt die Burg mit ihrem
        historischen Charme, während die Fischerbastei mit ihrer märchenhaften
        Aussicht auf die Stadt begeistert. Die Thermalbäder, wie das
        Gellért-Bad, bieten Entspannung und sind ein wichtiger Teil der
        Traditionen der Stadt.
        <br></br> <br></br>
        <span className="budapest-textE">
          The sights in Budapest are simply breathtaking. The majestic
          Parliament on the banks of the Danube is one of the most famous
          buildings and impresses with its magnificent neo-Gothic architecture.
          The Chain Bridge, connecting Buda and Pest, is a symbol of connection
          and progress. In Buda, the castle beckons with its historic charm,
          while the Fisherman's Bastion delights with its fairytale view of the
          city. The thermal baths, such as the Gellért Baths, offer relaxation
          and are an important part of the city's traditions.
        </span>{" "}
        <br></br> <br></br>
        Die Donau, die sich majestätisch durch Budapest schlängelt, verleiht der
        Stadt eine besondere Atmosphäre. Bei einer Bootsfahrt auf der Donau kann
        man die beeindruckende Skyline bewundern und die Schönheit der Stadt aus
        einer einzigartigen Perspektive erleben.
        <br></br> <br></br>
        <span className="budapest-textE">
          The Danube, which winds majestically through Budapest, gives the city
          a special atmosphere. A boat trip on the Danube allows you to admire
          the impressive skyline and experience the city's beauty from a unique
          perspective.
        </span>{" "}
        <br></br> <br></br>
        Das Nachtleben in Budapest ist lebendig und einladend. Die Cafés,
        Restaurants und Musiklokale bieten eine Vielzahl von
        Unterhaltungsmöglichkeiten, die die kulturelle Vielfalt der Stadt
        widerspiegeln. Die Traditionen und Bräuche, wie das berühmte ungarische
        Volkstanz- und Musikfest, sind lebendige Zeugen der reichen Kultur, die
        hier gepflegt wird.
        <br></br> <br></br>
        <span className="budapest-textE">
          Budapest's nightlife is vibrant and inviting. Cafés, restaurants, and
          music venues offer a variety of entertainment options that reflect the
          city's cultural diversity. Traditions and customs, such as the famous
          Hungarian Folk Dance and Music Festival, are living testaments to the
          rich culture that is cultivated here.
        </span>
        <br></br> <br></br>
        Politisch hat Budapest nach dem Ersten Weltkrieg bedeutende
        Veränderungen erlebt. Das Habsburgerreich ist zerfallen, und Ungarn
        befindet sich in einer Phase des Umbruchs und der Neuorientierung. Die
        Stadt spürt den Wunsch nach Unabhängigkeit und nationaler Identität, was
        sich in ihrer lebendigen Kultur und ihrem aufstrebenden Geist
        widerspiegelt.
        <br></br> <br></br>
        <span className="budapest-textE">
          Politically, Budapest experienced significant changes after the First
          World War. The Habsburg Empire had collapsed, and Hungary was
          undergoing a period of upheaval and reorientation. The city felt a
          desire for independence and national identity, which was reflected in
          its vibrant culture and thriving spirit.
        </span>
        <br></br> <br></br>
        Insgesamt ist Budapest im Jahr 1920 eine Stadt voller Kontraste –
        zwischen Tradition und Moderne, Geschichte und Zukunft. Ein Besuch hier
        ist eine unvergessliche Erfahrung, die das Herz berührt und die Sinne
        begeistert! <br></br> <br></br>
        <span className="budapest-textE">
          Overall, Budapest in 1920 is a city full of contrasts – between
          tradition and modernity, history and the future. A visit here is an
          unforgettable experience that touches the heart and delights the
          senses!
        </span>{" "}
        <br></br> <br></br>
      </h2>
      <div className="budapest-buttons">
        <a
          href="#"
          onClick={() => {
            navigate("/myOrient/zagreb");
          }}
        >
          Continue <br></br>to Zagreb{" "}
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
      <div className="budapest-images">
        <img width="30%" className="budapest-img" src={Budapest2} alt="" />
        <img width="30%" className="budapest-img" src={Budapest3} alt="" />
        <img width="30%" className="budapest-img" src={Budapest4} alt="" />
      </div>
    </div>
  );
};

export default Budapest;
