import State from "@/state"
import { useNebula } from "./_/nebula"
import styles from "./page.module.css"

export default function Page() {
    const handleGame = useNebula()
    return (
        <div className={styles.main}>
            <canvas ref={handleGame}></canvas>
            <div onScroll={handleScroll}>
                <h1>
                    Know your <b>Solar System</b>
                </h1>
                {PLANETS.map(({ name, desc, link }) => (
                    <article key={name}>
                        <div>
                            <h2>{name}</h2>
                            <p>{desc}</p>
                            <div>
                                Source:{" "}
                                <a href={link} target="wikipedia">
                                    Wikipedia
                                </a>
                            </div>
                        </div>
                        <div></div>
                    </article>
                ))}
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

const PLANETS: Array<{ name: string; desc: string; link: string }> = [
    {
        name: "Mercury (☿)",
        desc: `Mercury is the first planet from the Sun and the smallest in the Solar System. It is a rocky planet with a trace atmosphere and a surface gravity slightly higher than that of Mars. The surface of Mercury is similar to Earth's Moon, being heavily cratered, with an expansive rupes system generated from thrust faults, and bright ray systems, formed by ejecta. Its largest crater, Caloris Planitia, has a diameter of 1,550 km (960 mi), which is about one-third the diameter of the planet (4,880 km or 3,030 mi). Being the most inferior orbiting planet, it always appears close to the sun in Earth's sky, either as a "morning star" or an "evening star.” It is the planet with the highest delta-v required for travel from Earth, as well as to and from the other planets in the Solar System.`,
        link: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    },
    {
        name: "Venus (♀)",
        desc: `Venus is the second planet from the Sun. It is often called Earth's "twin" or "sister" among the planets of the Solar System for its orbit being the closest to Earth's, both being rocky planets, and having the most similar and nearly equal size, mass, and surface gravity. Venus, though, is significantly different, especially as it has no liquid water, and its atmosphere is far thicker and denser than that of any other rocky body in the Solar System. The atmosphere is composed mostly of carbon dioxide and has a thick cloud layer of sulfuric acid that spans the whole planet. At the mean surface level, the atmosphere reaches a temperature of 737 K (464 °C; 867 °F) and a pressure 92 times greater than Earth's at sea level, turning the lowest layer of the atmosphere into a supercritical fluid. From Earth, Venus is visible as a star-like point of light, appearing brighter than any other natural point of light in the sky, and as an inferior planet always relatively close to the Sun, either as the brightest "morning star" or "evening star".`,
        link: "https://en.wikipedia.org/wiki/Venus",
    },
    {
        name: "Earth (♁ or 🜨)",
        desc: `Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is at least somewhat humid and covered by vegetation, while large ice sheets at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers, and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation. `,
        link: "https://en.wikipedia.org/wiki/Earth",
    },
    {
        name: "Mars (♂)",
        desc: `Mars is the fourth planet from the Sun. It is also known as the "Red Planet", due to its orange-red appearance.[22][23] Mars is a desert-like rocky planet with a tenuous atmosphere that is primarily carbon dioxide (CO2). At the average surface level the atmospheric pressure is a few thousandths of Earth’s, atmospheric temperature ranges from −153 to 20 °C (−243 to 68 °F)[24] and cosmic radiation is high. Mars retains some water, in the ground as well as thinly in the atmosphere, forming cirrus clouds, fog, frost, larger polar regions of permafrost and ice caps (with seasonal CO2 snow), but no bodies of liquid surface water. Its surface gravity is roughly a third of Earth's or double that of the Moon. It is about half as wide as Earth or twice the Moon, with a diameter of 6,779 km (4,212 mi), and has a surface area the size of all the dry land of Earth. `,
        link: "https://en.wikipedia.org/wiki/Mars",
    },
    {
        name: "Jupiter (♃)",
        desc: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass nearly 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun. Its diameter is 11 times that of Earth and a tenth that of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years. It is the third-brightest natural object in the Earth's night sky, after the Moon and Venus, and has been observed since prehistoric times. Its name derives from that of Jupiter, the chief deity of ancient Roman religion. `,
        link: "https://en.wikipedia.org/wiki/Jupiter",
    },
    {
        name: "Saturn (♄)",
        desc: `Saturn is the sixth planet from the Sun and the second largest in the Solar System, after Jupiter. It is a gas giant, with an average radius of about 9 times that of Earth. It has an eighth of the average density of Earth, but is over 95 times more massive. Even though Saturn is almost as big as Jupiter, Saturn has less than a third of its mass. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km), with an orbital period of 29.45 years. `,
        link: "https://en.wikipedia.org/wiki/Saturn",
    },
    {
        name: "Uranus (⛢ or ♅)",
        desc: `Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomy calls "ice" or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature (49 K (−224 °C; −371 °F)) of all the Solar System's planets. It has a marked axial tilt of 82.23° with a retrograde rotation period of 17 hours and 14 minutes. This means that in an 84-Earth-year orbital period around the Sun, its poles get around 42 years of continuous sunlight, followed by 42 years of continuous darkness. `,
        link: "https://en.wikipedia.org/wiki/Uranus",
    },
    {
        name: "Neptune (♆ or ⯉)",
        desc: `Neptune is the eighth and farthest known planet orbiting the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth. Compared to Uranus, its neighbouring ice giant, Neptune is slightly smaller, but more massive and denser. Being composed primarily of gases and liquids,[21] it has no well-defined solid surface. Neptune orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.`,
        link: "https://en.wikipedia.org/wiki/Neptune",
    },
    {
        name: "Pluto (♇ or ⯓)",
        desc: `Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume by a small margin, but is less massive than Eris. Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets. Pluto has roughly one-sixth the mass of the Moon and one-third of its volume. Originally considered a planet, its classification was changed when astronomers adopted a new definition of planet. `,
        link: "https://en.wikipedia.org/wiki/Pluto",
    },
]
