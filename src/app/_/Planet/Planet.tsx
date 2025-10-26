import React from "react"

import Styles from "./Planet.module.css"
import { Painter } from "./painter"
export interface PlanetProps {
    className?: string
    name: string
    nasa: string
}

export default function Planet({ className, name: map, nasa }: PlanetProps) {
    const painter = usePainter(map)

    return (
        <div
            className={[className, Styles.planet]
                .filter((cls) => typeof cls === "string")
                .join(" ")}
        >
            <div>
                Source{" "}
                <a href={nasa} target="nasa">
                    NASA
                </a>
            </div>
            <canvas ref={painter.setCanvas}></canvas>
        </div>
    )
}

function usePainter(map: string) {
    const refPainter = React.useRef<Painter | null>(null)
    if (!refPainter.current) refPainter.current = new Painter()
    refPainter.current.setImageName(map)
    React.useEffect(() => {
        return () => refPainter.current?.delete()
    }, [])
    return refPainter.current
}
