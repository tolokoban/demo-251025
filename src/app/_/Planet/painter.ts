import {
    TgdContext,
    tgdLoadImage,
    TgdPainterFilter,
    TgdTexture2D,
} from "@tolokoban/tgd"
import { Filter } from "./filter"

export class Painter {
    private context: TgdContext | null = null

    private imageName: string | null = null

    private texture: TgdTexture2D | null = null

    readonly setCanvas = (canvas: HTMLCanvasElement | null) => {
        this.delete()
        if (canvas) {
            const context = new TgdContext(canvas, {
                alpha: true,
                premultipliedAlpha: false,
            })
            this.context = context
            this.texture = new TgdTexture2D(context)
            context.add(
                new TgdPainterFilter(context, {
                    texture: this.texture,
                    filters: [new Filter()],
                })
            )
            this.updateTexture()
            context.play()
        }
    }

    setImageName(name: string) {
        this.imageName = name
        this.updateTexture()
    }

    delete() {
        if (this.texture) {
            this.texture.delete()
            this.texture = null
        }
        if (this.context) {
            this.context.delete()
            this.context = null
        }
    }

    private updateTexture() {
        const { context, imageName } = this
        if (!context || !imageName) return

        if (!this.texture) {
            this.texture = new TgdTexture2D(context)
        }
        tgdLoadImage(`assets/img/${imageName}.medium.webp`).then((img) => {
            this.texture?.loadBitmap(img)
            this.context?.paint()
        })
    }
}
