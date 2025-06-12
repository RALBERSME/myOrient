import { useState } from "react";
import ReactPlayer from "react-player";
import "./MoreInfo.css";
import { useNavigate } from "react-router-dom";
const MoreInfo = () => {
  const navigate = useNavigate();
  let givenState = window.innerWidth <= 768 ? true : false;
  const [mobile, setMobile] = useState(givenState);
  return (
    <div className="MoreInfo">
      <div className="mInfo-header">
        <ul>
          <li>M</li>
          <li>O</li>
          <li>R</li>
          <li>E</li>
          <li>-</li>
          <li>I</li>
          <li>N</li>
          <li>F</li>
          <li>O</li>
          <li>R</li>
          <li>M</li>
          <li>A</li>
          <li>T</li>
          <li>I</li>
          <li>O</li>
          <li>N</li>
        </ul>
        <br></br>
        <br></br>
        <ul>
          <li>M</li>
          <li>O</li>
          <li>R</li>
          <li>E</li>
          <li>-</li>
          <li>I</li>
          <li>N</li>
          <li>F</li>
          <li>O</li>
          <li>R</li>
          <li>M</li>
          <li>A</li>
          <li>T</li>
          <li>I</li>
          <li>O</li>
          <li>N</li>
        </ul>
        <br></br>
        <br></br>
        {mobile && (
          <>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
              <li>R</li>
              <li>M</li>
              <li>A</li>
              <li>T</li>
              <li>I</li>
              <li>O</li>
              <li>N</li>
            </ul>
            <br></br>
            <br></br>
            <ul>
              <li>M</li>
              <li>O</li>
              <li>R</li>
              <li>E</li>
              <li>-</li>
              <li>I</li>
              <li>N</li>
              <li>F</li>
              <li>O</li>
            </ul>
            <br></br>
            <br></br>
          </>
        )}
      </div>
      <div className="container-mInfo">
        <div className="mInfo-deutsch">
          Der legendäre Orient-Express – eine Reise in die Vergangenheit des
          Luxus und der Eleganz
          <br></br>
          Der Orient-Express ist mehr als nur ein Zug; er ist ein Symbol für den
          glamourösen Reiseverkehr vergangener Zeiten. Seine Geschichte beginnt
          im Jahr 1883, als die belgische Firma Compagnie Internationale des
          Wagons-Lits die erste Verbindung zwischen Paris und Konstantinopel
          (heute Istanbul) ins Leben rief. Ziel war es, eine komfortable,
          schnelle und sichere Verbindung zwischen Westeuropa und dem
          Osmanischen Reich zu schaffen – eine Pionierleistung, die den
          internationalen Reiseverkehr revolutionierte. Der Zug wurde schnell
          zum Inbegriff von Luxus, Exklusivität und Abenteuer.
          <br></br>
          Die Route des Orient-Express erstreckte sich über rund 2.700
          Kilometer, wobei die Strecke in mehreren Abschnitten zurückgelegt
          wurde. Die wichtigsten Stationen waren Paris, Straßburg, Wien,
          Budapest, Belgrad, Sofia und schließlich Istanbul. Die Reisezeit
          variierte je nach Epoche und Fahrplan, lag aber typischerweise bei
          etwa 65 bis 80 Stunden, also mehr als zwei Tage. Die Halte in den
          Städten dauerten meist zwischen 30 Minuten und mehreren Stunden, um
          Passagiere ein- und aussteigen zu lassen, den Zug zu kontrollieren und
          den Service zu gewährleisten.
          <br></br>
          Der Zug war berühmt für seine luxuriösen Waggons, die mit edlen
          Materialien, eleganten Holzverkleidungen und komfortablen Schlaf- und
          Speisewagen ausgestattet waren. Das Personal bestand aus
          hochqualifizierten Schaffnern, Stewardessen, Köchen und Technikern,
          die den Passagieren einen erstklassigen Service boten. Berühmte
          Persönlichkeiten, Adelige, Künstler und Geschäftsleute reisten mit dem
          Orient-Express – eine Reise, die oft auch als Statussymbol galt. Die
          Kosten für eine Fahrt waren entsprechend hoch: Ein Ticket für die
          komplette Strecke konnte mehrere Hundert Goldfranken kosten, was den
          Zug vor allem für wohlhabende Reisende attraktiv machte.
          <br></br>
          Der Orient-Express wurde berühmt für sein elegantes Ambiente, seine
          Pünktlichkeit und den Hauch von Abenteuer, den er vermittelte. Er war
          nicht nur ein Transportmittel, sondern ein Erlebnis, das den Reisenden
          das Gefühl gab, in eine andere Welt einzutauchen. Die legendäre
          Atmosphäre, die nostalgische Architektur der Waggons und die
          atemberaubenden Ausblicke auf die europäische und anatolische
          Landschaft machten die Reise unvergesslich.
          <br></br>
          Mit dem Aufkommen des Flugverkehrs und der Modernisierung des
          Eisenbahnnetzes in den 1960er Jahren begann der Niedergang des
          Orient-Express. Die zunehmende Konkurrenz, veränderte
          Reisegewohnheiten und die hohen Betriebskosten führten dazu, dass der
          ursprüngliche Luxuszug in den 1970er Jahren eingestellt wurde. Dennoch
          lebt die Legende bis heute weiter: Verschiedene Nachfolge- und
          Nostalgiefahrten, wie der berühmte "Venice Simplon-Orient-Express",
          ziehen weiterhin Reisende aus aller Welt an, die den Zauber
          vergangener Zeiten wieder aufleben lassen möchten.
          <br></br>
          Der Orient-Express bleibt ein Symbol für den Glanz und die Romantik
          einer Ära, in der Reisen noch ein Erlebnis war – eine faszinierende
          Verbindung von Geschichte, Luxus und Abenteuer, die bis heute
          fasziniert.
          <div className="mInfo-links">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-cH-BCGgIHo"
              width="24rem"
              height="20rem"
              volume=".2"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=5vkoJU45G4E"
              width="24rem"
              height="20rem"
              volume=".2"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=gSxqZC6mApw"
              width="24rem"
              height="20rem"
              volume=".2"
            />
          </div>
        </div>
        <div className="mInfo-englisch">
          The Legendary Orient Express – A Journey into the Past of Luxury and
          Elegance
          <br></br>
          The Orient Express is more than just a train; it is a symbol of the
          glamorous travel of bygone times. Its story begins in 1883, when the
          Belgian company Compagnie Internationale des Wagons-Lits established
          the first connection between Paris and Constantinople (now Istanbul).
          The goal was to create a comfortable, fast, and safe connection
          between Western Europe and the Ottoman Empire – a pioneering
          achievement that revolutionized international travel. The train
          quickly became the epitome of luxury, exclusivity, and adventure.
          <br></br>
          The route of the Orient Express stretched over approximately 2,700
          kilometers, with the journey being made in several stages. The most
          important stops were Paris, Strasbourg, Vienna, Budapest, Belgrade,
          Sofia, and finally Istanbul. Travel time varied depending on the era
          and timetable, but was typically around 65 to 80 hours, or more than
          two days. Stops in cities usually lasted between 30 minutes and
          several hours to allow passengers to board and disembark, check the
          train, and ensure service.
          <br></br>
          The train was famous for its luxurious carriages, which featured fine
          materials, elegant wood paneling, and comfortable sleeping and dining
          cars. The staff consisted of highly qualified conductors,
          stewardesses, cooks, and technicians who provided passengers with
          first-class service. Famous people, aristocrats, artists, and
          businessmen traveled on the Orient Express – a journey that was often
          considered a status symbol. The cost of a single journey was
          correspondingly high: a ticket for the entire journey could cost
          several hundred gold francs, making the train particularly attractive
          to wealthy travelers.
          <br></br>
          The Orient Express became famous for its elegant ambience, its
          punctuality, and the sense of adventure it conveyed. It was not just a
          means of transportation, but an experience that gave travelers the
          feeling of being immersed in another world. The legendary atmosphere,
          the nostalgic architecture of the carriages, and the breathtaking
          views of the European and Anatolian landscapes made the journey
          unforgettable.
          <br></br>
          With the advent of air travel and the modernization of the railway
          network in the 1960s, the Orient Express began to decline. Increasing
          competition, changing travel habits, and high operating costs led to
          the discontinuation of the original luxury train in the 1970s.
          Nevertheless, the legend lives on today: Various successor and
          nostalgic journeys, such as the famous "Venice
          Simplon-Orient-Express," continue to attract travelers from all over
          the world seeking to relive the magic of bygone times.
          <br></br>
          The Orient Express remains a symbol of the splendor and romance of an
          era when travel was still an experience—a fascinating combination of
          history, luxury, and adventure that continues to fascinate today.
          <div className="mInfo-links">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=3X57kXSRVuc"
              width="24rem"
              height="20rem"
              volume=".2"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=wg6g09MMeDU"
              width="24rem"
              height="20rem"
              volume=".2"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=VaVKQxScby0"
              width="24rem"
              height="20rem"
              volume=".2"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=gSxqZC6mApw"
              width="24rem"
              height="20rem"
              volume=".2"
            />
          </div>
        </div>
        <div className="mInfo-button">
          <a
            id="mInfo-button"
            href="#"
            onClick={() => {
              navigate("/");
            }}
          >
            <span> Back to Main Page</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
