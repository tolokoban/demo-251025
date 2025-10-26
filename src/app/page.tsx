import State from "@/state"
import { useNebula } from "./_/nebula"
import styles from "./page.module.css"
import Planet from "./_/Planet"

export default function Page() {
    const handleGame = useNebula()
    return (
        <div className={styles.main}>
            <canvas ref={handleGame}></canvas>
            <div onScroll={handleScroll}>
                <h1>
                    Connais ton
                    <br />
                    <big>Système Solaire</big>
                </h1>
                {PLANETS.map(({ id, name, symb, desc, wiki, nasa }) => (
                    <article key={name}>
                        <div>
                            <h2>
                                <div>{name}</div>
                                <div>{symb}</div>
                            </h2>
                            {desc.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                            <div>
                                Source:{" "}
                                <a href={wiki} target="wikipedia">
                                    Wikipedia
                                </a>
                            </div>
                        </div>
                        <Planet name={id} nasa={nasa} />
                    </article>
                ))}
                <hr />
                <p>
                    Textures credits:{" "}
                    <a
                        href="https://www.solarsystemscope.com/textures/"
                        target="solarsystemscope"
                    >
                        SolarSystemScope
                    </a>
                </p>
            </div>
        </div>
    )
}

function handleScroll(evt: React.MouseEvent<HTMLDivElement>) {
    const elem = evt.target
    if (elem instanceof HTMLDivElement) {
        State.scroll.value =
            elem.scrollTop / (elem.scrollHeight - elem.clientHeight)
    }
}

const PLANETS: Array<{
    id: string
    name: string
    symb: string
    desc: string[]
    wiki: string
    nasa: string
}> = [
    {
        id: "sun",
        name: "Soleil",
        symb: "",
        desc: [
            `Le Soleil est l’étoile de type naine jaune du Système solaire, qui se situe dans le bras d'Orion, à environ 8 kpc (∼26 100 al) du centre galactique de la galaxie Voie lactée. Il orbite autour du centre galactique en une année galactique de 225 à 250 millions d'années. Autour de lui gravitent de nombreux objets, dont la Terre (à la vitesse de 30 km/s), sept autres planètes, au moins cinq planètes naines, de très nombreux astéroïdes et comètes (notamment dans la ceinture d'astéroïdes et la ceinture de Kuiper). Le Soleil représente à lui seul environ 99,854 % de la masse du système planétaire ainsi constitué, Jupiter représentant plus des deux tiers du reste. `,
            `Dans la classification astronomique, cette étoile de type naine jaune, de près de 1,4 million de kilomètres de diamètre pour une masse d'environ 2 × 1030 kg, est essentiellement composée d’hydrogène (74 % de la masse ou 92 % du volume) et d’hélium (25 % de la masse ou 8 % du volume) à l'état plasma.`,
            `L'énergie solaire transmise par le rayonnement solaire rend possible la vie sur Terre. Sa lumière permet la photosynthèse et l'énergie thermique qu'il apporte maintient une température en surface permettant la présence d'eau à l'état liquide.`,
            `Le rayonnement ultraviolet contribue à la désinfection naturelle des eaux de surface et à y détruire certaines molécules indésirables (quand l'eau n'est pas trop turbide). La polarisation de la lumière solaire (ou lunaire, de nuit), par des matériaux tels que l'eau ou les cuticules végétales, est utilisée par de nombreuses espèces pour s'orienter. `,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Soleil",
        nasa: "https://science.nasa.gov/sun/",
    },
    {
        id: "mercury",
        name: "Mercure",
        symb: "☿",
        desc: [
            `Mercure est la planète la plus proche du Soleil et la moins massive du Système solaire[N 1]. Son éloignement du Soleil est compris entre 0,31 et 0,47 unité astronomique (soit 46 et 70 millions de kilomètres), ce qui correspond à une excentricité orbitale de 0,2 — plus de douze fois supérieure à celle de la Terre, et de loin la plus élevée pour une planète du Système solaire. Elle est visible à l'œil nu depuis la Terre avec une taille apparente de 4,5 à 13 secondes d'arc, et une magnitude apparente de 5,7 à −2,3 ; son observation est toutefois rendue difficile par son élongation toujours inférieure à 28,3° qui la noie le plus souvent dans l'éclat du soleil. En pratique, cette proximité avec le soleil implique qu'elle ne peut être vue que près de l'horizon occidental après le coucher du soleil ou près de l'horizon oriental avant le lever du soleil, en général au crépuscule. Mercure a la particularité d'être en résonance spin-orbite 3:2, sa période de révolution (~88 jours) valant exactement 1,5 fois sa période de rotation (~59 jours), et donc la moitié d'un jour solaire (~176 jours). Ainsi, relativement aux étoiles fixes, elle tourne sur son axe exactement trois fois toutes les deux révolutions autour du Soleil.`,
            `Mercure est une planète tellurique, comme le sont également Vénus, la Terre et Mars. Elle est près de trois fois plus petite et presque vingt fois moins massive que la Terre mais presque aussi dense qu'elle. Sa densité remarquable — dépassée seulement par celle de la Terre, qui lui serait d'ailleurs inférieure sans l'effet de la compression gravitationnelle — est due à l'importance de son noyau métallique, qui représenterait 85 % de son rayon, contre environ 55 % pour la Terre.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/resource/enhanced-color-mercury-map/",
    },
    {
        id: "venus",
        name: "Venus",
        symb: "♀",
        desc: [
            `Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que par le diamètre.`,
            `Vénus orbite autour du Soleil tous les 224,7 jours terrestres. Avec une période de rotation de 243 jours terrestres, il lui faut plus de temps pour tourner autour de son axe que toute autre planète du Système solaire. Comme Uranus, elle possède une rotation rétrograde et tourne dans le sens opposé à celui des autres planètes : le Soleil s'y lève à l'ouest et se couche à l'est. Vénus possède l'orbite la plus circulaire des planètes du Système solaire avec une excentricité orbitale presque nulle et, du fait de sa lente rotation, est quasiment sphérique (aplatissement considéré comme nul). Elle ne possède pas de satellite naturel.`,
            `Vénus est l'une des quatre planètes telluriques du Système solaire. Elle est parfois appelée la « planète sœur » de la Terre en raison des similitudes relatives de leurs diamètre, masse, proximité au Soleil et composition. Par d'autres aspects, elle est radicalement différente de la Terre : son champ magnétique est bien plus faible et elle possède une atmosphère beaucoup plus dense, composée de dioxyde de carbone à plus de 96 %. La pression atmosphérique à la surface de la planète est ainsi 92 fois supérieure à celle de la Terre, soit environ la pression ressentie, sur Terre, à 900 mètres sous l'eau. Elle est la planète la plus chaude du Système solaire — même si Mercure est plus proche du Soleil — avec une température de surface moyenne de 462 °C (735 K).`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/3d-resources/venus/",
    },
    {
        id: "earth",
        name: "Terre",
        symb: "♁ or 🜨",
        desc: [
            `La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. Elle orbite autour du Soleil en 365,256 jours solaires — une année sidérale — et réalise une rotation sur elle-même relativement au Soleil en un jour sidéral (environ 23 h 56 min 4 s), soit un peu moins que son jour solaire de 24 heures du fait de ce déplacement autour du Soleil[a]. L'axe de rotation de la Terre possède une inclinaison d'environ 23°, ce qui cause l'apparition des saisons.`,
            `D'après la datation radiométrique, la Terre s'est formée il y a 4,54 milliards d'années. Elle possède un unique satellite naturel, la Lune, qui s'est formée peu après elle. L'interaction gravitationnelle avec son satellite crée les marées, stabilise son axe de rotation et réduit graduellement sa vitesse de rotation. La vie serait apparue dans les océans il y a au moins 3,5 milliards d'années, ce qui a affecté atmosphère et surface terrestres par la prolifération d'organismes d'abord anaérobies puis, à la suite de l'explosion cambrienne, aérobies. Une combinaison de facteurs tels que la distance de la Terre au Soleil (environ 150 millions de kilomètres — une unité astronomique), son atmosphère, sa couche d'ozone, son champ magnétique et son évolution géologique ont permis à la vie d'évoluer et de se développer. Durant l'histoire évolutive du vivant, la biodiversité a connu de longues périodes d'expansion occasionnellement ponctuées par des extinctions massives ; environ 99 % des espèces qui ont un jour vécu sur Terre sont maintenant éteintes. En 2025, plus de 8 milliards d'êtres humains vivent sur Terre et dépendent de sa biosphère et de ses ressources naturelles pour leur survie.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Terre",
        nasa: "https://visibleearth.nasa.gov/collection/1484/blue-marble",
    },
    {
        id: "mars",
        name: "Mars",
        symb: "♂",
        desc: [
            `Mars (prononcé en français : /maʁs/) est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 au (206,6 à 249,2 millions de kilomètres), elle a une période orbitale de 669,58 jours martiens (686,71 jours ou 1,88 année terrestre).`,
            `C’est une planète tellurique, comme le sont Mercure, Vénus et la Terre. Elle est environ dix fois moins massive que la Terre, mais dix fois plus massive que la Lune. Sa topographie présente des analogies aussi bien avec la Lune, à travers ses cratères et ses bassins d'impact, qu'avec la Terre, par ses formations d'origine tectonique et climatique telles que des volcans, des rifts, des vallées, des mesas, des champs de dunes et des calottes polaires. Le plus haut volcan du Système solaire, Olympus Mons (qui est un volcan bouclier), et le plus grand canyon, Valles Marineris, se trouvent sur Mars.`,
            `Mars a aujourd'hui perdu la presque totalité de son activité géologique interne, et seuls des événements mineurs surviendraient encore épisodiquement à sa surface, tels que des glissements de terrain, sans doute des geysers de dioxyde de carbone dans les régions polaires, peut-être des séismes, voire de rares éruptions volcaniques sous forme de petites coulées de lave.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/3d-resources/mars/",
    },
    {
        id: "jupiter",
        name: "Jupiter",
        symb: "♃",
        desc: [
            `Jupiter est la cinquième planète du Système solaire par ordre d'éloignement au Soleil, et la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse. Elle est même plus volumineuse que toutes les autres planètes réunies avec son rayon moyen de 69 911 km, qui vaut environ onze fois celui de la Terre, et sa masse de 1,898 × 1027 kg, qui est 318 fois plus grande. Orbitant en moyenne à environ 779 millions de kilomètres du Soleil (5,2 unités astronomiques), sa période de révolution vaut un peu moins de 12 ans. La masse jovienne est par ailleurs une unité utilisée pour exprimer la masse d'objets substellaires tels que les naines brunes.`,
            `Elle a une composition similaire au Soleil, constituée principalement d'hydrogène mais aussi d'hélium pour un quart de sa masse et un dixième de son volume. Elle possède probablement un noyau rocheux composé d'éléments plus lourds mais, comme les autres planètes géantes, Jupiter n'a pas de surface solide bien définie mais plutôt un vaste manteau d'hydrogène métallique ; de petites quantités de composés tels que l'ammoniac, le méthane et l'eau sont aussi détectables. Elle connaît toujours une contraction continue de son intérieur qui génère une chaleur supérieure à celle reçue du Soleil grâce au mécanisme de Kelvin-Helmholtz. Sa rapide période de rotation estimée à 9 h 55 min implique que la planète prend la forme d'un ellipsoïde de révolution avec un renflement léger autour de l'équateur et permet de générer un important champ magnétique donnant naissance à la magnétosphère de Jupiter, la plus puissante du Système solaire. Son atmosphère extérieure est visiblement séparée en plusieurs bandes de couleurs allant du crème au brun à différentes latitudes, avec des turbulences et des tempêtes dont les vents violents atteignent 600 km/h le long de leurs frontières interactives. La Grande Tache rouge, un anticyclone géant de taille comparable à la Terre observé depuis au moins le XVIIe siècle, en est un exemple.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/3d-resources/jupiter/",
    },
    {
        id: "saturn",
        name: "Saturne",
        symb: "♄",
        desc: [
            `Saturne est la sixième planète du Système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter. C'est une planète géante gazeuse comme Jupiter. Son rayon moyen de 58 232 km est environ neuf fois et demi celui de la Terre et sa masse de 568,46 × 1024 kg est 95 fois plus grande. Orbitant en moyenne à environ 1,4 milliard de kilomètres du Soleil (9,5 unités astronomiques), sa période de révolution vaut un peu moins de 30 années terrestres tandis que sa période de rotation est estimée à 10 h 33 min.`,
            `Elle est bien connue pour son système d'anneaux constitué principalement de particules de glace et de poussières. Saturne est la planète possédant le plus grand nombre de satellites naturels, avec 274 observés contre les 95 lunes de Jupiter, associés à des centaines de satellites mineurs. Sa plus grande lune, Titan, est la deuxième plus grande du Système solaire (derrière Ganymède, lune de Jupiter, toutes deux plus grandes que Mercure) et c'est la seule lune connue à posséder une atmosphère. Une autre lune remarquable, Encelade, émet de puissants geysers de glace et serait un habitat potentiel pour la vie microbienne.`,
            `Saturne est très probablement composée d'un noyau de silicates et de fer entouré de couches constituées en volume à 96 % d'hydrogène qui est successivement métallique puis liquide puis gazeux, mêlé à de l'hélium. Ainsi, elle ne possède pas de surface solide et est la planète ayant la densité moyenne la plus faible avec 0,69 g/cm3 — soit 70 % de celle de l'eau. Un courant électrique dans la couche d'hydrogène métallique génère une magnétosphère, la deuxième plus grande du Système solaire mais beaucoup plus petite que celle de Jupiter. L'atmosphère de Saturne est généralement terne et manque de contraste, bien que des caractéristiques de longue durée puissent apparaître comme un hexagone à son pôle nord. Les vents peuvent atteindre 1 800 km/h, soit les deuxièmes plus rapides du Système solaire après ceux de Neptune. Elle a été explorée par quatre sondes spatiales : Pioneer 11, Voyager 1, Voyager 2 et Cassini-Huygens (du nom de deux astronomes ayant grandement fait avancer les connaissances sur le système saturnien au XVIIe siècle).`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/3d-resources/saturn/",
    },
    {
        id: "uranus",
        name: "Uranus",
        symb: "⛢ or ♅",
        desc: [
            `Uranus est la septième planète du Système solaire par ordre d'éloignement du Soleil. Elle orbite autour de celui-ci à une distance d'environ 19,2 unités astronomiques (2,87 milliards de kilomètres), avec une période de révolution de 84,05 années terrestres. Il s'agit de la quatrième planète la plus massive du Système solaire et de la troisième plus grande par la taille.`,
            `Elle est la première planète découverte à l’époque moderne avec un télescope et non connue depuis l'Antiquité. Bien qu'elle soit visible à l’œil nu, son caractère planétaire n'est alors pas identifié en raison de son très faible éclat et de son déplacement apparent dans le ciel très lent. William Herschel l'observe pour la première fois le 13 mars 1781 et la confirmation qu'il s'agit d'une planète et non d'une comète est faite pendant les mois qui suivent.`,
            `Comme Jupiter et Saturne, l'atmosphère d'Uranus est composée principalement d'hydrogène et d'hélium avec des traces d'hydrocarbures. Cependant, comme Neptune, elle contient une proportion plus élevée de « glaces » au sens physique, c'est-à-dire de substances volatiles telles que l'eau, l'ammoniac et le méthane, tandis que l'intérieur de la planète est principalement composé de glaces et de roches, d'où leur nom de « géantes de glaces ». Par ailleurs, le méthane est le principal responsable de la teinte aigue-marine de la planète. Son atmosphère planétaire est la plus froide du Système solaire, avec une température minimale de 49 K (−224 °C) à la tropopause, et présente une structure nuageuse en couches.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/uranus/",
    },
    {
        id: "neptune",
        name: "Neptune",
        symb: "♆ or ⯉",
        desc: [
            `Neptune est la huitième planète par ordre d'éloignement du Soleil et la plus éloignée de l'étoile dans le Système solaire qui soit connue[N 2]. Elle orbite autour du Soleil à une distance d'environ 30,1 au (4,5 milliards de kilomètres), avec une excentricité orbitale de 0,00859 (moitié moindre que celle de la Terre) et une période de révolution de 164,79 ans. C'est la troisième planète la plus massive, la quatrième plus grande par la taille — un peu plus massive mais un peu plus petite qu'Uranus — et la planète géante la plus dense du Système solaire.`,
            `N'étant pas visible à l'œil nu, Neptune est le premier objet céleste et la seule des huit planètes du Système solaire à avoir été découverte par déduction plutôt que par observation empirique. En effet, l'astronome français Alexis Bouvard avait noté des perturbations gravitationnelles inexpliquées sur l'orbite d'Uranus et conjecturé au début du XIXe siècle qu'une huitième planète, plus lointaine, pouvait en être la cause. Les astronomes britannique John Couch Adams en 1843 et français Urbain Le Verrier en 1846 calculèrent indépendamment la position prévue de cette hypothétique planète. Grâce aux calculs de ce dernier, elle fut finalement observée pour la première fois le 23 septembre 1846 par l'astronome prussien Johann Gottfried Galle, à un degré de la position prédite. Bien que Galle ait utilisé les calculs de Le Verrier pour découvrir la planète, la paternité de la découverte entre Adams et Le Verrier fut longtemps disputée. Sa plus grande lune, Triton, est découverte 17 jours plus tard par William Lassell. Depuis 2024, on connaît 16 satellites naturels de Neptune. La planète possède également un système d'anneaux faible et fragmenté ainsi qu'une magnétosphère.`,
            `La distance de la planète à la Terre lui donnant une très faible taille apparente, son étude est difficile avec des télescopes situés sur la Terre. Neptune est visitée une seule fois lors de la mission Voyager 2, qui en réalise un survol le 25 août 1989. L'avènement du télescope spatial Hubble et des grands télescopes au sol à optique adaptative a ensuite permis des observations supplémentaires détaillées.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)",
        nasa: "https://science.nasa.gov/3d-resources/neptune/",
    },
    {
        id: "pluto",
        name: "Pluton",
        symb: "♇ or ⯓",
        desc: [
            `Pluton, officiellement désignée par (134340) Pluton (désignation internationale : (134340) Pluto), est une planète naine, la plus volumineuse connue dans le Système solaire (2 372 km de diamètre, contre 2 326 km pour Éris), et la deuxième en ce qui concerne sa masse (après Éris). Pluton est ainsi le neuvième plus gros objet connu orbitant directement autour du Soleil et le dixième par la masse. Premier objet transneptunien identifié, Pluton orbite autour du Soleil à une distance variant entre 30 et 49 unités astronomiques et appartient à la ceinture de Kuiper, ceinture dont il est (tant par la taille que par la masse) le plus grand membre connu.`,
            `Après sa découverte par l'astronome américain Clyde Tombaugh en 1930, Pluton était considérée comme la neuvième planète du Système solaire. À la fin du XXe siècle et au début du XXIe siècle, de plus en plus d'objets similaires furent découverts dans le Système solaire externe, en particulier Éris, alors estimé légèrement plus grand et plus massif que Pluton. Cette évolution amena l'Union astronomique internationale (UAI) à redéfinir la notion de planète, Cérès, Pluton et Éris étant depuis le 24 août 2006 classées comme des planètes naines. L'UAI a également décidé de faire de Pluton le prototype d'une nouvelle catégorie d'objets transneptuniens. À la suite de cette modification de la nomenclature, Pluton a été ajoutée à la liste des objets mineurs du Système solaire et s'est vu attribuer le numéro 134340 dans le catalogue des objets mineurs.`,
            `Pluton est principalement composée de roche et de glace de méthane, mais aussi de glace d'eau et d'azote gelé. Son diamètre est d'environ les deux tiers de celui de la Lune.`,
        ],
        wiki: "https://fr.wikipedia.org/wiki/Pluton_(plan%C3%A8te_naine)",
        nasa: "https://science.nasa.gov/3d-resources/pluto/",
    },
]
