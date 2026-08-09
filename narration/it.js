// narration/it.js
// -----------------------------------------------------------------------------
// Italian narration text.
//
// Keyed by stop id — the same slugs as narration/stops.js. `lines` is positional:
// lines[i] is spoken over beats[i] of the matching entry in stops.js, so the two
// arrays must stay the same length. 47 stops, 187 lines.
//
// This file holds text and nothing else. Ordering, timing, map numbers and photos
// live in narration/stops.js, which carries no text at all.
//
// Extracted from the TOUR array in index.html, which was the canonical source at
// the time of the split. index.html still carries its own inlined copy until it is
// converted to load these files; until then, edits made here do not reach the app.
// -----------------------------------------------------------------------------

export const LANG = "it";

export const IT = {
  welcome: {
    title: "Benvenuti, termini e storia",
    caption: "Partenza da CambridgeSide",
    lines: [
      "Benvenuti a bordo, e grazie per essere con noi oggi! Sistematevi e mettetevi comodi: nei prossimi 70 minuti scivoleremo dolcemente da CambridgeSide fino a Harvard e ritorno, con il vostro capitano al timone e tante storie da raccontare lungo il percorso.",
      "Prima, una breve nota di sicurezza, dato che siamo una barca ispezionata dalla Guardia Costiera. Se mai ne avessimo bisogno, i giubbotti di salvataggio sono riposti sotto i cuscini blu, davanti e dietro la barca, anche se di certo non pensiamo di doverli usare.",
      "Estintori e attrezzature di sicurezza sono collocati in giro per la barca, quindi lasciateli all'equipaggio, a meno che non vi chiediamo una mano.",
      "Sentitevi liberi di girare e trovare il vostro posto preferito. Vi chiediamo solo di non correre e di non arrampicarvi sui sedili, e di tenere mani, testa e oggetti dentro la barca.",
      "Un po' di freddo, o troppo vento? Fatemi un cenno e aprirò o chiuderò un finestrino per voi. Sono pesanti e richiedono uno strumento speciale, quindi lasciate a noi il lavoro pesante.",
      "A bordo non si fuma e non si svapa, ma abbiamo un bar, quindi venite a salutarci in qualsiasi momento per una birra fresca, un bicchiere di vino, un cocktail, una bibita o uno spuntino.",
      "Che siate qui per le storie o semplicemente per la vista, mettetevi a vostro agio, e un gentile promemoria: tenete basso il chiacchiericcio durante la narrazione, così tutti possono sentire. E ora, godiamoci il fiume insieme!",
      "Prima di partire, ecco qualche termine nautico che sentirete durante il tour.",
      "La prua è la parte anteriore della barca, e la poppa è la parte posteriore.",
      "Tribordo è il lato destro della barca, e babordo è il sinistro.",
      "E la timoneria è dove il capitano guida la barca.",
      "Stiamo lasciando il Lechmere Canal e ci dirigiamo verso il Charles River.",
      "Il Charles è il confine naturale tra Boston e Cambridge, quindi per la prima metà della crociera Boston è alla vostra sinistra e Cambridge è alla vostra destra.",
      "Mentre mappava la regione nel 1614, John Smith lo chiamò inizialmente Massachusett River, dal nome della tribù di nativi americani che viveva qui; in seguito fu ribattezzato in onore e per volere di re Carlo I.",
      "Scorre per 80 miglia attraverso 23 paesi e città, partendo dall'Echo Lake a Hopkinton e finendo nel Boston Harbor.",
      "Hopkinton è anche il punto di partenza della Boston Marathon, dove i corridori raggiungono la città dopo 26,2 miglia.",
      "Nel 1910 fu costruito il primo sistema di diga e chiusa per controllare il livello dell'acqua del fiume, ed è ciò su cui sorge oggi il Museum of Science.",
      "Quella diga creò il bacino tranquillo e permise all'Esplanade di aprire al pubblico spazi verdi; una diga più nuova la sostituì mezzo miglio più a valle nel 1978.",
    ],
  },
  mgb: {
    title: "Mass General Brigham",
    caption: "L'Ellison Building",
    lines: [
      "Sul lato di Boston c'è il Mass General Brigham, costantemente classificato da U.S. News & World Report tra i migliori ospedali del paese.",
      "Il Mass General fu fondato nel 1811 e il Brigham and Women's nel 1832; i due si fusero nel 2019.",
      "Nel 1846 ospitarono la prima dimostrazione pubblica di anestesia chirurgica con etere, nell'Ether Dome, che si può ancora visitare oggi.",
      "Nel 1923 i chirurghi qui eseguirono il primo intervento riuscito su una valvola cardiaca, e nel 1954 il primo trapianto d'organo riuscito, un rene tra due gemelli.",
      "Nel 1962 un'équipe guidata da Ronald Malt eseguì il primo reimpianto riuscito di un braccio amputato, su un bambino di dodici anni.",
      "Nel corso degli anni, cantanti come Adele, Cher, Lionel Richie, Roger Daltrey e Steven Tyler si sono tutti operati qui.",
      "L'eliporto sull'edificio nero permette ai pazienti gravemente feriti di arrivare per via aerea.",
    ],
  },
  brutalism: {
    title: "Brutalismo",
    caption: "Mass Eye & Ear Infirmary",
    lines: [
      "Questa torre di cemento è la Mass Eye and Ear Infirmary, un esempio di Brutalismo, uno stile diffuso a Boston dagli anni '50 ai '70.",
      "Il nome deriva dal francese 'béton brut', che significa cemento grezzo.",
      "Doveva apparire solido e potente, anche se alcuni lo trovano freddo, o persino brutto.",
      "Ne vedrete altri esempi dal fiume: il MIT Green Building, le Warren Towers, la torre della BU Law, Peabody Terrace e Mather House.",
    ],
  },
  longfellow: {
    title: "Longfellow Bridge",
    caption: "Il ponte della saliera e pepiera",
    lines: [
      "Questo è l'Henry Wadsworth Longfellow Bridge, costruito tra il 1900 e il 1907, il secondo ponte più lungo sul Charles, con circa 1.768 piedi.",
      "I locali lo chiamano il Salt and Pepper Shaker Bridge, perché le torri di pietra ricordano una saliera e una pepiera. La MBTA Red Line vi passa sopra.",
      "Un restauro di cinque anni si svolse dal 2013 al 2018. Stimato in tre anni, sforò tempi e budget, confermando il detto locale secondo cui Boston ha solo due stagioni: l'inverno e i lavori in corso.",
      "Le navi vichinghe scolpite sui piloni centrali derivano da una teoria popolare del XIX secolo secondo cui i Vichinghi esplorarono il New England nel Medioevo.",
      "Le prove erano scarse, ma il professore di Harvard Eben Norton Horsford arrivò persino ad affermare di aver trovato le fondamenta della casa di Leif Erikson a Cambridge, guarda caso proprio dietro l'angolo di casa sua.",
      "Originariamente chiamato Cambridge Bridge, fu ribattezzato in onore di Longfellow nel 1927, dopo una poesia che lui scrisse sul vecchio ponte che sorgeva qui; quella poesia si trova ancora oggi incisa intorno al ponte.",
    ],
  },
  community: {
    title: "Community Boating",
    caption: "La vela per tutti",
    lines: [
      "Sul lato di Boston c'è Community Boating, che rende facile ed economico per i locali imparare a navigare a vela quest'estate.",
      "Fondata nel 1946, è il più antico programma di vela pubblico ininterrottamente attivo negli Stati Uniti.",
      "La missione di questa organizzazione no profit è essere il parco giochi velico pubblico di Boston e offrire la vela per tutti.",
      "Le lezioni di vela per ragazzi partono con una tariffa proporzionata al reddito, a partire da un solo dollaro, e un Universal Access Program offre alle persone con disabilità un accesso sicuro alla vela.",
    ],
  },
  esplanade: {
    title: "L'Esplanade",
    caption: "Hatch Memorial Shell",
    lines: [
      "Sul lato di Boston si estende l'Esplanade, un nastro di parco lungo tre miglia costruito interamente su terreno di riporto, tra il Museum of Science e il BU Bridge.",
      "Il suo elemento centrale è l'Hatch Memorial Shell. Conchiglie acustiche temporanee sorgevano qui dal 1929, ma venivano smontate dopo ogni utilizzo.",
      "Questa conchiglia permanente in granito fu costruita nel 1941, grazie a un dono di Maria Hatch in onore del fratello defunto Edward, un generale dell'Union Army; la donazione fu destinata a 'scopi musicali e artistici'.",
      "È il palcoscenico dei concerti per tutta l'estate, soprattutto la celebrazione del Quattro Luglio con i Boston Pops, che si tiene qui ogni anno dal 1929 e richiama fino a mezzo milione di persone.",
    ],
  },
  berkeley: {
    title: "Il vecchio, vecchio Hancock",
    caption: "200 Berkeley Street",
    lines: [
      "Questo è il 200 Berkeley Street, chiamato anche la Old, Old John Hancock Tower. Completato nel 1947, fu sede della John Hancock Life Insurance ed è alto circa 495 piedi.",
      "A quell'epoca, le compagnie assicurative e le banche aggiungevano spesso qualcosa di utile per la comunità, ed è per questo che questo edificio ha un faro meteorologico.",
      "Il faro cambia il colore della guglia, e i locali conoscono la filastrocca: blu fisso, cielo limpido; blu lampeggiante, nuvole in arrivo; rosso fisso, pioggia in vista; rosso lampeggiante, neve invece.",
      "In estate, rosso e bianco lampeggianti significano che una partita dei Red Sox è stata rinviata per pioggia. E nel 2004, quando i Sox vinsero finalmente le World Series, lampeggiò blu e rosso: la Curse of the Bambino era morta.",
      "John Hancock riportò qui il proprio quartier generale nel 2019, e nel 2023 spostò il suo famoso logo, a lungo esposto al Fenway Park, alla base del tetto a gradoni.",
    ],
  },
  hancock: {
    title: "Hancock Tower",
    caption: "200 Clarendon Street",
    lines: [
      "Si erge imponente il 200 Clarendon, la 'nuova' John Hancock Tower, costruita tra il 1968 e il 1976. Con 790 piedi e 60 piani, è l'edificio più alto del New England.",
      "La sua inaugurazione fu rinviata di cinque anni a causa di gravi problemi di ingegneria.",
      "I forti venti facevano oscillare i piani superiori al punto da causare nausea, così furono installati due contrappesi di piombo da 300 tonnellate al 58° piano per stabilizzarla.",
      "Il difetto più pericoloso erano le finestre: ognuna pesava 500 libbre e cominciò a staccarsi e a precipitare sul marciapiede molto più in basso. Ogni volta che il vento superava le 45 miglia orarie, la polizia chiudeva le strade circostanti.",
      "Nel 1973 tutte le 10.344 finestre furono sostituite. Durante i lavori, dei pannelli di compensato riempirono i telai vuoti, guadagnandole il soprannome di Plywood Palace.",
    ],
  },
  huntington: {
    title: "111 Huntington Ave",
    caption: "L'edificio 'R2-D2'",
    lines: [
      "Dietro lo skyline c'è il 111 Huntington Avenue, il primo grattacielo completato a Boston nel nuovo millennio. I locali lo chiamano l'R2-D2 Building.",
      "Il sindaco di lunga data Tom Menino non amava il progetto originale a tetto piatto, dicendo che lo skyline di Boston era noioso e che 'i tetti piatti non funzionano'.",
      "Gli architetti tornarono con diverse opzioni, e Menino scelse la cupola aperta in cima. È puramente decorativa, e il suo unico compito è rendere lo skyline più interessante.",
    ],
  },
  pru: {
    title: "Prudential Tower",
    caption: "'The Pru'",
    lines: [
      "Quella torre alta è la Prudential, o 'the Pru', completata nel 1964. Con 750 piedi e 52 piani, è il secondo edificio più alto di Boston, con tanti negozi di lusso all'interno.",
      "Superò la Custom House Tower, che deteneva il primato da 49 anni: quella era di proprietà federale ed esente dal vecchio limite di altezza di 125 piedi di Boston.",
      "Ai piani superiori c'erano il ristorante Top of the Hub e lo Skywalk Observatory per oltre 50 anni, finché il proprietario dell'edificio non pose fine ai loro contratti d'affitto nel 2020.",
      "Oggi una terrazza panoramica su tre livelli chiamata View Boston occupa la cima, con mostre interattive, un cocktail lounge chiamato Stratus e una Cloud Terrace all'aperto per viste panoramiche.",
    ],
  },
  onedalton: {
    title: "One Dalton",
    caption: "Four Seasons e residenze",
    lines: [
      "La torre scura e curva è One Dalton, completata nel 2019. Con 742 piedi e 61 piani, è l'edificio interamente residenziale più alto del New England.",
      "I suoi primi 23 piani sono il Four Seasons Hotel, e i piani dal 26 al 59 sono residenze private.",
      "L'attico su due piani fu venduto per 34 milioni di dollari, di poco inferiore al record di 35 milioni della Millennium Tower.",
      "Fu progettato da Harry Cobb di Pei Cobb Freed & Partners.",
    ],
  },
  harvardbridge: {
    title: "John Harvard Bridge",
    caption: "Il Mass Ave Bridge",
    lines: [
      "Davanti a noi c'è il John Harvard Bridge, l'attraversamento più lungo sul Charles con poco più di 2.100 piedi. È chiamato anche Mass Ave Bridge, dalla strada che vi passa sopra.",
      "Fu inaugurato nel 1891 ma fu ricostruito tre volte per difetti di ingegneria. Ci furono proposte di rinominarlo in onore del MIT lì accanto, ma molti al MIT lo ritenevano mal progettato e non volevano il proprio nome sopra.",
      "Nel 1908, 20.000 spettatori videro l'illusionista Harry Houdini lanciarsi da questo ponte, con le mani ammanettate dietro la schiena. Riemerse libero in circa 40 secondi, anche se alcuni dicono che in realtà ci mise 15 secondi e volesse solo emozionare la folla.",
    ],
  },
  citgo: {
    title: "Insegna CITGO",
    caption: "La stella polare di Boston",
    lines: [
      "Davanti a noi brilla l'insegna CITGO, a volte chiamata la stella polare di Boston, solo che invece di indicare il nord, indica la via verso il Fenway Park.",
      "Apparve per la prima volta nel 1940 con la scritta 'Cities Service', e divenne l'iconica insegna CITGO di 60 per 60 piedi nel 1965, illuminata al neon. Ironicamente, sorge sopra una libreria e non è mai stata vicina a una stazione di servizio.",
      "Durante la crisi energetica degli anni '70 rimase spesso spenta, e si discusse se rimuoverla, ma ottenne la protezione come monumento e ora brilla con luci a LED.",
      "La leggenda dice che lampeggia 'C-IT-GO' quando un giocatore dei Red Sox segna un fuoricampo. L'azienda tecnologica Whoop si trova ora sotto di essa, con il suo logo sul tetto, dando ai tifosi qualcosa di nuovo per cui esultare.",
    ],
  },
  collegetown: {
    title: "Una città universitaria",
    caption: "Un centro per l'istruzione",
    lines: [
      "Boston è spesso chiamata un centro per l'istruzione, e a ragione.",
      "A seconda di dove si tracciano i confini della città, ospita tra i 29 e i 35 college, università e community college.",
      "Da settembre a maggio, gli studenti rappresentano circa il 21 percento della popolazione di Boston, circa 163.000 nell'anno scolastico 2023-24.",
    ],
  },
  bu: {
    title: "Boston University",
    caption: "BU",
    lines: [
      "L'insegna CITGO segna l'inizio della Boston University, il cui campus si estende per circa un miglio e mezzo lungo Commonwealth Avenue, attraverso 19 scuole e college.",
      "La BU fu fondata nel 1839 come Newbury Biblical Institute; si trasferì nel New Hampshire, poi a Boston nel 1867, e fu costituita come Boston University nel 1869.",
      "Alexander Graham Bell insegnò dizione qui negli anni 1870, e il suo lavoro con gli studenti sordi gli diede il tempo di inventare, e brevettare, il telefono.",
      "Oggi la BU ha più di 37.500 studenti, con rette di circa 70.000 dollari all'anno.",
    ],
  },
  bualumni: {
    title: "Ex studenti della BU",
    caption: "Diplomati famosi",
    lines: [
      "La BU ha avuto tra i suoi diplomati alcuni nomi famosi nel corso degli anni.",
      "Tra loro, l'attrice Uzo Aduba di Orange Is the New Black, e Jason Alexander, il George Costanza di Seinfeld, che in realtà abbandonò gli studi.",
      "Il dottor Martin Luther King Jr. conseguì qui il dottorato nel 1955, e Alexandria Ocasio-Cortez si laureò nel 2011.",
      "Altri includono il conduttore radiofonico Howard Stern, e Helen Magill, la prima donna negli Stati Uniti a conseguire un dottorato.",
    ],
  },
  bucds: {
    title: "BU Data Sciences",
    caption: "Il 'Jenga Building' e le Warren Towers",
    lines: [
      "Quella torre impilata e inclinata è il Center for Computing and Data Sciences della BU, terminato nel 2022. I locali lo chiamano il Jenga Building, anche se i suoi architetti dicono di essersi ispirati a una pila di libri.",
      "Con 305 piedi, è il primo edificio della BU a funzionare completamente senza combustibili fossili, riscaldato e raffreddato da 31 pozzi geotermici scavati 1.500 piedi nel terreno.",
      "Lì vicino ci sono le Warren Towers, una residenza per lo più di matricole del 1967 che ospita quasi 1.800 studenti ed è un unico edificio collegato fino al quarto piano.",
    ],
  },
  marsh: {
    title: "Marsh Chapel e BU Law",
    caption: "Boston University",
    lines: [
      "Sul lato di Boston c'è la Marsh Chapel, costruita nel 1949 e intitolata all'ex rettore della BU Daniel Marsh; fu il primo grande edificio dell'università lungo il fiume.",
      "Accanto si erge la BU Law Tower del 1964, un altro esempio di Brutalismo, un tempo votato come secondo edificio più brutto di Boston.",
      "E il più brutto? Quel titolo andò al Boston City Hall.",
    ],
  },
  headofcharles: {
    title: "Head of the Charles",
    caption: "La regata di ottobre",
    lines: [
      "Ogni ottobre il fiume ospita la Head of the Charles Regatta, tenuta per la prima volta nel 1965 per spezzare la monotonia della stagione di canottaggio. Oggi richiama più di 11.000 atleti da tutto il mondo.",
      "Si svolge nell'arco di tre giorni a partire dal terzo venerdì di ottobre, ed è una gara di tre miglia dall'Esplanade fino all'Herter Park.",
      "Essendo una gara 'head', è una prova a cronometro: equipaggi da uno, due, quattro o otto vogatori partono a 15 secondi di distanza e gareggiano contro il tempo.",
    ],
  },
  bubridge: {
    title: "BU Bridge",
    caption: "Cottage Farm Bridge",
    lines: [
      "Proprio davanti c'è il BU Bridge, costruito nel 1928 come Cottage Farm Bridge e ribattezzato in onore della Boston University nel 1949.",
      "Forse avete sentito che è l'unico posto dove una barca può navigare sotto un treno, sotto un'auto, sotto un aereo. Non proprio: Portland e Lisbona rivendicano lo stesso, ma qui questi eventi avvengono su campate separate.",
      "Sotto di esso c'è il Grand Junction Railroad Bridge, che gli equipaggi spesso decorano prima della Head of the Charles per incitare i compagni di squadra.",
      "Un tempo trasportava merci ma oggi è per lo più inutilizzato; una proposta del 2012 di integrarlo in una linea pendolare 'Indigo Line' non si concretizzò mai.",
    ],
  },
  dirtywater: {
    title: "Quell'acqua sporca",
    caption: "La bonifica del Charles",
    lines: [
      "Il Charles non è sempre stato famoso per essere pulito. Il gruppo The Standells scrisse 'Dirty Water' proprio su di esso: 'I love that dirty water, Boston you're my home.'",
      "Per tutti gli anni '60, l'inquinamento da industrie, mattatoi e mulini tinse parti del fiume di rosa e arancione, e cadervi dentro poteva significare una corsa al pronto soccorso per un'antitetanica.",
      "La bonifica iniziò nel 1995, quando l'EPA diede al fiume un voto di D-minus; oggi la sua qualità si aggira intorno a una B.",
      "Potrebbe non raggiungere mai una A: le foglie in decomposizione rilasciano tannini che colorano l'acqua come il tè, limitando la visibilità. Non è ancora consentito nuotare, ma un'area balneare potrebbe un giorno aprire vicino al Museum of Science.",
      "Nel 2016, i birrifici locali furono persino sfidati a produrre una birra artigianale usando acqua filtrata del Charles River, in un evento chiamato Brew the Charles.",
    ],
  },
  magazine: {
    title: "Magazine Beach",
    caption: "Il vecchio deposito di polvere da sparo",
    lines: [
      "Sul lato di Cambridge c'è Magazine Beach, un tempo la spiaggia più grande sul Charles, con vera sabbia.",
      "Prende il nome da un deposito di polvere da sparo costruito su una piccola isola qui nel 1818, usato fino a poco dopo la Guerra Civile, quando i vicini cominciarono a preoccuparsi di vivere accanto a una scorta di polvere da sparo.",
      "Le paludi furono interrate e il deposito divenne un bagno pubblico; la spiaggia chiuse nel 1949 a causa dell'inquinamento, e una piscina gratuita fu costruita nel 1952 come sostituto del fiume.",
      "Fu restaurata nel 2020 ed è ora in una seconda fase di lavori, mentre la Mass Audubon usa il vecchio deposito come centro di educazione naturalistica.",
    ],
  },
  riverside: {
    title: "Riverside Boat Club",
    caption: "Il canottaggio per la classe operaia",
    lines: [
      "Questo è il Riverside Boat Club, fondato nel 1869 da immigrati irlandesi e trasferito in questo punto nel 1912.",
      "Poiché l'iscrizione ai club di canottaggio era spesso costosa, gli operai della Riverside Press lo fondarono per rendere il canottaggio sul Charles accessibile a tutti.",
      "È gestito interamente da volontari, e chi aiuta nella manutenzione può ottenere l'iscrizione gratuita.",
    ],
  },
  polaroid: {
    title: "Vecchia sede Polaroid",
    caption: "Art Moderne sul fiume",
    lines: [
      "Quell'edificio bianco e pulito è la vecchia sede della Polaroid, probabilmente il primo edificio in stile Art Moderne di Cambridge. Fu la casa della Polaroid dai primi anni '40 alla fine degli anni '90.",
      "Nel 2000, l'azienda lo vendette insieme al terreno circostante per 10 milioni di dollari, e da allora è stato affittato a varie aziende.",
      "Si scherza dicendo che fu progettato per somigliare a una vecchia macchina fotografica Polaroid, ma non è vero, perché fu costruito originariamente per la B.B. Chemical Company. Oggi Harvard lo usa come uffici.",
    ],
  },
  resilience: {
    title: "Stabilimento Resilience",
    caption: "Da Genzyme a Resilience",
    lines: [
      "Questo complesso in mattoni fu costruito nel 1993 per Genzyme, un'azienda farmaceutica di Cambridge, per produrre il suo farmaco principale, il Cerezyme, che cura la malattia di Gaucher.",
      "Genzyme fu anche pioniera negli innesti di pelle sintetica per le vittime di ustioni, e nel 2011 l'azienda francese Sanofi la acquisì per 20 miliardi di dollari.",
      "Nel 2021, Sanofi vendette questo stabilimento a Resilience, un'azienda di produzione conto terzi fondata nel 2020 dopo aver raccolto 800 milioni di dollari; ha licenziato la maggior parte del personale nel 2023, e il futuro dell'edificio è incerto.",
      "La missione di Resilience è migliorare il modo in cui vengono prodotte le nuove terapie mediche e renderle più accessibili in tutto il mondo.",
    ],
  },
  harvard: {
    title: "Harvard University",
    caption: "Fondata nel 1636",
    lines: [
      "Siamo arrivati a Harvard. Fondato nel 1636, l'Harvard College è la più antica istituzione di istruzione superiore degli Stati Uniti, creata originariamente per formare i ministri di culto.",
      "Iniziò come scuola solo maschile. Le donne studiavano al Radcliffe College, fondato nel 1879, e i due si fusero completamente nel 1999.",
      "Harvard possiede il più grande fondo patrimoniale di qualsiasi scuola al mondo, oltre 56 miliardi di dollari, superiore al PIL di più della metà dei paesi del mondo.",
      "Ha circa 24.500 studenti e rette di circa 59.000 dollari, anche se dal 2025 è gratuita per le famiglie con un reddito inferiore a 200.000 dollari all'anno.",
    ],
  },
  harvardalumni: {
    title: "Ex studenti di Harvard",
    caption: "Presidenti e star",
    lines: [
      "Harvard ha prodotto 188 ex studenti miliardari, senza nemmeno contare gli abbandoni Bill Gates e Mark Zuckerberg.",
      "Ha avuto tra i suoi diplomati otto presidenti degli Stati Uniti, il maggior numero di qualsiasi università, tra cui John Adams, entrambi i Roosevelt, John F. Kennedy e Barack Obama.",
      "Altri ex studenti includono l'attore Matt Damon, che abbandonò gli studi, il violoncellista Yo-Yo Ma, l'attrice Natalie Portman, l'autrice Helen Keller e l'astrofisico Neil deGrasse Tyson.",
    ],
  },
  harvardhouses: {
    title: "Le Harvard Houses",
    caption: "Le cupole colorate",
    lines: [
      "Le matricole di Harvard vivono intorno all'Harvard Yard, che non si vede dal fiume. Dopo il primo anno, oltre il 98 percento si trasferisce in una delle 12 Houses residenziali.",
      "Ogni House ospita da 350 a 500 studenti, con la propria sala da pranzo e sale comuni. Dall'acqua si possono individuare le loro cupole colorate: verde per Eliot House, blu per Lowell House e rossa per Dunster House.",
      "Da qui sono visibili anche Winthrop, Leverett e Mather Houses.",
    ],
  },
  weeks: {
    title: "Weeks Footbridge",
    caption: "John W. Weeks Footbridge",
    lines: [
      "Questo elegante arco è il John W. Weeks Footbridge, costruito nel 1927 e di proprietà di Harvard.",
      "È una delle sole due passerelle pedonali funzionanti sul Charles, costruita mentre Harvard si espandeva verso Boston, così gli studenti potessero attraversare entrambi i lati del campus. In effetti, Harvard ora possiede più terreni a Boston che a Cambridge.",
      "Prende il nome da John Wingate Weeks, deputato, senatore e Segretario alla Guerra del Massachusetts negli anni '20.",
    ],
  },
  boathouses: {
    title: "Le rimesse di Harvard",
    caption: "Newell e Weld",
    lines: [
      "Sull'acqua ci sono le due rimesse per barche di Harvard. La Newell Boathouse, quella rossa appena dopo l'Anderson Bridge, fu costruita nel 1900 per la squadra maschile di canottaggio.",
      "Prende il nome da Marshall Newell, vogatore di Harvard e star del football, morto a 26 anni in un incidente ferroviario.",
      "La Weld Boathouse, costruita nel 1906 e donata dalla famiglia Weld, serve la squadra femminile di canottaggio oltre al canottaggio ricreativo e intramurale.",
    ],
  },
  baker: {
    title: "Baker Library",
    caption: "Harvard Business School",
    lines: [
      "Dall'altra parte del fiume c'è la Baker Library, completata nel 1927 presso la Harvard Business School.",
      "Prende il nome da George F. Baker, un magnate degli affari che donò 5 milioni di dollari per costruire l'intero campus della Business School, ed è la più grande biblioteca di economia del mondo.",
    ],
  },
  break: {
    title: "Pausa a metà percorso",
    caption: "Servizio bar",
    lines: [
      "Siamo arrivati a metà del tour, quindi faremo una breve pausa.",
      "Se desiderate visitare il bar, ora è il momento giusto: abbiamo acqua, bibite, succhi, birra, vino e snack.",
      "Metteremo un po' di musica, quindi rilassatevi, godetevi il paesaggio, e fate sapere a me o al capitano se avete domande.",
    ],
  },
  nickerson: {
    title: "Nickerson Field",
    caption: "Un tempo Braves Field",
    lines: [
      "Sul lato di Boston c'è il Nickerson Field, che la BU acquistò nel 1953 per le sue partite di calcio e le cerimonie di laurea.",
      "Ma prima di allora era il Braves Field, uno stadio di baseball costruito nel 1915 e casa originaria dei Boston Braves, che in seguito si trasferirono a Milwaukee, poi ad Atlanta.",
      "Il 1° maggio 1920 ospitò la partita più lunga della storia della Major League per numero di inning: 26 inning in meno di quattro ore, sospesa per oscurità con il punteggio in parità 1 a 1 contro i Brooklyn Robins.",
    ],
  },
  ford: {
    title: "Vecchio stabilimento Ford",
    caption: "La Model T sul fiume",
    lines: [
      "Questo lungo edificio era uno stabilimento di assemblaggio Ford che costruiva auto, tra cui la Model T, dal 1914 al 1926.",
      "Faceva parte della prima spinta di Henry Ford a espandersi oltre Detroit, costruito vicino al fiume perché lui ordinava di collocare le nuove fabbriche vicino ai corsi d'acqua.",
      "I treni entravano nel suo seminterrato, e una gru sollevava i pezzi ai piani superiori dove le auto venivano assemblate, circa 40 al giorno, con i ritocchi finali al quinto piano.",
      "Lo stabilimento divenne obsoleto e chiuse nel 1926. Il MIT ora lo gestisce come uffici e laboratori, uno degli ultimi resti della vecchia industria sul fiume.",
    ],
  },
  bubridgeview: {
    title: "La vista più bella di Boston",
    caption: "Di nuovo sotto il BU Bridge",
    lines: [
      "Mentre ripassiamo sotto il BU Bridge, la vista da qui è stata votata come la più bella di Boston da diversi giornali locali.",
      "Per i prossimi minuti, la nostra prua punta dritta verso lo skyline del centro, un'occasione perfetta per le foto.",
    ],
  },
  hyatt: {
    title: "Hyatt e DeWolfe",
    caption: "L'hotel a piramide",
    lines: [
      "Sul lato di Cambridge, la piramide a gradoni è l'Hyatt Regency, costruito nel 1977. Il suo ultimo piano ospitava un tempo un ristorante girevole chiamato lo Spinnaker, che chiuse dopo ripetuti malfunzionamenti.",
      "Accanto c'è la DeWolfe Boathouse della BU, una delle rimesse da canottaggio più recenti del fiume, costruita nel 1999 per oltre 5 milioni di dollari.",
    ],
  },
  esplanadehist: {
    title: "Storia dell'Esplanade",
    caption: "L'eredità degli Storrow",
    lines: [
      "L'Esplanade che abbiamo superato prima deve la sua esistenza a James Jackson Storrow, banchiere d'investimenti e primo presidente della General Motors, che sognava un parco sul lungofiume per tutti i bostoniani.",
      "Non lo vide mai realizzato, ma dopo la sua morte la vedova Helen donò un milione di dollari per crearlo come suo memoriale, a condizione che la città eguagliasse il suo dono e non bloccasse mai l'accesso dei residenti al fiume.",
      "La città accettò, ma anni dopo ruppe il patto e costruì un'autostrada che separava Back Bay dall'acqua. Per rimediare, ampliarono l'Esplanade e chiamarono l'autostrada Storrow Drive.",
    ],
  },
  backbay: {
    title: "Back Bay e terreno di riporto",
    caption: "Da distese fangose a quartiere",
    lines: [
      "Back Bay prende il nome perché era davvero una baia di distese fangose soggette alle maree. Prima degli anni 1850, il Charles si allargava qui per quasi due miglia.",
      "Per alleggerire il sovraffollamento, Boston iniziò a interrarla intorno al 1857. Treni speciali trasportavano ghiaia da Needham giorno e notte, un convoglio ogni 45 minuti, fino al 1882.",
      "Il progetto risolse anche un pericolo per la salute, dovuto al cattivo odore delle distese fangose. Boston continuò ad aggiungere migliaia di acri in questo modo, creando quartieri come il West, North e South End, South Boston ed East Boston.",
    ],
  },
  smoot: {
    title: "I segni degli Smoot",
    caption: "364,4 smoot, ± un orecchio",
    lines: [
      "Tornando all'Harvard Bridge, cercate i segni colorati lungo il marciapiede, misurati in 'smoot'.",
      "Nel 1958, la confraternita Lambda Chi Alpha sfidò i suoi aspiranti membri a misurare il ponte senza un righello standard. Usarono il loro membro più basso, Oliver 'Ollie' Smoot, alto solo cinque piedi e sette pollici, sdraiandolo da un capo all'altro.",
      "Il ponte risultò di 364,4 smoot, più o meno un orecchio. L'unità rimase, è persino su Google Earth, e Smoot in seguito divenne presidente dell'organizzazione internazionale per la standardizzazione.",
      "Ogni anno la confraternita ridipinge i segni, con un'etichetta ogni dieci smoot.",
    ],
  },
  mit: {
    title: "MIT",
    caption: "Massachusetts Institute of Technology",
    lines: [
      "Sul lato di Cambridge c'è il MIT. Fondato nel 1861 come Boston Tech a Back Bay, si trasferì a Cambridge nel 1916 per avere più spazio.",
      "La sua mascotte è Tim the Beaver, scelto nel 1914 per l'abilità ingegneristica del castoro e le sue abitudini laboriose, e perché 'Tim' è 'MIT' scritto al contrario.",
      "Il MIT è famoso per gli elaborati scherzi degli studenti, che chiamano 'hacks', spesso messi in scena sulla Great Dome e sul Green Building.",
      "Nel 2011, il MIT creò una serie di corsi di educazione fisica, tiro con l'arco, scherma, tiro a segno e vela, che insieme permettono agli studenti di ottenere un Pirate Certificate.",
      "Ha meno di 12.000 studenti e rette di circa 64.000 dollari, e come Harvard, è gratuito per le famiglie con un reddito inferiore a 200.000 dollari all'anno.",
    ],
  },
  mithacks: {
    title: "Gli hacks del MIT",
    caption: "Scherzi sulla Dome",
    lines: [
      "I famosi hacks del MIT hanno trasformato i suoi monumenti in opere di goliardia.",
      "Gli studenti hanno parcheggiato un'auto della polizia del campus in cima alla Great Dome, l'hanno trasformata in R2-D2, hanno appeso al suo fianco un vagone della metro Red Line, e ci hanno giocato a Pac-Man.",
      "Hanno persino trasformato l'intero Green Building in una gigantesca partita giocabile di Tetris.",
    ],
  },
  mitalumni: {
    title: "Ex studenti del MIT",
    caption: "Innovatori e fondatori",
    lines: [
      "Molte aziende famose risalgono al MIT o ai suoi diplomati, tra cui Intel, Bose, iRobot, Boston Dynamics e Raytheon.",
      "Tra gli ex studenti di rilievo ci sono l'astronauta Buzz Aldrin, l'architetto I.M. Pei, Tom Scholz della band Boston, e Robert Robinson Taylor, il primo architetto afroamericano degli Stati Uniti.",
    ],
  },
  mitgreen: {
    title: "MIT Green Building",
    caption: "I.M. Pei su pilastri",
    lines: [
      "Questo è il Green Building del MIT, sede dei suoi dipartimenti di Scienze della Terra, dell'Atmosfera e Planetarie.",
      "Progettato da I.M. Pei nel 1964, lui aggirò un limite di piani imposto da Cambridge sollevando il primo piano 30 piedi da terra su pilastri, dato che l'atrio non contava.",
      "Quei pilastri crearono uno dei peggiori tunnel del vento del campus, le porte continuavano a sbattere, finché delle porte girevoli non risolsero il problema.",
      "Con 277 piedi, fu l'edificio più alto di Cambridge fino al 2020.",
    ],
  },
  finger: {
    title: "Finger Islands",
    caption: "Make Way for Ducklings",
    lines: [
      "Queste piccole isole davanti a Community Boating sono le Finger Islands, rese famose dal libro per bambini ufficiale del Massachusetts: Make Way for Ducklings.",
      "Nella storia del 1941, il signore e la signora Mallard e i loro otto anatroccoli, Jack, Kack, Lack, Mack, Nack, Ouack, Pack e Quack, pensarono inizialmente di stabilirsi proprio su queste isole.",
      "Gli anatroccoli sono ora immortalati in statue di bronzo nel Public Garden, spesso vestiti con le maglie delle squadre quando Boston raggiunge i playoff.",
    ],
  },
  statehouse: {
    title: "State House",
    caption: "La cupola dorata",
    lines: [
      "Su Beacon Hill c'è la Massachusetts State House. Parte del terreno di riporto che fece crescere Boston proveniva da colline come questa, che furono spianate.",
      "Costruita nel 1798, fu progettata da Charles Bulfinch, il primo architetto nato in America.",
      "La sua cupola iniziò come scandole di legno che lasciavano passare l'acqua, fu rivestita di rame da Paul Revere and Sons, e dorata per la prima volta nel 1874. Ora è in foglia d'oro a 23 carati, anche se fu dipinta di grigio durante la Seconda guerra mondiale per non essere un bersaglio facile.",
    ],
  },
  liberty: {
    title: "Liberty Hotel",
    caption: "Vecchia Charles Street Jail",
    lines: [
      "Questo bell'edificio era un tempo la Charles Street Jail, costruita nel 1851 con ali a raggiera per dare ai detenuti luce e aria.",
      "Tra i suoi detenuti famigerati c'erano Whitey Bulger, il Boston Strangler Albert DeSalvo, Sacco e Vanzetti, Malcolm X, e il corrotto sindaco di Boston James Michael Curley, che una volta gestì la città da una cella.",
      "Nel 1973 un tribunale dichiarò incostituzionali le sue condizioni di sovraffollamento, e finalmente chiuse nel 1990.",
      "Nel 2007 riaprì come il lussuoso Liberty Hotel, con un bar chiamato Alibi e ristoranti chiamati Clink e Scampo.",
    ],
  },
  zakim: {
    title: "Zakim Bridge",
    caption: "Bunker Hill Memorial Bridge",
    lines: [
      "Davanti a noi c'è il Leonard P. Zakim Bunker Hill Memorial Bridge, inaugurato nel 2003, all'epoca della costruzione il ponte strallato più largo del mondo.",
      "Le sue torri richiamano il vicino Bunker Hill Monument, e alcuni dicono che i suoi cavi ricordino il sartiame della USS Constitution.",
      "È uno dei pochi tratti fuori terra del Big Dig, costruito per circa 2 miliardi di dollari, con lucernari per far arrivare la luce del sole al fiume e proteggere i pesci migratori.",
      "Prima dell'inaugurazione, Barnum and Bailey fecero sfilare 14 elefanti per 'dimostrare' che era sicuro, secondo una vecchia superstizione gli elefanti non attraversano una struttura non sicura.",
    ],
  },
  museum: {
    title: "Museum of Science",
    caption: "Sulla vecchia Charles River Dam",
    lines: [
      "Mentre ci avviciniamo alla diga, il lungo edificio davanti è il Museum of Science, con più di 700 mostre interattive.",
      "Iniziò come museo di storia naturale negli anni 1830 e si trasferì qui nel 1948, sorgendo proprio sopra la Charles River Dam originale del 1910.",
      "È attualmente in fase di ristrutturazione, che trasforma una vecchia parete in mattoni del teatro in uno spazio per eventi in vetro, con conclusione prevista nel 2026.",
      "Cinque targhe un tempo qui presenti rappresentavano i suoi cinque temi: Spazio, Energia, Industria, Umanità e Natura.",
    ],
  },
  closing: {
    title: "Grazie",
    caption: "Ritorno a CambridgeSide",
    lines: [
      "Mentre rientriamo nel canale, grazie a tutti per essere stati con noi oggi.",
      "La Charles River Boat Company naviga queste acque da oltre 30 anni. Come piccola impresa familiare, sosteniamo scuole e organizzazioni no profit locali, donando oltre 1,5 milioni di dollari in biglietti alle nostre comunità, e ci impegniamo a proteggere il Charles e altri corsi d'acqua locali.",
      "Se avete voglia di un altro viaggio, offriamo crociere cocktail e al tramonto nelle serate del weekend, oltre a tour di architettura nel Boston Harbor con la Boston Society for Architecture.",
      "Se vi è piaciuta la giornata di oggi, lasciateci una recensione: fa una grande differenza.",
      "Vi preghiamo di finire o lasciare le bevande al bar, di stare lontani dal cancello mentre attracchiamo, di raccogliere i vostri effetti personali, e di restare seduti finché un membro dell'equipaggio non dice che è sicuro scendere. Grazie, e godetevi il resto della vostra giornata a Boston.",
    ],
  },
};
