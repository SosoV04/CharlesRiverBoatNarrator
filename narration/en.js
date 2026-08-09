// narration/en.js
// -----------------------------------------------------------------------------
// English narration text.
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

export const LANG = "en";

export const EN = {
  welcome: {
    title: "Welcome, Terms & History",
    caption: "Departing CambridgeSide",
    lines: [
      "Welcome aboard, and thank you for joining us today! Settle in and get comfy, for the next 70 minutes we'll glide gently from CambridgeSide up to Harvard and back, with your captain at the wheel and plenty of stories to share along the way.",
      "First, a quick safety note, since we're a Coast Guard inspected boat. If we ever need them, life jackets are tucked under the blue cushions at the front and back of the boat, though we certainly don't expect to use them.",
      "Fire extinguishers and safety gear are placed around the boat, so just leave those to the crew unless we ask you for a hand.",
      "Feel free to wander and find your favorite spot. We only ask that you skip the running and climbing on the seats, and keep hands, heads, and belongings inside the boat.",
      "A little chilly, or too breezy? Just give me a wave and I'll open or close a window for you. They're heavy and take a special tool, so leave the heavy lifting to us.",
      "We're a non-smoking, no-vaping boat, but we do have a bar onboard, so come say hello any time for a cold beer, a glass of wine, a cocktail, a soft drink, or a little snack.",
      "Whether you're here for the stories or simply the view, please make yourself at home, and a gentle heads-up to keep chatter soft during the narration so everyone can hear. Now, let's enjoy the river together!",
      "Before we get going, here are a few boating terms you'll hear during the tour.",
      "The bow is the front of the boat, and the stern is the back.",
      "Starboard is the right side of the boat, and port is the left.",
      "And the wheelhouse is where the captain drives the boat.",
      "We're now leaving the Lechmere Canal and heading out onto the Charles River.",
      "The Charles is the natural boundary between Boston and Cambridge, so for the first half of the cruise, Boston is on your left and Cambridge is on your right.",
      "While charting the region in 1614, John Smith first named it the Massachusett River for the Native American tribe here; it was later renamed for and by King Charles the First.",
      "It runs 80 miles through 23 towns and cities, beginning at Echo Lake in Hopkinton and ending in Boston Harbor.",
      "Hopkinton is also the start of the Boston Marathon, where runners reach the city in 26.2 miles.",
      "In 1910, the first dam and lock system was built to control the river's water level, and it's what the Museum of Science sits on today.",
      "That dam created the calm basin and allowed the Esplanade to open parkland to the public; a newer dam replaced it a half-mile downriver in 1978.",
    ],
  },
  mgb: {
    title: "Mass General Brigham",
    caption: "The Ellison Building",
    lines: [
      "On the Boston side is Mass General Brigham, consistently ranked by U.S. News & World Report among the best hospitals in the country.",
      "Mass General was founded in 1811 and Brigham and Women's in 1832; the two merged in 2019.",
      "In 1846, they hosted the first public demonstration of surgical ether anesthesia, in the Ether Dome, which you can still visit today.",
      "In 1923 surgeons here performed the first successful heart valve surgery, and in 1954 the first successful organ transplant, a kidney between twins.",
      "In 1962, a team led by Ronald Malt performed the first successful reattachment of a severed arm, on a twelve-year-old boy.",
      "Over the years, singers like Adele, Cher, Lionel Richie, Roger Daltrey, and Steven Tyler have all had surgery here.",
      "The helipad on the black building lets critically injured patients arrive by air.",
    ],
  },
  brutalism: {
    title: "Brutalism",
    caption: "Mass Eye & Ear Infirmary",
    lines: [
      "This concrete tower is the Mass Eye and Ear Infirmary, an example of Brutalism, a style popular in Boston from the 1950s to the '70s.",
      "The name comes from the French 'béton brut,' meaning raw concrete.",
      "It was meant to look strong and powerful, though some find it cold, or even ugly.",
      "You'll see more of it from the river: the MIT Green Building, Warren Towers, the BU Law tower, Peabody Terrace, and Mather House.",
    ],
  },
  longfellow: {
    title: "Longfellow Bridge",
    caption: "The Salt & Pepper Shaker Bridge",
    lines: [
      "This is the Henry Wadsworth Longfellow Bridge, built between 1900 and 1907, the second-longest bridge on the Charles, at about 1,768 feet.",
      "Locals call it the Salt and Pepper Shaker Bridge, because the stone towers resemble salt and pepper shakers. The MBTA Red Line runs across it.",
      "A five-year restoration ran from 2013 to 2018. Estimated at three years, it went over time and budget, proving the local saying that Boston has only two seasons: winter and construction.",
      "The Viking ships carved on the center piers come from a popular 19th-century theory that Vikings explored New England in the Middle Ages.",
      "There was little evidence, but Harvard professor Eben Norton Horsford even claimed to find the cornerstones of Leif Erikson's house in Cambridge, conveniently around the corner from his own.",
      "Originally the Cambridge Bridge, it was renamed for Longfellow in 1927, after a poem he wrote about the older bridge that stood here; you can find that poem inscribed around it today.",
    ],
  },
  community: {
    title: "Community Boating",
    caption: "Sailing for all",
    lines: [
      "On the Boston side is Community Boating, which makes it easy and affordable for locals to learn to sail this summer.",
      "Founded in 1946, it's the oldest continuously operating public sailing program in the United States.",
      "This non-profit's mission is to be Boston's public sailing playground and to offer sailing for all.",
      "Junior sailing lessons start on a sliding scale beginning at just one dollar, and a Universal Access Program gives people with disabilities safe access to sailing.",
    ],
  },
  esplanade: {
    title: "The Esplanade",
    caption: "Hatch Memorial Shell",
    lines: [
      "On the Boston side stretches the Esplanade, a three-mile ribbon of parkland built entirely on made land between the Museum of Science and the BU Bridge.",
      "Its centerpiece is the Hatch Memorial Shell. Temporary performance shells stood here from 1929, but were taken down after each use.",
      "This permanent granite shell was built in 1941, thanks to a gift from Maria Hatch honoring her late brother Edward, a Union Army general; the donation was specified for 'musical and artistic purposes.'",
      "It's the stage for concerts all summer, especially the Fourth of July Boston Pops celebration, held here every year since 1929 and drawing up to half a million people.",
    ],
  },
  berkeley: {
    title: "The Old, Old Hancock",
    caption: "200 Berkeley Street",
    lines: [
      "This is 200 Berkeley Street, also called the Old, Old John Hancock Tower. Completed in 1947, it was home to John Hancock Life Insurance and stands about 495 feet tall.",
      "At the time, insurance companies and banks often added something useful for the community, which is why this one has a weather beacon.",
      "The beacon changes the color of the spire, and locals know the rhyme: steady blue, clear view; flashing blue, clouds due; steady red, rain ahead; flashing red, snow instead.",
      "In summer, flashing red and white means a Red Sox game is rained out. And in 2004, when the Sox finally won the World Series, it flashed blue and red, the Curse of the Bambino was dead.",
      "John Hancock brought its headquarters back here in 2019, and in 2023 moved its famous logo, long displayed at Fenway Park, to the base of the stepped roof.",
    ],
  },
  hancock: {
    title: "Hancock Tower",
    caption: "200 Clarendon Street",
    lines: [
      "Towering above is 200 Clarendon, the 'new' John Hancock Tower, built between 1968 and 1976. At 790 feet and 60 stories, it's the tallest building in New England.",
      "Its opening was delayed five years by serious engineering problems.",
      "High winds made the upper floors sway enough to cause motion sickness, so two 300-ton lead counterweights were installed on the 58th floor to steady it.",
      "The most dangerous flaw was the windows: each weighed 500 pounds and began detaching and crashing to the sidewalk far below. Whenever winds topped 45 miles an hour, police closed the surrounding streets.",
      "In 1973 all 10,344 windows were replaced. During repairs, plywood filled the empty frames, earning it the nickname the Plywood Palace.",
    ],
  },
  huntington: {
    title: "111 Huntington Ave",
    caption: "The 'R2-D2' Building",
    lines: [
      "Behind the skyline is 111 Huntington Avenue, the first skyscraper completed in Boston in the new millennium. Locals call it the R2-D2 Building.",
      "Longtime Mayor Tom Menino disliked the original flat-topped design, saying Boston's skyline was boring and that 'flat roofs don't make it.'",
      "The architects returned with several options, and Menino chose the open dome on top. It's purely decorative, and its only job is to make the skyline more interesting.",
    ],
  },
  pru: {
    title: "Prudential Tower",
    caption: "'The Pru'",
    lines: [
      "That tall tower is the Prudential, or 'the Pru,' completed in 1964. At 750 feet and 52 stories, it's Boston's second-tallest building, with plenty of upscale shops inside.",
      "It surpassed the Custom House Tower, which had held the title for 49 years, that one was federally owned and exempt from Boston's old 125-foot height limit.",
      "The top floors held the Top of the Hub restaurant and Skywalk Observatory for over 50 years, until the building owner ended their leases in 2020.",
      "Today a three-level observation deck called View Boston occupies the top, with interactive exhibits, a cocktail lounge called Stratus, and an outdoor Cloud Terrace for panoramic views.",
    ],
  },
  onedalton: {
    title: "One Dalton",
    caption: "Four Seasons & residences",
    lines: [
      "The dark, curved tower is One Dalton, completed in 2019. At 742 feet and 61 stories, it's the tallest all-residential building in New England.",
      "Its first 23 floors are the Four Seasons Hotel, and floors 26 to 59 are private residences.",
      "The two-floor penthouse sold for 34 million dollars, just short of the Millennium Tower's record of 35 million.",
      "It was designed by Harry Cobb of Pei Cobb Freed & Partners.",
    ],
  },
  harvardbridge: {
    title: "John Harvard Bridge",
    caption: "The Mass Ave Bridge",
    lines: [
      "Ahead is the John Harvard Bridge, the longest crossing on the Charles at just over 2,100 feet. It's also called the Mass Ave Bridge, after the road that runs across it.",
      "It opened in 1891 but was rebuilt three times for engineering flaws. There were proposals to rename it for MIT next door, but many at MIT felt it was poorly designed and didn't want their name on it.",
      "In 1908, 20,000 spectators watched escape artist Harry Houdini leap from this bridge, hands shackled behind his back. He resurfaced free in about 40 seconds, though some say he really took 15 and just wanted to thrill the crowd.",
    ],
  },
  citgo: {
    title: "CITGO Sign",
    caption: "The North Star of Boston",
    lines: [
      "Ahead glows the CITGO sign, sometimes called the North Star of Boston, except instead of pointing north, it points the way to Fenway Park.",
      "It first went up in 1940 reading 'Cities Service,' and became the iconic 60-by-60-foot CITGO sign in 1965, lit in neon. Ironically, it sits atop a bookstore and has never been near a gas station.",
      "During the energy crisis of the 1970s it often sat dark, and there was debate over removing it, but it earned landmark protection and now shines with LED lights.",
      "Legend says it flashes 'C-IT-GO' when a Red Sox player hits a home run. The tech firm Whoop now sits beneath it with its logo on the roof, giving fans something new to cheer.",
    ],
  },
  collegetown: {
    title: "A College Town",
    caption: "A center for education",
    lines: [
      "Boston is often called a center for education, and for good reason.",
      "Depending on where you draw the city's borders, it's home to between 29 and 35 colleges, universities, and community colleges.",
      "From September to May, students make up roughly 21 percent of Boston's population, about 163,000 of them in the 2023, 24 school year.",
    ],
  },
  bu: {
    title: "Boston University",
    caption: "BU",
    lines: [
      "The CITGO sign marks the start of Boston University, whose campus stretches about a mile and a half along Commonwealth Avenue across 19 schools and colleges.",
      "BU was founded in 1839 as the Newbury Biblical Institute; it moved to New Hampshire, then to Boston in 1867, and was chartered as Boston University in 1869.",
      "Alexander Graham Bell taught speech here in the 1870s, and his work with deaf students gave him the time to invent, and patent, the telephone.",
      "Today BU has more than 37,500 students, with tuition around 70,000 dollars a year.",
    ],
  },
  bualumni: {
    title: "BU Alumni",
    caption: "Famous graduates",
    lines: [
      "BU has graduated some famous names over the years.",
      "Among them, actress Uzo Aduba of Orange Is the New Black, and Jason Alexander, Seinfeld's George Costanza, who actually dropped out.",
      "Dr. Martin Luther King Jr. earned his PhD here in 1955, and Alexandria Ocasio-Cortez graduated in 2011.",
      "Others include radio host Howard Stern, and Helen Magill, the first woman in the United States to earn a PhD.",
    ],
  },
  bucds: {
    title: "BU Data Sciences",
    caption: "The 'Jenga Building' & Warren Towers",
    lines: [
      "That stacked, tilting tower is BU's Center for Computing and Data Sciences, finished in 2022. Locals call it the Jenga Building, though its architects say they were inspired by a stack of books.",
      "At 305 feet, it's BU's first building to run entirely free of fossil fuels, heated and cooled by 31 geothermal wells drilled 1,500 feet into the ground.",
      "Nearby are Warren Towers, a mostly-freshman dorm from 1967 that houses nearly 1,800 students and is a single connected building up to the fourth floor.",
    ],
  },
  marsh: {
    title: "Marsh Chapel & BU Law",
    caption: "Boston University",
    lines: [
      "On the Boston side is Marsh Chapel, built in 1949 and named for former BU president Daniel Marsh; it was the university's first major building along the river.",
      "Beside it rises the BU Law Tower from 1964, another piece of Brutalism, once voted Boston's second-ugliest building.",
      "And the ugliest? That title went to Boston City Hall.",
    ],
  },
  headofcharles: {
    title: "Head of the Charles",
    caption: "The October regatta",
    lines: [
      "Each October the river hosts the Head of the Charles Regatta, first held in 1965 to break up the monotony of the rowing season. Today it draws more than 11,000 athletes from around the world.",
      "Held over three days starting the third Friday in October, it's a three-mile race from the Esplanade up to Herter Park.",
      "As a 'head' race, it's a time trial: crews of one, two, four, or eight rowers start 15 seconds apart and race the clock.",
    ],
  },
  bubridge: {
    title: "BU Bridge",
    caption: "Cottage Farm Bridge",
    lines: [
      "Just ahead is the BU Bridge, built in 1928 as the Cottage Farm Bridge and renamed for Boston University in 1949.",
      "You may have heard it's the only place where a boat can sail under a train, under a car, under a plane. Not quite, Portland and Lisbon claim the same, but here those events happen on separate spans.",
      "Below it is the Grand Junction Railroad Bridge, which crews often tag before the Head of the Charles to cheer on their teammates.",
      "It once carried freight but is mostly unused today; a 2012 proposal to fold it into a commuter 'Indigo Line' never materialized.",
    ],
  },
  dirtywater: {
    title: "That Dirty Water",
    caption: "Cleaning up the Charles",
    lines: [
      "The Charles wasn't always famous for being clean. The band The Standells wrote 'Dirty Water' about it, 'I love that dirty water, Boston you're my home.'",
      "Through the 1960s, pollution from industry, slaughterhouses, and mills turned parts of the river pink and orange, and falling in could mean a trip to the ER for a tetanus shot.",
      "Cleanup began in 1995, when the EPA graded the river a D-minus; today its quality hovers around a B.",
      "It may never reach an A: decaying leaves release tannins that stain the water like tea, limiting visibility. Swimming isn't allowed yet, but a swimming area may one day open near the Museum of Science.",
      "In 2016, local breweries were even challenged to make a craft beer using filtered Charles River water, in an event called Brew the Charles.",
    ],
  },
  magazine: {
    title: "Magazine Beach",
    caption: "The old powder magazine",
    lines: [
      "On the Cambridge side is Magazine Beach, once the largest beach on the Charles, with real sand.",
      "It's named for a gunpowder magazine built on a small island here in 1818, used until just after the Civil War, when neighbors grew nervous about living beside a stockpile of gunpowder.",
      "The marshes were filled and the magazine became a public bathhouse; the beach closed in 1949 due to pollution, and a free pool was built in 1952 as a substitute for the river.",
      "It was restored in 2020 and is now in a second phase of renovations, while Mass Audubon uses the old magazine as a nature education center.",
    ],
  },
  riverside: {
    title: "Riverside Boat Club",
    caption: "Rowing for the working class",
    lines: [
      "This is the Riverside Boat Club, established in 1869 by Irish immigrants and moved to this spot in 1912.",
      "Because boat club memberships were often expensive, working-class folks from the Riverside Press founded it to make rowing on the Charles accessible to everyone.",
      "It's run entirely by volunteers, and those who help with the upkeep can earn free membership.",
    ],
  },
  polaroid: {
    title: "Old Polaroid HQ",
    caption: "Art Moderne on the river",
    lines: [
      "That clean white building is the old Polaroid headquarters, likely the first Art Moderne building in Cambridge. It was Polaroid's home from the early 1940s to the late 1990s.",
      "In 2000, the company sold it and the surrounding land for 10 million dollars, and it's been leased to various companies since.",
      "People joke it was designed to look like an old Polaroid camera, but that's not true, since it was originally built for the B.B. Chemical Company. Today Harvard uses it for offices.",
    ],
  },
  resilience: {
    title: "Resilience Plant",
    caption: "From Genzyme to Resilience",
    lines: [
      "This brick complex was built in 1993 for Genzyme, a Cambridge pharmaceutical company, to produce its main drug Cerezyme, which treats Gaucher's disease.",
      "Genzyme also pioneered synthetic skin grafts for burn victims, and in 2011 the French firm Sanofi acquired it for 20 billion dollars.",
      "In 2021, Sanofi sold this facility to Resilience, a contract manufacturing company founded in 2020 after raising 800 million dollars; it laid off most staff in 2023, and the building's future is uncertain.",
      "Resilience's mission is to improve how new medical therapies are made and to make them more accessible around the world.",
    ],
  },
  harvard: {
    title: "Harvard University",
    caption: "Founded 1636",
    lines: [
      "We've reached Harvard. Founded in 1636, Harvard College is the oldest institution of higher education in the United States, originally created to train ministers.",
      "It began as a men's-only school. Women attended through Radcliffe College, founded in 1879, and the two fully merged in 1999.",
      "Harvard holds the largest endowment of any school in the world, over 56 billion dollars, greater than the GDP of more than half the world's countries.",
      "It has about 24,500 students and tuition around 59,000 dollars, though as of 2025, it's free for families earning under 200,000 dollars a year.",
    ],
  },
  harvardalumni: {
    title: "Harvard Alumni",
    caption: "Presidents and stars",
    lines: [
      "Harvard has produced 188 billionaire alumni, not even counting dropouts Bill Gates and Mark Zuckerberg.",
      "It's graduated eight U.S. presidents, the most of any university, including John Adams, both Roosevelts, John F. Kennedy, and Barack Obama.",
      "Other alumni include actor Matt Damon, who dropped out, cellist Yo-Yo Ma, actress Natalie Portman, author Helen Keller, and astrophysicist Neil deGrasse Tyson.",
    ],
  },
  harvardhouses: {
    title: "Harvard Houses",
    caption: "The colored domes",
    lines: [
      "Harvard freshmen live around Harvard Yard, which you can't see from the river. After their first year, over 98 percent move into one of 12 residential Houses.",
      "Each House holds 350 to 500 students with its own dining hall and common rooms. From the water you can spot their colored domes, green Eliot House, blue Lowell House, and red Dunster House.",
      "Also visible from here are Winthrop, Leverett, and Mather Houses.",
    ],
  },
  weeks: {
    title: "Weeks Footbridge",
    caption: "John W. Weeks Footbridge",
    lines: [
      "This graceful arch is the John W. Weeks Footbridge, built in 1927 and owned by Harvard.",
      "It's one of just two working footbridges on the Charles, built as Harvard expanded into Boston so students could cross between both sides of campus. In fact, Harvard now owns more land in Boston than in Cambridge.",
      "It's named for John Wingate Weeks, a Massachusetts congressman, senator, and Secretary of War in the 1920s.",
    ],
  },
  boathouses: {
    title: "Harvard Boathouses",
    caption: "Newell & Weld",
    lines: [
      "On the water are Harvard's two boathouses. Newell Boathouse, the red one just past Anderson Bridge, was built in 1900 for the men's crew team.",
      "It's named for Marshall Newell, a Harvard rower and football star who died at 26 in a railroad accident.",
      "Weld Boathouse, built in 1906 and donated by the Weld family, serves the women's crew team as well as recreational and intramural rowing.",
    ],
  },
  baker: {
    title: "Baker Library",
    caption: "Harvard Business School",
    lines: [
      "Across the river is Baker Library, completed in 1927 at Harvard Business School.",
      "It's named for George F. Baker, a business tycoon who donated 5 million dollars to build the entire Business School campus, and it's the largest business library in the world.",
    ],
  },
  break: {
    title: "Halfway Break",
    caption: "Bar service",
    lines: [
      "We've reached the halfway point of the tour, so we'll take a short break.",
      "If you'd like to visit the bar, now's a great time, we have water, soda, juice, beer, wine, and snacks.",
      "We'll put on some music, so sit back, enjoy the scenery, and let me or the captain know if you have any questions.",
    ],
  },
  nickerson: {
    title: "Nickerson Field",
    caption: "Once Braves Field",
    lines: [
      "On the Boston side is Nickerson Field, which BU bought in 1953 for its soccer games and commencement ceremonies.",
      "But before that, it was Braves Field, a baseball stadium built in 1915 and the original home of the Boston Braves, who later moved to Milwaukee, then Atlanta.",
      "On May 1st, 1920, it hosted the longest game in Major League history by innings: 26 innings in under four hours, called for darkness with the score tied 1 to 1 against the Brooklyn Robins.",
    ],
  },
  ford: {
    title: "Old Ford Plant",
    caption: "Model T on the river",
    lines: [
      "This long building was a Ford assembly plant that built cars, including the Model T, from 1914 to 1926.",
      "It was part of Henry Ford's first push to expand beyond Detroit, built by the river because he ordered new factories placed near waterways.",
      "Trains ran into its basement, and a crane lifted parts to the upper floors where cars were assembled, about 40 a day, with finishing touches on the fifth floor.",
      "The plant became obsolete and closed in 1926. MIT now manages it as offices and labs, one of the last remnants of old industry on the river.",
    ],
  },
  bubridgeview: {
    title: "Best View in Boston",
    caption: "Back under the BU Bridge",
    lines: [
      "As we pass back under the BU Bridge, the view from here has been voted the best in Boston by several local papers.",
      "For the next few minutes, our bow points straight at the downtown skyline, a perfect chance for photos.",
    ],
  },
  hyatt: {
    title: "Hyatt & DeWolfe",
    caption: "The pyramid hotel",
    lines: [
      "On the Cambridge side, the stepped pyramid is the Hyatt Regency, built in 1977. Its top floor once held a rotating restaurant called the Spinnaker, which closed after repeated malfunctions.",
      "Beside it is BU's DeWolfe Boathouse, one of the river's newer crew boathouses, built in 1999 for over 5 million dollars.",
    ],
  },
  smoot: {
    title: "The Smoot Marks",
    caption: "364.4 smoots, ± one ear",
    lines: [
      "Back at the Harvard Bridge, look for the colorful marks along its sidewalk, measured in 'smoots.'",
      "In 1958, the fraternity Lambda Chi Alpha challenged its pledges to measure the bridge with no standard ruler. They used their shortest member, Oliver 'Ollie' Smoot, just five foot seven, laying him end over end.",
      "The bridge came out to 364.4 smoots, plus or minus one ear. The unit stuck, it's even on Google Earth, and Smoot later became president of the international standards organization.",
      "Each year the fraternity repaints the marks, with a label every ten smoots.",
    ],
  },
  mit: {
    title: "MIT",
    caption: "Massachusetts Institute of Technology",
    lines: [
      "On the Cambridge side is MIT. Founded in 1861 as Boston Tech in Back Bay, it moved to Cambridge in 1916 for more room.",
      "Its mascot is Tim the Beaver, chosen in 1914 for the beaver's engineering skill and industrious habits, and because 'Tim' is something clever spelled backward.",
      "MIT is famous for elaborate student pranks, which they call 'hacks,' often staged on the Great Dome and the Green Building.",
      "In 2011, MIT created a set of P.E. courses, archery, fencing, pistol, and sailing, that together earn students a Pirate Certificate.",
      "It has under 12,000 students and tuition around 64,000 dollars, and like Harvard, it's free for families earning under 200,000 dollars a year.",
    ],
  },
  mithacks: {
    title: "MIT Hacks",
    caption: "Pranks on the Dome",
    lines: [
      "MIT's famous hacks have turned its landmarks into works of mischief.",
      "Students have parked a campus police car on top of the Great Dome, turned it into R2-D2, hung the Red Line subway car off its side, and played Pac-Man across it.",
      "They've even turned the entire Green Building into a giant playable game of Tetris.",
    ],
  },
  mitalumni: {
    title: "MIT Alumni",
    caption: "Innovators and founders",
    lines: [
      "Many famous companies trace back to MIT or its graduates, including Intel, Bose, iRobot, Boston Dynamics, and Raytheon.",
      "Notable alumni include astronaut Buzz Aldrin, architect I.M. Pei, Tom Scholz of the band Boston, and Robert Robinson Taylor, the first Black architect in the United States.",
    ],
  },
  mitgreen: {
    title: "MIT Green Building",
    caption: "I.M. Pei on stilts",
    lines: [
      "This is MIT's Green Building, home to its Earth, Atmospheric, and Planetary Sciences departments.",
      "Designed by I.M. Pei in 1964, he sidestepped a Cambridge floor limit by raising the first floor 30 feet off the ground on stilts, since the lobby didn't count.",
      "Those stilts created one of the worst wind tunnels on campus, the doors kept blowing shut, until revolving doors fixed the problem.",
      "At 277 feet, it was Cambridge's tallest building until 2020.",
    ],
  },
  finger: {
    title: "Finger Islands",
    caption: "Make Way for Ducklings",
    lines: [
      "These small islands in front of Community Boating are the Finger Islands, made famous by the official children's book of Massachusetts: Make Way for Ducklings.",
      "In the 1941 story, Mr. and Mrs. Mallard and their eight ducklings, Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack, first considered settling on these very islands.",
      "The ducklings are now immortalized as bronze statues in the Public Garden, often dressed in team jerseys when Boston makes the playoffs.",
    ],
  },
  statehouse: {
    title: "State House",
    caption: "The golden dome",
    lines: [
      "Up on Beacon Hill is the Massachusetts State House. Some of the landfill that grew Boston came from hills like this one, which were cut down to size.",
      "Built in 1798, it was designed by Charles Bulfinch, the first American-born architect.",
      "Its dome started as leaky wood shingles, was covered in copper by Paul Revere and Sons, and first gilded in 1874. It's now 23-karat gold leaf, though it was painted gray during World War II so it wouldn't be an easy target.",
    ],
  },
  liberty: {
    title: "Liberty Hotel",
    caption: "Old Charles Street Jail",
    lines: [
      "This handsome building was once the Charles Street Jail, built in 1851 with radiating wings to give inmates light and air.",
      "Its notorious inmates included Whitey Bulger, the Boston Strangler Albert DeSalvo, Sacco and Vanzetti, Malcolm X, and corrupt Boston mayor James Michael Curley, who once ran the city from a cell.",
      "By 1973 a court ruled its overcrowded conditions unconstitutional, and it finally closed in 1990.",
      "In 2007 it reopened as the luxury Liberty Hotel, with a bar called Alibi and restaurants named Clink and Scampo.",
    ],
  },
  zakim: {
    title: "Zakim Bridge",
    caption: "Bunker Hill Memorial Bridge",
    lines: [
      "Ahead is the Leonard P. Zakim Bunker Hill Memorial Bridge, opened in 2003, when built, the widest cable-stayed bridge in the world.",
      "Its towers echo the nearby Bunker Hill Monument, and some say its cables recall the rigging of the USS Constitution.",
      "It's one of the few above-ground pieces of the Big Dig, built for about 2 billion dollars, with skylights to let sunlight reach the river and protect migrating fish.",
      "Before it opened, Barnum and Bailey marched 14 elephants across it to 'prove' it was safe, an old superstition says elephants won't cross an unsafe structure.",
    ],
  },
  museum: {
    title: "Museum of Science",
    caption: "On the old Charles River Dam",
    lines: [
      "As we approach the dam, the long building ahead is the Museum of Science, with more than 700 interactive exhibits.",
      "It began as a natural history museum in the 1830s and moved here in 1948, sitting right on top of the original 1910 Charles River Dam.",
      "It's currently being renovated, turning an old brick theater wall into a glass event space, expected to finish in 2026.",
      "Five plaques once here represented its five themes: Space, Energy, Industry, Mankind, and Nature.",
    ],
  },
  closing: {
    title: "Thank You",
    caption: "Back to CambridgeSide",
    lines: [
      "As we head back into the canal, thank you all for joining us today.",
      "The Charles River Boat Company has cruised these waters for over 30 years. As a small family business, we support local schools and nonprofits, donating over 1.5 million dollars in tickets to our communities, and we work to protect the Charles and other local waterways.",
      "If you're up for another trip, we offer cocktail and sunset cruises on weekend evenings, plus architecture tours into Boston Harbor with the Boston Society for Architecture.",
      "If you enjoyed today, please leave us a review, it goes a long way.",
      "Please finish or leave any drinks at the bar, stay clear of the gate while we dock, gather your belongings, and remain seated until a crew member says it's safe to step off. Thank you, and enjoy the rest of your day in Boston.",
    ],
  },
};
