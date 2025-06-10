import React from "react";
import "./Belgrad.css";
import { useNavigate } from "react-router-dom";
import Belgrad2 from "../../assets/Belgrad2.jpg";
import Belgrad3 from "../../assets/Belgrad3.jpg";
import Belgrad4 from "../../assets/Belgrad4.jpg";
import Belgrad5 from "../../assets/Belgrad5.jpg";
const Belgrad = () => {
  const navigate = useNavigate();
  return (
    <div className="Belgrad">
      <div className="belgrad-container">
        <h2 className="belgrad-letters">
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
          <span>-</span>
          <span>t</span>
          <span>o</span>
          <span>-</span>
          <span>B</span>
          <span>e</span>
          <span>l</span>
          <span>g</span>
          <span>r</span>
          <span>a</span>
          <span>d</span>
        </h2>
        <br></br>
        <div className="belgrad-images">
          <img src={Belgrad2} alt="" />
          <img src={Belgrad3} alt="" />
          <img src={Belgrad4} alt="" />
          <img src={Belgrad5} alt="" />
        </div>
        <br></br>
        <h3>
          Willkommen in Belgrad, einer faszinierenden Stadt, die im Jahr 1920
          mit ihrer lebendigen Atmosphäre und reichen Geschichte begeistert! Mit
          etwa 150.000 Einwohnern ist Belgrad damals eine bedeutende Metropole
          im Herzen Europas. Nach den Wirren des Ersten Weltkriegs hat sich die
          Stadt zu einem wichtigen kulturellen und politischen Zentrum
          entwickelt, das Hoffnung und Neubeginn symbolisiert.
          <br></br>
          <br></br>
          Die Stadt besticht durch ihre beeindruckenden Bauwerke. Das imposante
          Kalemegdan-Fort, das hoch über der Donau und Save thront, bietet einen
          atemberaubenden Blick auf die Stadt und ist ein Zeugnis ihrer langen
          Geschichte. Die prächtigen Kirchen, wie die St. Michael-Kirche,
          spiegeln die religiöse Vielfalt wider. Moderne und historische
          Architektur verschmelzen hier zu einem einzigartigen Stadtbild, das
          sowohl Tradition als auch Fortschritt zeigt.
          <br></br>
          <br></br>
          Das Nachtleben in Belgrad ist lebhaft und einladend. Die Cafés, Bars
          und Tanzlokale pulsieren vor Energie, während die Musik die Straßen
          erfüllt. Besonders die traditionelle serbische Volksmusik, aber auch
          Jazz und moderne Klänge, ziehen Einheimische und Besucher
          gleichermaßen in ihren Bann. Die kulturelle Szene ist lebendig:
          Theater, Literatur und Kunst blühen auf. Namen wie der berühmte
          Schriftsteller Ivo Andrić, der später den Nobelpreis erhält, sind hier
          bereits aktiv und prägen die literarische Landschaft.
          <br></br>
          Belgrad ist auch ein Ort der musikalischen Vielfalt. Die
          traditionellen Klänge der Gusle, begleitet von Gesang, sind tief
          verwurzelt in der serbischen Kultur. Gleichzeitig beginnt die Stadt,
          sich für europäische Musikstile zu öffnen, was die kulturelle
          Offenheit unterstreicht.
          <br></br>
          <br></br>
          Politisch hat das Ende des Ersten Weltkriegs die Region stark
          verändert. Serbien ist nun Teil des neu gegründeten Königreichs der
          Serben, Kroaten und Slowenen, das später Jugoslawien genannt wird.
          Diese Veränderungen bringen Hoffnung auf Stabilität und eine
          gemeinsame Zukunft, auch wenn die Nachwirkungen des Krieges noch
          spürbar sind.
          <br></br>
          <br></br>
          Insgesamt ist Belgrad im Jahr 1920 eine aufstrebende Stadt voller
          Leben, Geschichte und kultureller Vielfalt. Für Europa bedeutet sie
          eine Brücke zwischen Ost und West, zwischen Tradition und Moderne. Ein
          Ort, der mit seinem Charme und seiner Bedeutung noch lange in
          Erinnerung bleibt!
        </h3>{" "}
        <br></br>
        <h3 className="belgrad-english">
          Welcome to Belgrade, a fascinating city that, in 1920, captivated
          visitors with its vibrant atmosphere and rich history! With
          approximately 150,000 inhabitants, Belgrade was then a major
          metropolis in the heart of Europe. After the turmoil of the First
          World War, the city developed into an important cultural and political
          center, symbolizing hope and a new beginning.
          <br></br>
          <br></br>
          The city is captivating with its impressive buildings. The imposing
          Kalemegdan Fortress, towering high above the Danube and Sava rivers,
          offers breathtaking views of the city and is a testament to its long
          history. Magnificent churches, such as St. Michael's Church, reflect
          religious diversity. Modern and historic architecture blend here to
          create a unique cityscape that showcases both tradition and progress.
          <br></br>
          <br></br>
          Belgrade's nightlife is lively and inviting. The cafés, bars, and
          dance halls pulsate with energy, while music fills the streets.
          Traditional Serbian folk music, in particular, but also jazz and
          modern sounds, captivate locals and visitors alike. The cultural scene
          is vibrant: theater, literature, and art are flourishing. Names like
          the famous writer Ivo Andrić, who later received the Nobel Prize, are
          already active here and shape the literary landscape. Belgrade is also
          a place of musical diversity. The traditional sounds of the gusle,
          accompanied by singing, are deeply rooted in Serbian culture. At the
          same time, the city is beginning to embrace European musical styles,
          underscoring its cultural openness.
          <br></br>
          <br></br>
          Politically, the end of the First World War has brought significant
          changes to the region. Serbia is now part of the newly founded Kingdom
          of Serbs, Croats, and Slovenes, later called Yugoslavia. These changes
          bring hope for stability and a shared future, even if the aftermath of
          the war is still felt. <br></br>
          <br></br>
          Overall, Belgrade in 1920 was an up-and-coming city full of life,
          history, and cultural diversity. For Europe, it represented a bridge
          between East and West, between tradition and modernity. A place whose
          charm and significance will remain in our memories for a long time!
        </h3>
        <div className="belgrad-button">
          <a
            href="#"
            onClick={() => {
              navigate("/myOrient/sofia");
            }}
          >
            Continue <br></br>to Sofia{" "}
          </a>
          <a
            href="#"
            onClick={() => {
              navigate("/myOrient");
            }}
          >
            Back <br></br>to Main Page{" "}
          </a>
        </div>{" "}
        <br></br>
      </div>
    </div>
  );
};

export default Belgrad;
