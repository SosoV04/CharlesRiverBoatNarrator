// narration/fr.js
// -----------------------------------------------------------------------------
// French narration text.
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

export const LANG = "fr";

export const FR = {
  welcome: {
    title: "Bienvenue, termes et histoire",
    caption: "Départ de CambridgeSide",
    lines: [
      "Bienvenue à bord, et merci de nous rejoindre aujourd'hui ! Installez-vous confortablement, pendant les 70 prochaines minutes, nous glisserons tout en douceur de CambridgeSide jusqu'à Harvard, puis retour, le capitaine à la barre et mille petites histoires à partager en chemin.",
      "D'abord, un petit mot de sécurité, car notre bateau est inspecté par les garde-côtes. En cas de besoin, les gilets de sauvetage sont rangés sous les coussins bleus à l'avant et à l'arrière, même si nous ne comptons vraiment pas nous en servir.",
      "Des extincteurs et du matériel de sécurité sont répartis à bord, alors laissez cela à l'équipage, sauf si nous vous demandons un coup de main.",
      "N'hésitez pas à vous promener pour trouver votre coin préféré. Nous demandons seulement d'éviter de courir ou de grimper sur les sièges, et de garder mains, têtes et effets personnels à l'intérieur du bateau.",
      "Un peu frais, ou trop de vent ? Faites-moi signe et j'ouvrirai ou fermerai une fenêtre pour vous. Elles sont lourdes et demandent un outil spécial, alors laissez-nous le gros du travail.",
      "Notre bateau est non-fumeur et sans vapotage, mais nous avons un bar à bord, alors venez me dire bonjour à tout moment pour une bière fraîche, un verre de vin, un cocktail, une boisson sans alcool ou un petit en-cas.",
      "Que vous soyez là pour les anecdotes ou simplement pour la vue, faites comme chez vous, et un petit rappel tout doux : gardez les conversations à voix basse pendant les commentaires pour que tout le monde profite. Et maintenant, savourons la rivière ensemble !",
      "Avant de partir, voici quelques termes de navigation que vous entendrez pendant la visite.",
      "La proue est l'avant du bateau, et la poupe est l'arrière.",
      "Tribord est le côté droit du bateau, et bâbord le côté gauche.",
      "Et la timonerie est l'endroit d'où le capitaine pilote le bateau.",
      "Nous quittons à présent le canal Lechmere pour rejoindre la rivière Charles.",
      "La Charles forme la frontière naturelle entre Boston et Cambridge ; pendant la première moitié de la croisière, Boston est à votre gauche et Cambridge à votre droite.",
      "En cartographiant la région en 1614, John Smith la baptisa d'abord rivière Massachusett, du nom de la tribu amérindienne locale ; elle fut ensuite rebaptisée en l'honneur du roi Charles Ier.",
      "Elle court sur 130 kilomètres à travers 23 villes et villages, depuis le lac Echo à Hopkinton jusqu'au port de Boston.",
      "Hopkinton est aussi le départ du marathon de Boston, où les coureurs rejoignent la ville après 42 kilomètres.",
      "En 1910, le premier barrage et système d'écluses fut construit pour réguler le niveau de l'eau, et c'est sur lui que repose aujourd'hui le Musée des sciences.",
      "Ce barrage a créé le bassin calme et permis à l'Esplanade d'ouvrir un parc au public ; un barrage plus récent l'a remplacé, à 800 mètres en aval, en 1978.",
    ],
  },
  mgb: {
    title: "Mass General Brigham",
    caption: "Le bâtiment Ellison",
    lines: [
      "Côté Boston se trouve Mass General Brigham, régulièrement classé par U.S. News & World Report parmi les meilleurs hôpitaux du pays.",
      "Le Mass General fut fondé en 1811 et le Brigham and Women's en 1832 ; les deux ont fusionné en 2019.",
      "En 1846, on y présenta la première démonstration publique d'anesthésie à l'éther, dans l'Ether Dome, que l'on peut encore visiter aujourd'hui.",
      "En 1923, on y réalisa la première chirurgie réussie d'une valve cardiaque, et en 1954 la première greffe d'organe réussie, un rein entre jumeaux.",
      "En 1962, une équipe dirigée par Ronald Malt réussit la première réimplantation d'un bras sectionné, sur un garçon de douze ans.",
      "Au fil des ans, des chanteurs comme Adele, Cher, Lionel Richie, Roger Daltrey et Steven Tyler s'y sont fait opérer.",
      "L'héliport sur le bâtiment noir permet aux patients gravement blessés d'arriver par les airs.",
    ],
  },
  brutalism: {
    title: "Le brutalisme",
    caption: "Mass Eye & Ear Infirmary",
    lines: [
      "Cette tour de béton est le Mass Eye and Ear Infirmary, un exemple de brutalisme, un style populaire à Boston des années 1950 aux années 1970.",
      "Le nom vient de l'expression « béton brut ».",
      "Il était censé paraître solide et puissant, même si certains le trouvent froid, voire laid.",
      "Vous en verrez d'autres exemples depuis la rivière : le Green Building du MIT, les Warren Towers, la tour de droit de BU, Peabody Terrace et Mather House.",
    ],
  },
  longfellow: {
    title: "Pont Longfellow",
    caption: "Le pont salière et poivrière",
    lines: [
      "Voici le pont Henry Wadsworth Longfellow, construit entre 1900 et 1907, le deuxième plus long pont de la Charles, avec environ 540 mètres.",
      "Les habitants l'appellent le pont salière et poivrière, car ses tours de pierre ressemblent à des salières et poivrières. La ligne rouge du métro y passe.",
      "Une restauration de cinq ans s'est déroulée de 2013 à 2018. Prévue pour trois ans, elle a dépassé les délais et le budget, confirmant le dicton local : Boston n'a que deux saisons, l'hiver et les travaux.",
      "Les drakkars sculptés sur les piles centrales viennent d'une théorie répandue au XIXe siècle selon laquelle les Vikings auraient exploré la Nouvelle-Angleterre au Moyen Âge.",
      "Les preuves manquaient, mais le professeur de Harvard Eben Norton Horsford affirma même avoir trouvé les fondations de la maison de Leif Erikson à Cambridge, commodément près de la sienne.",
      "D'abord appelé pont de Cambridge, il fut rebaptisé en l'honneur de Longfellow en 1927, d'après un poème qu'il écrivit sur l'ancien pont ; on trouve ce poème gravé sur l'ouvrage aujourd'hui.",
    ],
  },
  community: {
    title: "Community Boating",
    caption: "La voile pour tous",
    lines: [
      "Côté Boston se trouve Community Boating, qui permet aux habitants d'apprendre à naviguer facilement et à petit prix cet été.",
      "Fondée en 1946, c'est le plus ancien programme public de voile encore en activité aux États-Unis.",
      "La mission de cette association à but non lucratif est d'être le terrain de jeu nautique public de Boston et d'offrir la voile à tous.",
      "Les cours de voile pour jeunes débutent selon un tarif progressif à partir d'un seul dollar, et un programme d'accès universel offre aux personnes en situation de handicap un accès sécurisé à la voile.",
    ],
  },
  esplanade: {
    title: "L'Esplanade",
    caption: "Hatch Memorial Shell",
    lines: [
      "Côté Boston s'étire l'Esplanade, un ruban de parc de près de cinq kilomètres, entièrement aménagé sur des terres gagnées, entre le Musée des sciences et le pont de BU.",
      "Sa pièce maîtresse est le Hatch Memorial Shell. Des coquilles de scène temporaires y étaient dressées dès 1929, mais démontées après chaque usage.",
      "Cette coquille permanente en granit fut construite en 1941, grâce à un don de Maria Hatch en hommage à son frère Edward, général de l'armée de l'Union ; le don était réservé à des « fins musicales et artistiques ».",
      "C'est la scène de concerts tout l'été, surtout la célébration du 4 juillet avec le Boston Pops, organisée ici chaque année depuis 1929 et attirant jusqu'à un demi-million de personnes.",
    ],
  },
  berkeley: {
    title: "L'ancien ancien Hancock",
    caption: "200 Berkeley Street",
    lines: [
      "Voici le 200 Berkeley Street, surnommé l'ancien ancien John Hancock Tower. Achevé en 1947, il abritait la compagnie d'assurance John Hancock et s'élève à environ 150 mètres.",
      "À l'époque, les assureurs et les banques ajoutaient souvent un service utile à la collectivité, d'où la présence d'une balise météo au sommet.",
      "La balise change la couleur de la flèche, et les habitants connaissent la comptine : bleu fixe, ciel limpide ; bleu clignotant, nuages devant ; rouge fixe, pluie en vue ; rouge clignotant, neige à la place.",
      "L'été, rouge et blanc clignotants signifient un match des Red Sox annulé pour la pluie. Et en 2004, quand les Red Sox ont enfin remporté les World Series, elle a clignoté bleu et rouge, la malédiction du Bambino était levée.",
      "John Hancock y a réinstallé son siège en 2019, et en 2023 a déplacé son célèbre logo, longtemps affiché au Fenway Park, à la base du toit en gradins.",
    ],
  },
  hancock: {
    title: "Hancock Tower",
    caption: "200 Clarendon Street",
    lines: [
      "Au-dessus se dresse le 200 Clarendon, le « nouveau » John Hancock Tower, construit de 1968 à 1976. Avec 241 mètres et 60 étages, c'est le plus haut bâtiment de Nouvelle-Angleterre.",
      "Son ouverture fut retardée de cinq ans par de graves problèmes d'ingénierie.",
      "Le vent faisait osciller les étages supérieurs au point de donner la nausée ; deux contrepoids de plomb de 300 tonnes furent installés au 58e étage pour le stabiliser.",
      "Le défaut le plus dangereux venait des fenêtres : chacune pesait 230 kilos et se décrochait pour s'écraser sur le trottoir, loin en contrebas. Dès que le vent dépassait 70 km/h, la police fermait les rues alentour.",
      "En 1973, les 10 344 fenêtres furent remplacées. Pendant les travaux, du contreplaqué bouchait les cadres vides, d'où son surnom de Palais de contreplaqué.",
    ],
  },
  huntington: {
    title: "111 Huntington Avenue",
    caption: "L'immeuble « R2-D2 »",
    lines: [
      "Derrière la ligne d'horizon se trouve le 111 Huntington Avenue, premier gratte-ciel achevé à Boston au nouveau millénaire. On le surnomme l'immeuble R2-D2.",
      "Le maire de longue date Tom Menino n'aimait pas le projet initial à toit plat ; il trouvait la ligne d'horizon de Boston ennuyeuse et disait que « les toits plats, ça ne le fait pas ».",
      "Les architectes revinrent avec plusieurs options, et Menino choisit le dôme ouvert au sommet. Il est purement décoratif, et son seul rôle est de rendre la ligne d'horizon plus intéressante.",
    ],
  },
  pru: {
    title: "Tour Prudential",
    caption: "« The Pru »",
    lines: [
      "Cette haute tour est la Prudential, ou « the Pru », achevée en 1964. Avec 229 mètres et 52 étages, c'est le deuxième plus haut bâtiment de Boston, rempli de boutiques haut de gamme.",
      "Elle dépassa la Custom House Tower, détentrice du titre pendant 49 ans, celle-ci appartenait à l'État fédéral et échappait à l'ancienne limite de hauteur de 38 mètres de Boston.",
      "Les étages supérieurs ont accueilli le restaurant Top of the Hub et l'observatoire Skywalk pendant plus de 50 ans, jusqu'à ce que le propriétaire mette fin à leurs baux en 2020.",
      "Aujourd'hui, une terrasse panoramique sur trois niveaux, View Boston, occupe le sommet, avec des expositions interactives, un bar à cocktails nommé Stratus et une terrasse extérieure, la Cloud Terrace.",
    ],
  },
  onedalton: {
    title: "One Dalton",
    caption: "Four Seasons et résidences",
    lines: [
      "La tour sombre et courbe est One Dalton, achevée en 2019. Avec 226 mètres et 61 étages, c'est le plus haut immeuble entièrement résidentiel de Nouvelle-Angleterre.",
      "Ses 23 premiers étages forment l'hôtel Four Seasons, et les étages 26 à 59 sont des résidences privées.",
      "Le penthouse sur deux étages s'est vendu 34 millions de dollars, juste en dessous du record de 35 millions de la Millennium Tower.",
      "Il a été conçu par Harry Cobb, du cabinet Pei Cobb Freed & Partners.",
    ],
  },
  harvardbridge: {
    title: "Pont John Harvard",
    caption: "Le pont de Mass Ave",
    lines: [
      "Devant nous, le pont John Harvard, la plus longue traversée de la Charles avec un peu plus de 640 mètres. On l'appelle aussi le pont de Mass Ave, du nom de la route qui l'emprunte.",
      "Il a ouvert en 1891 mais fut reconstruit trois fois pour des défauts de conception. On a proposé de le rebaptiser au nom du MIT voisin, mais beaucoup au MIT le jugeaient mal conçu et n'en voulaient pas.",
      "En 1908, 20 000 spectateurs virent l'illusionniste Harry Houdini sauter de ce pont, les mains enchaînées dans le dos. Il refit surface, libre, en une quarantaine de secondes, même si certains disent qu'il en mit 15 et voulait juste épater la foule.",
    ],
  },
  citgo: {
    title: "L'enseigne CITGO",
    caption: "L'étoile polaire de Boston",
    lines: [
      "Devant brille l'enseigne CITGO, parfois surnommée l'étoile polaire de Boston, sauf qu'au lieu d'indiquer le nord, elle montre le chemin du Fenway Park.",
      "Installée en 1940, elle affichait « Cities Service », puis devint l'iconique enseigne CITGO de 18 mètres de côté en 1965, éclairée au néon. Ironie : elle surplombe une librairie et n'a jamais été près d'une station-service.",
      "Pendant la crise énergétique des années 1970, elle restait souvent éteinte, et l'on débattit de son retrait, mais elle obtint un statut de monument et brille désormais avec des LED.",
      "La légende dit qu'elle clignote « C-IT-GO » quand un joueur des Red Sox frappe un coup de circuit. L'entreprise tech Whoop s'est installée en dessous, son logo sur le toit, donnant aux fans une nouvelle raison de crier.",
    ],
  },
  collegetown: {
    title: "Une ville étudiante",
    caption: "Un pôle d'éducation",
    lines: [
      "Boston est souvent qualifiée de pôle d'éducation, et à juste titre.",
      "Selon où l'on trace les limites de la ville, elle compte entre 29 et 35 établissements : facultés, universités et community colleges.",
      "De septembre à mai, les étudiants représentent environ 21 % de la population de Boston, quelque 163 000 lors de l'année 2023-2024.",
    ],
  },
  bu: {
    title: "Boston University",
    caption: "BU",
    lines: [
      "L'enseigne CITGO marque le début de Boston University, dont le campus s'étend sur environ 2,4 kilomètres le long de Commonwealth Avenue, à travers 19 facultés et écoles.",
      "BU fut fondée en 1839 sous le nom de Newbury Biblical Institute ; elle s'installa au New Hampshire, puis à Boston en 1867, et fut constituée en Boston University en 1869.",
      "Alexander Graham Bell y enseigna l'élocution dans les années 1870, et son travail auprès d'élèves sourds lui laissa le temps d'inventer, et de breveter, le téléphone.",
      "Aujourd'hui, BU compte plus de 37 500 étudiants, avec des frais de scolarité d'environ 70 000 dollars par an.",
    ],
  },
  bualumni: {
    title: "Anciens de BU",
    caption: "Diplômés célèbres",
    lines: [
      "BU a formé bien des noms célèbres au fil des ans.",
      "Parmi eux, l'actrice Uzo Aduba d'Orange Is the New Black, et Jason Alexander, le George Costanza de Seinfeld, qui a en fait abandonné ses études.",
      "Le Dr Martin Luther King Jr. y obtint son doctorat en 1955, et Alexandria Ocasio-Cortez y fut diplômée en 2011.",
      "On compte aussi l'animateur de radio Howard Stern, et Helen Magill, première femme aux États-Unis à obtenir un doctorat.",
    ],
  },
  bucds: {
    title: "BU, Sciences des données",
    caption: "L'immeuble « Jenga » et Warren Towers",
    lines: [
      "Cette tour empilée et inclinée est le Center for Computing and Data Sciences de BU, achevé en 2022. On l'appelle l'immeuble Jenga, même si ses architectes disent s'être inspirés d'une pile de livres.",
      "Avec 93 mètres, c'est le premier bâtiment de BU à fonctionner totalement sans énergies fossiles, chauffé et refroidi par 31 puits géothermiques forés à 460 mètres de profondeur.",
      "À côté se trouvent les Warren Towers, une résidence de 1967 surtout pour les première année, qui loge près de 1 800 étudiants et ne forme qu'un seul bâtiment jusqu'au quatrième étage.",
    ],
  },
  marsh: {
    title: "Marsh Chapel et droit de BU",
    caption: "Boston University",
    lines: [
      "Côté Boston se trouve Marsh Chapel, bâtie en 1949 et nommée d'après l'ancien président de BU Daniel Marsh ; ce fut le premier grand bâtiment de l'université le long de la rivière.",
      "À côté s'élève la tour de droit de BU, de 1964, autre exemple de brutalisme, élue un jour deuxième bâtiment le plus laid de Boston.",
      "Et le plus laid ? Ce titre revint à l'hôtel de ville de Boston.",
    ],
  },
  headofcharles: {
    title: "Head of the Charles",
    caption: "La régate d'octobre",
    lines: [
      "Chaque octobre, la rivière accueille la régate Head of the Charles, créée en 1965 pour rompre la monotonie de la saison d'aviron. Elle attire aujourd'hui plus de 11 000 athlètes du monde entier.",
      "Étalée sur trois jours à partir du troisième vendredi d'octobre, c'est une course de cinq kilomètres, de l'Esplanade jusqu'à Herter Park.",
      "En tant que course « en ligne », c'est un contre-la-montre : des équipages d'un, deux, quatre ou huit rameurs partent à 15 secondes d'intervalle et courent contre la montre.",
    ],
  },
  bubridge: {
    title: "Pont de BU",
    caption: "Pont de Cottage Farm",
    lines: [
      "Juste devant, le pont de BU, construit en 1928 sous le nom de pont de Cottage Farm et rebaptisé pour Boston University en 1949.",
      "On dit parfois que c'est le seul endroit où un bateau peut passer sous un train, sous une voiture, sous un avion. Pas tout à fait, Portland et Lisbonne le revendiquent aussi, mais ici, cela se produit sur des travées distinctes.",
      "En dessous se trouve le pont ferroviaire de Grand Junction, que les équipages touchent souvent avant la Head of the Charles pour encourager leurs coéquipiers.",
      "Il transportait autrefois du fret mais est aujourd'hui presque inutilisé ; un projet de 2012 visant à l'intégrer à une ligne de banlieue « Indigo » n'a jamais vu le jour.",
    ],
  },
  dirtywater: {
    title: "Cette eau trouble",
    caption: "Nettoyer la Charles",
    lines: [
      "La Charles n'a pas toujours été réputée pour sa propreté. Le groupe The Standells lui a consacré « Dirty Water », « I love that dirty water, Boston you're my home ».",
      "Dans les années 1960, la pollution des usines, abattoirs et moulins teintait par endroits la rivière de rose et d'orange, et y tomber pouvait valoir une piqûre antitétanique aux urgences.",
      "Le nettoyage débuta en 1995, quand l'agence de protection de l'environnement lui attribua un D-moins ; aujourd'hui, sa qualité tourne autour d'un B.",
      "Elle n'atteindra peut-être jamais le A : les feuilles en décomposition libèrent des tanins qui colorent l'eau comme du thé, réduisant la visibilité. La baignade reste interdite, mais une zone pourrait un jour ouvrir près du Musée des sciences.",
      "En 2016, on a même mis au défi des brasseries locales de créer une bière artisanale à partir d'eau filtrée de la Charles, lors d'un événement nommé Brew the Charles.",
    ],
  },
  magazine: {
    title: "Magazine Beach",
    caption: "L'ancienne poudrière",
    lines: [
      "Côté Cambridge se trouve Magazine Beach, autrefois la plus grande plage de la Charles, avec du vrai sable.",
      "Elle doit son nom à une poudrière construite sur un îlot en 1818, utilisée jusqu'au lendemain de la guerre de Sécession, lorsque les riverains s'inquiétèrent de vivre près d'un stock de poudre.",
      "Les marais furent comblés et la poudrière devint un bain public ; la plage ferma en 1949 à cause de la pollution, et une piscine gratuite fut construite en 1952 pour remplacer la rivière.",
      "Restaurée en 2020, elle en est aujourd'hui à une deuxième phase de travaux, tandis que Mass Audubon utilise l'ancienne poudrière comme centre d'éducation à la nature.",
    ],
  },
  riverside: {
    title: "Riverside Boat Club",
    caption: "L'aviron pour les ouvriers",
    lines: [
      "Voici le Riverside Boat Club, fondé en 1869 par des immigrants irlandais et installé à cet emplacement en 1912.",
      "Comme l'adhésion aux clubs nautiques était souvent coûteuse, des ouvriers de la Riverside Press le fondèrent pour rendre l'aviron sur la Charles accessible à tous.",
      "Il est géré entièrement par des bénévoles, et ceux qui participent à l'entretien peuvent obtenir une adhésion gratuite.",
    ],
  },
  polaroid: {
    title: "Ancien siège Polaroid",
    caption: "Art moderne au bord de l'eau",
    lines: [
      "Ce bâtiment blanc épuré est l'ancien siège de Polaroid, probablement le premier édifice Art moderne de Cambridge. Il abrita Polaroid du début des années 1940 à la fin des années 1990.",
      "En 2000, l'entreprise le vendit, avec les terrains alentour, pour 10 millions de dollars, et il a depuis été loué à diverses sociétés.",
      "On plaisante en disant qu'il fut conçu pour ressembler à un vieil appareil Polaroid, mais c'est faux, puisqu'il fut bâti à l'origine pour la B.B. Chemical Company. Harvard y a aujourd'hui des bureaux.",
    ],
  },
  resilience: {
    title: "Usine Resilience",
    caption: "De Genzyme à Resilience",
    lines: [
      "Ce complexe de briques fut construit en 1993 pour Genzyme, société pharmaceutique de Cambridge, afin de produire son principal médicament, le Cerezyme, qui traite la maladie de Gaucher.",
      "Genzyme a aussi été pionnière des greffes de peau synthétique pour les grands brûlés, et en 2011 le groupe français Sanofi l'a rachetée pour 20 milliards de dollars.",
      "En 2021, Sanofi a vendu ce site à Resilience, un façonnier fondé en 2020 après avoir levé 800 millions de dollars ; l'entreprise a licencié la plupart de son personnel en 2023, et l'avenir du bâtiment est incertain.",
      "La mission de Resilience est d'améliorer la fabrication des nouvelles thérapies médicales et de les rendre plus accessibles dans le monde.",
    ],
  },
  harvard: {
    title: "Université Harvard",
    caption: "Fondée en 1636",
    lines: [
      "Nous voici à Harvard. Fondé en 1636, Harvard College est le plus ancien établissement d'enseignement supérieur des États-Unis, créé à l'origine pour former des pasteurs.",
      "Ce fut d'abord une école réservée aux hommes. Les femmes étudiaient via le Radcliffe College, fondé en 1879, et les deux ont entièrement fusionné en 1999.",
      "Harvard détient le plus important fonds de dotation au monde, plus de 56 milliards de dollars, supérieur au PIB de plus de la moitié des pays du monde.",
      "Elle compte environ 24 500 étudiants et des frais d'environ 59 000 dollars, mais depuis 2025, la scolarité est gratuite pour les familles gagnant moins de 200 000 dollars par an.",
    ],
  },
  harvardalumni: {
    title: "Anciens de Harvard",
    caption: "Présidents et célébrités",
    lines: [
      "Harvard a formé 188 anciens milliardaires, sans même compter Bill Gates et Mark Zuckerberg, qui ont abandonné leurs études.",
      "Elle a formé huit présidents américains, plus que toute autre université, dont John Adams, les deux Roosevelt, John F. Kennedy et Barack Obama.",
      "Parmi les autres anciens : l'acteur Matt Damon, qui a abandonné, le violoncelliste Yo-Yo Ma, l'actrice Natalie Portman, l'écrivaine Helen Keller et l'astrophysicien Neil deGrasse Tyson.",
    ],
  },
  harvardhouses: {
    title: "Les maisons de Harvard",
    caption: "Les dômes colorés",
    lines: [
      "Les première année de Harvard vivent autour de Harvard Yard, invisible depuis la rivière. Après leur première année, plus de 98 % s'installent dans l'une des 12 maisons résidentielles.",
      "Chaque maison loge de 350 à 500 étudiants, avec son propre réfectoire et ses salles communes. Depuis l'eau, on repère leurs dômes colorés, Eliot House en vert, Lowell House en bleu et Dunster House en rouge.",
      "On aperçoit aussi d'ici Winthrop, Leverett et Mather House.",
    ],
  },
  weeks: {
    title: "Passerelle Weeks",
    caption: "Passerelle John W. Weeks",
    lines: [
      "Cette élégante arche est la passerelle John W. Weeks, construite en 1927 et propriété de Harvard.",
      "C'est l'une des deux seules passerelles en service sur la Charles, bâtie lorsque Harvard s'est étendue vers Boston pour relier les deux côtés du campus. Harvard possède d'ailleurs désormais plus de terrains à Boston qu'à Cambridge.",
      "Elle porte le nom de John Wingate Weeks, représentant et sénateur du Massachusetts, et secrétaire à la Guerre dans les années 1920.",
    ],
  },
  boathouses: {
    title: "Hangars à bateaux de Harvard",
    caption: "Newell et Weld",
    lines: [
      "Au bord de l'eau, les deux hangars à bateaux de Harvard. Le Newell Boathouse, le rouge juste après le pont Anderson, fut construit en 1900 pour l'équipe masculine d'aviron.",
      "Il porte le nom de Marshall Newell, rameur et vedette de football américain de Harvard, mort à 26 ans dans un accident ferroviaire.",
      "Le Weld Boathouse, construit en 1906 et offert par la famille Weld, sert l'équipe féminine d'aviron ainsi que l'aviron de loisir et inter-maisons.",
    ],
  },
  baker: {
    title: "Bibliothèque Baker",
    caption: "Harvard Business School",
    lines: [
      "De l'autre côté de la rivière, la bibliothèque Baker, achevée en 1927 à la Harvard Business School.",
      "Elle porte le nom de George F. Baker, magnat des affaires qui fit don de 5 millions de dollars pour bâtir tout le campus de la Business School, et c'est la plus grande bibliothèque d'affaires au monde.",
    ],
  },
  break: {
    title: "Pause à mi-parcours",
    caption: "Service au bar",
    lines: [
      "Nous avons atteint la moitié de la visite, alors nous allons faire une petite pause.",
      "Si vous souhaitez passer au bar, c'est le bon moment, nous avons de l'eau, des sodas, des jus, de la bière, du vin et des en-cas.",
      "Nous allons mettre un peu de musique ; installez-vous, profitez du paysage, et n'hésitez pas à nous poser des questions, à moi ou au capitaine.",
    ],
  },
  nickerson: {
    title: "Nickerson Field",
    caption: "Autrefois Braves Field",
    lines: [
      "Côté Boston se trouve Nickerson Field, que BU acheta en 1953 pour ses matchs de football et ses cérémonies de remise des diplômes.",
      "Mais auparavant, c'était Braves Field, un stade de baseball construit en 1915 et le berceau des Boston Braves, qui partirent ensuite à Milwaukee, puis à Atlanta.",
      "Le 1er mai 1920, il accueillit le plus long match de l'histoire de la ligue majeure en nombre de manches : 26 manches en moins de quatre heures, interrompu par l'obscurité sur un score de 1 à 1 contre les Brooklyn Robins.",
    ],
  },
  ford: {
    title: "Ancienne usine Ford",
    caption: "La Ford T au bord de l'eau",
    lines: [
      "Ce long bâtiment était une usine d'assemblage Ford qui fabriquait des voitures, dont la Ford T, de 1914 à 1926.",
      "Elle faisait partie des premières tentatives d'Henry Ford pour s'étendre au-delà de Detroit, bâtie au bord de l'eau car il exigeait que ses nouvelles usines soient près des voies navigables.",
      "Des trains entraient dans son sous-sol, et une grue montait les pièces aux étages où l'on assemblait les voitures, une quarantaine par jour, les finitions se faisant au cinquième étage.",
      "L'usine devint obsolète et ferma en 1926. Le MIT la gère désormais comme bureaux et laboratoires, l'un des derniers vestiges de l'ancienne industrie au bord de la rivière.",
    ],
  },
  bubridgeview: {
    title: "La plus belle vue de Boston",
    caption: "De retour sous le pont de BU",
    lines: [
      "Alors que nous repassons sous le pont de BU, la vue d'ici a été élue la plus belle de Boston par plusieurs journaux locaux.",
      "Pendant les prochaines minutes, notre proue est pointée droit vers les gratte-ciel du centre-ville, l'occasion idéale pour des photos.",
    ],
  },
  hyatt: {
    title: "Hyatt et DeWolfe",
    caption: "L'hôtel pyramide",
    lines: [
      "Côté Cambridge, la pyramide en gradins est le Hyatt Regency, construit en 1977. Son dernier étage abritait jadis un restaurant tournant, le Spinnaker, fermé après des pannes répétées.",
      "À côté se trouve le DeWolfe Boathouse de BU, l'un des hangars à bateaux les plus récents de la rivière, construit en 1999 pour plus de 5 millions de dollars.",
    ],
  },
  esplanadehist: {
    title: "Histoire de l'Esplanade",
    caption: "L'héritage Storrow",
    lines: [
      "L'Esplanade que nous avons longée doit son existence à James Jackson Storrow, banquier d'affaires et premier président de General Motors, qui rêvait d'un parc au bord de l'eau pour tous les Bostoniens.",
      "Il ne le vit jamais réalisé, mais après sa mort sa veuve Helen fit don d'un million de dollars pour le créer en sa mémoire, à condition que la ville égale le don et ne bloque jamais l'accès des habitants à la rivière.",
      "La ville accepta, mais des années plus tard rompit l'accord et construisit une autoroute séparant Back Bay de l'eau. Pour se racheter, elle agrandit l'Esplanade et baptisa l'autoroute Storrow Drive.",
    ],
  },
  backbay: {
    title: "Back Bay et les remblais",
    caption: "Des vasières au quartier",
    lines: [
      "Back Bay tient son nom du fait qu'il s'agissait vraiment d'une baie de vasières soumises aux marées. Avant les années 1850, la Charles s'étendait ici sur près de trois kilomètres de large.",
      "Pour désengorger la ville, Boston commença à le remblayer vers 1857. Des trains spéciaux transportaient du gravier depuis Needham jour et nuit, un convoi toutes les 45 minutes, jusqu'en 1882.",
      "Le projet régla aussi le problème sanitaire et nauséabond des vasières. Boston ajouta ainsi des milliers d'hectares, créant des quartiers comme le West End, le North End, le South End, South Boston et East Boston.",
    ],
  },
  smoot: {
    title: "Les marques Smoot",
    caption: "364,4 smoots, ± une oreille",
    lines: [
      "De retour au pont Harvard, repérez les marques colorées le long du trottoir, mesurées en « smoots ».",
      "En 1958, la fraternité Lambda Chi Alpha mit ses recrues au défi de mesurer le pont sans règle standard. Ils utilisèrent leur membre le plus petit, Oliver « Ollie » Smoot, 1,70 m, en le couchant bout à bout.",
      "Le pont mesurait 364,4 smoots, à une oreille près. L'unité est restée, elle figure même sur Google Earth, et Smoot devint plus tard président de l'organisation internationale de normalisation.",
      "Chaque année, la fraternité repeint les marques, avec un repère tous les dix smoots.",
    ],
  },
  mit: {
    title: "MIT",
    caption: "Massachusetts Institute of Technology",
    lines: [
      "Côté Cambridge se trouve le MIT. Fondé en 1861 sous le nom de Boston Tech à Back Bay, il déménagea à Cambridge en 1916 pour gagner de l'espace.",
      "Sa mascotte est Tim le castor, choisie en 1914 pour le talent d'ingénieur et l'assiduité du castor, et parce que « Tim » donne quelque chose de malin à l'envers.",
      "Le MIT est célèbre pour les canulars élaborés de ses étudiants, qu'ils appellent des « hacks », souvent montés sur le Great Dome et le Green Building.",
      "En 2011, le MIT créa une série de cours de sport, tir à l'arc, escrime, pistolet et voile, qui, réunis, valent à l'étudiant un certificat de pirate.",
      "Il compte moins de 12 000 étudiants et des frais d'environ 64 000 dollars, et comme Harvard, la scolarité est gratuite pour les familles gagnant moins de 200 000 dollars par an.",
    ],
  },
  mithacks: {
    title: "Les hacks du MIT",
    caption: "Canulars sur le Dôme",
    lines: [
      "Les célèbres hacks du MIT ont transformé ses monuments en œuvres de malice.",
      "Des étudiants ont garé une voiture de police du campus au sommet du Great Dome, l'ont transformé en R2-D2, ont accroché un wagon de la ligne rouge sur son flanc et y ont joué à Pac-Man.",
      "Ils ont même transformé tout le Green Building en une gigantesque partie de Tetris jouable.",
    ],
  },
  mitalumni: {
    title: "Anciens du MIT",
    caption: "Innovateurs et fondateurs",
    lines: [
      "De nombreuses entreprises célèbres remontent au MIT ou à ses diplômés, dont Intel, Bose, iRobot, Boston Dynamics et Raytheon.",
      "Parmi les anciens marquants : l'astronaute Buzz Aldrin, l'architecte I.M. Pei, Tom Scholz du groupe Boston, et Robert Robinson Taylor, premier architecte noir des États-Unis.",
    ],
  },
  mitgreen: {
    title: "MIT Green Building",
    caption: "I.M. Pei sur pilotis",
    lines: [
      "Voici le Green Building du MIT, qui abrite ses départements de sciences de la Terre, de l'atmosphère et des planètes.",
      "Conçu par I.M. Pei en 1964, il contourna une limite d'étages de Cambridge en surélevant le premier étage de neuf mètres sur pilotis, le hall ne comptant pas.",
      "Ces pilotis créèrent l'un des pires couloirs de vent du campus, les portes claquaient sans cesse, jusqu'à ce que des portes tournantes règlent le problème.",
      "Avec 84 mètres, ce fut le plus haut bâtiment de Cambridge jusqu'en 2020.",
    ],
  },
  finger: {
    title: "Les îles Finger",
    caption: "Make Way for Ducklings",
    lines: [
      "Ces petites îles devant Community Boating sont les îles Finger, rendues célèbres par le livre pour enfants officiel du Massachusetts : Make Way for Ducklings.",
      "Dans l'histoire de 1941, M. et Mme Mallard et leurs huit canetons, Jack, Kack, Lack, Mack, Nack, Ouack, Pack et Quack, envisagèrent d'abord de s'installer sur ces îles mêmes.",
      "Les canetons sont aujourd'hui immortalisés en statues de bronze dans le Public Garden, souvent vêtus de maillots d'équipe quand Boston atteint les séries éliminatoires.",
    ],
  },
  statehouse: {
    title: "Le Capitole de l'État",
    caption: "Le dôme doré",
    lines: [
      "Au sommet de Beacon Hill se dresse le Capitole du Massachusetts. Une partie des remblais qui ont agrandi Boston provenait de collines comme celle-ci, que l'on a rabotées.",
      "Construit en 1798, il fut conçu par Charles Bulfinch, le premier architecte né en Amérique.",
      "Son dôme, d'abord en bardeaux de bois qui fuyaient, fut recouvert de cuivre par Paul Revere and Sons, puis doré pour la première fois en 1874. Il est aujourd'hui en feuille d'or 23 carats, mais il fut peint en gris pendant la Seconde Guerre mondiale pour ne pas être une cible facile.",
    ],
  },
  liberty: {
    title: "Liberty Hotel",
    caption: "Ancienne prison de Charles Street",
    lines: [
      "Ce bel édifice fut jadis la prison de Charles Street, construite en 1851 avec des ailes en étoile pour offrir lumière et air aux détenus.",
      "Parmi ses détenus célèbres : Whitey Bulger, l'étrangleur de Boston Albert DeSalvo, Sacco et Vanzetti, Malcolm X, et le maire corrompu de Boston James Michael Curley, qui dirigea un temps la ville depuis sa cellule.",
      "En 1973, un tribunal jugea ses conditions de surpeuplement inconstitutionnelles, et elle ferma définitivement en 1990.",
      "En 2007, elle rouvrit en hôtel de luxe, le Liberty Hotel, avec un bar nommé Alibi et des restaurants appelés Clink et Scampo.",
    ],
  },
  zakim: {
    title: "Pont Zakim",
    caption: "Pont commémoratif de Bunker Hill",
    lines: [
      "Devant nous, le pont commémoratif Leonard P. Zakim Bunker Hill, ouvert en 2003, à sa construction, le pont à haubans le plus large du monde.",
      "Ses pylônes rappellent le proche monument de Bunker Hill, et certains disent que ses haubans évoquent le gréement de l'USS Constitution.",
      "C'est l'une des rares parties hors-sol du Big Dig, construite pour environ 2 milliards de dollars, avec des lucarnes laissant le soleil atteindre la rivière pour protéger les poissons migrateurs.",
      "Avant son ouverture, Barnum and Bailey y firent défiler 14 éléphants pour « prouver » sa solidité, une vieille superstition veut que les éléphants refusent de traverser une structure dangereuse.",
    ],
  },
  museum: {
    title: "Musée des sciences",
    caption: "Sur l'ancien barrage de la Charles",
    lines: [
      "En approchant du barrage, le long bâtiment devant nous est le Musée des sciences, avec plus de 700 expositions interactives.",
      "Il débuta comme musée d'histoire naturelle dans les années 1830 et s'installa ici en 1948, juste au-dessus du barrage d'origine de la Charles, de 1910.",
      "Il est actuellement en rénovation, transformant un ancien mur de théâtre en brique en un espace événementiel vitré, dont l'achèvement est prévu en 2026.",
      "Cinq plaques se trouvaient ici, représentant ses cinq thèmes : l'espace, l'énergie, l'industrie, l'humanité et la nature.",
    ],
  },
  closing: {
    title: "Merci",
    caption: "Retour à CambridgeSide",
    lines: [
      "Alors que nous regagnons le canal, merci à tous de nous avoir accompagnés aujourd'hui.",
      "La Charles River Boat Company navigue sur ces eaux depuis plus de 30 ans. Petite entreprise familiale, nous soutenons les écoles et associations locales, plus de 1,5 million de dollars de billets offerts à nos communautés, et nous œuvrons à protéger la Charles et les autres cours d'eau de la région.",
      "Si le cœur vous en dit, nous proposons des croisières cocktail et coucher de soleil les soirs de week-end, ainsi que des visites architecturales dans le port de Boston avec la Boston Society for Architecture.",
      "Si vous avez apprécié cette journée, laissez-nous un avis, cela compte beaucoup.",
      "Merci de terminer ou de laisser vos boissons au bar, de vous écarter du portillon pendant l'accostage, de rassembler vos affaires et de rester assis jusqu'à ce qu'un membre de l'équipage vous autorise à descendre. Merci, et profitez bien du reste de votre journée à Boston.",
    ],
  },
};
