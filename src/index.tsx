import React from "react"
import { createRoot } from "react-dom/client"
import { tgdLoadImage } from "@tolokoban/tgd"

import State from "@/state"

import App from "./app"
import FontDosis from "./fonts/dosis"

import "./index.css"

async function start() {
    FontDosis.load300()
    FontDosis.load700()
    let progress = 0
    const [imageNegX, imageNegY, imageNegZ, imagePosX, imagePosY, imagePosZ] =
        await Promise.all(
            ["negX", "negY", "negZ", "posX", "posY", "posZ"].map(
                (name) =>
                    new Promise<HTMLImageElement>((resolve) => {
                        tgdLoadImage(`assets/img/${name}.webp`).then((img) => {
                            progress++
                            resolve(img ?? new Image())
                        })
                    })
            )
        )
    State.skybox.value = {
        imageNegX,
        imageNegY,
        imageNegZ,
        imagePosX,
        imagePosY,
        imagePosZ,
    }

    const container = document.getElementById("app")
    if (!container) throw Error("Missing element with id #app!")
    createRoot(container).render(<MainPage />)
}

function MainPage() {
    const lang = State.language.useValue()
    return <App lang={lang} />
}

start()
