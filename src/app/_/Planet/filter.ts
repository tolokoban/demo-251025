import {
    tgdCodeConstants,
    tgdCodeFunction_mapRange,
    TgdFilter,
} from "@tolokoban/tgd"

export class Filter extends TgdFilter {
    constructor() {
        super({
            uniforms: { uniTime: "float" },
            extraFunctions: {
                ...tgdCodeConstants("PI"),
                ...tgdCodeFunction_mapRange(),
            },
            fragmentShaderCode: [
                "vec3 sun = normalize(vec3(1.2, -.7, 1.0));",
                "vec2 pos = 2.0 * (varUV - vec2(.5));",
                "float radius = length(pos);",
                "if (radius >= 1.0) discard;",
                "float lat = asin(pos.y);",
                "float z = cos(lat);",
                "float lng = asin(pos.x / z) + uniTime;",
                "float u = mapRange(lng, -PI, PI, 0.0, 1.0);",
                "float v = mapRange(lat, -PI, PI, 0.0, 1.0);",
                "vec3 color = texture(uniTexture, vec2(u, v)).rgb;",
                "float light = dot(",
                ["sun,", "vec3(pos, z)"],
                ");",
                "light = mapRange(light, -1.0, 1.0, -.5, 1.5);",
                "float alpha = 1.0 - smoothstep(.98, 1.0, radius);",
                "FragColor = vec4(color *light, alpha);",
            ],
            setUniforms: ({ program, time }) => {
                program.uniform1f("uniTime", time * 0.1)
            },
        })
    }
}
