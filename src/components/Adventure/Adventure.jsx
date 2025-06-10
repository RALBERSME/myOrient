import "./Adventure.css";
import { useNavigate } from "react-router-dom";

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const Adventure = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Adventure" id="adventure-top">
        <div className="adventure-German">
          <div
            class="zig-zag zig-zag-color5"
            onClick={() => {
              navigate("/myOrient");
            }}
          >
            <a href="#">
              <marquee>
                Click here for Home Page! Click here for Home Page!
              </marquee>
            </a>
          </div>
          <br></br>
          <br></br>
          <div class="zig-zag zig-zag-color4" id="jumpHere">
            <a className="adventure-English" href="#adventure-english">
              {" "}
              Click here for English translation
            </a>
          </div>
          <br></br>
          <br></br>
          <div class="zig-zag zig-zag-color1">Auftakt in Paris</div>
          <h2 className="adventure-text">
            Es war ein warmer, goldener Spätnachmittag im Sommer 1920, als das
            Ehepaar Moreau in Paris den legendären Orient-Express bestieg. Alice
            Moreau drückte ihrem Mann einen fetten Kuss auf die Wange. „Endlich
            kann unser gemeinsames Abenteuer losgehen“, hauchte sie ihm sanft
            ins Ohr. Louis Moreau zwinkerte ihr amüsiert zu, wandte sich dann
            aber dem Steward zu, der an sie herangetreten war.
            <br></br> <br></br>
            „Willkommen an Bord! Madame Moreau, Monsieur Moreau, treten Sie ein,
            in die Welt des Luxus!“, begrüßte dieser sie. „Darf ich Sie zu Ihrem
            Abteil führen? Sie logieren in Nummer 4, eine exzellente Wahl.
            Himmelbett, gemütliche Sitzgruppe, Obst und Getränke frei, soviel
            Sie möchten. Hier geht es lang…oh, mein Herr, darf ich Ihnen Ihr
            Gepäck abnehmen? Unser Schaffner kümmert sich um Ihre Koffer, aber
            geben Sie mir doch einfach den riesigen Käfig aus Ihrer Hand. Den
            kann ich doch tragen.“
            <br></br> <br></br>
            Daraufhin streckte er seine Hand in Richtung Louis Moreau, der kurz
            die Regung verlor und barsch erwiderte. „Lassen Sie das, der Käfig
            ist viel zu schwer für Sie.“ Am Gesichtsausdruck des Stewards
            erkannte er, dass er offensichtlich zu harsch reagiert hatte und
            schob schnell eine Rechtfertigung nach. „Wissen Sie, das ist ein
            Hyazinth-Ara, also ein sehr wertvoller Papagei. Wir besitzen ihn
            seit drei Jahren und haben ihm sogar das Sprechen beigebracht.
            Allerdings reagiert er sehr stark auf fremde Menschen. Immer, wenn
            er einen unbekannten Menschen sieht, kreischt er lauthals los. Ich
            wollte vermeiden, dass er all die anderen Gäste belästigt.“{" "}
            <br></br> <br></br>
            „Oh“, wandte der Steward verständnisvoll ein, „da brauchen Sie keine
            Sorge zu haben. Alle anderen Passagiere haben den Zug bereits hier
            in Paris verlassen. Sie sind die einzigen Gäste an Bord.“ <br></br>
            „Wie?“, Moreaus Stimme klang irritiert, „keine anderen Reisenden?
            Wie kann sich die Fahrt denn dann von Paris nach Konstantinopel für
            die Betreibergesellschaft überhaupt lohnen?“
            <br></br> <br></br>
            Der Steward grinste. „Seien Sie unbesorgt, die Preise sind gut
            kalkuliert. Das rechnet sich schon. Insbesondere steigen ab Wien
            diverse Fahrgäste zu. Schauen Sie hier, auf meine Liste. Morgen früh
            erwarten wir in Österreich Frau Fischer aus Deutschland, den Belgier
            Luc Claes und Frau Petrovic. Dann werden die Abteile 2 bis 5 alle
            belegt sein“. Neugierig schob der Steward seinen Kopf in Richtung
            Vogelkäfig. „Darf ich den Ara denn kurz begrüßen?“
            <br></br> <br></br>
            Alice glitt ihrem Mann mit der Hand über die Schulter. Dann warf sie
            einen warmherzigen Blick in Richtung Steward und zog mit ihrer
            anderen Hand das Tuch vom Käfig, so dass ein großer, blauer Vogel
            mit gelben Augen zum Vorschein kam. „Vive la France! Vive la
            France!“, krächzte dieser und lies den Steward zusammenzucken. Dann
            brachen alle in ein herzhaftes Gelächter aus. „Nein, was ein
            reizender Begleiter“, rief der Steward perplex aus und klatschte
            begeistert in die Hände. „So ein schöner und vor allem lustiger
            Vogel!" Alsdann ertönte der Pfiff des Schaffners zur Abfahrt, so
            dass alle in den Zug drängten, bevor sich die Türen schlossen und
            die Reise in die unbekannten Weiten Europas begann.
            <br></br>
          </h2>
          <div class="zig-zag zig-zag-color1">Hauptbahnhof Wien</div>
          <h2 className="adventure-text">
            Für die etwa 1000 Kilometer von Paris nach Wien brauchte der Zug
            rund 15 Stunden, so dass er zur Frühstückszeit in Wien einlief.
            Während Alice Moreau sich entschlossen hatte, auszuschlafen, nutzte
            Louis den einstündigen Aufenthalt, um am Hauptbahnhof ein paar
            Besorgungen zu tätigen. Zurück am Bahnsteig nahm er auf einer Bank
            Platz, um bis zur Abfahrt des Zuges noch in Ruhe einen Zigarillo zu
            rauchen und die Tageszeitung zu studieren, die er gerade erworben
            hatte. Er schlug die Zeitung auf und brannte mit dem Zigarillo ein
            kleines Loch hinein. Es erlaubte ihm, den Orient Express im Auge zu
            behalten. Und er staunte nicht schlecht, als eine junge Dame sich
            dem Zug näherte. Obgleich sie nur ein schlichtes, graues Sommerkleid
            tug, nagten sich Louis Augen quasi durch das Zeitungsloch. Die Frau
            war das blühende Leben, geschwungene Rundungen, rote Lippen,
            wallendes rotbraunes Haar, im Grunde alles, was ein Männerherz wie
            das seine in Wallung bringen konnte. Die Reise würde somit aufregend
            werden, das stand für ihn fest.
            <br></br> <br></br>
            Doch die Konkurrenz schien auch nicht auf sich warten zu lassen.
            Kurz nach der Dame bestieg nämlich ein fescher, muskulöser junger
            Mann in einem prachtvollen Armani-Anzug mit weißem Hemd und Fliege
            den Express. Er unterhielt sich mit dem Steward auf Französisch,
            doch Louis konnte den belgischen Akzent sofort heraushören. Das
            musste also dieser Luc Claes sein, dachte Louis und entschied, sich
            diesen Herren näher anzusehen. <br></br> <br></br>
            Daher stand auf, faltete die Zeitung zusammen und drückte den
            Zigarillo aus. Er war gerade dabei, die Stiege des Zuges zu
            betreten, als er in der Ferne eine Frauenstimme wahrnahm. „Halt,
            halt, ich muss noch mit“, rief eine gutbeleibte Dame mit
            osteuropäischer Erscheinung und Sommerhütchen. Es schien, als rannte
            sie um ihr Leben. Ihr Gesicht war vor Anstrengung bereits rot
            angelaufen und im Schlepptau folgte ihr im Laufschritt ein Junge,
            der einen mit Koffern überladenen Gepäckwagen schob.
            <br></br> <br></br>
            Mit überschwänglichem Gehabe und seinen ganzen Charme ausspielend
            half Louis der Dame, die sich als Jelena Petrovic vorstellte, beim
            Einstieg. Damit war eine weitere, redefreudige Reisegefährtin an
            Bord. Das erkannte auch der Steward, der alle Passagiere nun zu
            einem Kennlerndrink in den Gesellschaftsraum einlud. Jelena Petrovic
            lies sich das nicht zweimal sagen und leerte gleich mehrere Gläser
            Champagner. Die bereits gute Stimmung an Bord wurde noch heiterer.
            Schon bald ereiferte sich einjeder, über seine Herkunft, seine Ziele
            und den Grund für die Wahl des Orient-Expresses zu berichten.
            <br></br> <br></br>
            So erfuhr, Louis, der sich und seine Frau Alice als
            Antiquitätenhändler in Paris vorgestellt hatte, dass Jelena
            Journalistin bei einer serbischen Tageszeitung war und sich auf der
            Rückfahrt nach Belgrad befand. Sie war 31, verheiratet, aber ohne
            Kinder und steckte ihre Nase gerne in alles hinein. Stundenlang
            konnte sie Recherche betreiben, was ihren Mann mitunter zur
            Verzweiflung brachte. Der wollte nämlich lieber mit ihr eine Familie
            gründen. Natürlich wollte auch sie Kinder haben, aber noch nicht
            jetzt, wo es bei der Zeitung so spannend war. Ihr Mann arbeitete als
            erfolgreicher Immobilienhändler und das war auch wichtig, denn das
            Gehalt, das die Zeitung ihr zahlte, war eher als Almosen zu
            bezeichnen, statt einer Lebensgrundlage. Aber der Journalismus war
            ihr Lebensinhalt.
            <br></br> <br></br>
            Im Gegensatz zur redseligen Jelena wirkte Luc Claes zurückhaltender.
            Er vermittelte einen ruhigen, eleganten und doch auf seine Art und
            Weise sehr charmanten Eindruck. Ihm entging nichts, was die
            Damenwelt betraf. So besorgte er für Jelena neue Getränke und
            reichte ihr sogar Eiswürfel, mit denen sie ihr noch immer rotes
            Gesicht zu kühlen versuchte. Alice hörte er mit einem Dauernicken
            zu, als diese über ihr Antiquitätengeschäft in der Rue du Grand
            Espoir sprach und kommentierte dies unentwegt mit „C'est chouette!
            That's great! Très chouette! Very cool!" Das alles vermittelte Louis
            den Eindruck, als habe Luc eine Schallplatte mit Sprung verschluckt.
            Gleichzeitig versprürte er in sich aber auch ein Gefühl von
            Eifersucht. Musste dieser Luc sich gleich an seine Frau ranmachen?
            <br></br> <br></br>
            Und dann war da noch die Deutsche. Clara Fischer hieß sie. Angeblich
            hatte ihr Vater ihr die Reise bezahlt, als letztes großes Erlebnis
            vor ihrer Hochzeit im Herbst. Sie war jetzt 28 und damit schon recht
            alt für ein Fräulein. Auch wenn der erste Weltkrieg dazwischen
            gekommen war, warum war so ein Rasseweib nicht schon lange unter der
            Haube? Louis konnte sich keinen Reim aus alle dem machen. Wenn sie
            schon eine so große Reise durch Europa antrat, von der die Fahrt mit
            dem Orient-Express nur der Auftakt zu sein schien, warum reiste sie
            dann nur mit einem kleinen Koffer? Weshalb war sie so schlicht
            gekleidet? Ihr Vater schien doch Geld wie Heu zu haben! Und welcher
            zukünftige Gatte wäre damit einverstanden, dass seine Verlobte ohne
            ihn auf Abenteuerreise ging? Das alles passte aus seiner Sicht
            überhaupt nicht zusammen.
            <br></br> <br></br>
            Louis wischte sich mit der Hand übers Gesicht. Er wollte seine
            Gedanken vertreiben. Heiß sah die Clara aus, wirklich einladend. Er
            stellte sich schon ein Tête-à-tête mit ihr vor. Noch waren es 250
            Kilometer bis nach Budapest, also genug Zeit, um tiefergehende
            Beziehungspflege betreiben zu können. Daher lud Louis alle
            Anwesenden zu einer Runde Gin-Fizz ein, den er bei diesen
            Temperaturen als besonders erfrischendes Getränk anpries. Nachdem
            alle ihr Glas geleert hatten, beschlossen die Gäste, sich bis zum
            Mittagessen noch in ihre Abteile zu geben, um sich frisch zu machen.
            <br></br> <br></br>
            Das Mittagessen wurde um 13 Uhr im Speisewagen serviert. Dort waren
            zweier Tische eingedeckt worden, an denen die Reisenden nun Platz
            nahmen. Louis schob seinen Arm über den Tisch und streichelte
            liebevoll die Hand seiner Frau. Dabei schaute er sie mitleidsvoll
            an. „Meine Ärmste. Da reisen wir schon im vollen Luxus und Du
            bekommst Migräne und kannst das alles hier gar nicht genießen. Hast
            Du die zwei Stunden wenigsten gut geschlafen, Liebes? Geht es dir
            nun besser?“
            <br></br> <br></br>
            Alice stützte ihren Kopf erschöpft ab. „Entschuldigung, Liebling.
            Ich weiß auch nicht warum. Es ging einfach los, das Gehämmere in
            meinem Kopf. Ich hab es selten so heftig wie heute gespürt.
            Vermutlich macht sich in mir all der Stress der letzten Wochen
            breit.“ Sie stöhnte, „Louis, das ist mir unendlich peinlich.
            Natürlich habe ich die Schlaftablette genommen, die Du mir gegeben
            hattest. Vielleicht bin ich deshalb noch nicht so richtig wach, aber
            es geht mir schon besser.“ Louis drückte ihr sanft bestätigend die
            Hand, wusste er doch, dass die Migräne nicht zufällig eingetreten
            war. Schnell hatte er in der Ehe mit Alice bemerkt, wie einfach man
            sie manipulieren konnte, um seinen Willen durchzusetzen. Es war gut
            zu wissen, dass man Alice mit etwas Histamin, welches sich in jedem
            Zitronensaft befand, für Stunden ausschalten konnte. Er machte gerne
            davon Gebrauch, wenn er es für nützlich ansah.
            <br></br> <br></br>
            Dann betraten die übrigen Gäste den Speisewagen. Auch Luc Claes, der
            jetzt einen dreiteiligen Anzug mit Weste trug. Louis spürte erneut,
            wie die Eifersucht in ihm hochstieg. Er erinnerte sich daran, wie er
            vor weniger als zwei Stunden aus seinem Abteil geschlichen war, um
            Clara Fischer einen Besuch abzustatten. Dabei war er im Gang auf Luc
            getroffen. Louis war sich nicht sicher, ob Luc auch ihn gesehen
            hatte. Fest stand aber, dass Luc an Jelenas Abteiltür geklopft
            hatte. Sicherlich hatte sie ihn auch eingelassen, ging es ihm durch
            den Kopf. Warum sonst nahmen die beiden nun an ein und demselben
            Tisch Platz?
            <br></br> <br></br>
            Louis Gedanken kreisten mehr und mehr um Luc. Dieser Bursche schien
            jedes Damenherz an Bord im Nu zu erobern. Louis war so auf Luc
            fokussiert, dass er weder zur Kenntnis nahm, was ihm seine Frau mit
            gedämpfter Stimme über den Tisch zuflüsterte, noch dass Clara
            Fischer nicht zum Mittagessen im Speisewagen erschienen war. Erst
            als die Serviererin die Miesmuschelsuppe auftischte, kehrte er ins
            Hier und Jetzt zurück.
            <br></br> <br></br>
            Um 14:05 Uhr sollte der Zug in Budapest ankommen. Wie spät war es
            jetzt? Louis schob seine Anzugjacke ein wenig hoch, um auf die Uhr
            zu schauen. Er erschrak, denn die teure Cartieruhr befand sich nicht
            mehr an seinem Arm. Wo konnte sie hingekommen sein? Er dachte nach,
            wo er sie abgenommen haben könnte.
            <br></br> <br></br>
            Wie Schuppen fiel es ihm von den Augen. Ja, bei Clara im Abteil.
            Dort hatte er sie für das Schäferstündchen abgenommen und auf den
            Beistelltisch gelegt. Was für ein Trottel er doch war. Die teure
            Cartier Tank! Er erinnerte sich noch genau, wie er das gute Stück
            bei Les Champs d'Or im Schaufenster gesehen hatte. Das war Liebe auf
            den ersten Blick und obwohl sie 30.000 Francs gekostet hatte, musste
            er sie haben, so wie er immer alles haben musste, was ihn ansprach.
            So, wie er auch Clara haben musste, dieses Flittchen. Nach dem Essen
            würde er dort nach dem Rechten schauen müssen.
            <br></br> <br></br>
            Zu Louis Leidwesen zog sich die Mahlzeit unendlich lange hin, denn
            wer Luxus bestellt, bekommt auch Luxus geliefert. Das 5-Gängemenu
            mit seinen Potages, Hors d'œuvre, Poissons, Removés, Entrée und Rôti
            war passend auf die Zugfahrt abgestimmt und so lief der
            Orient-Express bereits in Budapest ein, bevor der letzte Bissen
            vertilgt worden war.
          </h2>
          <div class="zig-zag zig-zag-color1">Hauptbahnhof Budapest</div>
          <h2 className="adventure-text">
            Alice schwärmte. „Cherie, das war délicieux! Mir geht es schon viel
            besser. Wollen wir hier in Budapest kurz aussteigen? Bitte, mir wird
            die frische Luft sicher gut tun und wir haben ja noch eine Stunde
            Zeit, bis der Zug weiterfährt“.
            <br></br> <br></br>
            Als treuherziger Ehemann konnte Louis seiner Frau diese Bitte nicht
            abschlagen und so begaben sie sich auf einen Mokka in ein
            traditionelles Budapester Kaffeehaus unweit des Hauptbahnhofs. Alice
            blühte regelrecht auf. Die elegante Ausstattung, die
            Kaffeehausmusik, das ganze Flair des Kaffeehauses imponierten ihr so
            sehr, dass sie am liebsten einen ganzen Tag hier verbracht hätte.
            Auch Louis ließ sich von der heiteren Stimmung anstecken. Sein Blick
            schweifte über die Kristallleuchter, die hohen Marmorsäulen und
            antiken Holzvertäfelungen. Auch er genoss diesen Anblick von Luxus.
            Seine Freude erlosch jedoch augenblicklich, als ihm ein Zweiertisch
            hinter den Orchideen-Stauden auffiel. Nicht glauben wollend, was er
            dort sah, kniff er sich in den Arm. Aber es war keine Einbildung. Am
            Tisch hinter den Orchideen saß Luc Claes mit dem Flittchen aus dem
            Zug. Da hatte er sich ja schnell die Nächste geangelt, schoss es
            Louis in den Sinn und irgendwie fühlte er sich in seiner männlichen
            Eitelkeit verletzt. Er schluckte schwer. Dann entschied er, dass
            dies der passende Moment sei, um in aller Ruhe seine Uhr aus Claras
            Abteil zu holen, denn solange das Fräulein hier saß, hätte er freie
            Hand.
            <br></br> <br></br>
            Daher erklärte er Alice, dass es Zeit sei, zurück zu kehren, um den
            Zug nicht zu verpassen. Alice scherzte zwar, dass ihr das nicht
            recht sei, doch erkannte sie rasch am festen Handgriff ihres Manns
            an ihrem Oberarm, dass jetzt keine Zeit für Diskussionen war.
            <br></br> <br></br>
            An Bord machten sie Bekanntschaft mit Kemal Yilmaz, der in Abteil 6
            eingezogen war. Louis kannte ihn schon aus der Zeitung. Er war 45
            Jahre alt und arbeitete als hochraniger Regierungsbeamter für den
            Osmanischen Staat. Im ersten Weltkrieg hatte er Widerstand gegen das
            Bündnis zwischen dem Osmanischen Reichs und Deutschland geleistet.
            Damals wurde er dafür eingesperrt. Nun kämpfte er für die Einhaltung
            des Vertrages von Sevres, der die Auflösung des Osmanischen Reiches
            regelte und demzufolge weite Teile des alten Staatsgebietes
            abgetreten werden mussten. Für viele Türken war er folglich nichts
            als ein Verräter. Kein Wunder, dass er sich bei einer solchen
            Stellung diese Reise leisten konnte. Vermutlich rechnete er alle
            Kosten zu Lasten der Steuerzahler ab, schlussfolgerte Louis. Doch er
            hatte kein Interesse, sich näher mit Kemal zu befassen. Alice war da
            anderer Ansicht. Sie liebte gebildete, belesene Menschen und da
            Yilmaz beim Anblick des Flügels im Gesellschaftszimmer verlautbart
            hatte, er habe früher darüber nachgedacht, Musik zu studieren,
            begleitete sie ihn zu einer Hörprobe dorthin.
            <br></br> <br></br>
            Louis war dies recht, da er noch unauffällig seine Uhr aus Abteil 2
            holen musste. Mit einer Haarnadel in der Hand begab er sich daher in
            Richtung des Abteils und erkannt sofort, dass er dieses Hilfsmittel
            gar nicht benötigte, denn die Abteiltür stand bereits sperrangelweit
            offen. Das Reinigungspersonal brachte frische Handtücher und schaute
            nach dem Rechten. <br></br> <br></br>
            Louis spähte durch die offene Tür auf den Beistelltisch, konnte
            seine Cartier aber nicht finden. In seiner Not holte er rasch eine
            Flasche Rotwein aus seinem Abteil, die er vor dem Speisewagen auf
            dem Boden zerschellen lies. Dann eilte er zur Reinigungskraft, der
            er andeutete, sie solle rasch den Gang zu säubern, bevor sich jemand
            an den Scherben verletze oder die hartnäckigen Rotweinflecken nicht
            mehr beseitigt werden könnten. Seinem Plan folgend, eilte die
            Reinigungskraft aus Claras Abteil, um Besen und Kelle zu besorgen
            und vergaß dabei, die Tür abzuschließen. Louis huschte in Claras
            Abteil, um es nach seiner Uhr abzusuchen. Dabei musste er sich
            beeilen, denn Clara und Luc würden spätestens in 20 Minuten zurück
            sein, wenn sie die Abfahrt nicht verpassen wollten. <br></br>{" "}
            <br></br>
            Rasch spähte er in den kleinen Koffer, der zu seiner Überraschung
            fast leer war. Er durchsuchte den Schrank, schaute hinter den
            Bildern und unter dem Bett nach. Nichts. Seine Uhr war nicht da.
            <br></br> <br></br>
            Vom Bahnsteig her erschall plötzlich lautes Gelächter. Louis
            erkannte es. Es war Clara. Auch die Reinigungskraft hatte ihre
            Rückker bemerkt. Eilig zog sie die Tür zu Claras Abteil zu und
            schloss ab, ohne nochmals ins Zimmer geschaut zu haben. In keinem
            Fall wollte sich sich dem Verdacht ausetzen, ihren Dienst unachtsam
            versehen zu haben.
            <br></br> <br></br>
            Louis rann der Schweiß aus allen Poren. Jetzt saß er in der Falle.
            Was würde passieren, wenn man ihn hier erwischte und die Polizei
            riefe? All seine Arbeit wäre dann umsonst gewesen. Das durfte nicht
            sein. Es blieb ihm nur das Fenster. Zügig drückte er dieses auf und
            kletterte auf das Dach des Zuges. Um nicht vom Bahnsteig aus gesehen
            zu werden, robbte er auf dem Dach vorwärts. Er schob sich über das
            Abteil von Luc hinweg, in welches er so gerne hineingeschaut hätte.
            Es interessierte ihn zu wissen, ob Luc nun das Flittchen nun zu sich
            einladen würde. Innerlich kochte es in Louis. Das Flittchen brachte
            ihn wirklich zur Weißglut. Er kroch noch ein wenig weiter, bis an
            die Stelle, an der er sein eigenes Abteil vermutete. Vorsichtig
            blickte er seitlich am Wagon hinunter und erblickte das Fenster. Wie
            auch die anderen Fenster war es geschlossen, doch dort, wo der obere
            Fensterteil auf den unteren stieß, gab es eine dünne Kante, an der
            das Fenster beim Öffnen innen vorbeiglitt. Er müsste sich somit
            langsam seitlich herablassen, um auf dieser Kante mit den Füßen Halt
            zu finden. Er durfte keine Zeit verlieren. Noch stand der Zug, da
            war das Risiko Herunterzufallen gering, aber wenn der Zug erst
            einmal Fahrt aufgenommen hätte, würde das Ganze ein
            halsbrecherisches Verfangen.
            <br></br> <br></br>
            Ohne weitere Überlegungen, ließ er sich bauchwärts an der Zugwand
            hinuntergleiten. Zum Glück war das Dach des Zuge mit einer dicken
            Staubschicht bedeckt, die sich als äußerst stumpf und klebrig erwies
            und so ein unkontrolliertes Abgleiten verhinderte. Mit der
            Schuhspitze gilt er am Fenster entlang und faste in der Tat auf der
            Kante Halt. Louis presste seine Hände an die obere Scheibe, um sie
            kraftvoll nach unten zu drücken. Dabei fiel sein Blick ins Innere
            des Abteils. Er hielt Inne. Im Abteil saß Jelena und schniefte sie
            lautstark in ihr Taschentuch.
            <br></br> <br></br>
            Wenn ihm die Gefühlsausbrüche von Frauen immer schon als sonderbar
            erschienen waren, so dankte Louis jetzt Gott dafür, dass Jelena so
            in ihrem Leid gefangen war, dass sie ihn nicht wahrnahm. Mühsam zog
            er sich mittels Dachkante zurück aufs Zugdach. Dort krabbelte er
            langsam rückwärts, bis er auf Höhe des vorherrigen Fensters war.
            Dies musste definitiv nun sein Abteil sein, beruhigte er sich. Als
            er herunterblickte, registrierte er zu seiner Erleichterung, dass
            das Fenster offen stand. Alice hatte es bestimmt wegen ihrer Migräne
            aufgelassen, um viel frische Luft zu bekommen.
            <br></br> <br></br>
            Die Dachkante fest umgriffen lies Louis sich erneut seitlich am Zug
            hinuntergleiten. In diesem Moment hallte der Abfahrtpfiff des
            Schaffners durch die Bahnhofshalle un der Zug setzte sich ruckartig
            in Bewegung. Louis spürte bereits den Fahrtwind auf seinem Körper
            und das Gefühl, die Kontrolle verloren zu haben. Irgendetwas bewegte
            ihn, seine Beine einzuknicken, was dazu führte, dass er sich mit
            einem Bein im Fenster verhakte und wieder Halt gewann. Dem Bein
            folgend schob er nun seinen ganzen Köper durch das Fenster ins
            Zuginnere und kam mit einem Sturz auf dem handgeklöppelten Läufer
            vor dem Doppelbett zum Liegen.
            <br></br> <br></br>
            Der Ara im Käfig schrak auf und fing an zu Schreien. Ein völlig
            dreckverschmierte Louis ängstigte ihn so sehr, dass er im lauten Ton
            „Vive la France! Vive la France“ kreischte. Schlagartig öffnete sich
            die Zimmertür und Alice starrte Louis fassungslos an. „Was geht denn
            hier vor sich? Wieso sitzt du auf dem Boden? Wie siehst du überhaupt
            aus?“ <br></br> <br></br>
            Louis deutete ihr an, sie solle leiser sein und die Tür schnell
            schließen. Mit Fragezeichen in den Augen folgte Alice den
            Anweisungen und wurde dann von Louis aufgeklärt, dass er am Bahnhof
            überfallen und ausgeraubt worden sei. Seine teure Uhr sei ebenfalls
            weg. <br></br> <br></br>
            „Ich hole sofort die Polizei“, beteuerte Alice und hatte die
            Türklinke schon in der Hand, als Louis ihr diese wegzog. „Alice – du
            weißt genau, dass wir das nicht tun dürfen. Bloß keine Polizei.
            Warum schleppe ich wohl diesen alten Vogel mit uns rum? Doch nicht,
            damit du uns nun die Polizei auf unsere Fährte setzt. Überleg mal.
            Das ist es doch nicht wert. Ich wasche mich jetzt und ziehe mich um
            und dann ist alles wieder gut. Verstehst du?“ Alice nickte.
            Schweigend wandte sie sich dem immer noch verstörten Ara zu, während
            Louis das Wasser aufdrehte.
            <br></br> <br></br>
          </h2>
          <div class="zig-zag zig-zag-color1">Hauptbahnhof Zagreb</div>
          <h2 className="adventure-text">
            Der Express erreichte Zagreb, noch bevor das Abendessen im
            Speisesaal serviert wurde. Hier stieg nur ein Passagier ein, eine
            50jährige türkische Dame, die über und über mit Juwelen behängt war
            und folglich einen sehr reichen Eindruck vermittelte. Sie bezog
            zusammen mit ihrem kleinen Hund, einem Cavalier King Charles
            Spaniel, das Abteil 7. Trotz ihres pompösen Auftritts wurde ihre
            Anreise von den übrigen Passagieren jedoch nicht wahrgenommen, da
            diese sich in ihren Abteilen für das Abendessen herrichteten.{" "}
            <br></br> <br></br>
            Als Louis den Speisesaal betrat, wandte er sich fragend an den
            Kellner. „Sagen Sie, wie geht unsere Reise nun weiter? Was steht
            noch alles auf dem Programm?“ „Herr Moreau, wir haben gegen 18:30
            Uhr Zagreb verlassen und befinden uns nun auf dem Weg nach Belgrad.
            Das sind rund 400 Kilometer Fahrzeit, für die wir voraussichtlich 6
            Stunden benötigen werden. Wir sollten also kurz nach Mitternacht
            dort sein. Es wird ein weiterer Passagier aufgenommen, so dass wir
            auch dort eine Stunde Wartezeit haben werden. Dann geht es um 01:30
            Uhr weiter nach Sofia. Auch diese Wegstrecke beläuft sich auf rund
            400 Kilometer, allerdings ist die Streckenführung anspruchsvoller.
            Ich denke, dass wir daher erst gegen 8 Uhr morgens in Sofia
            einlaufen werden. Um Konstantinopel nicht zu spät anzufahren, wird
            die Pause in Sofia nur 30 Minuten betragen. Für die letzte Etappe
            nach Konstantinopel rechnen wir mit 8 Stunden Fahrzeit, da sie über
            550 Kilometer umfasst. Ich hoffe, dass wir gegen 16:30 Uhr in der
            Hauptstadt des Osmanischen Reiches ankommen werden. Reicht Ihnen
            diese Auskunft?“
            <br></br> <br></br>
            „Das war wirklich ausführlich. Ich danke Ihnen. Ach, und was gibt es
            heute Abend für ein Programm?“
            <br></br> <br></br>„Im Gesellschaftssalon werden üblicherweise
            Kartenspiele gespielt und Herr Yilmaz hat angeboten, ein kleines
            Konzert auf dem Flügel zu geben.“ Louis schnauft vor sich hin. „Ach,
            hat er das! Na das ist ja wunderbar.“, die Ironie in seiner Stimme
            war nicht zu überhören. Er drehte sich wieder seiner Frau Alice zu,
            die er an ihren Tisch begleitete. <br></br> <br></br>
            An diesem Abendessen nahmen alle Passagiere, außer Clara Fischer
            teil. Dies fiel jedoch nicht auf, da sich die gesamte Aufmerksamkeit
            auf die neue Mitreisende richtete. Sie hieß Hatice Kaya und war mit
            dem wohlhabenden Mustafa Kaya verheiratet gewesen, der leider vor
            einem Jahr verstorben war. Ihren Ausführungen nach hatte er gute
            Geschäfte als Handelsvertreter machte und so ein großes Vermögen
            angehäuft. Dass es Frau Kaya gut ging, war offensichtlich. Sie hatte
            das luxuriöseste Abteil des Expresses gebucht, trug die modernste
            französische Mode aus edlen Stoffen und wirkte in ihnen fast wie
            eine Königin. Trotz ihres Alters war sie ein absoluter
            Anziehungsmagnet. Nicht nur, dass sie ihre lange und mit wertvollen
            Steinen besetzte Halskette beständig um ihren rechten Zeigefinger
            kreisen lies, und auch nicht wegen ihres atembetäubenden Parfums,
            das an jedem Gegenstand, den sie berührte, haften blieb, nein, sie
            strahlte aus sich heraus und wirkte gleichzeitig geheimnisvoll.
            Jelena, Luc aber auch Louis waren verzaubert. So war es denn Louis
            auch egal, dass Kemal Yilmaz nach dem Essen sein Konzert auf dem
            Flügel gab und Alice daneben saß und ihn anhimmelte.
            <br></br> <br></br>
            Merkwürdigerweise schien das Hatice Kaya aber wiederum nicht zu
            gefallen, denn sobald die letzte Note verklungen war, drängte sie
            Kemal, er solle jetzt mit ihr Karten spielen. Trotz ihres erotischen
            Augenaufschlages vermochte sie ihn jedoch nicht zu überzeugen. Er
            erklärte, dass er Geldspiele auf den Tod nicht ausstehen könne und
            auch die Hatices Anregung, nur zum Spaß zu spielen, änderte nichts
            an seiner Einstellung.
            <br></br> <br></br>
            Letztendlich willigte Kemal ein, einen Karaoke-Abend zu
            veranstalten, bei dem er die Sänger musikalisch begleiten wollte.
            Hatice legte mit einem Medley aus Operettenliedern los und glänzte
            mit einer fast professionellen Stimme. Die Zuhörer waren begeistert
            und buhlten um Zugaben und auch Kemal schien nun in Hatices Bann
            gezogen worden zu sein. <br></br> <br></br>
            Alice versuchte es mit einer Ballade, doch ihre Stimme hatte keine
            Tragkraft und Jelena behauptete später gar, dass sich das alles nach
            einem krächzenden Papageien angehört hätte. „Das kling wie heute
            Nachmittag. Da schien es mir auch, dass ein Papagei an Bord sei“,
            erklärte sie Luc. „Oder war das wohl auch schon unsere Alice? Hat
            sie heute Nachmittag ihre Ballade schon in ihrem Abteil geprobt?“,
            Jelena konnte sich ein gemeines Schmunzeln nicht verkneifen.
            <br></br> <br></br>
            Die Zeit verging wie im Fluge, doch irgendwann schien Kemal müde
            geworden zu sein und so verabschiedete er sich für den Tag. Hatice
            bestand darauf, ihn zu seinem Abteil zu begleiten. <br></br>{" "}
            <br></br>
            Im Gesellschaftswagen trat eine unverhoffte Pause ein. Die
            Verbliebenen entschieden, diese zu nutzten, um sich neu mit
            Getränken einzudecken. Louis wollte unbedingt mehr über den
            seltsamen Herrn Claes erfahren. So trat er auf ihn zu und bat ihn um
            eine Zigarette.„Wie ich gesehen habe, sind Sie auch Raucher. Ich
            habe gerade meine Zigaretten nicht bei mir, könnten Sie mir eine von
            Ihren abgeben?“ Luc lächelte „Aber gerne doch“ und griff mit der
            Hand in seine Anzugsjacke, fand aber nichts. Dann tastete er alle
            Taschen seines Anzugs ab und musste verwundert feststellen, dass
            sein goldenes Zigarettenetui verschwunden war. „Merkwürdig. Ich
            hatte genau diesen Anzug heute in Budapest an, da war das Etui noch
            drin und ich habe es seither nicht mehr herausgenommen.“,
            rechtfertigte er sich.
            <br></br> <br></br>
            Jelena hatte das Problem erkannt und sprang schnell ein, indem sie
            Louis ihre Gauloises anbot. Dann berichtete Luc, was Louis wissen
            wollte. Er lebte in Liège und betrieb dort ein Atelier, das prächtig
            Gewinn abwarf. Er liebte das Schöne und Edle. Nun war er auf dem
            Weg, Künstler, die sich in den letzten Jahren des Osmanischen
            Reiches einen Namen gemacht hatten, für sein Atelier zu gewinnen.
            Auf Louis Frage, ob er verheiratet sei, erklärte, dass er noch immer
            auf der Suche nach der richtigen sei und deshalb jede Frau
            anspreche, die ihm auf den ersten Blick gefiele. Da die Dame
            selbstverständlich auch innere Werte haben müsse, die seinem Bild
            entsprächen, sei eine engere Beziehung bislang leider immer
            gescheitert. <br></br>
            <br></br>
            „Clara Fischer zum Beispiel ist eine wunderschöne Frau, aber leider
            ist sehr einfältig. Nicht so, wie unsere Jelena“- Luc klopfte ihr
            auf die Schulter, „aber Jelena ist halt verheiratet. Bleibt hier an
            Bord somit nur Hatice. Da ich ein paar Tage in Konstantinopel
            verbringen werde, hätte ich durchaus Zeit, sie näher kennen zu
            lernen.“ <br></br> <br></br>
            „Aber Hatice ist doch viel älter als Sie. Sie könnte doch ihre
            Mutter sein und sie ist zu alt, als dass sie mit ihr eine Familie
            gründen könnten.“, wandte Louis empört ein. „Familie“, prustete Luc,
            „wozu brauche ich noch mehr Familie? Ich habe vier Geschwister und
            die sind alle verheiratet und haben Kinder. Ich brauche eine Dame
            für mein Herz. Einen Menschen, der mit mir fühlt und den ich
            glücklich machen kann.“
            <br></br> <br></br>
            Aus dem Gang ertönte nun ein lautes Hundegebell, das mehr ein
            Geknurre war und gar nicht freundlich wirkte. „Was ist das?“, wollte
            Jelena wissen, „gibt es hier Tiere an Bord? Ich dachte, das sei
            nicht erlaubt!“ „Der Steward teilte mir mit, dass Hatice einen
            Cavalier King Charles Spaniel besitze. Der soll aber ein liebevolles
            Wesen sein. Nur bei Menschen, die es nicht leiden mag, knurrt es.“,
            wusste Luc zu berichten.
            <br></br> <br></br>
            „Aha, dann wird er ja nicht beim Herrchen geknurrt haben, sondern
            bei diesem Kemal“, fiel Jelena ihm ins Wort. „Ich weiß gar nicht,
            warum Hatice sich so für diesen Herrn interessiert. Der ist doch ein
            verkopfter Beamter, der kennt doch keine echte Lebensfreude, so wie
            Hatice sie ausstrahlt“, ergänzte sie.
            <br></br> <br></br>
            „Vielleicht liegt es daran, dass beide die gleiche
            Staatsbürgerschaft haben“, beendete Louis die Konversation. Seit
            Hatice den Saal verlassen hatte, war sein Interesse an der
            Abendveranstaltung massiv geschwunden. So verabschiedete er sich und
            kehrte zusammen mit Alice in sein Abteil zurück. Als sie die Tür
            öffneten, mussten sie eine grausame Entdeckung machen. Die Tür des
            Vogelkäfigs stand offen, ebenso das Fenster und der Ara war
            verschwunden. Voller Panik untersuchte Louis den gesamten Käfig. Er
            kochte vor Wut und rannte in den Gang. Dort klopfte er mehrfach an
            die Tür von Abteil 2, doch niemand öffnete.
            <br></br> <br></br>
            Louis sah den Steward den Gang entlang kommen und drehte er sich
            rasch von der Tür weg. „Können Sie nicht schlafen?“, der Steward sah
            Louis mitleidig an. „Wir laufen in 5 Minuten in Belgrad ein. Sie
            könnten dort eine halbe Stunde an der frischen Luft spazieren gehen,
            danach schlafen Sie sicherlich wie ein Murmeltier.“ Louis bedankte
            sich für den Rat und kehrte in sein Abteil zurück. Solange der Zug
            im Bahnhof stand, empfand er es als zu riskant, nochmals den Versuch
            zu unternehmen, in das Abteil von Clara Fischer zu gelangen. Er
            musste also warten. Alice hatte sich derweil hingelegt und schlief
            bereits tief und fest.
          </h2>
          <div class="zig-zag zig-zag-color1">Hauptbahnhof Belgrad</div>
          <h2 className="adventure-text">
            Eine ¾ Stunde später drangen Stimmen vom Gang her an Louis Ohr. Er
            schlich zur Zimmertür und öffnete sie vorsichtig einen Spalt breit.
            So konnte er verfolgen, wie der Steward eine Dame mittleren Alters
            in ihr Abteil begleitete. „Frau Wegener, hier sind wir. Abteil 1,
            das ist für den Rest der Nacht Ihr Abteil. Ihre sonstigen
            Gepäckstücke bringe ich in den Gepäckwagen, dann haben Sie hier mehr
            Platz. Klingeln Sie einfach, wenn Sie etwas benötigen. Ich wünsche
            Ihnen eine gute Reise.“ Die Abteiltür wurde geschlossen und der
            Steward schleppte eine Anglerausrüstung und zwei Koffer durch den
            Gang zum Gepäckabteil, welches sich im Wagon zwischen Hatices Abteil
            und dem Speisewagen befand.
            <br></br> <br></br>
            Als wieder Ruhe im Gang eingekehrt war, setzte sich der Zug in
            Richtung Sofia in Bewegung. Nun sah Louis seine Gelegenheit
            gekommen. Er steckte sich ein paar Haarnadeln seiner Frau in die
            Hosentasche, dann öffnete er vorsichtig die Tür zum Gang und trat
            hinaus. Mit wenigen Schritten eilte er am Abteil Nr. 3 vorbei, in
            welchem der schleimige Belgier logierte und erreichte das Abteil Nr.
            2. Louis gefror das Blut in den Adern. Die Tür zum Abteil Nr. 2
            stand weit offen und von Clara Fischer fehlte jede Spur. Hektisch
            durchsuchte Louis den Schrank, schaute unter dem Bett und hinter dem
            Vorhang nach. Nichts. Clara war mitsamt all ihrer Habe verschwunden.
            Er schlug sich mit der Faust vor den Kopf. Was ein Hirnriese er doch
            war. Warum hatte er nicht die ganze Zeit den Gang im Auge behalten?
            Das Flittchen musste in Belgrad den Zug verlassen haben. <br></br>{" "}
            <br></br>
            Zurück im seinem Bett war es Louis unmöglich, einzuschlafen. Immer
            wieder machte er sich Vorwürfe, fasste sich an der Stirn, drehte und
            wälzte sich im Bett. Als er endlich in tiefen Schlaf fiel, war es
            schon halb vier morgens. Daher schnarchte er zur Frühstückszeit noch
            immer laut vor sich hin, was sich Alice veranlasste, alleine
            frühstücken zu gehen.
          </h2>
          <div class="zig-zag zig-zag-color1">Hauptbahnhof Sofia</div>
          <h2 className="adventure-text">
            Im Speisewagon nahm sie an ihrem gewohnten Tisch Platz und war
            gerade dabei, ihr Croissant mit Butter zu bestreichen, als eine Dame
            sie ansprach und fragte, ob sie sich zu ihr an den Tisch gesellen
            dürfe. Die Dame stellte sich als Emma Wegener vor, sie sei Serbin
            und heute Nacht zugestiegen. Neugierig auf die edel aussehende Dame,
            bot Alice ihr den Stuhl gegenüber an und war rasch in ein Gespräch
            eingebunden. Es irritierte Alice, dass Frau Wegener auch beim
            Frühstück ihre dünnen weißen Handschuhe nicht ablegte.
            <br></br> <br></br>
            „Das schickt sich für eine Damen meines Standes nicht“, ließ Frau
            Wegener sie wissen und lenkte das Gespräch gleich in eine andere
            Richtung. „Und, wie ist es hier an Bord? Haben Sie viel Spaß“. Alice
            freute sich, vom gestrigen Karaoke-Abend berichten zu können.
            <br></br> <br></br>
            „So, es sind also viele musikalische Gäste an Bord“, fasste Frau
            Wegener den Vortrag zusammen. „In der Tat. Die Hatice, was die für
            eine Stimme hat, dabei ist sie doch schon um die 50 Jahre. Ach,
            schauen Sie, da kommt sie gerade“, Alica wies zur Tür. Da Frau
            Wegener mit dem Rücken zur Tür saß, musste sie sich kurz umdrehen.
            Hatice hatte wieder ein kostbares Designerkleid an und schwang, wie
            immer, ihre Juwelenkette. Luc bot ihr einen Platz an seinem Tisch an
            und Hatice gab sogleich ihre Bestellung beim Kellner auf.
            <br></br> <br></br>
            Frau Wegener hatte genug gesehen. Mit der Ausrede, sie habe ihre
            Tabletten vergessen, verabschiedete sie sich überstürzt von Alice
            und verlies unauffällig den Speisesaal. <br></br> <br></br>
            Als Alice nach dem Frühstück zurück in ihr Abteil kehrte, berichtete
            sie Louis, der inzwischen aufgestanden war, von der seltsamen
            Begegnung. „Du hättest sie sehen sollen. Wie aus einem anderen
            Jahrhundert. Es sieht alles elegant aus, ja, aber ein total
            veralteter Stil. Welche Dame trägt denn heutzutage den ganzen Tag
            Handschuhe? Und dann auch noch beim Frühstück? Und ist sie
            weggegangen, um ihre Tabletten zu holen und nicht mehr zurück
            gekommen. Du scheinst heute Morgen übrigens nicht der einzige zu
            sein, der Verschlafen hat. Jelena war auch nicht beim Frühstück“,
            wollte Alice ihren Mann beruhigen. „Ihr habt gestern wohl doch zu
            tief ins Glas geschaut, befürchte ich“, sie strich ihm über die
            Haare.
            <br></br> <br></br>
            „Nein, nein. Jelena hatte nur ein Ticket bis Belgrad. Die ist heute
            Nacht ausgestiegen. Aber diese Deutsche ist auch ausgestiegen, diese
            Göre.“ Alice hörte, wie sein Tonfall aggressiv wurde. „Ist doch
            egal, wir haben mit der doch nichts zu tun!“, wandte Alice
            beruhigend ein. „Nichts zu tun?“, Louis sprang empört auf und lief
            zum Vogelkäfig. „Nichts zu tun?“, dann riss er das Tuch vom Käfig
            und schrie „sie hat uns bestohlen! Schau, der Käfig ist leer, dabei
            drehte er den Käfig kopfüber!“.
            <br></br> <br></br>
            Alice legte ihren Finger an den Mund, und lies ein „Pssssch“
            erschallen. „Nicht so laut. Es muss ja keiner hören.“
            <br></br> <br></br>
            Ein unüberhörbarer Schrei schrillte durch den Zug. Es war die
            Serviererin, die Hatice Kaya, wie jeden Tag üblich, etwas
            Hundefutter für den Spaniel brachte. Der Spaniel rannte verstört aus
            dem Abteil den Gang entlang und verschwand durch die Beine der
            vielen Schaulustigen, die vom Schrei angelockten worden waren und
            nun auf eine Szene des Grauens starrten. Hatice, welche am Abend
            noch so eine strahlende Persönlichkeit gewesen war, lag regungslos
            zwischen den Sesseln, erdrosselt mit dem Gürtel ihres eigenen
            Kleides. Ihre Juwelenkette war vom Hals verschwunden.
            <br></br> <br></br>
            Der Steward erkannte als erster, was nun zu tun sei. Rasch zog er
            Hatices Abteiltür ins Schloss und wies alle Reisenden an, in ihren
            eigenen Abteilen zu verweilen. Er werde auf dem Gang Wache schieben,
            denn eines sei klar, der Mörder müsse sich noch an Bord befinden.
            Der Schaffner werde die Polizei in Konstantinopel informieren, so
            dass diese den Zug gleich in Empfang nehmen könne, wenn er dort in
            seinen Zielbahnhof anliefe.
          </h2>
          <div class="zig-zag zig-zag-color1">Hauptbahnhof Konstantinopel</div>
          <h2 className="adventure-text">
            Tiefschockiert folgten die Gäste den Anweisung und kamen erst dann
            wieder im Gesellschaftsraum des Zuges zusammen, als ein Kommissar in
            Konstantinopel den Zug betreten und zu dieser Maßnahme aufgerufen
            hatte.
            <br></br> <br></br>
            „Ein schreckliches Verbrechen ist hier an Bord begangen worden. Ich
            möchte mich Ihnen kurz vorstellen. Mein Name ist Ahmet Demir, ich
            bin der zuständige Kommissar und seit über 20 Jahren im Morddezernat
            tätig. Frau Kaya, deren Tod es aufzuklären gilt, wurde um 9 Uhr noch
            lebend im Speisewagen gesehen. Zu diesem Zeitpunkt hatte der Orient
            Express, in dem wir uns hier befinden, den Hauptbahnhof Sofia
            bereits verlassen. Zwischen Sofia und Konstantinopel hat der Zug
            nicht mehr angehalten und er wurde hier sofort von Polizei umstellt.
            Der Mörder muss somit noch an Bord sein. Ich werde nun die
            Anwesenden im Zug nacheinander verhören. Wer wichtige Informationen
            für mich hat, möge sich bitte melden, er wird dann zuerst
            interviewt. Die übrigen Reisenden und Angestellten bitte ich, in
            ihren jeweiligen Abteilen zu warten, bis mein Kollege von der
            Polizei sie zum Verhör abholt. Ist das klar?“, der Kommissar blickte
            in die nickende Runde.
            <br></br> <br></br>
            Dann erhob der Kommissar wieder seine Stimme: „Gut. Wer hat also
            etwas Verdächtiges wahrgenommen?“
            <br></br> <br></br>
            Es herrschte Stille im Raum. „Niemand? Nun dann fangen wir vor dem
            Verhör damit an, alle Abteile zu durchsuchen. Ismail, komm!“, er
            warf seinem Kollegen einen Blick zu und schon begaben sich beide zum
            Abteil von Hatice Kaya.
            <br></br> <br></br>
            Isamail notierte auf seinem Block: „Abteil der Toten: wertvolle
            Halskette von Frau Kaya nicht in ihrem Abteil auffindbar;
            Gesangsnoten von Kemal Yilmaz auf dem Tisch; Liebesbrief von Herrn
            Claes; ein weißer Handschuh auf dem Boden; diverse Notizen zu Kemal
            Yilmaz im Tagebuch, schwer lesbar; Hund verschwunden. <br></br>Im
            Abteil 6 von Kemal Yilmaz liegt ein Damenmagazin.<br></br> Im Abteil
            5 von Jelena befindet sich ein an sie adressierter Briefkuvert. Der
            Inhalt ist nicht auffindbar.<br></br> Im Abteil 4 steht ein leerer
            Papageienkäfig; die Bodenplatte ist verschoben, der Käfig offen,
            kein Papagei vorhanden; laut Herrn Moreau ist der Vogel beim Füttern
            entbüchst und aus dem Fenster geflogen.<br></br> Im Abteil 3 bei
            Herrn Claes nichts Auffälliges gefunden. Frau Jelena berichtete,
            dass Herr Claes sein Zigarettenetui vermisse; es sei wertvoll
            gewesen, da aus echtem Gold.<br></br>In Abteil 2: die Tür war nicht
            abgeschlossen, aber ins Schloss gezogen; beim Öffnen kam uns ein
            Hund entgegen, der eine Juwelenkette im Mund hatte; der Steward
            bestätigte, dass sowohl die Kette, als auch der Hund der Ermordeten
            gehörten; als der Hund zum Zeitpunkt der Entdeckung des Mordes durch
            die Serviererin aus dem Zimmer rannte (vorher konnte er nicht weg,
            weil auch hier die Tür geschlossen war), hatte er keine Kette im
            Maul. Ansonsten war das Abteil 2 leer. <br></br> In Abteil 1 keine
            Auffälligkeiten. <br></br> Im Gepäckabteil: in einer Ecke liegen
            Brotkrumen; ferner stehen dort Koffer von Emma Weber, Hatice Kaya
            und Luc Claes, als auch eine Anglerausrüstung von Milica Ilic".
            <br></br> <br></br>
            „Ismail, hole bitte den Steward herein, wir beginnen mit ihm“, wies
            der Kommissar Ismail an.{" "}
          </h2>
          <div class="zig-zag zig-zag-color2">Die erste Vernehmung</div>
          <h2 className="adventure-text">
            „Hallo Steward, ich fange bei Ihnen an. Nicht, weil sie mir am
            Tatverdächtigsten aussehen, sondern weil ich denke, dass Sie den
            besten Überblick haben, was hier an Bord los war.“ „Sagen Sie mal,
            warum war das Abteil 2 leer und unverschlossen?“, begann der
            Kommissar das Gespräch. „Nun, dort logierte Clara Fischer. Sie fuhr
            von Wien bis Sofia. Dort hab ich sie verabschiedet.“ „Sie war also
            von Bord, bevor der Mord erfolgte?“, der Kommissar hakte nochmals
            nach. „Ja, das war sie. Sie hatte nur einen kleinen Koffer bei sich
            und den wollte sie unbedingt selbst tragen, daran erinner ich mich
            noch. Ich hatte ihr angeboten, ihn für sie an den Bahnsteig zu
            stellen, weil das zu meinem Beruf dazu gehört, aber davon wollte sie
            nichts wissen. Es war auch nur ein kleiner Koffer. So groß wie ein
            Kind. Wenn ich jetzt so überlege, dann hatte sie im Grunde auch
            immer dasselbe an. Ich denke das ist auch der Grund, warum sie kaum
            an den Mahlzeiten teilnahm. Vermutlich konnte sie die
            Kleidungsvorschriften für den Speisewagen nicht einhalten.“{" "}
            <br></br> <br></br>
            Der Kommissar unterbrach ihn: „und dann fährt diese Dame in einem
            solch teuren Zug? Woher hatte sie denn das Geld dafür?“ Der Steward
            zögert, dann erwiderte er, „Das weiß ich nicht, aber ihr Ticket war
            ordentlich bezahlt. Vielleicht sollten Sie da mal Herrn Moreau
            fragen, der scheint sich öfters mit ihr unterhalten zu haben. Ich
            habe ihn auch mehrfach vor dem Abteil von Frau Fischer gesehen. Herr
            Moreau ist auch ein Sonderling. Der ist doch glatt mit einem
            Papageien angereist. Und wie er sich aufgeregt hat, als ich den
            Käfig in den Zug heben wollte. Nein, den durfte niemand anfassen als
            er selbst. Der Käfig sei zu schwer, meinte er. Was bildet er sich
            eigentlich ein? Wissen Sie, was für schwere Koffer ich täglich
            schleppe? Zum Beispiel die vielen Koffer von der Frau Kaya oder die
            von Frau Wegener, die hat sogar eine ganze Angelausrüstung
            mitgebracht.“
            <br></br> <br></br>
            „Ach, die Angelausrüstung ist also von Frau Wegener?“, wunderte sich
            der Kommissar und wies seinen Kollegen an „Ismail, alles schön
            mitschreiben, hören Sie!“, doch dieser nickte nur stumm, da er aufs
            Schreiben konzentriert war. „Was gab es noch?“, bohrte der Kommissar
            weiter. „Nichts weiteres, zumindest nichts Besonderes“, der Steward
            überlegte nochmals, „nein nichts Auffälliges“. Darauf verabschiedete
            der Kommissar den Steward und ließ Herrn Moreau kommen.
          </h2>
          <div class="zig-zag zig-zag-color2">Die zweite Vernehmung</div>
          <h2 className="adventure-text">
            „Sie sind also Herr Moreau. Wo sind sie eingestiegen?“, fing der
            Kommissar das Gespräch an. „Eingestiegen bin ich mit meiner Frau in
            Paris“, stellte Louis klar. „Ja, mit ihrer Frau und einem
            Papageien!“, forderte der Kommissar ihn heraus. „Genau. Mit unserem
            Ara.“, stimmte Louis dem Kommissar zu. „Und was ist so Besonders an
            ihrem Vogel, dass niemand den Käfig anfassen durfte?“ „Es war halt
            ein sehr sensibles Tier. Ich wollte nicht, dass es gestresst wird,
            durch all die vielen Menschen.“ <br></br> <br></br>
            „Was passiert denn, wenn es gestresst wird?“ „Dann wird er laut und
            krächzt rum und ist ganz hibbelig.“ „Aber er merkt doch gar nicht,
            ob ein anderer den Käfig trägt, wenn das Tuch über dem Käfig liegt.
            Wo ist das Problem?“, forderte der Kommissar Louis heraus. Louis
            zögerte. „Und dann sagen Sie dem Steward noch, der Käfig sei zu
            schwer?“, provozierte der Kommissar weiter. <br></br> <br></br>
            „Ist er doch auch“, rechtfertigte sich Louis. „Herr Moreau, ich habe
            den Käfig hochgehoben. Der wiegt nicht viel. Aber unten im Käfig ist
            ein Brett lose und wenn man das verschiebt, stößt man auf ein Fach
            und dort könnte etwas transportiert worden sein, was mehr wiegt, als
            nur der lächerliche Käfig. Ist das korrekt, Herr Moreau?“. „Was soll
            das heißen“, bäumte sich Louis auf. Dabei streckte er seinen rechten
            Arm aus und zeigte auf den Kommissar. „Was wollen Sie mir eigentlich
            unterstellen?“. <br></br> <br></br>
            „Oh“, sagte der Kommissar und ließ seinen Blick über Louis gleiten.
            „Sie haben viel in der Sonne gesessen, nicht wahr?“ Louis war nicht
            mehr zu halten. „Wollen Sie sagen, ich hätte einen Sonnenstich, ich
            würde nicht mehr ganz ticken?“ „Nein, keinesfalls“, setzte der
            Kommissar in ruhigem Ton seinen Gedanken fort. „Ich meine nur, Sie
            sind ganz schön gebräunt. Nur dort“, er wies auf eine Stelle auf
            Louis Unterarm hin, „dort ist es mit der Bräune nicht so weit her.
            So als ob Sie ein große Uhr getragen hätten.“ „Ja, die, die ist mir
            verloren gegangen.“ „Und dann haben Sie sich eine neue zugelegt?“,
            man wusste nicht, ob es wirklich eine Frage war, doch Louis fasste
            sie so auf. „Der Mensch braucht doch eine Uhr. Da habe ich mir eine
            neue besorgt.“ „Ja, schon, aber warum dann eine Damenuhr?“ Eine
            kurze Pause trat ein, dann riss sich Louis wieder zusammen; „Wusste
            ich nicht, dass es eine Damenuhr ist. Da haben die mich in Budapest
            aber reingelegt, beim Juwelier.“ <br></br> <br></br>
            Er klang empört, doch das irritierte den Kommissar nicht. „Darf ich
            die Uhr mal haben?“ Louis gab sie ihm. Der Kommissar begutachtete
            die Uhr und fuhr dann fort: „Hinten sind die Initialien H.K.
            eingraviert. Damit dürfte die Sache klar sein. Die Uhr stammt von
            der Toten. Wann haben Sie sie ihr abgenommen?“ „Herr Kommissar, ich
            habe mit dem Mord nichts zu tun, das müssen Sie mir glauben.“
            „Glauben! Den Glauben an die Menschheit habe ich schon vor vielen
            Jahren verloren“, stöhnte der Kommissar. „Ismail, bring ihn doch
            wieder zurück in sein Abteil, da kann er dann ein Weilchen
            nachdenken.“ „Aber ich war es doch nicht. Das ist alles die Schuld
            von dieser Deutschen.“ „Deutschen?“ „Ja, der Frau Fischer, diesem
            Flittchen.“ „Na, na, na, was sind denn das für Ausdrücke auf diesem
            Luxuszug!“, jetzt empörte sich der Kommissar. <br></br> <br></br>
            „Ist doch wahr! Mir hat sie die Uhr gestohlen, dem Luc sein goldenes
            Zigarettenetui und Hatices Halskette hat der Hund auch aus ihrem
            Abteil geholt.“ „Aus ihrem Abteil geholt heißt noch lange nicht,
            dass Frau Fischer die Kette dort auch versteckt hatte. Immerhin
            scheint Frau Kaya die Kette noch beim Frühstück getragen zu haben
            und da hatte Frau Fischer den Zug bereits verlassen.“ „Das ist das
            Sonderbare an dieser Sache. Aber wer sonst soll Hatice getötet
            haben? Warum muss man sich als Gast um Mitternacht in Belgrad aus
            dem Zug stehlen, wenn man nichts verbrochen hat?“, maulte Louis.
            „Wer hat sich in Belgrad aus dem Zug gestohlen?“, wollte der
            Kommissar wissen. „Na, die Frau Fischer.“ „Und woher wissen Sie
            das?“ „Ich war doch gleich, als wir den Bahnhof Belgrad verlassen
            hatten bei ihr drüben im Abteil. Die Tür stand offen und das Abteil
            war leer. Sie war weg, sie muss somit ausgestiegen sein. Und seither
            ist sie auch nicht mehr aufgetaucht oder haben Sie sie im Zug
            gefunden?“ „Nun gut, lassen wir das. Was wollten Sie denn von der
            Frau Fischer?“ „Das habe ich Ihnen doch bereits gesagt. Sie sollte
            mir meine Uhr wiedergeben, die hat sie mir nämlich gestohlen.“ „Ah
            ja, und deshalb stehlen Sie die Uhr von der Hatice Kaya?“ Louis
            merkte, dass er sich nur in diesem Gespräch nur den Mund verbrennen
            konnte und zog es daher vor, fortan zu schweigen. Der Kommissar lies
            ihn deshalb in sein Abteil zurückbringen und gab Anweisung, nun Frau
            Wegener vorzuladen.
          </h2>
          <div class="zig-zag zig-zag-color2">Die dritte Vernehmung</div>
          <h2 className="adventure-text">
            „Frau Wegener, Sie sind als letzte an Bord gekommen, in Belgrad. Ist
            das korrekt?“ „Ja, das ist richtig.“ „ Was ich mich frage..“, er
            blickte auf Frau Wegener Hände, „wir haben Hochsommer und Sie tragen
            den ganzen Tag Handschuhe. Warum machen Sie das?“ Frau Wegener zog
            ihren linken Handschuh aus und deutete auf ihre Hand: „sehen Sie,
            das ist gesunde, weiße Haut. Aber bei der heutigen
            Sonneneinstrahlung altert die Haut überdurchschnittlich schnell und
            es gibt Hautkrebs“, der Kommissare unterbrach sie. <br></br>{" "}
            <br></br>
            „Nun denken Sie nicht, Sie können mir hier einen Bären aufbinden. Im
            Zug selbst scheint keine Sonne und selbst dort tragen Sie diese
            Handschuhe. Wir haben einen solchen Handschuh auch bei Frau Kaya im
            Abteil gefunden. Es ist ein linker Handschuh. Frau Wegener, sind Sie
            Linkshänder?“ „Nein, ich bin von Geburt aus Rechtshänder“, stellte
            sie ohne zu Zögern klar. „Ok, dann ziehen Sie doch mal ihren rechten
            Handschuh aus“. Frau Wegener hielt inne. „Frau Wegener, ich kann das
            auch polizeilich anweisen lassen.“ Frau Wegener ergriff mit ihrer
            linken Hand die Fingerspitzen des rechten Handschuhs und begann
            langsam diesen von der Hand abzuziehen. Darunter kam ein schwarzer
            Klump mit Metallstreben zum Vorschein. Der Kommissar zeigte hierauf
            und fragte: „Frau Wegener, was ist das?“ „Das ist eine Prothese. Ich
            habe meine halbe rechte Hand bei einer Explosion verloren.“ „Wann
            war das?“ „Im ersten Weltkrieg.“, räumte Frau Wegener ein. „Genau,
            als Sie noch Milica Ilic hießen.“, stellte der Kommissar klar.
            „Woher wissen Sie das?“, Frau Wegener war ganz erstaunt. <br></br>{" "}
            <br></br>
            „Wir haben Nachforschungen angestellt. Als der Steward uns
            mitteilte, dass die Anglerausrüstung im Gepäckraum ihnen gehört,
            haben wir recherchiert, was es mit dem Namen Milica Ilic auf sich
            hat, der auf der Anglerausrüstung aufgedruckt ist.“ „Und Sie sind
            fündig geworden?“, die Tränen schossen Frau Wegener in die Augen.
            „Ja, das sind wir.“, antwortete der Kommissar ruhig. „Wir wissen,
            dass Sie im ersten Weltkrieg im Osmanischen Reich gelebt haben und
            dort in den Widerstand gegangen sind. Sie haben gegen die
            Zusammenarbeit des Osmanischen Reiches mit den Deutschen gekämpft
            und dabei wurden Sie in eine Falle gelockt. Sie hätten ihr Leben
            ganz verlieren können, aber die Explosion zerschmetterte nur Ihre
            Hand, ist das richtig?“, der Kommissar schaute ihr liebevoll in die
            Augen. Frau Wegener rannten die Tränen nur so die Wangen hinunter.
            All die schrecklichen Erlebnisse kamen wieder in ihr hoch. Ismail
            reichte ihr ein Taschentuch. Es dauerte eine Weile, bis sie sich
            beruht hatte. Dann atmete sie tief durch und berichtete: <br></br>{" "}
            <br></br>
            „Nach der Explosion wusste ich, dass es zu gefährlich für mich war.
            Ich verlies das Osmanische Reich und versteckte mich bei Verwandten
            in Serbien. Es war nicht so schwer, einen neuen Pass mit einem neuen
            Namen zu erhalten. Einer meiner Onkel erledigte das für mich. Die
            Angelausrüstung besitze ich schon, seit ich ein Teenager war. Ich
            habe es nicht bemerkt, dass das Schild mich eines Tages verraten
            würde. So wie ich im Widerstand verraten worden bin.“ Der Kommissar
            legte seine Hand auf ihre linke Hand. „Und, wollen wir mal
            Kräftemessen machen? Wie stark ist denn ihre linke Hand?“ <br></br>{" "}
            <br></br>
            Frau Wegener schwieg. Dann erhob sie ihre Stimme wieder, aber sehr
            zittrig: „Ja, ich habe Hatice Kaya in ihrem Abteil besucht. Gleich
            nach dem Frühstück. Ich habe sie sofort wiedererkannt. Sie war es,
            die mich damals verraten hatte. Ich musste mich mit ihr aussprechen.
            Für mich war es noch immer unverständlich, wie eine meiner besten
            Freundinnen mich so verraten konnte. Sie wollte mich töten.
            Verstehen Sie?“
            <br></br> <br></br>
            „Und jetzt stehen Sie unter Tatverdacht, sie getötet zu haben, Frau
            Wegener.“ „Aber ich habe sie nicht getötet“, Frau Wegener sprang
            auf. „Frau Wegener, bitte setzen Sie sich wieder. Ich weiß, dass Sie
            Frau Kaya nicht erwürgt haben. Dafür fehlt ihnen die Kraft in ihren
            Händen. Frau Kaya war eine kräftige und gesunde Frau. Die hätten Sie
            mit ihren 1.5 Händen nicht erwürgen können. Das hätten Sie einfach
            nicht geschafft. Aber was hat das Gespräch mit Frau Kaya ihnen dann
            gebracht?“ <br></br> <br></br>
            „Sie sollte sich mir erklären. Ich wollte es endlich verstehen.
            Damit meine Alpträume nachts aufhören. Damit ich wieder in Ruhe
            leben kann. Aber sie hat sich gar nicht auf das Gespräch mit mir
            eingelassen. Sie sagt, sie hätte mich nicht verraten. Ich würde
            alles nur erfinden. Aber so ist es nicht….“ „Ok, ok, Sie müssen
            nichts mehr darüber erzählen. Es gibt ja Archivakten dazu. Wir
            wissen ziemlich genau, was damals passiert ist, Können Sie sich noch
            erinnern, um welche Uhrzeit Sie das Abteil von Frau Kaya verlassen
            haben?“ „Ich denke, es war viertel vor zehn. Ich weiß es nicht mehr
            so genau. Es hat mir alles so zugesetzt. Ich bin in mein Abteil und
            habe nur noch die Wand angestarrt und geheult.“, Frau Wegener wirkte
            nun blass und erschöpft. „Atmen Sie erst einmal tief durch. Ich
            schicke Ihnen gleich einen Arzt in ihr Abteil. Der kann ihnen auch
            eine Beruhigungsspritze geben, wenn Sie das wünschen. Frau Wegener,
            ich wünsche Ihnen alles Gute. Sie können den Zug heute verlassen.“,
            er reichte ihr die Hand zum Abschied.
            <br></br> <br></br>
            „Ismail, bitte erstelle Frau Wegener einen Passierschein, damit sie
            vom Zug kommt und dann hole bitte Herrn Yilmaz herein.“
          </h2>
          <div class="zig-zag zig-zag-color2">Die vierte Vernehmung</div>
          <h2 className="adventure-text">
            „Herr Yilmaz, Sie sind Regierungsbeamter hier in Konstantinopel. In
            welcher Beziehung standen Sie zu Frau Kaya?“
            <br></br> <br></br>
            „Bevor Frau Kaya in Zagreb in diesen Zug einstieg, war mir die Dame
            völlig unbekannt. Im Grunde habe ich sie nur beim Abendessen und
            danach im Gesellschaftsraum näher kennen gelernt. Ich empfand sie
            zunächst als sehr aufdringlich und irgendwie unsympathisch. Sie
            wollte unbedingt, dass ich mit ihr Karten spiele. Das verstößt aber
            gegen meine religiösen Glaubenssätze. Erst als ich am Flügel meine
            Kompositionen aus Jugendjahren zu Gehör brachte, änderte sich meine
            Einstellung zu ihr. Sie war sehr auffallend talentiert, was den
            Gesang anging und als musikalisches Paar, wenn man das so betitel
            kann, harmonierten wir gut miteinander.
            <br></br> <br></br>
            Irgendwann war ich dann zu erschöpft, und wolle nur noch ins Bett.
            Frau Kaya begleitete mich zu meinem Abteil, welches direkt neben dem
            Ihren lag. Dort drängte sie mich, sie wolle sich weiter mit mir
            unterhalten. Ich gab ihr die Noten und sagte, wir können uns gerne
            morgen dazu austauschen, aber heute brauche ich meinen Schlaf. Dann
            ging ich in mein Abteil. Dort zog ich mich um und wusch mich. Dann
            hörte ich ein Rascheln an der Tür und als ich öffnete, stand sie da
            und hatte ein paar Bücher und Zeitschriften für mich rausgesucht. Da
            wäre sicherlich etwas dabei, was mir gefiele. Ich könnte alles
            behalten, meinte sie. Dann ging sie wieder. Ich habe alles auf den
            Tisch gepackt und das Licht ausgeschaltet. Das war alles. Am
            nächsten Morgen habe ich mir das Frühstück aufs Zimmer kommen
            lassen, weil ich ihr nicht begegnen wollte.“, schloss Herr Yilmaz
            seine Zusammenfassung ab.
            <br></br> <br></br>
            „Und ihnen ist Frau Kaya wirklich noch nie vorher begegnet? Denken
            Sie gut nach!“, forderte der Kommissar ihn auf. Herr Yilmaz starrte
            vor sich auf den Boden, dann bewegten sich seine Augen nach links
            und der Kommissar wusste, dass der Politiker nun seine Vergangenheit
            analysierte. Noch einmal hielt er inne, schüttelte letztendlich aber
            den Kopf. „Nein, Herr Kommissar, ich kenne die Frau nicht. Ich kann
            mich nicht erinnern sie jemals vor dieser Reise gesehen zu haben.
            Warum glauben Sie, sollte sie mir bekannt sein?“ <br></br> <br></br>
            „Nun, Herr Yilmaz, wie Sie wissen, haben wir das Abteil von Frau
            Kaya genau untersucht. Wir haben massig Aufzeichnungen gefunden, die
            Frau Kaya über Sie getätigt hat. Vermutlich beobachtete sie Sie
            schon eine ganze Weile… und wir glauben auch nicht, dass es ein
            Zufall war, dass Frau Kaya Ihnen auf dieser Reise begegnet ist.
            Seien Sie vorsichtig. Frau Kaya scheint in Geheimagentenkreisen
            unterwegs gewesen zu sein und wenn Frau Kaya Sie nicht mehr
            bespitzeln kann, wird es in Zukunft vielleicht ein anderer an ihrer
            Stelle tun.“
            <br></br> <br></br>
            Herr Yilmaz starrte den Kommissar an. Dann stand er auf, bedankte
            sich und nahm von Ismail den Passierschein entgegen, mit dem auch er
            den Zug verlassen durfte. „Ich wünsche Ihnen alles Gute“, ließ ihn
            der Kommissar wissen.
          </h2>
          <div class="zig-zag zig-zag-color2">Die fünfte Vernehmung</div>
          <h2 className="adventure-text">
            Nun wandte sich der Kommissar an Ismail „wen verhören wir jetzt, Luc
            Claes oder Jelena Petrovic?“ „Ladies first“ entschied Ismail und
            lies Jelena herbeirufen.
            <br></br> <br></br>
            „Frau Petrovic, Sie haben in Wien den Orient Express bestiegen“,
            begann der Kommissar langsam den Einstieg ins Gespräch. „Wieso sind
            Sie eigentlich noch im Zug?“, konfrontierte er sie jedoch im
            nächsten Moment. <br></br> <br></br>
            „Wie bitte, ich verstehe Sie nicht“, erwiderte Jelena. „Doch, Sie
            verstehen mich sehr gut. Sie besitzen nur eine Fahrkarte bis
            Belgrad, sind aber noch immer im Zug.“, behauptete der Kommissar.
            „Das stimmt so nicht“, wandte Jelena ein. „Ich bin in Belgrad
            ausgestiegen und habe mir das Zugticket nach Konstantinopel
            nachgelöst.“, stellte sie klar. „Ach ja, darf ich mal ihre Fahrkarte
            sehen?“, forderte sie der Kommissar auf. „Die ist in meinem Abteil,
            die müsste ich erst noch holen.“ „Das können Sie später noch tun“,
            meinte der Kommissar. „Jetzt wollen wir uns erst einmal etwas
            unterhalten“, der Kommissar nippte kurz an seiner Kaffeetasse. Dann
            setzte er seine Befragung fort: “In welchem Verhältnis standen sie
            zur Toten?“ „Im welchem Verhältnis? In gar keinem Verhältnis. Ich
            kann sie doch gar nicht, bevor sie den Zug bestiegen hatte.“ „Und,
            wie lernten Sie sie kennen?“, unterbrach sie der Kommissar. „Na nur
            beim Abendessen und danach beim Karaokespiel. Ich habe aber nicht
            gesungen. Gesungen hat nur sie, ach und ja ein wenig die Alice, die
            hatte aber kein Talent zum Singen. Und das war schon alles.“,
            berichtete Jelena.
            <br></br> <br></br>
            „Das war schon alles, also kein Mordmotiv?“, wollte der Kommissar
            wissen. „Mordmotiv? Ich könnte nie jemanden ermorden.“, schoss es
            aus Jelena heraus. „Lassen wir das. In Ihrem Abteil haben wir ein
            Briefkuvert gefunden. Es stammt von ihrem Mann und wurde erst vor
            wenigen Tagen abgeschickt. Dürfen wir erfahren, was darin stand?“
            „Das war sehr privat. Darüber möchte ich nicht sprechen.“, Jelena
            lief leicht rot an. „Andere Reisende an Bord haben auch Briefe
            erhalten. Bei Frau Kaya lag ein Liebesbrief von Herrn Claes. Wussten
            Sie, dass Herr Claes in Frau Kaya verliebt war?“ „Das wussten doch
            die meisten der Passagiere.“ „Wie soll ich das verstehen? Hat er ihr
            öffentlich den Hof gemacht?“ „Nein, dafür hatten sie ja kaum Zeit.
            Frau Kaya war ja erst seit Zagreb an Bord. Aber als Herr Moreau,
            Herr Claes und ich nach dem Karaoke noch etwas getrunken haben, da
            wurde Herr Claes sehr gesprächig, was das Thema Heiraten anging. Er
            fand mich auch reizend, aber den Liebesbrief hat er ihr geschrieben,
            …weil er dachte, ich sei schon verheiratet.“ „Und, sind sie das
            nicht?“ <br></br> <br></br>
            Jelena musste den Kopf gen Deck drehen, um nicht zu Weinen
            anzufangen. „Mein Mann will sich von mir scheiden lassen.“ „Und das
            stand in dem Brief?“ Jelena merkte, dass sie dem Kommissar in die
            Falle gegangen war. Sie schluckte. „Ja, das stand in dem Brief. Er
            wollte keine Frau, die ihren Beruf mehr liebte als ihn, schrieb er
            mit. Er wäre mir völlig egal und ich solle mich zum Teufel scheren.
            Sein Vater hätte ihm klar gemacht, dass der Mann das Sagen im
            Haushalt hat und eine Frau, die nicht gehorche, gezüchtigt gehöre.
            Aber das sei nicht sein Stil. Er werde die Ehe einfach annullieren
            lassen, wegen Kinderlosigkeit. Ich bräuchte nicht mehr nach Hause
            kommen. Es sei aus. Er werde in einem halben Jahr die Tochter des
            Oberfeldwebels heiraten. Alles sei schon arrangiert.“, Jelena
            schniefte. <br></br> <br></br>
            „Dann haben Sie sich also auch Chancen bei Herrn Claes eingeräumt?“
            „Was heißt hier eingeräumt? Er hatte doch am Abend selbst zugegeben,
            dass er mich reizender fand, als die Frau Kaya. Herr Kommissar, ein
            35 jähriger junger Mann, der will doch lieber eine 31 jährige Frau,
            als eine 50 jähre Witwe. Obendrein interessierte sie sich doch auch
            nicht für Herrn Claes. Sie war doch hinter Herrn Yilmaz her, das war
            nicht zu übersehen. Da ist es kein Wunder, dass sie den Liebesbrief
            von Herrn Claes ungelesen auf ihrem Tisch hat liegen lassen.“ „Woher
            wissen Sie dann, was in dem Brief gestanden hat?“, wollte der
            Kommissar wissen. <br></br> <br></br>
            Jelena schwieg. „Frau Petrovic, sie wissen, was in dem Brief
            gestanden hat, weil Sie ihn geöffnet haben und zwar im Abteil von
            Frau Kaya. Sie sind einfach in das Abteil von Frau Kaya
            eingedrungen, als diese nicht da war.“ Jelena schwieg unverändert.
            „Frau Petrovic, Sie haben die Wahl. Sie können uns nun helfen und
            uns unterstützen oder sie kommen in Untersuchungshaft und wir lassen
            das ganze Abteil von Frau Kaya samt Brief auf ihre Fingerabdrücke
            hin untersuchen Was ist Ihnen lieber?“, der Kommissar wurde im Ton
            schärfer. „Nun gut, ich war in Frau Kayas Abteil.“, räumte Jelena
            ein.“Als Frau Kaya am Morgen zum Frühstück aufbrach, bin ich in ihr
            Abteil eingedrungen. Dort habe ich den Brief von Luc gefunden. Ich
            habe ihn geöffnet und gelesen.“ „Und dann kam Frau Kaya zurück?“,
            stellte der Kommissar fest. „Nein, ich war schon wieder im Gang, als
            Frau Kaya zurückkam. Die hat nichts bemerkt.“ <br></br> <br></br>
            „Und wie ging die Geschichte dann weiter“, forderte der Kommissar
            sie auf. „Ich bin gleich zu Luc gegangen und hab ihm alles erzählt,
            dass mein Mann mich frei gibt, dass ich ihn liebe und dass wir eine
            Familie gründen können und dass die Kaya sich nicht für ihn
            interessiere und hinter dem Yilmaz her sei. Dass es dafür unzählige
            Beweise im Abteil der Kaya gäbe, denn auch ich hatte die vielen
            Notizen über Herr Yilmaz gesehen. Ich hatte ihm auch erzählt, dass
            die Kaya nicht nur die Juwelenhalskette besitzt, sondern dass ich
            ein ganzes Kästchen voller Schmuck dort gesehen hatte.“ <br></br>{" "}
            <br></br>
            „Und Claes, wie reagierte er?“, der Kommissar zeigte sich sehr
            interessiert. „Er war plötzlich so merkwürdig anders. Ihm sei es
            wichtig, dass seine Braut viel besitze und ich sagte, dass sei doch
            unwichtig, da ich ihn doch liebe und er genug Geld für uns beide
            habe. Er meinte jedoch, eine Ehe würde nur dann gelingen, wenn beide
            Ehepartner vom gleichen Stande wären, also finanziell ebenbürtig.
            Wenn ich nichts in die Ehe einbringen würde, dann wäre das schon von
            Anfang an ein schlechtes Ohmen“. <br></br> <br></br>
            „Und dann sind sie rüber und haben sich die Juwelenkisten
            geschnappt?“, unterbrach der Kommissar sie. „Ich bin wieder rüber in
            Kayas Abteil. Ich war wie verblendet. Aber die Juwelenkiste war
            nicht mehr da und die Frau Kaya… die Frau Kaya lag tot auf der Erde,
            erwürgt. Ich habe gedacht, wenn der Schmuck eh schon gestohlen ist,
            kommt es auf das Kette auch nicht mehr an und ich habe der Toten die
            Kette vom Hals genommen und bin damit aus dem Zimmer gerannt. Ich
            war gerade auf Höhe meines Abteils, als die Serviererin das Abteil
            von Frau Kaya betragt.“ „Und dann ist ihnen die Sache zu heiß
            geworden und Sie haben die Kette im Abteil 2 versteckt. Sie wählten
            das ehemalige Abteil von Frau Fischer, weil es das einzige war,
            dessen Tür unverschlossen war. Selbst ihr eigenes Abteil hätten Sie
            erst aufschließen müssen und soviel Zeit hatten Sie in jenem Moment
            nicht. Als dann der Schrei der Serviererin durch den Flur hallte,
            mischten Sie sich einfach unter die Reisenden, die sehen wollten,
            was geschehen war und Niemandem fiel auf, dass Sie gar nicht aus
            ihrem eigenen Abteil kamen. War es so, Frau Petrovic?“, die Stimme
            des Kommissars klang bedrohlich. <br></br> <br></br>
            Jelena nickte. „Genauso war es, Herr Kommissar. Und Kayas Hund muss
            das starke Parfum an der Kette gerochen haben; er ist sofort dorthin
            gelaufen.“ „Danke, Jelena, Sie können zurück in Ihr Abteil. Für den
            Moment bin ich mit Ihnen fertig.“
          </h2>
          <div class="zig-zag  zig-zag-color2">Vor der sechsten Vernehmung</div>
          <h2 className="adventure-text">
            Nachdem Jelena den Raum verlassen hatte, wandte sich Ismail an den
            Kommissar. „Herr Kommissar, soll ich jetzt Herrn Claes zum Verhör
            rufen?“, fragte er. „Wozu das?“, der Kommissar schien erstaunt.
            „Nun, weil er die Frau Kaya erwürgt hat“, stellte Ismail fest. „Wie
            kommst du darauf? Herr Claes hat Frau Kaya nicht erwürgt. Herr Claes
            ist ein klassischer Heiratsschwindler, aber vor grausamen
            Gewalttaten scheut auch er zurück. Ich habe einen Kollegen in
            Belgien kontaktiert und dort ist Luc Claes schon mehrfach auffällig
            geworden. Er musste sogar einmal eine Haftstrafe absitzen.
            Vermutlich ist ihm das Pflaster in Belgien zu heiß geworden. Er ist
            inzwischen nach Paris umgezogen. Dort scheint man ihn noch nicht zu
            kennen, zumindest nicht seine berufliche Seite“.
            <br></br> <br></br>
            Der Kommissar machte eine Pause, um den Kaffee auszutrinken. „Ugh,
            der schmeckt aber gar nicht mehr, so kalt, wie der geworden ist“.
            Dann wies er Ismail an: „Lass uns besser das Ehepaar Moreau
            interviewen“.
          </h2>
          <div class="zig-zag zig-zag-color2">Die sechste Vernehmung</div>
          <h2 className="adventure-text">
            „Nun, Herr Moreau, ist ihnen inzwischen eingefallen, woher Sie die
            Armbanduhr der Frau Kaya haben? Haben Sie sie der Dame direkt von
            der Hand abgenommen, oder lag sie in der Juwelenkiste der Kaya?“,
            der Kommissar stellte diese Frage einfach nur in den Raum, wandte
            sich aber gleich an Ismail. „Ismail, jetzt wo das Ehepaar Moreau
            hier ist und das Abteil 4 somit leer sein sollte, möchte ich dass du
            in das Abteil gehst und mir den Vogelkäfig holst.“
            <br></br> <br></br>
            Ismail erfüllte die Bitte, wie ihm geheißen, fragte sich aber
            insgeheim, was diese Aktion wieder sollte.
            <br></br> <br></br>
            „Danke, Ismail“, der Kommissar zeigte ihm anerkennend den Daumen
            hoch. Dann bat er Ismail, den Käfig zu öffnen, durch die Öffnung
            hineinzugreifen und unten die Bodenplatte anzugeben. Als Ismail die
            Bodenplatte entfernt hatte, begannen die Augen des Kommissars zu
            strahlen und auch Ismail empfand ein Glücksgefühl. Im Fach unter der
            Bodenplatte lag all der Schmuck aus Frau Kayas Juwelenkiste. „So
            Herr Moreau, lassen Sie mich raten. Sie haben die Damenuhr, die Sie
            derzeit an ihrem Handgelenk tragen, aus der Juwelenkiste genommen
            und den übrigen Schmuck hier im Vogelkäfig versteckt. So wie sie es
            auch vorher mit der Schmugglerbeute gemacht hatten. Clara Fischer
            hat nämlich nicht nur ihre Uhr, sondern auch die Schmugglerbeute aus
            dem Vogelkäfig gestohlen. Dafür musste sie den Vogel frei lassen.
            Und als Sie das bemerkten, bekamen Sie es mit der Angst zu tun, denn
            die Ware war nicht Ihr Eigen, sondern, sie waren nur deren
            Überbringer. Sollten Sie am Zielort die Schmugglerware nicht an den
            vorbestimmten Empfänger aushändigen, würde dieser vermuten, dass Sie
            die Ware unterschlagen hätten und dann wären Sie in einem Dilemma.
            Sie brauchten somit dringend Ersatz.
            <br></br> <br></br>
            Übrigens, Frau Fischer ist nicht, wie Sie es glaubten, in Belgrad
            von Bord gegangen, wie Sie vermuten. Sie blieb bis Sofia an Bord und
            wurde dann vom Steward verabschiedet. Nachdem Frau Fischer ihre
            Schmugglerware erbeutet hatte, war es ihr aber in ihrem Abteil wohl
            zu riskant geworden, so dass sie sich im Gepäckabteil versteckte.
            Dem Steward fiel sie dort nur nicht auf, weil sie sich in ihrem
            eigenen Koffer, der die ganze Zeit mehr oder weniger leer war,
            verbarg. Ein Koffer mehr oder weniger ist im Gepäckraum nichts
            ungewöhnlich, insbesondere, wenn sich das Gepäck dort schon stapelt.
            Vermutlich ist sie nur dann in den Koffer gekrochen, wenn der
            Gepäckwagen geöffnet wurde. Darauf weisen die Brotkrümel hin, die
            ebenfalls von ihr stammen müssen. Dieses Thema ist somit geklärt.
            Was uns noch fehlt ist, die Antwort auf die Frage, wie der Schmuck
            überhaupt in Ihr kam. Möchten Sie uns diese Geschichte erzählen,
            Frau Moreau?“
            <br></br> <br></br>
            Alle Blicke richteten sich nun auf Alice. „Irgendwann mussten Sie es
            ja herausfinden. Was soll ich da beschönigen, und wenn Sie
            Fingerabdrücke nehmen, werden Sie auch von mir Spuren in Frau Kayas
            Zimmer finden.“, Alice holte tieft Luft. Dann fuhr sie fort: „Ich
            kam heute Morgen nach dem Essen zurück in unser Abteil. Louis war
            inzwischen wach und ich unterhielt mich über Frau Wegener mit ihm.
            Er stand dann endlich auf, weil er auf die Toilette am Gang musste.
            Wir haben ja keine eigene Toilette in unserem Abteil. Als er weg
            war, hörte ich, wie sich ein Mann und eine Frau im Nebenzimmer
            stritten, ich meine das Abteil von Herr Claes. Ich wusste sofort,
            dass es Luc und Jelena waren, die sich da stritten. Jelena erzählte
            von der Juwelenkiste bei Frau Kaya im Zimmer. Weil ich von Louis
            erfahren hatte, dass unsere Schmugglerware gestohlen worden war und
            wir uns daher in einer kritischen Lage befanden, erkannte ich im
            Gehörten eine riesige Chance. Ich bin sofort zu Frau Kays Abteil.
            Vorsichtshalber habe ich angeklopft, doch als sich niemand meldete,
            öffnete ich mit meiner Haarnadel die Tür. Ich hatte die Juwelenkiste
            schon in meiner Hand, als Frau Kaya ins Abteil zurückkehrte. Es gab
            keine Alternative. Ich musste sie erwürgen, sonst hätte sie mich
            angezeigt. Die Juwelenkisten habe ich unter den Arm geklemmt und
            rasch das Abteil wieder verlassen. An die wertvolle Kette, die Frau
            Kaya um ihren Hals trug, dachte ich in diesem Moment nicht. Mir
            fehlte zudem auch die Zeit. Ich musste so schnell wie möglich weg.
            Ich bin sofort in unser Abteil zurückgekehrt, die Tür hatte ich nur
            angelehnt gelassen, so dass alles fix ging. Alles schien wieder
            perfekt zu sein. Louis konnte unser Glück nicht fassen, als er die
            Kiste sah.“ <br></br> <br></br>
            „Warum haben wir den Schmuck nicht bei der ersten Durchsuchung der
            Abteile gefunden“, wollte Ismail wissen, der aufmerksam zugehört
            hatte. „Weil die Herrschaften Schmuggelprofis sind“, erwiderte der
            Kommissar. „Die kennen tausende Verstecke. Manchmal haben sie
            Hohlräume in Schuhabsätzen, manchmal wird der Schmuck unterm Dutt
            oder in einem doppelten BH transportiert“, der Kommissar beugte sich
            zu Herrn Moreau vor. „Wollen Sie uns Ihr Geheimversteck verraten?“{" "}
            <br></br> <br></br>
            „Nein Herr Kommissar“, Louis hatte seinen Stolz offenbar
            zurückgewonnen, als er erklärte, „Geheimrezepte bleiben
            Geheimrezepte. Im Übrigen wird sich unsere Strafe auch nicht
            deswegen ändern, nur weil wir Ihnen eines unser Geheimrezepte
            verraten, stimmt`s oder habe ich Recht, Herr Kommissar?“ „So ist
            es.“, stimmte der Kommissar ihm zu. Und wies er die Polizisten an,
            die Moreaus abzuführen.
          </h2>
          <div class="zig-zag zig-zag-color3">
            <a className="adventure-top" href="#adventure-top">
              This adventure story was invented and written by me <br></br>
              Reinhild's myOrientTrip - copyright &copy; 2025 all rights
              reserved <br></br>
              Klick hier, um zum Seitenanfang zu gelangen
            </a>
          </div>

          <div className="adventure-English" id="adventure-english">
            <div class="zig-zag zig-zag-color1">Kick-off in Paris</div>
            <h2 className="adventure-text">
              It was a warm, golden late afternoon in the summer of 1920 when
              the Moreau couple boarded the legendary Orient Express in Paris.
              Alice Moreau pressed a big kiss on her husband's cheek. "Our
              adventure together can finally begin," she whispered softly into
              his ear. Louis Moreau winked at her amusedly, but then turned to
              the steward who had approached them.
              <br></br>
              <br></br>
              "Welcome aboard! Madame Moreau, Monsieur Moreau, step into the
              world of luxury!" he greeted them. "May I show you to your
              compartment? You're staying in number 4, an excellent choice.
              Four-poster bed, comfortable seating, free fruit and drinks, as
              much as you like. This way...oh, sir, may I take your luggage? Our
              conductor will take care of your suitcases, but just hand me that
              huge cage from your hand. I can carry it."
              <br></br> <br></br>
              He then extended his hand toward Louis Moreau, who briefly lost
              his composure and replied harshly. "Stop it, the cage is much too
              heavy for you." From the steward's expression, he realized that he
              had obviously reacted too harshly and quickly offered a
              justification. "You know, this is a hyacinth macaw, a very
              valuable parrot. We've had it for three years and have even taught
              it to talk. However, it reacts very strongly to strangers.
              Whenever it sees an unknown person, it screeches loudly. I wanted
              to avoid it disturbing all the other guests." <br></br> <br></br>
              "Oh," the steward objected sympathetically, "you don't need to
              worry. All other passengers have already left the train here in
              Paris. You are the only guests on board." <br></br>
              "How?" Moreau's voice sounded irritated. "No other passengers? How
              can the trip from Paris to Constantinople even be worthwhile for
              the operating company?"
              <br></br> <br></br>
              The steward grinned. "Don't worry, the prices are well-calculated.
              It'll pay off. Several passengers are boarding, especially from
              Vienna. Look here, at my list. Tomorrow morning, we're expecting
              Ms. Fischer from Germany, Luc Claes from Belgium, and Ms. Petrovic
              in Austria. Then compartments 2 to 5 will all be full." Curiously,
              the steward nodded his head toward the birdcage. "May I briefly
              say hello to the macaw?"
              <br></br> <br></br>
              Alice slid her hand over her husband's shoulder. Then she cast a
              warm glance toward the steward and, with her other hand, pulled
              the cloth off the cage, revealing a large, blue bird with yellow
              eyes. "Vive la France! Vive la France!" the bird croaked, making
              the steward jump. Then everyone burst into hearty laughter. "Oh,
              what a lovely companion," the steward exclaimed, perplexed,
              clapping his hands enthusiastically. "Such a beautiful and, above
              all, funny bird!" Then the conductor's whistle sounded, and
              everyone crowded onto the train before the doors closed and the
              journey into the unknown expanses of Europe began.
              <br></br>
            </h2>
            <div class="zig-zag zig-zag-color1">Vienna Central Station</div>
            <h2 className="adventure-text">
              The train took around 15 hours to travel the approximately 1,000
              kilometers from Paris to Vienna, so it arrived in Vienna at
              breakfast time. While Alice Moreau decided to sleep in, Louis used
              the one-hour layover to run a few errands at the main station.
              Back on the platform, he sat down on a bench to quietly smoke a
              cigarillo and study the daily newspaper he had just bought until
              the train departed. He opened the newspaper and burned a small
              hole in it with the cigarillo. It allowed him to keep an eye on
              the Orient Express. And he was amazed when a young lady approached
              the train. Although she was only wearing a simple, gray summer
              dress, Louis's eyes practically gnawed their way through the
              newspaper hole. The woman was the picture of life, curvaceous
              curves, red lips, flowing auburn hair, basically everything that
              could make a man's heart race. The trip would be exciting, that
              much was clear to him.
              <br></br> <br></br>
              But the competition didn't seem to be far behind. Shortly after
              the lady, a dashing, muscular young man in a splendid Armani suit,
              white shirt, and bow tie boarded the express. He was speaking to
              the steward in French, but Louis could immediately hear the
              Belgian accent. So that must be Luc Claes, Louis thought, and
              decided to take a closer look. <br></br> <br></br>
              Therefore, he stood up, folded the newspaper, and stubbed out his
              cigarillo. He was just about to step onto the train stairs when he
              heard a woman's voice in the distance. "Stop, stop, I have to go,"
              called a portly woman with an Eastern European appearance and a
              summer hat. It seemed as if she were running for her life. Her
              face was already red with exertion, and a boy was following behind
              her at a run, pushing a baggage cart overloaded with suitcases.
              <br></br> <br></br>
              With exuberant behavior and using all his charm, Louis helped the
              lady, who introduced herself as Jelena Petrovic, board. This meant
              another talkative travel companion was on board. The steward
              recognized this and invited all passengers to a welcoming drink in
              the lounge. Jelena Petrovic didn't need to be told twice and
              immediately emptied several glasses of champagne. The already good
              mood on board became even more cheerful. Soon, everyone was eager
              to talk about their origins, their destinations, and the reason
              for choosing the Orient Express.
              <br></br> <br></br>
              This is how Louis, who had introduced himself and his wife Alice
              as antique dealers in Paris, learned that Jelena was a journalist
              for a Serbian daily newspaper and was on her way back to Belgrade.
              She was 31, married but childless, and liked to poke her nose into
              everything. She could spend hours researching, which sometimes
              drove her husband to despair. He would rather start a family with
              her. Of course, she also wanted children, but not now, when things
              were so exciting at the newspaper. Her husband worked as a
              successful real estate agent, and that was important, because the
              salary the newspaper paid her was more like a pittance than a
              livelihood. But journalism was her life's work.
              <br></br> <br></br>
              In contrast to the talkative Jelena, Luc Claes seemed more
              reserved. He gave off a calm, elegant, yet in his own way, very
              charming impression. Nothing that concerned the ladies escaped
              him. He got Jelena new drinks and even gave her ice cubes, with
              which she tried to cool her still-red face. He listened to Alice
              with a constant nod as she talked about her antique shop on Rue du
              Grand Espoir, commenting incessantly with, "C'est chouette! That's
              great! Très chouette! Very cool!" All of this gave Louis the
              impression that Luc had swallowed a scratched record. At the same
              time, he also felt a pang of jealousy. Did this Luc have to
              immediately make a move on his wife?
              <br></br> <br></br>
              And then there was the German woman. Her name was Clara Fischer.
              Apparently, her father had paid for her trip as her last big
              adventure before her wedding in the fall. She was 28 now, and
              quite old for a young lady. Even if the First World War had
              intervened, why hadn't such a sophisticated woman been married
              long ago? Louis couldn't make sense of any of it. If she was
              embarking on such a long journey through Europe, of which the trip
              on the Orient Express seemed to be only the beginning, why was she
              traveling with only a small suitcase? Why was she dressed so
              simply? Her father seemed to have a ton of money! And what future
              husband would agree to his fiancée going on an adventure without
              him? From his perspective, all of this didn't add up at all.
              <br></br> <br></br>
              Louis wiped his face with his hand. He wanted to banish his
              thoughts. Clara looked hot, truly inviting. He was already
              imagining a tête-à-tête with her. It was still 250 kilometers to
              Budapest, so plenty of time to cultivate a deeper relationship.
              Therefore, Louis invited everyone present to a round of gin fizz,
              which he praised as a particularly refreshing drink in these
              temperatures. After everyone had finished their glasses, the
              guests decided to return to their compartments until lunch to
              freshen up.
              <br></br> <br></br>
              Lunch was served at 1 p.m. in the dining car. Two tables had been
              set, and the passengers were now seated. Louis slid his arm across
              the table and lovingly stroked his wife's hand. He looked at her
              compassionately. "My poor thing. We're already traveling in total
              luxury, and you're getting migraines and can't enjoy all this. Did
              you at least sleep well for the last two hours, dear? Are you
              feeling better now?"
              <br></br> <br></br>
              Alice leaned her head on the ground, exhausted. "Sorry, darling. I
              don't know why. It just started, the pounding in my head. I've
              rarely felt it as intensely as today. I'm probably all the stress
              of the last few weeks is taking over." She groaned, "Louis, I'm so
              embarrassed. Of course I took the sleeping pill you gave me. Maybe
              that's why I'm not fully awake yet, but I'm already feeling
              better." Louis gently squeezed her hand in reassurance, knowing
              that the migraine hadn't come on by chance. He had quickly noticed
              in his marriage to Alice how easily she could be manipulated to
              get his way. It was good to know that with a little histamine,
              which was in every lemon juice, Alice could be silenced for hours.
              He gladly used it when he saw it as useful.
              <br></br> <br></br>
              Then the other guests entered the dining car. Luc Claes, too, now
              wearing a three-piece suit with a waistcoat. Louis felt jealousy
              rising again. He remembered sneaking out of his compartment less
              than two hours ago to pay Clara Fischer a visit. He had bumped
              into Luc in the aisle. Louis wasn't sure if Luc had seen him. But
              what was certain was that Luc had knocked on Jelena's compartment
              door. Surely she had let him in too, he thought. Why else were the
              two of them sitting at the same table?
              <br></br> <br></br>
              Louis's thoughts revolved more and more around Luc. This guy
              seemed to win every woman's heart on board in an instant. Louis
              was so focused on Luc that he didn't notice what his wife
              whispered to him in a hushed voice across the table, nor that
              Clara Fischer hadn't shown up for lunch in the dining car. Only
              when the waitress served the mussel soup did he return to the here
              and now.
              <br></br> <br></br>
              The train was scheduled to arrive in Budapest at 2:05 p.m. What
              time was it now? Louis pushed up his suit jacket a little to look
              at his watch. He was startled because the expensive Cartier watch
              was no longer on his arm. Where could it have gone? He wondered
              where he could have taken it.
              <br></br> <br></br>
              It was like scales falling from his eyes. Yes, in Clara's
              compartment. There he had taken it off for their tryst and placed
              it on the side table. What an idiot he was. The expensive Cartier
              Tank! He still remembered clearly how he had seen the precious
              piece in the window at Les Champs d'Or. It was love at first sight
              and even though it had cost 30,000 francs, he had to have it, just
              as he always had to have everything that appealed to him. Just as
              he had to have Clara, that hussy. After dinner, he would have to
              check on it.
              <br></br> <br></br>
              To Louis's dismay, the meal dragged on forever, because when you
              order luxury, you get luxury. The five-course menu, with its
              potages, hors d'oeuvres, fish, removés, entrée, and roti, was
              perfectly timed to coincide with the train journey, and the Orient
              Express arrived in Budapest before the last bite had been
              consumed.
            </h2>
            <div class="zig-zag zig-zag-color1">Budapest Central Station</div>
            <h2 className="adventure-text">
              Alice raved. "Cherie, that was delicious! I'm already feeling much
              better. Shall we get off here in Budapest for a moment? Please,
              the fresh air will surely do me good, and we still have an hour
              until the train leaves."
              <br></br> <br></br>
              As a faithful husband, Louis couldn't refuse his wife's request,
              and so they went for a mocha at a traditional Budapest coffeehouse
              not far from the main train station. Alice literally blossomed.
              The elegant decor, the coffeehouse music, the entire atmosphere of
              the coffeehouse impressed her so much that she would have loved to
              spend a whole day there. Louis, too, was infected by the cheerful
              atmosphere. His gaze wandered over the crystal chandeliers, the
              tall marble columns, and the antique wood paneling. He, too,
              enjoyed this sight of luxury. His joy, however, instantly faded
              when he noticed a table for two behind the orchids. Unable to
              believe what he saw, he pinched himself in the arm. But it wasn't
              his imagination. Luc Claes was sitting at the table behind the
              orchids with the floozy from the train. He'd quickly snagged the
              next one, Louis thought, and somehow felt his male vanity hurt. He
              swallowed hard. Then he decided that this was the right moment to
              calmly retrieve his watch from Clara's compartment, because as
              long as the young lady was sitting here, he had free rein.
              <br></br> <br></br>
              So he told Alice it was time to go back so as not to miss the
              train. Alice joked that she didn't like it, but she quickly
              realized from her husband's firm grip on her upper arm that now
              was no time for arguments.
              <br></br> <br></br>
              On board, they met Kemal Yilmaz, who had moved into compartment 6.
              Louis already knew him from the newspaper. He was 45 years old and
              worked as a high-ranking government official for the Ottoman
              state. During the First World War, he had resisted the alliance
              between the Ottoman Empire and Germany. He was imprisoned for it.
              Now he was fighting for compliance with the Treaty of Sevres,
              which regulated the dissolution of the Ottoman Empire and required
              the ceding of large parts of the old state territory. For many
              Turks, he was therefore nothing but a traitor. No wonder, with
              such a position, he could afford this trip. He probably charged
              all the costs to the taxpayers, Louis concluded. But he had no
              interest in getting any closer to Kemal. Alice disagreed. She
              loved educated, well-read people, and since Yilmaz, upon seeing
              the grand piano in the drawing room, had said that he had
              previously considered studying music, she accompanied him to an
              audition.
              <br></br> <br></br>
              This was fine with Louis, as he still needed to discreetly
              retrieve his watch from compartment 2. With a hairpin in hand, he
              headed toward the compartment and immediately realized that he
              didn't need this tool at all, as the compartment door was already
              wide open. The cleaning staff brought fresh towels and checked
              that everything was in order. <br></br> <br></br>
              Louis peered through the open door at the side table, but couldn't
              find his Cartier. In his desperation, he quickly fetched a bottle
              of red wine from his compartment and smashed it on the floor in
              front of the dining car. Then he hurried to the cleaning lady,
              signaling that she should quickly clean the aisle before someone
              was injured by the broken glass or the stubborn red wine stains
              could no longer be removed. Following his plan, the cleaning lady
              rushed out of Clara's compartment to get a broom and trowel,
              forgetting to lock the door. Louis slipped into Clara's
              compartment to search for his watch. He had to hurry, because
              Clara and Luc would be back in 20 minutes at the latest if they
              didn't want to miss the departure.<br></br> <br></br>
              He quickly peered into the small suitcase, which, to his surprise,
              was almost empty. He searched the closet, looked behind the
              pictures, and under the bed. Nothing. His watch wasn't there.
              <br></br> <br></br>
              Loud laughter suddenly erupted from the platform. Louis recognized
              it. It was Clara. The cleaning lady had also noticed her return.
              She quickly closed the door to Clara's compartment and locked it
              without looking back into the room. She definitely didn't want to
              expose herself to the suspicion of having performed her duties
              carelessly.
              <br></br> <br></br>
              Sweat was pouring from every pore of Louis. Now he was trapped.
              What would happen if they caught him here and called the police?
              All his work would have been in vain. That couldn't be allowed to
              happen. The only option left was the window. He quickly pushed it
              open and climbed onto the roof of the train. To avoid being seen
              from the platform, he crawled forward on the roof. He pushed
              himself over Luc's compartment, which he would have loved to look
              into. He was interested to know if Luc would now invite the slut
              over. Louis was seething inside. The slut really drove him crazy.
              He crawled a little further, to where he assumed his own
              compartment was. Carefully, he looked down the side of the
              carriage and saw the window. Like the other windows, it was
              closed, but where the upper part of the window met the lower part,
              there was a thin edge that the window slid past when opened. He
              would therefore have to slowly lower himself sideways to find
              purchase with his feet on this edge. He couldn't waste any time.
              The train was still stationary, so the risk of falling was small,
              but once the train started moving, the whole thing would be a
              dangerous entanglement.
              <br></br> <br></br>
              Without further thought, he slid belly-down down the train wall.
              Fortunately, the roof of the train was covered with a thick layer
              of dust, which proved extremely dull and sticky, preventing an
              uncontrolled slide. With the toe of his shoe, he slid along the
              window and, in fact, found a grip on the edge. Louis pressed his
              hands against the upper pane, forcing it down. As he did so, his
              gaze fell on the interior of the compartment. He paused. Jelena
              was sitting in the compartment, sniffing loudly into her
              handkerchief.
              <br></br> <br></br>
              If women's emotional outbursts had always seemed strange to him,
              Louis now thanked God that Jelena was so caught up in her
              suffering that she didn't notice him. With difficulty, he pulled
              himself back onto the train roof using the edge of the roof.
              There, he slowly crawled backward until he was level with the
              previous window. This must definitely be his compartment now, he
              reassured himself. When he looked down, he noticed, to his relief,
              that the window was open. Alice had probably left it open because
              of her migraine, to get plenty of fresh air.
              <br></br> <br></br>
              Firmly gripping the edge of the roof, Louis slid down the side of
              the train again. At that moment, the conductor's departure whistle
              echoed through the station hall, and the train jerked into motion.
              Louis could already feel the wind on his body and the feeling of
              having lost control. Something caused him to buckle his legs,
              causing one leg to get caught in the window and regain his
              footing. Following his leg, he pushed his entire body through the
              window into the train and landed with a tumble on the
              hand-crocheted runner in front of the double bed.
              <br></br> <br></br>
              The macaw in the cage jumped up and began to scream. A completely
              dirty Louis frightened him so much that he screamed loudly, "Vive
              la France! Vive la France!" Suddenly, the door to the room opened,
              and Alice stared at Louis in disbelief. "What's going on here? Why
              are you sitting on the floor? What do you even look like?"{" "}
              <br></br> <br></br>
              Louis gestured for her to be quieter and close the door quickly.
              With question marks in her eyes, Alice followed the instructions
              and was then informed by Louis that he had been attacked and
              robbed at the train station. His expensive watch was also missing.{" "}
              <br></br> <br></br>
              "I'll call the police right away," Alice insisted, already holding
              the doorknob when Louis pulled it away. "Alice—you know perfectly
              well that we shouldn't do that. No police at all. Why am I
              dragging this old bird around with us? Not so you can set the
              police on our trail. Think about it. It's not worth it. I'll wash
              up and change my clothes now, and then everything will be fine. Do
              you understand?" Alice nodded. Silently, she turned to the still
              distraught macaw while Louis turned on the water.
              <br></br> <br></br>
            </h2>
            <div class="zig-zag zig-zag-color1">Zagreb Central Station</div>
            <h2 className="adventure-text">
              The express reached Zagreb before dinner was even served in the
              dining room. Only one passenger boarded, a 50-year-old Turkish
              lady who was covered in jewels and thus gave the impression of
              great wealth. She boarded compartment 7 with her small dog, a
              Cavalier King Charles Spaniel. Despite her pompous appearance, the
              other passengers, however, failed to notice her arrival, as they
              were preparing for dinner in their compartments. <br></br>{" "}
              <br></br>
              As Louis entered the dining room, he turned to the waiter with a
              question. "Tell me, how does our journey continue? What else is on
              the agenda?" "Mr. Moreau, we left Zagreb around 6:30 p.m. and are
              now on our way to Belgrade. That's a journey of approximately 400
              kilometers, which we expect to take six hours. So we should arrive
              there shortly after midnight. Another passenger will be picked up,
              so we'll have an hour's wait there as well. Then we'll continue to
              Sofia at 1:30 a.m. This route is also around 400 kilometers, but
              the route is more challenging. I therefore expect that we won't
              arrive in Sofia until around 8 a.m. To avoid arriving in
              Constantinople too late, the stop in Sofia will be only 30
              minutes. For the final leg to Constantinople, we expect an
              eight-hour journey, as it covers over 550 kilometers. I hope we'll
              arrive in the capital of the Ottoman Empire around 4:30 p.m. Is
              this information sufficient for you?"
              <br></br> <br></br>
              "That was really detailed. Thank you. Oh, and what's on tonight?"
              <br></br> <br></br>"Card games are usually played in the social
              room, and Mr. Yilmaz has offered to give a short concert on the
              grand piano." Louis huffed to himself. "Oh, he did! Well, that's
              wonderful." The irony in his voice was unmistakable. He turned
              back to his wife Alice, whom he escorted to their table.<br></br>{" "}
              <br></br>
              All passengers, except Clara Fischer, attended this dinner.
              However, this went unnoticed, as all attention was focused on the
              new passenger. Her name was Hatice Kaya and she was married to the
              wealthy Mustafa Kaya, who sadly passed away a year ago. According
              to her account, he had done good business as a sales
              representative and thus amassed a large fortune. That Mrs. Kaya
              was doing well was obvious. She had booked the most luxurious
              compartment of the express, wore the latest French fashions made
              of fine fabrics, and in them she appeared almost like a queen.
              Despite her age, she was an absolute magnet. Not only did she
              constantly twirl her long necklace, studded with precious stones,
              around her right index finger, and also not because of her
              intoxicating perfume, which clung to every object she touched, no,
              she radiated from within and at the same time seemed mysterious.
              Jelena, Luc, and Louis were enchanted. So it didn't matter to
              Louis that Kemal Yilmaz was playing his concert on the grand piano
              after dinner and Alice was sitting next to him, adoring him.
              <br></br> <br></br>
              Strangely, Hatice Kaya didn't seem to like this, because as soon
              as the last note faded away, she urged Kemal to play cards with
              her. Despite her erotic gaze, she couldn't convince him. He
              declared that he couldn't stand gambling, and even Hatice's
              suggestion that he play just for fun didn't change his attitude.
              <br></br> <br></br>
              Finally, Kemal agreed to host a karaoke evening, where he would
              accompany the singers musically. Hatice began with a medley of
              operetta songs, shining with an almost professional voice. The
              audience was thrilled and begged for encores, and Kemal, too,
              seemed to have fallen under Hatice's spell. <br></br> <br></br>
              Alice tried a ballad, but her voice had no carrying power, and
              Jelena later even claimed that it all sounded like a croaking
              parrot. "That sounds like this afternoon. It seemed to me there
              was a parrot on board," she explained to Luc. "Or was that also
              our Alice? Has she already rehearsed her ballad in her compartment
              this afternoon?" Jelena couldn't suppress a wicked grin.
              <br></br> <br></br>
              Time flew by, but at some point Kemal seemed to have grown tired,
              so he said goodbye for the day. Hatice insisted on accompanying
              him to his compartment. <br></br> <br></br>
              There was an unexpected pause in the party car. The remaining
              passengers decided to use it to restock their drinks. Louis was
              eager to learn more about the strange Mr. Claes. So he approached
              him and asked for a cigarette. "As I see, you're also a smoker. I
              don't have my cigarettes with me right now, could you lend me one
              of yours?" Luc smiled, "Of course," and reached into his suit
              jacket, but found nothing. Then he felt in all the pockets of his
              suit and was surprised to discover that his gold cigarette case
              was missing. "Strange. I was wearing exactly this suit today in
              Budapest, the case was still in there, and I haven't taken it out
              since," he justified himself.
              <br></br> <br></br>
              Jelena recognized the problem and quickly stepped in, offering
              Louis her Gauloises. Then Luc reported what Louis wanted to know.
              He lived in Liège and ran a studio there that was making a
              substantial profit. He loved the beautiful and the noble. Now he
              was on his way to recruiting artists who had made a name for
              themselves in the last years of the Ottoman Empire to his studio.
              When Louis asked him if he was married, he explained that he was
              still looking for the right one and therefore approached any woman
              he liked at first sight. Since the woman naturally also had to
              have inner qualities that matched his image, a closer relationship
              had unfortunately always failed. <br></br>
              <br></br>
              "Clara Fischer, for example, is a beautiful woman, but
              unfortunately, she's very simple. Not like our Jelena," Luc patted
              her on the shoulder, "but Jelena is married. That leaves only
              Hatice here on board. Since I'll be spending a few days in
              Constantinople, I'd definitely have time to get to know her
              better." <br></br> <br></br>
              "But Hatice is much older than you. She could be your mother, and
              she's too old for you to start a family with her," Louis objected
              indignantly. "Family," Luc snorted, "why do I need more family? I
              have four siblings and they're all married and have children. I
              need a lady for my heart. Someone who feels for me and whom I can
              make happy."
              <br></br> <br></br>A loud dog bark sounded from the aisle, more
              like a growl and not at all friendly. "What's that?" Jelena wanted
              to know. "Are there any animals on board? I thought that wasn't
              allowed!" "The steward told me that Hatice owns a Cavalier King
              Charles Spaniel. It's supposed to be a loving creature, though. It
              only growls at people it doesn't like," Luc reported.
              <br></br> <br></br>
              "Aha, then he probably didn't growl at his master, but at this
              Kemal," Jelena interrupted. "I don't know why Hatice is so
              interested in this man. He's a headstrong civil servant who
              doesn't know the true joy of life that Hatice radiates," she
              added.
              <br></br> <br></br>
              "Perhaps it's because they both have the same citizenship," Louis
              ended the conversation. Since Hatice had left the hall, his
              interest in the evening event had dwindled considerably. So he
              said goodbye and returned to his compartment with Alice. When they
              opened the door, they made a gruesome discovery. The birdcage door
              was open, as was the window, and the macaw was gone. In a panic,
              Louis examined the entire cage. He was seething with rage and ran
              into the corridor. There, he knocked several times on the door of
              compartment 2, but no one answered.
              <br></br> <br></br>
              Louis saw the steward coming down the aisle and quickly turned
              away from the door. "Can't you sleep?" the steward looked at Louis
              pityingly. "We'll be arriving in Belgrade in five minutes. You
              could take a walk in the fresh air for half an hour, and after
              that, you'll surely sleep like a log." Louis thanked him for the
              advice and returned to his compartment. As long as the train was
              in the station, he felt it was too risky to attempt to get into
              Clara Fischer's compartment again. So he would have to wait. Alice
              had lain down and was already sound asleep.
            </h2>
            <div class="zig-zag zig-zag-color1">Belgrade Central Station</div>
            <h2 className="adventure-text">
              Three-quarters of an hour later, voices reached Louis's ears from
              the corridor. He crept to the door and carefully opened it a
              crack. He was able to watch the steward escort a middle-aged lady
              into her compartment. "Mrs. Wegener, here we are. Compartment 1,
              this is your compartment for the rest of the night. I'll put your
              other luggage in the baggage car, so you'll have more space here.
              Just ring the bell if you need anything. I wish you a safe
              journey." The compartment door closed, and the steward dragged
              fishing gear and two suitcases through the corridor to the baggage
              compartment, which was located in the carriage between Hatice's
              compartment and the dining car.
              <br></br> <br></br>
              When the corridor was quiet again, the train started moving
              towards Sofia. Now Louis saw his opportunity. He put a few of his
              wife's hairpins in his trouser pocket, then carefully opened the
              corridor door and stepped out. With a few steps, he hurried past
              compartment no. 3, where the slimy Belgian was staying, and
              reached compartment no. 2. Louis's blood ran cold. The door to
              compartment no. 2 was wide open, and there was no trace of Clara
              Fischer. Frantically, Louis searched the closet, looked under the
              bed, and behind the curtain. Nothing. Clara had disappeared, along
              with all her belongings. He hit himself on the head with his fist.
              What a brainiac he was. Why hadn't he kept an eye on the corridor
              the whole time? The slut must have left the train in Belgrade.{" "}
              <br></br> <br></br>
              Back in his bed, Louis found it impossible to fall asleep. He
              repeatedly blamed himself, touched his forehead, and tossed and
              turned in bed. When he finally fell into a deep sleep, it was
              already 3:30 in the morning. Therefore, at breakfast time, he was
              still snoring loudly, which prompted Alice to go to breakfast
              alone.
            </h2>
            <div class="zig-zag zig-zag-color1">Sofia Central Station</div>
            <h2 className="adventure-text">
              In the dining car, she took her usual seat at her usual table and
              was just buttering her croissant when a lady approached her and
              asked if she could join her at the table. The lady introduced
              herself as Emma Wegener, said she was Serbian and had boarded that
              night. Curious about the noble-looking lady, Alice offered her the
              chair opposite and quickly became involved in conversation. It
              irritated Alice that Mrs. Wegener didn't take off her thin white
              gloves, even at breakfast.
              <br></br> <br></br>
              "That's not appropriate for a lady of my standing," Mrs. Wegener
              told her, immediately turning the conversation in a different
              direction. "So, how is it on board? Have fun." Alice was happy to
              be able to report on last night's karaoke.
              <br></br> <br></br>
              "So, there are many musical guests on board," Ms. Wegener
              summarized the presentation. "Indeed. Hatice, what a voice she
              has, even though she's already around 50. Oh, look, there she is,"
              Alica pointed to the door. Since Ms. Wegener was sitting with her
              back to the door, she had to turn around briefly. Hatice was
              wearing another expensive designer dress and, as always, was
              swinging her jeweled necklace. Luc offered her a seat at his
              table, and Hatice immediately placed her order with the waiter.
              <br></br> <br></br>
              Mrs. Wegener had seen enough. Using the excuse that she had
              forgotten her pills, she hastily said goodbye to Alice and
              discreetly left the dining room. <br></br> <br></br>
              When Alice returned to her compartment after breakfast, she told
              Louis, who had since gotten up, about the strange encounter. "You
              should have seen her. Like something from another century. It all
              looks elegant, yes, but a totally outdated style. What lady wears
              gloves all day these days? And then at breakfast too? And she went
              out to get her pills and didn't come back. You don't seem to be
              the only one who overslept this morning, by the way. Jelena wasn't
              at breakfast either," Alice tried to reassure her husband. "You
              both drank too much yesterday, I'm afraid," she stroked his hair.
              <br></br> <br></br>
              "No, no. Jelena only had a ticket to Belgrade. She got off last
              night. But that German girl got off too, that brat." Alice heard
              his tone become aggressive. "It doesn't matter, we have nothing to
              do with her!" Alice objected soothingly. "Nothing to do?" Louis
              jumped up indignantly and ran to the birdcage. "Nothing to do?"
              Then he ripped the cloth off the cage and shouted, "She stole from
              us! Look, the cage is empty," he said, turning the cage upside
              down!
              <br></br> <br></br>
              Alice put her finger to her mouth and let out a "shhh." "Not so
              loud. No one needs to hear it."
              <br></br> <br></br>
              An unmistakable scream rang through the train. It was the
              waitress, who, as usual, brought Hatice Kaya some dog food for her
              spaniel. The spaniel ran distraught from the compartment down the
              aisle and disappeared through the legs of the many onlookers, who
              had been attracted by the scream and were now staring at a scene
              of horror. Hatice, who had been such a radiant personality that
              evening, lay motionless between the armchairs, strangled with the
              belt of her own dress. Her jeweled necklace had disappeared from
              her neck.
              <br></br> <br></br>
              The steward was the first to realize what needed to be done. He
              quickly closed Hatice's compartment door and instructed all
              passengers to remain in their own compartments. He would stand
              guard in the corridor, because one thing was clear: the murderer
              must still be on board. The conductor would inform the police in
              Constantinople so that they could immediately intercept the train
              when it arrived at its destination.
            </h2>
            <div class="zig-zag zig-zag-color1">
              Constantinople Central Station
            </div>
            <h2 className="adventure-text">
              Deeply shocked, the guests followed the instructions and only
              reconvened in the train's lounge after a commissioner in
              Constantinople entered the train and called for this measure.
              <br></br> <br></br>
              "A terrible crime has been committed here on board. I would like
              to briefly introduce myself. My name is Ahmet Demir, I am the
              inspector in charge and have worked in the homicide department for
              over 20 years. Ms. Kaya, whose death we are investigating, was
              seen alive in the dining car at 9 a.m. At that time, the Orient
              Express, in which we are now, had already left Sofia Central
              Station. The train did not stop between Sofia and Constantinople
              and was immediately surrounded by police. The murderer must
              therefore still be on board. I will now interrogate those present
              on board one by one. Anyone with important information should
              please come forward; they will then be interviewed first. I ask
              the other passengers and employees to wait in their respective
              compartments until my colleague from the police picks them up for
              questioning. Is that clear?" the inspector looked around at the
              nodding crowd.
              <br></br> <br></br>
              Then the inspector raised his voice again: "Good. So who noticed
              anything suspicious?"
              <br></br> <br></br>
              There was silence in the room. "No one? Well then, before the
              interrogation, we'll start by searching all the compartments.
              Ismail, come!" He glanced at his colleague, and they both headed
              for Hatice Kaya's compartment.
              <br></br> <br></br>
              Isamail wrote on his notepad: "Dead woman's compartment: valuable
              necklace belonging to Mrs. Kaya not found in her compartment;
              sheet music by Kemal Yilmaz on the table; love letter from Mr.
              Claes; a white glove on the floor; various notes about Kemal
              Yilmaz in the diary, difficult to read; dog missing." <br></br>In
              Kemal Yilmaz's compartment 6, there is a women's magazine.
              <br></br> There is an envelope addressed to Jelena in compartment
              5. The contents cannot be found.
              <br></br> In compartment 4, there is an empty parrot cage; the
              floor panel is shifted, the cage is open, and there is no parrot
              inside. According to Mr. Moreau, the bird escaped during feeding
              and flew out the window.<br></br> Nothing unusual was found in
              compartment 3 with Mr. Claes. Ms. Jelena reported that Mr. Claes
              was missing his cigarette case; it was valuable, made of real
              gold.<br></br>In compartment 2: the door wasn't locked, but
              closed; upon opening it, a dog came towards us with a jeweled
              necklace in its mouth. The steward confirmed that both the
              necklace and the dog belonged to the murdered woman. When the dog
              ran out of the room at the time the waitress discovered the murder
              (it couldn't leave before because the door was closed here too),
              it didn't have a necklace in its mouth. Otherwise, compartment 2
              was empty.
              <br></br> No abnormalities in compartment 1. <br></br> In the
              luggage compartment: there are breadcrumbs in one corner; there
              are also suitcases belonging to Emma Weber, Hatice Kaya, and Luc
              Claes, as well as fishing equipment belonging to Milica Ilic.
              <br></br> <br></br>
              “Ismail, please bring in the steward, we’ll start with him,” the
              commissioner instructed Ismail.{" "}
            </h2>
            <div class="zig-zag zig-zag-color2">The first interrogation</div>
            <h2 className="adventure-text">
              "Hello steward, I'll start with you. Not because you look the most
              suspicious to me, but because I think you have the best overview
              of what was going on here on board." "Tell me, why was compartment
              2 empty and unlocked?" the inspector began the conversation.
              "Well, Clara Fischer was staying there. She was traveling from
              Vienna to Sofia. That's where I said goodbye to her." "So she was
              off the ship before the murder happened?" the inspector asked
              again. "Yes, that was her. She only had a small suitcase with her,
              and she was determined to carry it herself, I remember that. I had
              offered to leave it on the platform for her, because that's part
              of my job, but she didn't want to hear about it. It was only a
              small suitcase. About the size of a child. When I think about it
              now, she basically always wore the same thing. I think that's also
              the reason why she hardly ever attended meals. She probably
              couldn't comply with the dress code for the dining car." <br></br>{" "}
              <br></br>
              The inspector interrupted him: "And then this lady travels on such
              an expensive train? Where did she get the money for that?" The
              steward hesitated, then replied, "I don't know, but her ticket was
              properly paid for. Perhaps you should ask Mr. Moreau; he seems to
              have talked to her often. I've seen him several times in front of
              Mrs. Fischer's compartment. Mr. Moreau is also a weirdo. He
              actually arrived with a parrot. And how upset he got when I wanted
              to lift the cage onto the train. No, no one was allowed to touch
              it except him. The cage was too heavy, he said. What does he think
              he's doing? Do you know how heavy my suitcases are every day? For
              example, Mrs. Kaya's many suitcases, or Mrs. Wegener's; she even
              brought a whole fishing tackle kit with her."
              <br></br> <br></br>
              "Oh, so the fishing tackle is from Mrs. Wegener?" wondered the
              inspector and instructed his colleague, "Ismail, write everything
              down, listen!" But the inspector just nodded silently, as he was
              concentrating on writing. "What else was there?" the inspector
              persisted. "Nothing else, at least nothing special," the steward
              thought again, "no, nothing unusual." Then the inspector dismissed
              the steward and summoned Mr. Moreau.
            </h2>
            <div class="zig-zag zig-zag-color2">The second interrogation</div>
            <h2 className="adventure-text">
              "So you're Mr. Moreau. Where did you get on?" the inspector began
              the conversation. "I got on with my wife in Paris," Louis
              clarified. "Yes, with your wife and a parrot!" the inspector
              challenged him. "Exactly. With our macaw," Louis agreed. "And
              what's so special about your bird that no one was allowed to touch
              the cage?" "It was a very sensitive animal. I didn't want it to be
              stressed by all those people." <br></br> <br></br>
              "What happens when it gets stressed?" "Then it gets loud and
              croaks and gets all fidgety." "But it doesn't even notice if
              someone else is carrying the cage when the sheet is over it.
              What's the problem?" the inspector challenged Louis. Louis
              hesitated. "And then you tell the steward the cage is too heavy?"
              the inspector continued. <br></br> <br></br>
              "It is," Louis justified himself. "Mr. Moreau, I lifted the cage.
              It doesn't weigh much. But at the bottom of the cage, a board is
              loose, and if you move it, you'll hit a compartment, and something
              might have been transported there that weighs more than just the
              ridiculous cage. Is that correct, Mr. Moreau?" "What does that
              mean?" Louis bridled. He stretched out his right arm and pointed
              at the inspector. "What are you actually accusing me of?"{" "}
              <br></br> <br></br>
              "Oh," said the inspector, letting his gaze slide over Louis.
              "You've been sitting in the sun a lot, haven't you?" Louis
              couldn't be held back any longer. "Are you saying I have
              sunstroke, that I'm not quite right anymore?" "No, not at all,"
              the inspector continued his thought in a calm tone. "I just mean,
              you're quite tanned. Only there," he pointed to a spot on Louis's
              forearm, "there's not much tan there. It's as if you'd been
              wearing a big watch." "Yes, that one, I lost it." "And then you
              got a new one?" No one knew if it was really a question, but Louis
              took it that way. "People need watches. So I got a new one." "Yes,
              of course, but why a ladies' watch?" There was a brief pause, then
              Louis pulled himself together again; "I didn't know it was a
              ladies' watch. They fooled me at the jeweler's in Budapest."
              <br></br> <br></br>
              He sounded outraged, but that didn't bother the inspector. "May I
              have the watch?" Louis gave it to him. The inspector examined the
              watch and then continued: "The initials H.K. are engraved on the
              back. That should clear things up. The watch belongs to the dead
              woman. When did you take it from her?" "Inspector, I had nothing
              to do with the murder, you have to believe me." "Faith! I lost my
              faith in humanity many years ago," groaned the inspector. "Ismail,
              take him back to his compartment, there he can think for a while."
              "But it wasn't me. This is all that German woman's fault." "German
              woman?" "Yes, Mrs. Fischer, that whore." "Now, now, now, what kind
              of expressions are those on this luxury train!" Now the inspector
              was outraged.<br></br> <br></br>
              "It's true! She stole my watch, Luc's gold cigarette case, and the
              dog also took Hatice's necklace from her compartment." "Taking it
              from her compartment doesn't mean that Mrs. Fischer hid the
              necklace there. After all, Mrs. Kaya seems to have been wearing
              the necklace at breakfast, and Mrs. Fischer had already left the
              train by then." "That's the strange thing about this whole thing.
              But who else is supposed to have killed Hatice? Why does a guest
              have to sneak off the train in Belgrade at midnight if they
              haven't committed any crime?" Louis grumbled. "Who sneaked off the
              train in Belgrade?" the inspector wanted to know. "Well, Mrs.
              Fischer." "And how do you know that?" "I was in her compartment as
              soon as we left Belgrade station. The door was open and the
              compartment was empty. She was gone, so she must have gotten off.
              And she hasn't appeared since, or did you find her on the train?"
              "Well, let's leave it at that. What did you want from Mrs.
              Fischer?" "I already told you. She was supposed to give me back my
              watch, because she stole it." "Ah yes, and that's why you're
              stealing Hatice Kaya's watch?" Louis realized that he could only
              burn his mouth with this conversation and therefore preferred to
              remain silent from now on. The inspector therefore had him taken
              back to his compartment and ordered that Mrs. Wegener be summoned.
            </h2>
            <div class="zig-zag zig-zag-color2">The third interrogation</div>
            <h2 className="adventure-text">
              "Mrs. Wegener, you were the last to board, in Belgrade. Is that
              correct?" "Yes, that's correct." "What I'm wondering..." he looked
              at Mrs. Wegener's hands, "it's midsummer and you're wearing gloves
              all day. Why are you doing that?" Mrs. Wegener took off her left
              glove and pointed to her hand: "Look, that's healthy, white skin.
              But with today's sunlight, skin ages faster than average, and skin
              cancer is a problem," the commissioner interrupted. <br></br>{" "}
              <br></br>
              "Now don't think you can pull the wool over my eyes. The sun
              doesn't shine on the train, and even there you're wearing these
              gloves. We found a glove like that in Ms. Kaya's compartment as
              well. It's a left-handed glove. Ms. Wegener, are you left-handed?"
              "No, I'm right-handed by birth," she clarified without hesitation.
              "Okay, then take off your right glove." Ms. Wegener paused. "Ms.
              Wegener, I can also get the police to order you to do that." Ms.
              Wegener grasped the fingertips of her right glove with her left
              hand and slowly began to pull it off her hand. Beneath, a black
              lump with metal struts appeared. The inspector pointed at it and
              asked, "Ms. Wegener, what is that?" "It's a prosthesis. I lost
              half of my right hand in an explosion." "When was that?" "During
              World War I," admitted Ms. Wegener. "Exactly, when your name was
              still Milica Ilic," the inspector clarified. "How do you know
              that?" Ms. Wegener was quite astonished. <br></br> <br></br>
              "We investigated. When the steward told us that the fishing gear
              in the luggage compartment belonged to them, we researched the
              name Milica Ilic, which was printed on the fishing gear." "And you
              found it?" Tears welled up in Mrs. Wegener's eyes. "Yes, we did,"
              the inspector answered calmly. "We know that you lived in the
              Ottoman Empire during World War I and joined the resistance there.
              You fought against the Ottoman Empire's collaboration with the
              Germans, and in doing so, you were lured into a trap. You could
              have lost your life entirely, but the explosion only shattered
              your hand, is that right?" the inspector looked lovingly into her
              eyes. Tears streamed down Mrs. Wegener's cheeks. All the terrible
              experiences came flooding back to her. Ismail handed her a
              handkerchief. It took a while for her to calm down. Then she took
              a deep breath and reported: <br></br> <br></br>
              "After the explosion, I knew it was too dangerous for me. I left
              the Ottoman Empire and hid with relatives in Serbia. It wasn't
              that difficult to get a new passport with a new name. One of my
              uncles took care of it for me. I've had the fishing equipment
              since I was a teenager. I didn't realize that the sign would one
              day betray me. Just as I was betrayed in the resistance." The
              commissioner placed his hand on her left hand. "So, shall we have
              a test of strength? How strong is your left hand?" <br></br>{" "}
              <br></br>
              Mrs. Wegener remained silent. Then she raised her voice again, but
              very shaky: "Yes, I visited Hatice Kaya in her compartment. Right
              after breakfast. I recognized her immediately. She was the one who
              had betrayed me back then. I had to talk to her. It was still
              incomprehensible to me how one of my best friends could have
              betrayed me like that. She wanted to kill me. Do you understand?"
              <br></br> <br></br>
              "And now you're suspected of having killed her, Ms. Wegener." "But
              I didn't kill her," Ms. Wegener jumped up. "Ms. Wegener, please
              sit down again. I know you didn't strangle Ms. Kaya. You don't
              have the strength in your hands for that. Ms. Kaya was a strong
              and healthy woman. You couldn't have strangled her with your 1.5
              hands. You simply couldn't have done it. But what did the
              conversation with Ms. Kaya achieve for you then?" <br></br>{" "}
              <br></br>
              "She should explain herself to me. I wanted to finally understand.
              So that my nightmares would stop at night. So that I could live in
              peace again. But she wouldn't even talk to me. She says she didn't
              betray me. I was just making it all up. But that's not how it
              is..." "Okay, okay, you don't have to say anything more about it.
              There are archive files about it. We know pretty much exactly what
              happened back then. Do you still remember what time you left Ms.
              Kaya's compartment?" "I think it was a quarter to ten. I don't
              remember exactly. It all got to me so much. I went into my
              compartment and just stared at the wall and cried." Ms. Wegener
              now looked pale and exhausted. "First, take a deep breath. I'll
              send a doctor to your compartment right away. He can also give you
              a sedative injection, if you wish. Ms. Wegener, I wish you all the
              best. You can leave the train today." He shook her hand goodbye.
              <br></br> <br></br>
              "Ismail, please issue Ms. Wegener a pass so she can get off the
              train, and then please bring Mr. Yilmaz in."
            </h2>
            <div class="zig-zag zig-zag-color2">The fourth interrogation</div>
            <h2 className="adventure-text">
              "Mr. Yilmaz, you are a government official here in Constantinople.
              What was your relationship with Ms. Kaya?"
              <br></br> <br></br>
              "Before Ms. Kaya boarded this train in Zagreb, the lady was
              completely unknown to me. I actually only got to know her better
              at dinner and afterwards in the lounge. At first, I found her very
              pushy and somewhat unpleasant. She absolutely wanted me to play
              cards with her. But that goes against my religious beliefs. Only
              when I played my compositions from my youth on the piano did my
              attitude towards her change. She was remarkably talented when it
              came to singing, and as a musical couple, if you can call it that,
              we harmonized well with each other.
              <br></br> <br></br>
              At some point, I was too exhausted and just wanted to go to bed.
              Ms. Kaya accompanied me to my compartment, which was right next to
              hers. There, she urged me that she wanted to continue talking to
              me. I gave her the grades and said we could discuss them tomorrow,
              but today I needed my sleep. Then I went to my compartment. There,
              I changed and washed. Then I heard a rustling at the door, and
              when I opened it, she was standing there and had picked out a few
              books and magazines for me. There was sure to be something there
              that I would like. I could keep everything, she said. Then she
              left. I put everything on the table and turned off the light. That
              was all. The next morning, I had breakfast brought to my room
              because I didn't want to meet her," Mr. Yilmaz concluded his
              summary.
              <br></br> <br></br>
              "And you've really never met Ms. Kaya before? Think carefully!"
              the inspector demanded. Mr. Yilmaz stared at the ground in front
              of him, then his eyes moved to the left, and the inspector knew
              that the politician was now analyzing his past. He paused again,
              but finally shook his head. "No, Inspector, I don't know the
              woman. I can't remember ever seeing her before this trip. Why do
              you think I should know her?" <br></br> <br></br>
              "Well, Mr. Yilmaz, as you know, we have examined Ms. Kaya's
              compartment thoroughly. We have found numerous notes that Ms. Kaya
              had made about you. She had probably been observing you for some
              time... and we don't believe it was a coincidence that Ms. Kaya
              encountered you on this trip. Be careful. Ms. Kaya seems to have
              been involved in secret agent circles, and if Ms. Kaya can no
              longer spy on you, perhaps someone else will in the future."
              <br></br> <br></br>
              Mr. Yilmaz stared at the inspector. Then he stood up, thanked him,
              and took the pass from Ismail, which allowed him to leave the
              train. "I wish you all the best," the inspector told him.
            </h2>
            <div class="zig-zag zig-zag-color2">The fifth interrogation</div>
            <h2 className="adventure-text">
              The inspector then turned to Ismail. "Who are we interrogating
              now, Luc Claes or Jelena Petrovic?" "Ladies first," Ismail decided
              and called Jelena over.
              <br></br> <br></br>
              "Ms. Petrovic, you boarded the Orient Express in Vienna," the
              inspector began slowly, introducing the conversation. "Why are you
              still on the train?" he confronted her the next moment. <br></br>{" "}
              <br></br>
              "I'm sorry, I don't understand you," replied Jelena. "Yes, you
              understand me very well. You only have a ticket to Belgrade, but
              you're still on the train," the inspector claimed. "That's not
              true," Jelena objected. "I got off in Belgrade and bought a ticket
              to Constantinople," she clarified. "Oh, yes, may I see your
              ticket?" the inspector asked. "It's in my compartment; I'd have to
              get it first." "You can do that later," said the inspector. "Now
              let's talk a bit," the inspector took a quick sip from his coffee.
              Then he continued his questioning: "What relationship did you have
              to the dead woman?" "What relationship? No relationship at all. I
              couldn't have known her before she boarded the train." "And how
              did you meet her?" the inspector interrupted. "Well, only at
              dinner and then at karaoke. But I didn't sing. Only she sang, oh,
              and a little bit, Alice, but she had no talent for singing. And
              that was all," Jelena reported.
              <br></br> <br></br>
              "That's all, so no motive for murder?" the inspector wanted to
              know. "Motive for murder? I could never murder anyone," Jelena
              blurted out. "Let's leave it at that. We found an envelope in your
              compartment. It's from your husband and was sent just a few days
              ago. May we know what it said?" "That was very private. I don't
              want to talk about it." Jelena blushed slightly. "Other passengers
              on board also received letters. Mrs. Kaya had a love letter from
              Mr. Claes. Did you know that Mr. Claes was in love with Mrs.
              Kaya?" "Most of the passengers knew that." "How am I supposed to
              understand that? Did he court her publicly?" "No, they hardly had
              time for that. Ms. Kaya had only been on board since Zagreb. But
              when Mr. Moreau, Mr. Claes, and I were having a drink after the
              karaoke, Mr. Claes became very talkative about the topic of
              marriage. He found me charming, too, but he wrote her the love
              letter... because he thought I was already married." "And aren't
              you?" <br></br> <br></br>
              Jelena had to turn her head toward the deck to keep from crying.
              "My husband wants to divorce me." "And that's what the letter
              said?" Jelena realized she'd fallen into the commissioner's trap.
              She swallowed. "Yes, that's what the letter said. He didn't want a
              woman who loved her job more than him, he wrote. I couldn't care
              less about him and I should go to hell. His father had made it
              clear to him that the man was in charge of the household and that
              a woman who didn't obey should be punished. But that wasn't his
              style. He would simply have the marriage annulled for
              childlessness. I wouldn't need to come home anymore. It was over.
              He would marry the sergeant major's daughter in six months.
              Everything had already been arranged." Jelena sniffed. <br></br>{" "}
              <br></br>
              "So you also gave yourself a chance with Mr. Claes?" "What do you
              mean by admitted? He himself admitted that evening that he found
              me more attractive than Mrs. Kaya. Inspector, a 35-year-old young
              man would rather have a 31-year-old woman than a 50-year-old
              widow. Besides, she wasn't interested in Mr. Claes either. She was
              after Mr. Yilmaz, that was obvious. So it's no wonder she left Mr.
              Claes's love letter unread on her desk." "Then how do you know
              what the letter said?" the inspector wanted to know. <br></br>{" "}
              <br></br>
              Jelena remained silent. "Ms. Petrovic, you know what was in the
              letter because you opened it in Ms. Kaya's compartment. You simply
              entered Ms. Kaya's compartment when she wasn't there." Jelena
              remained silent. "Ms. Petrovic, you have a choice. You can help
              and support us now, or you can be taken into custody, and we will
              have Ms. Kaya's entire compartment, including the letter, examined
              for fingerprints. Which do you prefer?" The inspector's tone
              sharpened. "Well, I was in Ms. Kaya's compartment," Jelena
              admitted. "When Ms. Kaya left for breakfast this morning, I
              entered her compartment. There I found the letter from Luc. I
              opened it and read it." "And then Ms. Kaya came back?" the
              inspector stated. "No, I was already back in the corridor when Ms.
              Kaya came back. She didn't notice anything." <br></br> <br></br>
              "And how did the story continue?" the inspector asked her. "I went
              straight to Luc and told him everything: that my husband was
              releasing me, that I loved him, and that we could start a family,
              and that Kaya wasn't interested in him and was after Yilmaz. That
              there was countless pieces of evidence for this in Kaya's
              compartment, because I, too, had seen the many notes about Mr.
              Yilmaz. I also told him that Kaya not only owned the jeweled
              necklace, but that I had seen an entire box full of jewelry
              there."<br></br> <br></br>
              "And Claes, how did he react?" the inspector seemed very
              interested. "He was suddenly so strangely different. It was
              important to him that his bride had a lot of money, and I said
              that wasn't important, since I loved him and he had enough money
              for both of us. However, he said a marriage would only succeed if
              both spouses were of the same social class, i.e., financially
              equal. If I didn't contribute anything to the marriage, that would
              be a bad omen from the very beginning." <br></br> <br></br>
              "And then they went over and snatched the jewelry boxes?" the
              inspector interrupted. "I went back to Kaya's compartment. I was
              blinded. But the jewelry box was gone, and Mrs. Kaya... Mrs. Kaya
              was lying dead on the floor, strangled. I thought, if the jewelry
              had already been stolen, the chain wouldn't matter, and I took the
              chain from the dead woman's neck and ran out of the room with it.
              I was just level with my compartment when the waitress entered
              Mrs. Kaya's compartment." "And then things got too heated for you,
              and you hid the chain in compartment 2. You chose Mrs. Fischer's
              former compartment because it was the only one whose door was
              unlocked. Even your own compartment would have had to be unlocked,
              and you didn't have that much time at that moment. When the
              waitress's scream echoed through the corridor, you simply mingled
              with the passengers who wanted to see what had happened, and no
              one noticed that you hadn't even come out of your own compartment.
              Was that so, Mrs. Petrovic?" the inspector's voice sounded
              threatening. <br></br> <br></br>
              Jelena nodded. "That's exactly how it was, Inspector. And Kaya's
              dog must have smelled the strong perfume on the chain; he
              immediately ran there." "Thank you, Jelena, you can go back to
              your compartment. For now, I'm done with you."
            </h2>
            <div class="zig-zag  zig-zag-color2">
              Before the sixth interrogation
            </div>
            <h2 className="adventure-text">
              After Jelena left the room, Ismail turned to the inspector.
              "Inspector, should I call Mr. Claes in for questioning now?" he
              asked. "Why?" The inspector seemed surprised. "Well, because he
              strangled Mrs. Kaya," Ismail stated. "How do you come to that
              conclusion? Mr. Claes didn't strangle Mrs. Kaya. Mr. Claes is a
              classic marriage swindler, but he also shies away from cruel acts
              of violence. I contacted a colleague in Belgium, and there, Luc
              Claes has attracted attention several times. He even had to serve
              a prison sentence once. Presumably, things got too hot for him in
              Belgium. He has since moved to Paris. They don't seem to know him
              there yet, at least not his professional side."
              <br></br> <br></br>
              The inspector paused to finish his coffee. "Ugh, it doesn't taste
              good anymore, it's so cold." Then he instructed Ismail: "Let's
              interview the Moreau couple."
            </h2>
            <div class="zig-zag zig-zag-color2">The sixth interrogation</div>
            <h2 className="adventure-text">
              "Well, Mr. Moreau, have you remembered where you got Mrs. Kaya's
              watch? Did you take it directly from the lady's hand, or was it in
              Kaya's jewelry box?" The inspector simply posed the question, but
              immediately turned to Ismail. "Ismail, now that the Moreau couple
              are here and Compartment 4 should therefore be empty, I would like
              you to go into the compartment and get me the birdcage."
              <br></br> <br></br>
              Ismail fulfilled the request as he was told, but secretly wondered
              what this action was all about.
              <br></br> <br></br>
              "Thank you, Ismail," the inspector gave him a thumbs-up in
              appreciation. Then he asked Ismail to open the cage, reach in
              through the opening, and touch the bottom plate. When Ismail had
              removed the bottom plate, the inspector's eyes began to shine, and
              Ismail, too, felt a sense of happiness. In the compartment under
              the bottom plate lay all the jewelry from Mrs. Kaya's jewelry box.
              "So, Mr. Moreau, let me guess. You took the ladies' watch you're
              currently wearing on your wrist from the jewelry box and hid the
              rest of the jewelry here in the birdcage. Just as you had done
              before with the smuggled goods. Clara Fischer had not only stolen
              her watch, but also the smuggled goods from the birdcage. To do
              so, she had to release the bird. And when you realized that, you
              were afraid, because the goods were not yours, but you were merely
              their bearer. If you didn't hand over the smuggled goods to the
              designated recipient at the destination, they would suspect that
              you had embezzled the goods, and then you would be in a dilemma.
              You therefore urgently needed a replacement.
              <br></br> <br></br>
              By the way, Ms. Fischer didn't disembark in Belgrade, as you
              suspected. She stayed on board until Sofia and was then seen off
              by the steward. After Ms. Fischer had looted her contraband, it
              had apparently become too risky for her in her compartment, so she
              hid in the luggage compartment. The steward only didn't notice her
              there because she was hiding in her own suitcase, which was more
              or less empty the whole time. One suitcase more or less is nothing
              unusual in the luggage compartment, especially when the luggage is
              already piled up there. Presumably, she only crawled into the
              suitcase when the luggage trolley was opened. This is indicated by
              the breadcrumbs, which must also have come from her. This issue is
              therefore resolved. What we still need is the answer to the
              question of how the jewelry got into her in the first place. Would
              you like to tell us that story, Ms. Moreau?"
              <br></br> <br></br>
              All eyes now turned to Alice. "You had to find out at some point.
              Why should I sugarcoat it? And if you take fingerprints, you'll
              find traces of me in Ms. Kaya's room, too." Alice took a deep
              breath. Then she continued: "I returned to our compartment this
              morning after dinner. Louis was awake by then, and I talked to him
              about Mrs. Wegener. He finally got up because he needed to use the
              bathroom in the corridor. We don't have our own bathroom in our
              compartment. When he left, I heard a man and a woman arguing in
              the next room—I mean, Mr. Claes's compartment. I knew immediately
              that it was Luc and Jelena who were arguing. Jelena talked about
              the jewelry box in Mrs. Kaya's room. Because I had learned from
              Louis that our contraband had been stolen and we were therefore in
              a critical situation, I recognized what I had heard as a huge
              opportunity. I immediately went to Mrs. Kaya's compartment. As a
              precaution, I knocked, but when no one answered, I opened the door
              with my hairpin. I already had the jewelry box in my hand when
              Mrs. Kaya returned to the compartment. There was No alternative. I
              had to strangle her, otherwise she would have reported me. I
              tucked the jewelry boxes under my arm and quickly left the
              compartment again. At that moment, I wasn't thinking about the
              valuable necklace that Mrs. Kaya was wearing around her neck. I
              also didn't have the time. I had to leave as quickly as possible.
              I immediately returned to our compartment, leaving the door ajar
              so that everything went quickly. Everything seemed to be perfect
              again. Louis couldn't believe our luck when he saw the box."{" "}
              <br></br> <br></br>
              "Why didn't we find the jewelry during the first search of the
              compartments?" Ismail, who had been listening attentively, wanted
              to know. "Because these gentlemen are smuggling professionals,"
              replied the inspector. "They know thousands of hiding places.
              Sometimes they have hollow spaces in shoe heels, sometimes the
              jewelry is transported under a bun or in a double bra," the
              inspector leaned toward Mr. Moreau. "Would you like to tell us
              your secret hiding place?"<br></br> <br></br>
              "No, Inspector," Louis had apparently regained his pride, as he
              explained, "secret recipes remain secret recipes. Besides, our
              punishment won't change just because we reveal one of our secret
              recipes to you, right or am I right, Inspector?" "That's right,"
              the inspector agreed. And he ordered the police officers to take
              the Moreaus away.
            </h2>
            <div class="zig-zag zig-zag-color3">
              <a className="adventure-top" href="#adventure-top">
                {" "}
                This adventure story was invented and written by me <br></br>
                Reinhild's myOrientTrip - copyright &copy; 2025 all rights
                reserved <br></br>Click here to get to top.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adventure;
