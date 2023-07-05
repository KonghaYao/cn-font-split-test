import { fontSplit } from "@konghayao/cn-font-split";
import { checkResult } from "./common/checkResult.mjs";
import { Headers, Response } from "node-fetch";
Object.assign(globalThis, { Headers, Response });
Object.assign(WebAssembly, {
    async instantiateStreaming(source, obj) {
        const s = await source.arrayBuffer();
        return this.instantiate(s, obj);
    },
});
const names = [];
fontSplit({
    destFold: "/tmp/" + Date.now(),
    FontPath: "/tmp/SmileySans-Oblique.ttf",
    targetType: "woff2",
    previewImage: {},
    outputFile(name, buffer) {
        names.push(name);
    },
}).then(() => {
    checkResult(names);
});
