// narration/es.js
// -----------------------------------------------------------------------------
// Spanish narration text.
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

export const LANG = "es";

export const ES = {
  welcome: {
    title: "Bienvenida, términos e historia",
    caption: "Saliendo de CambridgeSide",
    lines: [
      "¡Bienvenidos a bordo, y gracias por acompañarnos hoy! Pónganse cómodos, durante los próximos 70 minutos nos deslizaremos suavemente desde CambridgeSide hasta Harvard y de regreso, con el capitán al timón y muchas historias para compartir en el camino.",
      "Primero, una notita de seguridad, ya que somos un barco inspeccionado por la Guardia Costera. Si llegaran a hacer falta, los chalecos salvavidas están guardados bajo los cojines azules en la proa y la popa, aunque de verdad no esperamos usarlos.",
      "Hay extintores y equipo de seguridad repartidos por el barco, así que déjenlos en manos de la tripulación, salvo que les pidamos ayuda.",
      "Pueden pasear y buscar su rincón favorito. Solo les pedimos evitar correr y subirse a los asientos, y mantener manos, cabezas y pertenencias dentro del barco.",
      "¿Un poco de frío, o demasiada brisa? Hágame una seña y abro o cierro una ventana para ustedes. Son pesadas y requieren una herramienta especial, así que déjennos a nosotros el trabajo pesado.",
      "Somos un barco libre de humo y de vapeo, pero tenemos un bar a bordo, así que vengan a saludarme cuando quieran por una cerveza fría, una copa de vino, un cóctel, un refresco o un bocadillo.",
      "Ya sea que vengan por las historias o simplemente por las vistas, siéntanse como en casa, y un recordatorio amable: mantengan las charlas en voz baja durante la narración para que todos puedan oír. ¡Y ahora, disfrutemos juntos del río!",
      "Antes de empezar, estos son algunos términos náuticos que escucharán durante el recorrido.",
      "La proa es la parte delantera del barco, y la popa es la parte trasera.",
      "Estribor es el lado derecho del barco, y babor el lado izquierdo.",
      "Y la caseta del timón es donde el capitán conduce el barco.",
      "Ahora salimos del canal Lechmere y nos adentramos en el río Charles.",
      "El Charles es la frontera natural entre Boston y Cambridge, así que durante la primera mitad del crucero, Boston queda a su izquierda y Cambridge a su derecha.",
      "Al cartografiar la región en 1614, John Smith la llamó primero río Massachusett, por la tribu nativa de la zona; más tarde fue rebautizado en honor al rey Carlos I.",
      "Recorre 130 kilómetros a través de 23 pueblos y ciudades, desde Echo Lake, en Hopkinton, hasta el puerto de Boston.",
      "Hopkinton es también la salida del Maratón de Boston, donde los corredores llegan a la ciudad tras 42 kilómetros.",
      "En 1910 se construyó la primera presa con esclusas para controlar el nivel del agua, y es donde hoy se asienta el Museo de Ciencias.",
      "Esa presa creó la cuenca tranquila y permitió que la Esplanade abriera parques al público; una presa más nueva la reemplazó, a unos 800 metros río abajo, en 1978.",
    ],
  },
  mgb: {
    title: "Mass General Brigham",
    caption: "El edificio Ellison",
    lines: [
      "Del lado de Boston está Mass General Brigham, clasificado constantemente por U.S. News & World Report entre los mejores hospitales del país.",
      "El Mass General se fundó en 1811 y el Brigham and Women's en 1832; ambos se fusionaron en 2019.",
      "En 1846 acogieron la primera demostración pública de anestesia quirúrgica con éter, en el Ether Dome, que aún se puede visitar hoy.",
      "En 1923 se realizó aquí la primera cirugía exitosa de válvula cardíaca, y en 1954 el primer trasplante de órgano exitoso, un riñón entre gemelos.",
      "En 1962, un equipo dirigido por Ronald Malt logró la primera reimplantación exitosa de un brazo amputado, en un niño de doce años.",
      "Con los años, cantantes como Adele, Cher, Lionel Richie, Roger Daltrey y Steven Tyler se han operado aquí.",
      "El helipuerto del edificio negro permite que los pacientes en estado crítico lleguen por aire.",
    ],
  },
  brutalism: {
    title: "Brutalismo",
    caption: "Mass Eye & Ear Infirmary",
    lines: [
      "Esta torre de hormigón es el Mass Eye and Ear Infirmary, un ejemplo de brutalismo, un estilo popular en Boston de los años 1950 a los 1970.",
      "El nombre viene del francés «béton brut», que significa hormigón crudo.",
      "Pretendía verse fuerte e imponente, aunque algunos lo encuentran frío, o incluso feo.",
      "Verán más ejemplos desde el río: el Green Building del MIT, las Warren Towers, la torre de Derecho de BU, Peabody Terrace y Mather House.",
    ],
  },
  longfellow: {
    title: "Puente Longfellow",
    caption: "El puente del salero y pimentero",
    lines: [
      "Este es el puente Henry Wadsworth Longfellow, construido entre 1900 y 1907, el segundo más largo del Charles, con unos 540 metros.",
      "Los locales lo llaman el puente del salero y el pimentero, porque sus torres de piedra parecen saleros y pimenteros. La Línea Roja del metro pasa por él.",
      "Una restauración de cinco años se realizó de 2013 a 2018. Estimada en tres años, se pasó de tiempo y presupuesto, confirmando el dicho local: Boston solo tiene dos estaciones, el invierno y las obras.",
      "Los barcos vikingos tallados en los pilares centrales provienen de una teoría popular del siglo XIX según la cual los vikingos exploraron Nueva Inglaterra en la Edad Media.",
      "Había pocas pruebas, pero el profesor de Harvard Eben Norton Horsford incluso afirmó haber encontrado los cimientos de la casa de Leif Erikson en Cambridge, convenientemente a la vuelta de la suya.",
      "Llamado al principio puente de Cambridge, fue rebautizado en honor a Longfellow en 1927, por un poema que escribió sobre el puente anterior; hoy se encuentra ese poema grabado en él.",
    ],
  },
  community: {
    title: "Community Boating",
    caption: "Vela para todos",
    lines: [
      "Del lado de Boston está Community Boating, que facilita y abarata el aprender a navegar a los locales este verano.",
      "Fundada en 1946, es el programa público de vela en funcionamiento continuo más antiguo de Estados Unidos.",
      "La misión de esta organización sin fines de lucro es ser el parque náutico público de Boston y ofrecer vela para todos.",
      "Las clases de vela juvenil comienzan con una tarifa escalonada desde apenas un dólar, y un Programa de Acceso Universal brinda a las personas con discapacidad acceso seguro a la vela.",
    ],
  },
  esplanade: {
    title: "La Esplanade",
    caption: "Hatch Memorial Shell",
    lines: [
      "Del lado de Boston se extiende la Esplanade, una franja de parque de casi cinco kilómetros construida íntegramente sobre terreno ganado, entre el Museo de Ciencias y el puente de BU.",
      "Su pieza central es el Hatch Memorial Shell. Desde 1929 se montaban aquí conchas acústicas temporales, que se desmontaban tras cada uso.",
      "Esta concha permanente de granito se construyó en 1941, gracias a una donación de Maria Hatch en honor a su difunto hermano Edward, general del Ejército de la Unión; el dinero se destinó a «fines musicales y artísticos».",
      "Es el escenario de conciertos durante todo el verano, sobre todo la celebración del 4 de julio con los Boston Pops, que se realiza aquí cada año desde 1929 y atrae hasta medio millón de personas.",
    ],
  },
  berkeley: {
    title: "El viejo, viejo Hancock",
    caption: "200 Berkeley Street",
    lines: [
      "Este es el 200 Berkeley Street, también llamado el viejo, viejo John Hancock Tower. Terminado en 1947, albergaba a la aseguradora John Hancock y mide unos 150 metros.",
      "En aquella época, aseguradoras y bancos solían añadir algo útil para la comunidad, por eso este tiene un faro meteorológico.",
      "El faro cambia el color de la aguja, y los locales conocen la rima: azul fijo, cielo despejado; azul intermitente, nubes en camino; rojo fijo, lluvia por delante; rojo intermitente, nieve en su lugar.",
      "En verano, rojo y blanco intermitentes indican que se suspendió un partido de los Red Sox por lluvia. Y en 2004, cuando los Red Sox por fin ganaron la Serie Mundial, parpadeó azul y rojo, la maldición del Bambino había muerto.",
      "John Hancock devolvió aquí su sede en 2019, y en 2023 trasladó su famoso logo, exhibido durante años en Fenway Park, a la base del techo escalonado.",
    ],
  },
  hancock: {
    title: "Hancock Tower",
    caption: "200 Clarendon Street",
    lines: [
      "Por encima se alza el 200 Clarendon, el «nuevo» John Hancock Tower, construido entre 1968 y 1976. Con 241 metros y 60 pisos, es el edificio más alto de Nueva Inglaterra.",
      "Su apertura se retrasó cinco años por graves problemas de ingeniería.",
      "El viento hacía oscilar los pisos altos lo suficiente para causar mareos, así que se instalaron dos contrapesos de plomo de 300 toneladas en el piso 58 para estabilizarlo.",
      "El defecto más peligroso eran las ventanas: cada una pesaba 230 kilos y empezó a desprenderse y estrellarse contra la acera, muy abajo. Cuando el viento superaba los 70 km/h, la policía cerraba las calles cercanas.",
      "En 1973 se reemplazaron las 10 344 ventanas. Durante las reparaciones, había contrachapado en los marcos vacíos, lo que le valió el apodo de Palacio de Contrachapado.",
    ],
  },
  huntington: {
    title: "111 Huntington Ave",
    caption: "El edificio «R2-D2»",
    lines: [
      "Detrás del horizonte está el 111 Huntington Avenue, el primer rascacielos terminado en Boston en el nuevo milenio. Los locales lo llaman el edificio R2-D2.",
      "El longevo alcalde Tom Menino rechazó el diseño original de techo plano, decía que el horizonte de Boston era aburrido y que «los techos planos no funcionan».",
      "Los arquitectos volvieron con varias opciones, y Menino eligió la cúpula abierta de la cima. Es puramente decorativa, y su única función es hacer el horizonte más interesante.",
    ],
  },
  pru: {
    title: "Torre Prudential",
    caption: "«The Pru»",
    lines: [
      "Esa torre alta es la Prudential, o «the Pru», terminada en 1964. Con 229 metros y 52 pisos, es el segundo edificio más alto de Boston, con muchas tiendas de lujo dentro.",
      "Superó a la Custom House Tower, que tuvo el título durante 49 años, esa era de propiedad federal y estaba exenta del antiguo límite de altura de 38 metros de Boston.",
      "Los pisos superiores albergaron el restaurante Top of the Hub y el observatorio Skywalk durante más de 50 años, hasta que el dueño del edificio rescindió sus contratos en 2020.",
      "Hoy un mirador de tres niveles llamado View Boston ocupa la cima, con exhibiciones interactivas, un bar de cócteles llamado Stratus y una terraza al aire libre, la Cloud Terrace, con vistas panorámicas.",
    ],
  },
  onedalton: {
    title: "One Dalton",
    caption: "Four Seasons y residencias",
    lines: [
      "La torre oscura y curva es One Dalton, terminada en 2019. Con 226 metros y 61 pisos, es el edificio totalmente residencial más alto de Nueva Inglaterra.",
      "Sus primeros 23 pisos son el hotel Four Seasons, y los pisos 26 al 59 son residencias privadas.",
      "El penthouse de dos pisos se vendió por 34 millones de dólares, apenas por debajo del récord de 35 millones de la Millennium Tower.",
      "Fue diseñado por Harry Cobb, del estudio Pei Cobb Freed & Partners.",
    ],
  },
  harvardbridge: {
    title: "Puente John Harvard",
    caption: "El puente de Mass Ave",
    lines: [
      "Más adelante está el puente John Harvard, el cruce más largo del Charles con poco más de 640 metros. También se le llama el puente de Mass Ave, por la avenida que lo recorre.",
      "Se abrió en 1891 pero fue reconstruido tres veces por fallos de ingeniería. Hubo propuestas para rebautizarlo en honor al MIT, al lado, pero muchos en el MIT lo consideraban mal diseñado y no querían su nombre en él.",
      "En 1908, 20 000 espectadores vieron al escapista Harry Houdini saltar de este puente con las manos esposadas a la espalda. Resurgió libre en unos 40 segundos, aunque algunos dicen que en realidad tardó 15 y solo quería emocionar al público.",
    ],
  },
  citgo: {
    title: "El letrero CITGO",
    caption: "La estrella polar de Boston",
    lines: [
      "Más adelante brilla el letrero CITGO, a veces llamado la estrella polar de Boston, solo que en vez de señalar el norte, indica el camino a Fenway Park.",
      "Se instaló en 1940 con el texto «Cities Service», y se convirtió en el icónico letrero CITGO de 18 metros por lado en 1965, iluminado con neón. Irónicamente, está sobre una librería y nunca ha estado cerca de una gasolinera.",
      "Durante la crisis energética de los años 1970 solía estar apagado, y se debatió retirarlo, pero obtuvo protección como hito y ahora brilla con luces LED.",
      "La leyenda dice que parpadea «C-IT-GO» cuando un jugador de los Red Sox batea un jonrón. La empresa tecnológica Whoop se instaló debajo, con su logo en el techo, dando a los aficionados algo nuevo que gritar.",
    ],
  },
  collegetown: {
    title: "Una ciudad universitaria",
    caption: "Un centro de educación",
    lines: [
      "A Boston se le llama a menudo un centro de educación, y con razón.",
      "Según dónde se tracen los límites de la ciudad, alberga entre 29 y 35 colleges, universidades y community colleges.",
      "De septiembre a mayo, los estudiantes representan cerca del 21 % de la población de Boston, unos 163 000 en el curso 2023-2024.",
    ],
  },
  bu: {
    title: "Boston University",
    caption: "BU",
    lines: [
      "El letrero CITGO marca el inicio de Boston University, cuyo campus se extiende unos 2,4 kilómetros a lo largo de Commonwealth Avenue, en 19 escuelas y facultades.",
      "BU se fundó en 1839 como el Newbury Biblical Institute; se trasladó a New Hampshire, luego a Boston en 1867, y se constituyó como Boston University en 1869.",
      "Alexander Graham Bell enseñó dicción aquí en la década de 1870, y su trabajo con estudiantes sordos le dio el tiempo para inventar, y patentar, el teléfono.",
      "Hoy BU tiene más de 37 500 estudiantes, con una matrícula de unos 70 000 dólares al año.",
    ],
  },
  bualumni: {
    title: "Exalumnos de BU",
    caption: "Graduados famosos",
    lines: [
      "BU ha graduado a varios nombres famosos con los años.",
      "Entre ellos, la actriz Uzo Aduba de Orange Is the New Black, y Jason Alexander, el George Costanza de Seinfeld, que en realidad abandonó los estudios.",
      "El Dr. Martin Luther King Jr. obtuvo aquí su doctorado en 1955, y Alexandria Ocasio-Cortez se graduó en 2011.",
      "Otros incluyen al locutor Howard Stern, y a Helen Magill, la primera mujer en Estados Unidos en obtener un doctorado.",
    ],
  },
  bucds: {
    title: "BU, Ciencias de Datos",
    caption: "El edificio «Jenga» y Warren Towers",
    lines: [
      "Esa torre apilada e inclinada es el Center for Computing and Data Sciences de BU, terminado en 2022. Los locales lo llaman el edificio Jenga, aunque sus arquitectos dicen haberse inspirado en una pila de libros.",
      "Con 93 metros, es el primer edificio de BU que funciona totalmente sin combustibles fósiles, calentado y enfriado por 31 pozos geotérmicos perforados a 460 metros de profundidad.",
      "Cerca están las Warren Towers, una residencia de 1967 sobre todo para estudiantes de primer año, que aloja a casi 1 800 alumnos y es un solo edificio conectado hasta el cuarto piso.",
    ],
  },
  marsh: {
    title: "Marsh Chapel y Derecho de BU",
    caption: "Boston University",
    lines: [
      "Del lado de Boston está Marsh Chapel, construida en 1949 y nombrada por el expresidente de BU Daniel Marsh; fue el primer edificio importante de la universidad junto al río.",
      "A su lado se alza la torre de Derecho de BU, de 1964, otro ejemplo de brutalismo, votada alguna vez como el segundo edificio más feo de Boston.",
      "¿Y el más feo? Ese título fue para el Ayuntamiento de Boston.",
    ],
  },
  headofcharles: {
    title: "Head of the Charles",
    caption: "La regata de octubre",
    lines: [
      "Cada octubre el río acoge la regata Head of the Charles, celebrada por primera vez en 1965 para romper la monotonía de la temporada de remo. Hoy atrae a más de 11 000 atletas de todo el mundo.",
      "Se celebra durante tres días a partir del tercer viernes de octubre; es una carrera de cinco kilómetros, desde la Esplanade hasta Herter Park.",
      "Como carrera «head», es una contrarreloj: las tripulaciones de uno, dos, cuatro u ocho remeros parten con 15 segundos de diferencia y compiten contra el reloj.",
    ],
  },
  bubridge: {
    title: "Puente de BU",
    caption: "Puente de Cottage Farm",
    lines: [
      "Justo delante está el puente de BU, construido en 1928 como el puente de Cottage Farm y rebautizado por Boston University en 1949.",
      "Quizá hayan oído que es el único lugar donde un barco puede pasar bajo un tren, bajo un auto, bajo un avión. No del todo, Portland y Lisboa dicen lo mismo, pero aquí esos eventos ocurren en tramos separados.",
      "Debajo está el puente ferroviario de Grand Junction, que las tripulaciones suelen tocar antes de la Head of the Charles para animar a sus compañeros.",
      "Antes transportaba carga, pero hoy apenas se usa; una propuesta de 2012 para integrarlo en una «Línea Índigo» de cercanías nunca se concretó.",
    ],
  },
  dirtywater: {
    title: "Esa agua sucia",
    caption: "Limpiando el Charles",
    lines: [
      "El Charles no siempre fue famoso por su limpieza. La banda The Standells le dedicó «Dirty Water», «I love that dirty water, Boston you're my home».",
      "En los años 1960, la contaminación de industrias, mataderos y molinos teñía partes del río de rosa y naranja, y caerse podía significar una visita a urgencias por una vacuna antitetánica.",
      "La limpieza comenzó en 1995, cuando la agencia ambiental le puso una nota de D-menos; hoy su calidad ronda una B.",
      "Quizá nunca llegue a una A: las hojas en descomposición liberan taninos que tiñen el agua como el té, reduciendo la visibilidad. Aún no se permite nadar, pero algún día podría abrirse una zona de baño cerca del Museo de Ciencias.",
      "En 2016, incluso se retó a cervecerías locales a crear una cerveza artesanal con agua filtrada del Charles, en un evento llamado Brew the Charles.",
    ],
  },
  magazine: {
    title: "Magazine Beach",
    caption: "El antiguo polvorín",
    lines: [
      "Del lado de Cambridge está Magazine Beach, antaño la playa más grande del Charles, con arena de verdad.",
      "Debe su nombre a un polvorín construido en un islote en 1818, usado hasta poco después de la Guerra Civil, cuando los vecinos se inquietaron por vivir junto a un depósito de pólvora.",
      "Se rellenaron las marismas y el polvorín se convirtió en una casa de baños pública; la playa cerró en 1949 por la contaminación, y en 1952 se construyó una piscina gratuita como sustituto del río.",
      "Fue restaurada en 2020 y ahora está en una segunda fase de renovaciones, mientras Mass Audubon usa el antiguo polvorín como centro de educación sobre la naturaleza.",
    ],
  },
  riverside: {
    title: "Riverside Boat Club",
    caption: "Remo para la clase obrera",
    lines: [
      "Este es el Riverside Boat Club, fundado en 1869 por inmigrantes irlandeses y trasladado a este lugar en 1912.",
      "Como la membresía a los clubes de remo solía ser cara, trabajadores de la Riverside Press lo fundaron para hacer el remo en el Charles accesible para todos.",
      "Lo gestionan por completo voluntarios, y quienes ayudan con el mantenimiento pueden obtener membresía gratuita.",
    ],
  },
  polaroid: {
    title: "Antigua sede de Polaroid",
    caption: "Art Moderne junto al río",
    lines: [
      "Ese edificio blanco y limpio es la antigua sede de Polaroid, probablemente el primer edificio Art Moderne de Cambridge. Fue la casa de Polaroid desde principios de los años 1940 hasta finales de los 1990.",
      "En 2000, la empresa lo vendió, junto con los terrenos vecinos, por 10 millones de dólares, y desde entonces se ha alquilado a varias compañías.",
      "Se bromea diciendo que fue diseñado para parecer una vieja cámara Polaroid, pero no es cierto, pues se construyó originalmente para la B.B. Chemical Company. Hoy Harvard lo usa como oficinas.",
    ],
  },
  resilience: {
    title: "Planta Resilience",
    caption: "De Genzyme a Resilience",
    lines: [
      "Este complejo de ladrillo se construyó en 1993 para Genzyme, una farmacéutica de Cambridge, para producir su principal medicamento, Cerezyme, que trata la enfermedad de Gaucher.",
      "Genzyme también fue pionera en injertos de piel sintética para quemados, y en 2011 la firma francesa Sanofi la adquirió por 20 000 millones de dólares.",
      "En 2021, Sanofi vendió esta instalación a Resilience, una empresa de fabricación por contrato fundada en 2020 tras recaudar 800 millones de dólares; despidió a la mayoría del personal en 2023, y el futuro del edificio es incierto.",
      "La misión de Resilience es mejorar cómo se fabrican las nuevas terapias médicas y hacerlas más accesibles en todo el mundo.",
    ],
  },
  harvard: {
    title: "Universidad Harvard",
    caption: "Fundada en 1636",
    lines: [
      "Hemos llegado a Harvard. Fundado en 1636, Harvard College es la institución de educación superior más antigua de Estados Unidos, creada originalmente para formar pastores.",
      "Comenzó como una escuela solo para hombres. Las mujeres asistían a través del Radcliffe College, fundado en 1879, y ambos se fusionaron por completo en 1999.",
      "Harvard posee el mayor fondo patrimonial de cualquier universidad del mundo, más de 56 000 millones de dólares, mayor que el PIB de más de la mitad de los países del mundo.",
      "Tiene unos 24 500 estudiantes y una matrícula de unos 59 000 dólares, aunque desde 2025 es gratuita para familias que ganan menos de 200 000 dólares al año.",
    ],
  },
  harvardalumni: {
    title: "Exalumnos de Harvard",
    caption: "Presidentes y estrellas",
    lines: [
      "Harvard ha producido 188 exalumnos multimillonarios, sin contar siquiera a Bill Gates y Mark Zuckerberg, que abandonaron los estudios.",
      "Ha graduado a ocho presidentes de EE. UU., más que cualquier universidad, incluidos John Adams, ambos Roosevelt, John F. Kennedy y Barack Obama.",
      "Otros exalumnos incluyen al actor Matt Damon, que abandonó, el chelista Yo-Yo Ma, la actriz Natalie Portman, la escritora Helen Keller y el astrofísico Neil deGrasse Tyson.",
    ],
  },
  harvardhouses: {
    title: "Las casas de Harvard",
    caption: "Las cúpulas de colores",
    lines: [
      "Los estudiantes de primer año de Harvard viven alrededor de Harvard Yard, que no se ve desde el río. Tras su primer año, más del 98 % se mudan a una de las 12 casas residenciales.",
      "Cada casa aloja de 350 a 500 estudiantes, con su propio comedor y salas comunes. Desde el agua se distinguen sus cúpulas de colores, Eliot House en verde, Lowell House en azul y Dunster House en rojo.",
      "También se ven desde aquí Winthrop, Leverett y Mather House.",
    ],
  },
  weeks: {
    title: "Pasarela Weeks",
    caption: "Pasarela John W. Weeks",
    lines: [
      "Este elegante arco es la pasarela John W. Weeks, construida en 1927 y propiedad de Harvard.",
      "Es una de las únicas dos pasarelas en uso del Charles, construida cuando Harvard se expandió hacia Boston para que los estudiantes cruzaran entre ambos lados del campus. De hecho, Harvard hoy posee más terreno en Boston que en Cambridge.",
      "Lleva el nombre de John Wingate Weeks, congresista y senador de Massachusetts, y secretario de Guerra en la década de 1920.",
    ],
  },
  boathouses: {
    title: "Cobertizos de Harvard",
    caption: "Newell y Weld",
    lines: [
      "En el agua están los dos cobertizos de Harvard. El Newell Boathouse, el rojo justo pasando el puente Anderson, se construyó en 1900 para el equipo masculino de remo.",
      "Lleva el nombre de Marshall Newell, remero y estrella de fútbol americano de Harvard, que murió a los 26 años en un accidente ferroviario.",
      "El Weld Boathouse, construido en 1906 y donado por la familia Weld, sirve al equipo femenino de remo además del remo recreativo e intramuros.",
    ],
  },
  baker: {
    title: "Biblioteca Baker",
    caption: "Harvard Business School",
    lines: [
      "Al otro lado del río está la biblioteca Baker, terminada en 1927 en la Harvard Business School.",
      "Lleva el nombre de George F. Baker, un magnate de los negocios que donó 5 millones de dólares para construir todo el campus de la Business School, y es la mayor biblioteca de negocios del mundo.",
    ],
  },
  break: {
    title: "Pausa de medio recorrido",
    caption: "Servicio de bar",
    lines: [
      "Hemos llegado a la mitad del recorrido, así que haremos una breve pausa.",
      "Si desean acercarse al bar, este es un buen momento, tenemos agua, refrescos, jugos, cerveza, vino y aperitivos.",
      "Pondremos algo de música, así que relájense, disfruten del paisaje y avísennos, a mí o al capitán, si tienen preguntas.",
    ],
  },
  nickerson: {
    title: "Nickerson Field",
    caption: "Antes Braves Field",
    lines: [
      "Del lado de Boston está Nickerson Field, que BU compró en 1953 para sus partidos de fútbol y sus ceremonias de graduación.",
      "Pero antes era Braves Field, un estadio de béisbol construido en 1915 y la casa original de los Boston Braves, que luego se mudaron a Milwaukee y después a Atlanta.",
      "El 1 de mayo de 1920 albergó el partido más largo en la historia de las Grandes Ligas por entradas: 26 entradas en menos de cuatro horas, suspendido por la oscuridad con el marcador empatado 1 a 1 contra los Brooklyn Robins.",
    ],
  },
  ford: {
    title: "Antigua planta Ford",
    caption: "El Modelo T junto al río",
    lines: [
      "Este edificio alargado era una planta de ensamblaje de Ford que fabricó autos, incluido el Modelo T, de 1914 a 1926.",
      "Formaba parte del primer intento de Henry Ford de expandirse más allá de Detroit, construida junto al río porque ordenaba ubicar las nuevas fábricas cerca de vías navegables.",
      "Los trenes entraban a su sótano, y una grúa subía las piezas a los pisos superiores donde se ensamblaban los autos, unos 40 al día, con los acabados en el quinto piso.",
      "La planta quedó obsoleta y cerró en 1926. El MIT ahora la gestiona como oficinas y laboratorios, uno de los últimos vestigios de la vieja industria junto al río.",
    ],
  },
  bubridgeview: {
    title: "La mejor vista de Boston",
    caption: "De vuelta bajo el puente de BU",
    lines: [
      "Mientras pasamos de nuevo bajo el puente de BU, varios periódicos locales han votado esta vista como la mejor de Boston.",
      "Durante los próximos minutos, nuestra proa apunta directo al horizonte del centro, una ocasión perfecta para fotos.",
    ],
  },
  hyatt: {
    title: "Hyatt y DeWolfe",
    caption: "El hotel pirámide",
    lines: [
      "Del lado de Cambridge, la pirámide escalonada es el Hyatt Regency, construido en 1977. Su último piso albergó un restaurante giratorio llamado Spinnaker, que cerró tras repetidas averías.",
      "A su lado está el DeWolfe Boathouse de BU, uno de los cobertizos de remo más nuevos del río, construido en 1999 por más de 5 millones de dólares.",
    ],
  },
  smoot: {
    title: "Las marcas Smoot",
    caption: "364,4 smoots, ± una oreja",
    lines: [
      "De vuelta en el puente Harvard, busquen las marcas de colores a lo largo de la acera, medidas en «smoots».",
      "En 1958, la fraternidad Lambda Chi Alpha retó a sus aspirantes a medir el puente sin una regla estándar. Usaron a su miembro más bajo, Oliver «Ollie» Smoot, de apenas 1,70 m, tendiéndolo una y otra vez.",
      "El puente midió 364,4 smoots, más o menos una oreja. La unidad perduró, incluso aparece en Google Earth, y Smoot llegó a presidir la organización internacional de normalización.",
      "Cada año la fraternidad repinta las marcas, con una etiqueta cada diez smoots.",
    ],
  },
  mit: {
    title: "MIT",
    caption: "Massachusetts Institute of Technology",
    lines: [
      "Del lado de Cambridge está el MIT. Fundado en 1861 como Boston Tech en Back Bay, se mudó a Cambridge en 1916 por más espacio.",
      "Su mascota es Tim el castor, elegida en 1914 por la habilidad de ingeniería y la laboriosidad del castor, y porque «Tim» deletreado al revés dice algo ingenioso.",
      "El MIT es famoso por las elaboradas bromas de sus estudiantes, que llaman «hacks», a menudo montadas en el Great Dome y el Green Building.",
      "En 2011, el MIT creó una serie de cursos de educación física, tiro con arco, esgrima, pistola y vela, que juntos le otorgan al estudiante un Certificado de Pirata.",
      "Tiene menos de 12 000 estudiantes y una matrícula de unos 64 000 dólares, y como Harvard, es gratuita para familias que ganan menos de 200 000 dólares al año.",
    ],
  },
  mithacks: {
    title: "Los hacks del MIT",
    caption: "Bromas en el Domo",
    lines: [
      "Los famosos hacks del MIT han convertido sus monumentos en obras de travesura.",
      "Los estudiantes han estacionado un patrullero del campus sobre el Great Dome, lo han convertido en R2-D2, han colgado un vagón de la Línea Roja en su costado y han jugado Pac-Man sobre él.",
      "Incluso han convertido todo el Green Building en una gigantesca partida jugable de Tetris.",
    ],
  },
  mitalumni: {
    title: "Exalumnos del MIT",
    caption: "Innovadores y fundadores",
    lines: [
      "Muchas empresas famosas provienen del MIT o de sus graduados, incluidas Intel, Bose, iRobot, Boston Dynamics y Raytheon.",
      "Entre los exalumnos destacados están el astronauta Buzz Aldrin, el arquitecto I.M. Pei, Tom Scholz de la banda Boston, y Robert Robinson Taylor, el primer arquitecto negro de Estados Unidos.",
    ],
  },
  mitgreen: {
    title: "MIT Green Building",
    caption: "I.M. Pei sobre pilotes",
    lines: [
      "Este es el Green Building del MIT, sede de sus departamentos de Ciencias de la Tierra, la Atmósfera y los Planetas.",
      "Diseñado por I.M. Pei en 1964, esquivó un límite de pisos de Cambridge elevando el primer piso nueve metros sobre pilotes, ya que el vestíbulo no contaba.",
      "Esos pilotes crearon uno de los peores túneles de viento del campus, las puertas se cerraban de golpe, hasta que unas puertas giratorias solucionaron el problema.",
      "Con 84 metros, fue el edificio más alto de Cambridge hasta 2020.",
    ],
  },
  finger: {
    title: "Las islas Finger",
    caption: "Make Way for Ducklings",
    lines: [
      "Estas pequeñas islas frente a Community Boating son las islas Finger, hechas famosas por el libro infantil oficial de Massachusetts: Make Way for Ducklings.",
      "En la historia de 1941, el señor y la señora Mallard y sus ocho patitos, Jack, Kack, Lack, Mack, Nack, Ouack, Pack y Quack, primero pensaron en establecerse en estas mismas islas.",
      "Los patitos están hoy inmortalizados en estatuas de bronce en el Public Garden, a menudo vestidos con camisetas de los equipos cuando Boston llega a los playoffs.",
    ],
  },
  statehouse: {
    title: "El Capitolio del Estado",
    caption: "La cúpula dorada",
    lines: [
      "En lo alto de Beacon Hill está el Capitolio de Massachusetts. Parte del relleno que hizo crecer a Boston provino de colinas como esta, que fueron recortadas.",
      "Construido en 1798, fue diseñado por Charles Bulfinch, el primer arquitecto nacido en América.",
      "Su cúpula, primero de tejas de madera que goteaban, fue recubierta de cobre por Paul Revere and Sons y dorada por primera vez en 1874. Hoy es pan de oro de 23 quilates, aunque la pintaron de gris durante la Segunda Guerra Mundial para que no fuera un blanco fácil.",
    ],
  },
  liberty: {
    title: "Liberty Hotel",
    caption: "Antigua cárcel de Charles Street",
    lines: [
      "Este hermoso edificio fue alguna vez la cárcel de Charles Street, construida en 1851 con alas radiales para dar luz y aire a los presos.",
      "Entre sus presos notorios estuvieron Whitey Bulger, el Estrangulador de Boston Albert DeSalvo, Sacco y Vanzetti, Malcolm X, y el corrupto alcalde de Boston James Michael Curley, que llegó a gobernar la ciudad desde una celda.",
      "En 1973 un tribunal declaró inconstitucionales sus condiciones de hacinamiento, y finalmente cerró en 1990.",
      "En 2007 reabrió como el lujoso Liberty Hotel, con un bar llamado Alibi y restaurantes llamados Clink y Scampo.",
    ],
  },
  zakim: {
    title: "Puente Zakim",
    caption: "Puente conmemorativo de Bunker Hill",
    lines: [
      "Más adelante está el puente conmemorativo Leonard P. Zakim Bunker Hill, inaugurado en 2003, al construirse, el puente atirantado más ancho del mundo.",
      "Sus torres evocan el cercano Monumento a Bunker Hill, y algunos dicen que sus cables recuerdan el aparejo del USS Constitution.",
      "Es una de las pocas partes sobre el nivel del suelo del Big Dig, construida por unos 2 000 millones de dólares, con tragaluces que dejan llegar el sol al río para proteger a los peces migratorios.",
      "Antes de abrir, Barnum and Bailey hicieron desfilar 14 elefantes por él para «probar» que era seguro, una vieja superstición dice que los elefantes no cruzan una estructura insegura.",
    ],
  },
  museum: {
    title: "Museo de Ciencias",
    caption: "Sobre la antigua presa del Charles",
    lines: [
      "Al acercarnos a la presa, el edificio alargado de enfrente es el Museo de Ciencias, con más de 700 exhibiciones interactivas.",
      "Comenzó como un museo de historia natural en la década de 1830 y se trasladó aquí en 1948, justo sobre la presa original del Charles, de 1910.",
      "Actualmente se está renovando, convirtiendo un viejo muro de ladrillo de un teatro en un espacio de eventos acristalado, que se prevé terminar en 2026.",
      "Cinco placas estaban aquí, representando sus cinco temas: el espacio, la energía, la industria, la humanidad y la naturaleza.",
    ],
  },
  closing: {
    title: "Gracias",
    caption: "De vuelta a CambridgeSide",
    lines: [
      "Mientras regresamos al canal, gracias a todos por acompañarnos hoy.",
      "La Charles River Boat Company lleva más de 30 años navegando estas aguas. Como pequeña empresa familiar, apoyamos a escuelas y organizaciones sin fines de lucro locales, donando más de 1,5 millones de dólares en boletos a nuestras comunidades, y trabajamos para proteger el Charles y otras vías fluviales de la zona.",
      "Si se animan a otro paseo, ofrecemos cruceros de cóctel y atardecer las noches de fin de semana, además de recorridos de arquitectura por el puerto de Boston con la Boston Society for Architecture.",
      "Si disfrutaron el día de hoy, déjennos una reseña, ayuda muchísimo.",
      "Por favor, terminen o dejen sus bebidas en el bar, manténganse alejados de la compuerta mientras atracamos, recojan sus pertenencias y permanezcan sentados hasta que un miembro de la tripulación indique que es seguro bajar. Gracias, y disfruten el resto de su día en Boston.",
    ],
  },
};
