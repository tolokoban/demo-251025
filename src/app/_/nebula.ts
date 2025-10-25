import State from "@/state"
import {
    TgdCameraPerspective,
    TgdContext,
    TgdPainterSkybox,
} from "@tolokoban/tgd"

export function useNebula() {
    return (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        const camera = new TgdCameraPerspective({
            transfo: {
                distance: 6,
            },
        })
        const context = new TgdContext(canvas, { camera })

        context.add(
            new TgdPainterSkybox(context, {
                camera,
                ...State.skybox.value,
            })
        )
        context.paint()
        const splash = document.getElementById("tgd-logo")
        if (splash) {
            splash.classList.add("vanish")
            window.setTimeout(
                () => splash.parentNode?.removeChild(splash),
                1000
            )
        }
        State.scroll.addListener((scroll) => {
            console.log("🚀 [nebula] scroll =", scroll) // @FIXME: Remove this line written on 2025-10-25 at 18:00
            camera.transfo.setEulerRotation(
                0,
                360 * scroll,
                -180 * scroll * scroll
            )
            context.paint()
        })
    }
}
