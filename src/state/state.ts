import AtomicState from "@tolokoban/react-state"
import { isString } from "@tolokoban/type-guards"

export default {
    language: new AtomicState(navigator.language, {
        storage: {
            id: "language",
            guard: isString,
        },
        transform(value: string) {
            const lang = value.trim().substring(0, 2).toLocaleLowerCase()
            return ["en", "fr", "it"].includes(lang) ? lang : "en"
        },
    }),
    skybox: new AtomicState({
        imageNegX: new Image(),
        imageNegY: new Image(),
        imageNegZ: new Image(),
        imagePosX: new Image(),
        imagePosY: new Image(),
        imagePosZ: new Image(),
    }),
    scroll: new AtomicState(0),
}
