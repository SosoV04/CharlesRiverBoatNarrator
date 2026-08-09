// narration/pt.js
// -----------------------------------------------------------------------------
// Portuguese narration text.
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

export const LANG = "pt";

export const PT = {
  welcome: {
    title: "Boas-vindas, termos e história",
    caption: "Partida de CambridgeSide",
    lines: [
      "Bem-vindos a bordo, e obrigado por estarem connosco hoje! Acomodem-se e fiquem confortáveis, pois nos próximos 70 minutos vamos deslizar suavemente desde CambridgeSide até Harvard e regressar, com o vosso capitão ao leme e muitas histórias para partilhar pelo caminho.",
      "Primeiro, uma breve nota de segurança, já que somos um barco inspecionado pela Coast Guard. Caso seja necessário, os coletes salva-vidas estão guardados sob as almofadas azuis na frente e na traseira do barco, embora certamente não esperemos ter de os usar.",
      "Os extintores e o equipamento de segurança estão distribuídos pelo barco, por isso deixem esses cuidados à tripulação, a menos que vos peçamos ajuda.",
      "Fiquem à vontade para passear e encontrar o vosso lugar favorito. Pedimos apenas que evitem correr e subir para cima dos bancos, e que mantenham as mãos, a cabeça e os pertences dentro do barco.",
      "Está um pouco frio, ou com vento a mais? Basta acenarem-me e eu abro ou fecho uma janela para vocês. São pesadas e precisam de uma ferramenta especial, por isso deixem esse esforço connosco.",
      "Somos um barco onde não se fuma nem se usa vape, mas temos um bar a bordo, por isso venham cumprimentar-nos a qualquer momento para uma cerveja gelada, um copo de vinho, um cocktail, um refrigerante ou um pequeno aperitivo.",
      "Quer estejam aqui pelas histórias ou simplesmente pela vista, fiquem à vontade como se estivessem em casa, e um lembrete gentil: mantenham a conversa baixa durante a narração para que todos possam ouvir. Agora, vamos desfrutar do rio juntos!",
      "Antes de partirmos, aqui ficam alguns termos náuticos que vão ouvir durante o passeio.",
      "A proa é a frente do barco, e a popa é a traseira.",
      "Estibordo é o lado direito do barco, e bombordo é o esquerdo.",
      "E a casa do leme é onde o capitão conduz o barco.",
      "Estamos agora a sair do Lechmere Canal e a seguir para o Charles River.",
      "O Charles é a fronteira natural entre Boston e Cambridge, por isso, durante a primeira metade do cruzeiro, Boston fica à sua esquerda e Cambridge à sua direita.",
      "Ao cartografar a região em 1614, John Smith deu-lhe primeiro o nome de Massachusett River, em homenagem à tribo nativa americana daqui; mais tarde foi rebatizado em honra de e pelo Rei Carlos I.",
      "Percorre 80 milhas através de 23 vilas e cidades, começando em Echo Lake, em Hopkinton, e terminando em Boston Harbor.",
      "Hopkinton é também o ponto de partida da Boston Marathon, onde os corredores chegam à cidade ao fim de 26,2 milhas.",
      "Em 1910, foi construído o primeiro sistema de barragem e eclusa para controlar o nível da água do rio, e é sobre ele que assenta hoje o Museum of Science.",
      "Essa barragem criou a bacia calma e permitiu que o Esplanade abrisse parque ao público; uma barragem mais recente substituiu-a meia milha rio abaixo, em 1978.",
    ],
  },
  mgb: {
    title: "Mass General Brigham",
    caption: "O edifício Ellison",
    lines: [
      "Do lado de Boston fica o Mass General Brigham, consistentemente classificado pelo U.S. News & World Report entre os melhores hospitais do país.",
      "O Mass General foi fundado em 1811 e o Brigham and Women's em 1832; os dois fundiram-se em 2019.",
      "Em 1846, acolheram a primeira demonstração pública de anestesia cirúrgica com éter, no Ether Dome, que ainda hoje se pode visitar.",
      "Em 1923, cirurgiões realizaram aqui a primeira cirurgia bem-sucedida a uma válvula cardíaca, e em 1954 o primeiro transplante de órgão bem-sucedido, um rim entre gémeos.",
      "Em 1962, uma equipa liderada por Ronald Malt realizou a primeira reimplantação bem-sucedida de um braço amputado, num menino de doze anos.",
      "Ao longo dos anos, cantores como Adele, Cher, Lionel Richie, Roger Daltrey e Steven Tyler foram todos operados aqui.",
      "O heliporto no edifício preto permite que doentes em estado crítico cheguem por via aérea.",
    ],
  },
  brutalism: {
    title: "Brutalismo",
    caption: "Mass Eye & Ear Infirmary",
    lines: [
      "Esta torre de betão é o Mass Eye and Ear Infirmary, um exemplo de Brutalismo, um estilo popular em Boston dos anos 1950 aos anos 70.",
      "O nome vem do francês 'béton brut', que significa betão em bruto.",
      "Pretendia parecer forte e poderoso, embora alguns o achem frio, ou até feio.",
      "Vai ver mais exemplos a partir do rio: o MIT Green Building, as Warren Towers, a torre da BU Law, o Peabody Terrace e a Mather House.",
    ],
  },
  longfellow: {
    title: "Longfellow Bridge",
    caption: "A ponte dos saleiros e pimenteiros",
    lines: [
      "Esta é a Henry Wadsworth Longfellow Bridge, construída entre 1900 e 1907, a segunda ponte mais comprida do Charles, com cerca de 1.768 pés.",
      "Os locais chamam-lhe a Salt and Pepper Shaker Bridge, porque as torres de pedra parecem saleiros e pimenteiros. A MBTA Red Line atravessa-a.",
      "Uma restauração de cinco anos decorreu de 2013 a 2018. Estimada em três anos, ultrapassou o prazo e o orçamento, confirmando o ditado local de que Boston tem apenas duas estações: inverno e obras.",
      "Os navios viking esculpidos nos pilares centrais vêm de uma teoria popular do século XIX, segundo a qual os vikings exploraram a New England na Idade Média.",
      "Havia poucas provas, mas o professor de Harvard Eben Norton Horsford chegou a afirmar ter encontrado as fundações da casa de Leif Erikson em Cambridge, convenientemente ao virar da esquina da sua própria.",
      "Originalmente chamada Cambridge Bridge, foi rebatizada em honra de Longfellow em 1927, em referência a um poema que ele escreveu sobre a antiga ponte que aqui existia; é possível encontrar hoje esse poema inscrito à sua volta.",
    ],
  },
  community: {
    title: "Community Boating",
    caption: "Vela para todos",
    lines: [
      "Do lado de Boston fica o Community Boating, que torna fácil e acessível aos locais aprenderem a velejar neste verão.",
      "Fundado em 1946, é o mais antigo programa público de vela em funcionamento contínuo nos Estados Unidos.",
      "A missão desta organização sem fins lucrativos é ser o parque público de vela de Boston e oferecer vela para todos.",
      "As aulas de vela para jovens começam numa escala variável a partir de apenas um dólar, e um Universal Access Program dá às pessoas com deficiência acesso seguro à vela.",
    ],
  },
  esplanade: {
    title: "O Esplanade",
    caption: "Hatch Memorial Shell",
    lines: [
      "Do lado de Boston estende-se o Esplanade, uma faixa de parque de três milhas construída inteiramente sobre terreno conquistado entre o Museum of Science e a BU Bridge.",
      "A sua peça central é o Hatch Memorial Shell. Conchas de palco temporárias estiveram aqui a partir de 1929, mas eram desmontadas após cada utilização.",
      "Esta concha permanente de granito foi construída em 1941, graças a um donativo de Maria Hatch em honra do seu falecido irmão Edward, general do Union Army; o donativo foi destinado a 'fins musicais e artísticos'.",
      "É o palco de concertos durante todo o verão, sobretudo a celebração do Fourth of July dos Boston Pops, realizada aqui todos os anos desde 1929 e que atrai até meio milhão de pessoas.",
    ],
  },
  berkeley: {
    title: "A Velha, Velha Hancock",
    caption: "200 Berkeley Street",
    lines: [
      "Este é o 200 Berkeley Street, também chamado a Old, Old John Hancock Tower. Concluído em 1947, foi a sede da John Hancock Life Insurance e tem cerca de 495 pés de altura.",
      "Na época, as seguradoras e os bancos acrescentavam muitas vezes algo útil para a comunidade, e é por isso que este tem um farol meteorológico.",
      "O farol muda a cor do pináculo, e os locais sabem a rima: azul fixo, céu limpo; azul a piscar, nuvens a chegar; vermelho fixo, chuva à vista; vermelho a piscar, neve em vez disso.",
      "No verão, vermelho e branco a piscar significa que um jogo dos Red Sox foi adiado pela chuva. E em 2004, quando os Sox finalmente venceram a World Series, piscou azul e vermelho: a Curse of the Bambino tinha morrido.",
      "A John Hancock trouxe a sua sede de volta para aqui em 2019, e em 2023 mudou o seu famoso logótipo, durante muito tempo exibido no Fenway Park, para a base do telhado escalonado.",
    ],
  },
  hancock: {
    title: "Hancock Tower",
    caption: "200 Clarendon Street",
    lines: [
      "Erguendo-se ao alto está o 200 Clarendon, a 'nova' John Hancock Tower, construída entre 1968 e 1976. Com 790 pés e 60 andares, é o edifício mais alto da New England.",
      "A sua inauguração foi adiada cinco anos por graves problemas de engenharia.",
      "Os ventos fortes faziam os andares superiores oscilar o suficiente para causar enjoo, por isso foram instalados dois contrapesos de chumbo de 300 toneladas no 58.º andar para o estabilizar.",
      "A falha mais perigosa eram as janelas: cada uma pesava 500 libras e começaram a soltar-se e a despenhar-se no passeio muito abaixo. Sempre que o vento ultrapassava as 45 milhas por hora, a polícia fechava as ruas circundantes.",
      "Em 1973, todas as 10.344 janelas foram substituídas. Durante as reparações, contraplacado preenchia os caixilhos vazios, o que lhe valeu a alcunha de Plywood Palace, o palácio de contraplacado.",
    ],
  },
  huntington: {
    title: "111 Huntington Ave",
    caption: "O edifício 'R2-D2'",
    lines: [
      "Por detrás da linha do horizonte está o 111 Huntington Avenue, o primeiro arranha-céus concluído em Boston no novo milénio. Os locais chamam-lhe o edifício R2-D2.",
      "O antigo presidente da câmara Tom Menino, há muito no cargo, não gostava do desenho original de topo plano, dizendo que a linha do horizonte de Boston era aborrecida e que 'telhados planos não resultam'.",
      "Os arquitetos voltaram com várias opções, e Menino escolheu a cúpula aberta no topo. É puramente decorativa, e a sua única função é tornar a linha do horizonte mais interessante.",
    ],
  },
  pru: {
    title: "Prudential Tower",
    caption: "'The Pru'",
    lines: [
      "Aquela torre alta é a Prudential, ou 'the Pru', concluída em 1964. Com 750 pés e 52 andares, é o segundo edifício mais alto de Boston, com muitas lojas de luxo no interior.",
      "Ultrapassou a Custom House Tower, que detinha o título havia 49 anos; essa era propriedade federal e estava isenta do antigo limite de altura de 125 pés de Boston.",
      "Os andares superiores acolheram o restaurante Top of the Hub e o Skywalk Observatory durante mais de 50 anos, até que o proprietário do edifício terminou os seus contratos de arrendamento em 2020.",
      "Hoje, um miradouro de três níveis chamado View Boston ocupa o topo, com exposições interativas, um bar de cocktails chamado Stratus e um Cloud Terrace ao ar livre com vistas panorâmicas.",
    ],
  },
  onedalton: {
    title: "One Dalton",
    caption: "Four Seasons e residências",
    lines: [
      "A torre escura e curva é a One Dalton, concluída em 2019. Com 742 pés e 61 andares, é o edifício inteiramente residencial mais alto da New England.",
      "Os seus primeiros 23 andares são o Four Seasons Hotel, e os andares 26 a 59 são residências privadas.",
      "A cobertura de dois andares foi vendida por 34 milhões de dólares, quase atingindo o recorde de 35 milhões da Millennium Tower.",
      "Foi projetada por Harry Cobb, da Pei Cobb Freed & Partners.",
    ],
  },
  harvardbridge: {
    title: "John Harvard Bridge",
    caption: "A Mass Ave Bridge",
    lines: [
      "À frente está a John Harvard Bridge, a travessia mais comprida do Charles, com pouco mais de 2.100 pés. É também chamada Mass Ave Bridge, em referência à estrada que a atravessa.",
      "Foi inaugurada em 1891, mas reconstruída três vezes por falhas de engenharia. Houve propostas para a rebatizar com o nome do MIT, ali ao lado, mas muitos no MIT achavam-na mal projetada e não queriam o seu nome nela.",
      "Em 1908, 20.000 espectadores viram o artista de fugas Harry Houdini saltar desta ponte, com as mãos algemadas atrás das costas. Voltou à superfície livre em cerca de 40 segundos, embora alguns digam que demorou mesmo 15 e apenas quis emocionar a multidão.",
    ],
  },
  citgo: {
    title: "CITGO Sign",
    caption: "A Estrela do Norte de Boston",
    lines: [
      "À frente brilha o CITGO sign, por vezes chamado a Estrela do Norte de Boston, só que, em vez de apontar para norte, aponta o caminho para o Fenway Park.",
      "Foi instalado pela primeira vez em 1940 com a inscrição 'Cities Service', e tornou-se o icónico CITGO sign de 60 por 60 pés em 1965, iluminado a néon. Ironicamente, fica no topo de uma livraria e nunca esteve perto de uma estação de serviço.",
      "Durante a crise energética dos anos 1970, ficou muitas vezes às escuras, e houve debate sobre a sua remoção, mas conquistou estatuto de marco protegido e agora brilha com luzes LED.",
      "Reza a lenda que pisca 'C-IT-GO' quando um jogador dos Red Sox faz um home run. A empresa tecnológica Whoop ocupa agora o espaço por baixo, com o seu logótipo no telhado, dando aos adeptos algo novo para celebrar.",
    ],
  },
  collegetown: {
    title: "Uma Cidade Universitária",
    caption: "Um centro de ensino",
    lines: [
      "Boston é frequentemente chamada um centro de ensino, e com boas razões.",
      "Dependendo de onde se traçam as fronteiras da cidade, alberga entre 29 e 35 faculdades, universidades e community colleges.",
      "De setembro a maio, os estudantes representam cerca de 21 por cento da população de Boston, à volta de 163.000 deles no ano letivo de 2023-24.",
    ],
  },
  bu: {
    title: "Boston University",
    caption: "BU",
    lines: [
      "O CITGO sign marca o início da Boston University, cujo campus se estende cerca de uma milha e meia ao longo da Commonwealth Avenue, distribuído por 19 escolas e faculdades.",
      "A BU foi fundada em 1839 como o Newbury Biblical Institute; mudou-se para New Hampshire, depois para Boston em 1867, e foi constituída como Boston University em 1869.",
      "Alexander Graham Bell ensinou aqui dicção nos anos 1870, e o seu trabalho com alunos surdos deu-lhe o tempo necessário para inventar, e patentear, o telefone.",
      "Hoje a BU tem mais de 37.500 estudantes, com propinas de cerca de 70.000 dólares por ano.",
    ],
  },
  bualumni: {
    title: "Antigos Alunos da BU",
    caption: "Graduados famosos",
    lines: [
      "A BU formou alguns nomes famosos ao longo dos anos.",
      "Entre eles, a atriz Uzo Aduba, de Orange Is the New Black, e Jason Alexander, o George Costanza de Seinfeld, que na verdade desistiu do curso.",
      "O Dr. Martin Luther King Jr. obteve aqui o seu doutoramento em 1955, e Alexandria Ocasio-Cortez formou-se em 2011.",
      "Outros incluem o locutor de rádio Howard Stern, e Helen Magill, a primeira mulher nos Estados Unidos a obter um doutoramento.",
    ],
  },
  bucds: {
    title: "BU Data Sciences",
    caption: "O 'edifício Jenga' e as Warren Towers",
    lines: [
      "Aquela torre empilhada e inclinada é o Center for Computing and Data Sciences da BU, concluído em 2022. Os locais chamam-lhe o edifício Jenga, embora os seus arquitetos digam que se inspiraram numa pilha de livros.",
      "Com 305 pés, é o primeiro edifício da BU a funcionar inteiramente sem combustíveis fósseis, aquecido e arrefecido por 31 poços geotérmicos perfurados a 1.500 pés de profundidade.",
      "Ali perto estão as Warren Towers, uma residência sobretudo de caloiros de 1967 que aloja quase 1.800 estudantes e é um único edifício ligado até ao quarto andar.",
    ],
  },
  marsh: {
    title: "Marsh Chapel e BU Law",
    caption: "Boston University",
    lines: [
      "Do lado de Boston fica a Marsh Chapel, construída em 1949 e batizada em honra do antigo presidente da BU Daniel Marsh; foi o primeiro grande edifício da universidade junto ao rio.",
      "Ao seu lado ergue-se a BU Law Tower de 1964, outra peça de Brutalismo, em tempos eleita o segundo edifício mais feio de Boston.",
      "E o mais feio? Esse título coube ao Boston City Hall.",
    ],
  },
  headofcharles: {
    title: "Head of the Charles",
    caption: "A regata de outubro",
    lines: [
      "Todos os outubros, o rio acolhe a Head of the Charles Regatta, realizada pela primeira vez em 1965 para quebrar a monotonia da época de remo. Hoje atrai mais de 11.000 atletas de todo o mundo.",
      "Realizada ao longo de três dias, a começar na terceira sexta-feira de outubro, é uma corrida de três milhas desde o Esplanade até ao Herter Park.",
      "Como corrida 'head', é um contrarrelógio: equipas de um, dois, quatro ou oito remadores partem com 15 segundos de intervalo e correm contra o relógio.",
    ],
  },
  bubridge: {
    title: "BU Bridge",
    caption: "Cottage Farm Bridge",
    lines: [
      "Mesmo à frente está a BU Bridge, construída em 1928 como Cottage Farm Bridge e rebatizada em honra da Boston University em 1949.",
      "Talvez tenha ouvido dizer que é o único lugar onde um barco pode passar por baixo de um comboio, por baixo de um carro, por baixo de um avião. Não é bem assim: Portland e Lisboa reivindicam o mesmo, mas aqui esses acontecimentos dão-se em vãos separados.",
      "Por baixo dela está a Grand Junction Railroad Bridge, que as equipas costumam marcar com grafítis antes da Head of the Charles para apoiar os seus colegas.",
      "Em tempos transportou mercadorias, mas hoje está quase sem uso; uma proposta de 2012 para a integrar numa linha de comboios suburbanos 'Indigo Line' nunca se concretizou.",
    ],
  },
  dirtywater: {
    title: "Aquela Água Suja",
    caption: "Limpar o Charles",
    lines: [
      "O Charles nem sempre foi famoso por ser limpo. A banda The Standells escreveu 'Dirty Water' sobre ele: 'I love that dirty water, Boston you're my home' — adoro aquela água suja, Boston, és a minha casa.",
      "Ao longo dos anos 1960, a poluição da indústria, dos matadouros e das fábricas tornou partes do rio cor-de-rosa e cor de laranja, e cair lá dentro podia significar uma ida às urgências para uma vacina contra o tétano.",
      "A limpeza começou em 1995, quando a EPA classificou o rio com um D-menos; hoje a sua qualidade ronda um B.",
      "Pode nunca chegar a um A: as folhas em decomposição libertam taninos que tingem a água como chá, limitando a visibilidade. Nadar ainda não é permitido, mas uma zona de banhos poderá um dia abrir perto do Museum of Science.",
      "Em 2016, cervejeiras locais foram até desafiadas a fazer uma cerveja artesanal usando água filtrada do Charles River, num evento chamado Brew the Charles.",
    ],
  },
  magazine: {
    title: "Magazine Beach",
    caption: "O antigo paiol de pólvora",
    lines: [
      "Do lado de Cambridge fica a Magazine Beach, em tempos a maior praia do Charles, com areia a sério.",
      "Deve o nome a um paiol de pólvora construído numa pequena ilha aqui em 1818, usado até pouco depois da Guerra Civil, quando os vizinhos ficaram nervosos por viver ao lado de um depósito de pólvora.",
      "Os pântanos foram aterrados e o paiol tornou-se um balneário público; a praia fechou em 1949 devido à poluição, e em 1952 foi construída uma piscina gratuita como substituto do rio.",
      "Foi restaurada em 2020 e está agora numa segunda fase de obras, enquanto a Mass Audubon usa o antigo paiol como centro de educação ambiental.",
    ],
  },
  riverside: {
    title: "Riverside Boat Club",
    caption: "Remo para a classe trabalhadora",
    lines: [
      "Este é o Riverside Boat Club, fundado em 1869 por imigrantes irlandeses e mudado para este local em 1912.",
      "Como as inscrições nos clubes de remo eram muitas vezes caras, gente da classe trabalhadora da Riverside Press fundou-o para tornar o remo no Charles acessível a todos.",
      "É gerido inteiramente por voluntários, e quem ajuda na manutenção pode obter inscrição gratuita.",
    ],
  },
  polaroid: {
    title: "Antiga Sede da Polaroid",
    caption: "Art Moderne no rio",
    lines: [
      "Aquele edifício branco e limpo é a antiga sede da Polaroid, provavelmente o primeiro edifício Art Moderne de Cambridge. Foi a casa da Polaroid do início dos anos 1940 até ao final dos anos 1990.",
      "Em 2000, a empresa vendeu-o, juntamente com o terreno em redor, por 10 milhões de dólares, e desde então tem sido arrendado a várias empresas.",
      "Há quem brinque que foi projetado para parecer uma antiga câmara Polaroid, mas não é verdade, já que foi originalmente construído para a B.B. Chemical Company. Hoje Harvard usa-o como escritórios.",
    ],
  },
  resilience: {
    title: "Fábrica da Resilience",
    caption: "Da Genzyme à Resilience",
    lines: [
      "Este complexo de tijolo foi construído em 1993 para a Genzyme, uma empresa farmacêutica de Cambridge, para produzir o seu principal medicamento, o Cerezyme, que trata a doença de Gaucher.",
      "A Genzyme também foi pioneira nos enxertos de pele sintética para vítimas de queimaduras, e em 2011 a empresa francesa Sanofi adquiriu-a por 20 mil milhões de dólares.",
      "Em 2021, a Sanofi vendeu esta unidade à Resilience, uma empresa de fabrico por contrato fundada em 2020 após angariar 800 milhões de dólares; em 2023 despediu a maior parte do pessoal, e o futuro do edifício é incerto.",
      "A missão da Resilience é melhorar a forma como as novas terapias médicas são feitas e torná-las mais acessíveis em todo o mundo.",
    ],
  },
  harvard: {
    title: "Harvard University",
    caption: "Fundada em 1636",
    lines: [
      "Chegámos a Harvard. Fundado em 1636, o Harvard College é a mais antiga instituição de ensino superior dos Estados Unidos, criada originalmente para formar ministros religiosos.",
      "Começou como uma escola só para homens. As mulheres frequentavam através do Radcliffe College, fundado em 1879, e os dois fundiram-se totalmente em 1999.",
      "Harvard detém o maior fundo patrimonial de qualquer universidade do mundo, mais de 56 mil milhões de dólares, superior ao PIB de mais de metade dos países do mundo.",
      "Tem cerca de 24.500 estudantes e propinas à volta de 59.000 dólares, embora, desde 2025, seja gratuita para famílias que ganhem menos de 200.000 dólares por ano.",
    ],
  },
  harvardalumni: {
    title: "Antigos Alunos de Harvard",
    caption: "Presidentes e estrelas",
    lines: [
      "Harvard produziu 188 antigos alunos bilionários, sem sequer contar com os desistentes Bill Gates e Mark Zuckerberg.",
      "Formou oito presidentes dos EUA, mais do que qualquer outra universidade, incluindo John Adams, ambos os Roosevelt, John F. Kennedy e Barack Obama.",
      "Outros antigos alunos incluem o ator Matt Damon, que desistiu, o violoncelista Yo-Yo Ma, a atriz Natalie Portman, a escritora Helen Keller e o astrofísico Neil deGrasse Tyson.",
    ],
  },
  harvardhouses: {
    title: "Harvard Houses",
    caption: "As cúpulas coloridas",
    lines: [
      "Os caloiros de Harvard vivem à volta do Harvard Yard, que não se vê do rio. Após o primeiro ano, mais de 98 por cento mudam-se para uma das 12 Houses residenciais.",
      "Cada House aloja 350 a 500 estudantes, com o seu próprio refeitório e salas comuns. A partir da água é possível avistar as suas cúpulas coloridas: a verde da Eliot House, a azul da Lowell House e a vermelha da Dunster House.",
      "Daqui também são visíveis as Winthrop, Leverett e Mather Houses.",
    ],
  },
  weeks: {
    title: "Weeks Footbridge",
    caption: "John W. Weeks Footbridge",
    lines: [
      "Este arco gracioso é a John W. Weeks Footbridge, construída em 1927 e propriedade de Harvard.",
      "É uma de apenas duas pontes pedonais em funcionamento no Charles, construída à medida que Harvard se expandia para Boston, para que os estudantes pudessem atravessar entre os dois lados do campus. Na verdade, Harvard possui agora mais terreno em Boston do que em Cambridge.",
      "Tem o nome de John Wingate Weeks, congressista, senador e Secretário da Guerra de Massachusetts nos anos 1920.",
    ],
  },
  boathouses: {
    title: "Harvard Boathouses",
    caption: "Newell e Weld",
    lines: [
      "Na água estão os dois pavilhões de barcos de Harvard. A Newell Boathouse, a vermelha logo a seguir à Anderson Bridge, foi construída em 1900 para a equipa masculina de remo.",
      "Tem o nome de Marshall Newell, remador de Harvard e estrela do futebol americano que morreu aos 26 anos num acidente ferroviário.",
      "A Weld Boathouse, construída em 1906 e doada pela família Weld, serve a equipa feminina de remo, bem como o remo recreativo e intramuros.",
    ],
  },
  baker: {
    title: "Baker Library",
    caption: "Harvard Business School",
    lines: [
      "Do outro lado do rio fica a Baker Library, concluída em 1927 na Harvard Business School.",
      "Tem o nome de George F. Baker, um magnata dos negócios que doou 5 milhões de dólares para construir todo o campus da Business School, e é a maior biblioteca de gestão do mundo.",
    ],
  },
  break: {
    title: "Pausa de Meio Percurso",
    caption: "Serviço de bar",
    lines: [
      "Chegámos ao ponto intermédio do passeio, por isso vamos fazer uma pequena pausa.",
      "Se quiserem visitar o bar, é uma ótima altura; temos água, refrigerantes, sumo, cerveja, vinho e aperitivos.",
      "Vamos pôr alguma música, por isso descontraiam, apreciem a paisagem, e digam-me a mim ou ao capitão se tiverem alguma pergunta.",
    ],
  },
  nickerson: {
    title: "Nickerson Field",
    caption: "Outrora Braves Field",
    lines: [
      "Do lado de Boston fica o Nickerson Field, que a BU comprou em 1953 para os seus jogos de futebol e cerimónias de formatura.",
      "Mas antes disso era o Braves Field, um estádio de basebol construído em 1915 e a casa original dos Boston Braves, que mais tarde se mudaram para Milwaukee, depois para Atlanta.",
      "A 1 de maio de 1920, acolheu o jogo mais longo da história da Major League em número de innings: 26 innings em menos de quatro horas, interrompido por falta de luz com o resultado empatado a 1 contra os Brooklyn Robins.",
    ],
  },
  ford: {
    title: "Antiga Fábrica da Ford",
    caption: "O Model T no rio",
    lines: [
      "Este edifício comprido foi uma fábrica de montagem da Ford que produziu automóveis, incluindo o Model T, de 1914 a 1926.",
      "Fez parte do primeiro esforço de Henry Ford para se expandir para além de Detroit, construída junto ao rio porque ele ordenava que as novas fábricas ficassem perto de vias navegáveis.",
      "Os comboios entravam na cave, e uma grua erguia as peças para os andares superiores, onde os automóveis eram montados, cerca de 40 por dia, com os retoques finais no quinto andar.",
      "A fábrica ficou obsoleta e fechou em 1926. O MIT gere-a agora como escritórios e laboratórios, um dos últimos vestígios da antiga indústria no rio.",
    ],
  },
  bubridgeview: {
    title: "A Melhor Vista de Boston",
    caption: "De volta sob a BU Bridge",
    lines: [
      "Ao passarmos de novo sob a BU Bridge, a vista a partir daqui foi eleita a melhor de Boston por vários jornais locais.",
      "Nos próximos minutos, a nossa proa aponta diretamente para a linha do horizonte do centro da cidade, uma oportunidade perfeita para fotografias.",
    ],
  },
  hyatt: {
    title: "Hyatt e DeWolfe",
    caption: "O hotel em pirâmide",
    lines: [
      "Do lado de Cambridge, a pirâmide escalonada é o Hyatt Regency, construído em 1977. O seu andar superior já teve um restaurante giratório chamado Spinnaker, que fechou após repetidas avarias.",
      "Ao seu lado está a DeWolfe Boathouse da BU, um dos pavilhões de remo mais recentes do rio, construído em 1999 por mais de 5 milhões de dólares.",
    ],
  },
  esplanadehist: {
    title: "História do Esplanade",
    caption: "O legado de Storrow",
    lines: [
      "O Esplanade por que passámos antes deve a sua existência a James Jackson Storrow, banqueiro de investimento e primeiro presidente da General Motors, que sonhava com um parque à beira-rio para todos os bostonianos.",
      "Nunca o viu construído, mas após a sua morte a sua viúva Helen doou um milhão de dólares para o criar como memorial em sua honra, com a condição de a cidade igualar o seu donativo e nunca bloquear o acesso dos residentes ao rio.",
      "A cidade concordou, mas anos mais tarde quebrou o acordo e construiu uma autoestrada que separou Back Bay da água. Para compensar, ampliaram o Esplanade e deram à autoestrada o nome de Storrow Drive.",
    ],
  },
  backbay: {
    title: "Back Bay e Aterro",
    caption: "De lodaçais a bairro",
    lines: [
      "Back Bay tem este nome porque era de facto uma baía de lodaçais de maré. Antes da década de 1850, o Charles estendia-se aqui por quase duas milhas de largura.",
      "Para aliviar a sobrelotação, Boston começou a aterrá-la por volta de 1857. Comboios especiais transportavam cascalho de Needham ininterruptamente, um comboio carregado a cada 45 minutos, até 1882.",
      "O projeto também resolveu um perigo para a saúde, com o mau cheiro dos lodaçais. Boston passou a acrescentar milhares de acres desta forma, criando bairros como o West, North e South End, South Boston e East Boston.",
    ],
  },
  smoot: {
    title: "As Marcas Smoot",
    caption: "364,4 smoots, ± uma orelha",
    lines: [
      "De volta à Harvard Bridge, procure as marcas coloridas ao longo do passeio, medidas em 'smoots'.",
      "Em 1958, a fraternidade Lambda Chi Alpha desafiou os seus novatos a medir a ponte sem uma régua padrão. Usaram o membro mais baixo, Oliver 'Ollie' Smoot, com apenas cinco pés e sete polegadas, deitando-o de uma ponta à outra.",
      "A ponte deu 364,4 smoots, mais ou menos uma orelha. A unidade pegou, está até no Google Earth, e Smoot viria mais tarde a presidir à organização internacional de normas.",
      "Todos os anos a fraternidade repinta as marcas, com uma etiqueta a cada dez smoots.",
    ],
  },
  mit: {
    title: "MIT",
    caption: "Massachusetts Institute of Technology",
    lines: [
      "Do lado de Cambridge fica o MIT. Fundado em 1861 como Boston Tech, em Back Bay, mudou-se para Cambridge em 1916 por precisar de mais espaço.",
      "A sua mascote é o Tim the Beaver, escolhida em 1914 pela perícia de engenharia do castor e pelos seus hábitos laboriosos, e porque 'Tim' é 'MIT' escrito ao contrário, algo de astuto.",
      "O MIT é famoso pelas elaboradas partidas dos estudantes, a que chamam 'hacks', muitas vezes encenadas na Great Dome e no Green Building.",
      "Em 2011, o MIT criou um conjunto de cadeiras de educação física, tiro com arco, esgrima, tiro com pistola e vela, que, em conjunto, dão aos estudantes um Pirate Certificate.",
      "Tem menos de 12.000 estudantes e propinas à volta de 64.000 dólares, e, tal como Harvard, é gratuito para famílias que ganhem menos de 200.000 dólares por ano.",
    ],
  },
  mithacks: {
    title: "Hacks do MIT",
    caption: "Partidas na Dome",
    lines: [
      "Os famosos hacks do MIT transformaram os seus marcos em obras de travessura.",
      "Os estudantes já estacionaram um carro da polícia do campus no topo da Great Dome, transformaram-na num R2-D2, penduraram a carruagem do metro da Red Line ao seu lado e jogaram Pac-Man sobre ela.",
      "Chegaram até a transformar todo o Green Building num gigantesco jogo de Tetris jogável.",
    ],
  },
  mitalumni: {
    title: "Antigos Alunos do MIT",
    caption: "Inovadores e fundadores",
    lines: [
      "Muitas empresas famosas têm origem no MIT ou nos seus graduados, incluindo a Intel, a Bose, a iRobot, a Boston Dynamics e a Raytheon.",
      "Entre os antigos alunos de destaque estão o astronauta Buzz Aldrin, o arquiteto I.M. Pei, Tom Scholz da banda Boston, e Robert Robinson Taylor, o primeiro arquiteto negro dos Estados Unidos.",
    ],
  },
  mitgreen: {
    title: "MIT Green Building",
    caption: "I.M. Pei sobre pilares",
    lines: [
      "Este é o Green Building do MIT, sede dos seus departamentos de Earth, Atmospheric, and Planetary Sciences.",
      "Projetado por I.M. Pei em 1964, ele contornou um limite de andares de Cambridge ao elevar o primeiro andar 30 pés do chão sobre pilares, já que o átrio não contava.",
      "Esses pilares criaram um dos piores túneis de vento do campus, as portas não paravam de se fechar com a força do vento, até que portas giratórias resolveram o problema.",
      "Com 277 pés, foi o edifício mais alto de Cambridge até 2020.",
    ],
  },
  finger: {
    title: "Finger Islands",
    caption: "Make Way for Ducklings",
    lines: [
      "Estas pequenas ilhas em frente ao Community Boating são as Finger Islands, tornadas famosas pelo livro infantil oficial de Massachusetts: Make Way for Ducklings.",
      "Na história de 1941, o Sr. e a Sra. Mallard e os seus oito patinhos, Jack, Kack, Lack, Mack, Nack, Ouack, Pack e Quack, ponderaram primeiro instalar-se nestas mesmas ilhas.",
      "Os patinhos estão agora imortalizados em estátuas de bronze no Public Garden, muitas vezes vestidos com camisolas das equipas quando Boston chega aos playoffs.",
    ],
  },
  statehouse: {
    title: "State House",
    caption: "A cúpula dourada",
    lines: [
      "Lá no alto de Beacon Hill está a Massachusetts State House. Parte do aterro que fez crescer Boston veio de colinas como esta, que foram rebaixadas.",
      "Construída em 1798, foi projetada por Charles Bulfinch, o primeiro arquiteto nascido nos Estados Unidos.",
      "A sua cúpula começou com telhas de madeira que deixavam passar água, foi revestida a cobre por Paul Revere and Sons, e dourada pela primeira vez em 1874. É agora folha de ouro de 23 quilates, embora tenha sido pintada de cinzento durante a Segunda Guerra Mundial para não ser um alvo fácil.",
    ],
  },
  liberty: {
    title: "Liberty Hotel",
    caption: "Antiga Charles Street Jail",
    lines: [
      "Este belo edifício foi outrora a Charles Street Jail, construída em 1851 com alas radiais para dar luz e ar aos reclusos.",
      "Entre os seus reclusos notórios contaram-se Whitey Bulger, o Boston Strangler Albert DeSalvo, Sacco e Vanzetti, Malcolm X, e o corrupto presidente da câmara de Boston James Michael Curley, que chegou a governar a cidade a partir de uma cela.",
      "Em 1973, um tribunal considerou inconstitucionais as suas condições de sobrelotação, e fechou finalmente em 1990.",
      "Em 2007 reabriu como o luxuoso Liberty Hotel, com um bar chamado Alibi e restaurantes chamados Clink e Scampo.",
    ],
  },
  zakim: {
    title: "Zakim Bridge",
    caption: "Bunker Hill Memorial Bridge",
    lines: [
      "À frente está a Leonard P. Zakim Bunker Hill Memorial Bridge, inaugurada em 2003, à data de construção a mais larga ponte atirantada do mundo.",
      "As suas torres evocam o vizinho Bunker Hill Monument, e há quem diga que os seus cabos lembram o cordame do USS Constitution.",
      "É uma das poucas partes acima do solo do Big Dig, construída por cerca de 2 mil milhões de dólares, com clarabóias para deixar a luz do sol chegar ao rio e proteger os peixes migratórios.",
      "Antes de abrir, a Barnum and Bailey fez desfilar 14 elefantes por ela para 'provar' que era segura; uma velha superstição diz que os elefantes não atravessam uma estrutura insegura.",
    ],
  },
  museum: {
    title: "Museum of Science",
    caption: "Sobre a antiga Charles River Dam",
    lines: [
      "À medida que nos aproximamos da barragem, o edifício comprido à frente é o Museum of Science, com mais de 700 exposições interativas.",
      "Começou como um museu de história natural na década de 1830 e mudou-se para aqui em 1948, assentando mesmo sobre a Charles River Dam original de 1910.",
      "Está atualmente em obras, transformando uma antiga parede de tijolo de um teatro num espaço de eventos em vidro, com conclusão prevista para 2026.",
      "Cinco placas que aqui estiveram representavam os seus cinco temas: Espaço, Energia, Indústria, Humanidade e Natureza.",
    ],
  },
  closing: {
    title: "Obrigado",
    caption: "De volta a CambridgeSide",
    lines: [
      "À medida que regressamos ao canal, obrigado a todos por terem estado connosco hoje.",
      "A Charles River Boat Company navega nestas águas há mais de 30 anos. Como pequeno negócio familiar, apoiamos escolas e organizações sem fins lucrativos locais, tendo doado mais de 1,5 milhões de dólares em bilhetes às nossas comunidades, e trabalhamos para proteger o Charles e outras vias navegáveis locais.",
      "Se estiverem com vontade de mais um passeio, oferecemos cruzeiros de cocktails e de pôr do sol nas noites de fim de semana, além de passeios de arquitetura até ao Boston Harbor com a Boston Society for Architecture.",
      "Se gostaram do dia de hoje, deixem-nos uma avaliação, faz toda a diferença.",
      "Por favor terminem ou deixem as bebidas no bar, afastem-se do portão enquanto atracamos, juntem os vossos pertences, e permaneçam sentados até um membro da tripulação dizer que é seguro desembarcar. Obrigado, e desfrutem do resto do vosso dia em Boston.",
    ],
  },
};
