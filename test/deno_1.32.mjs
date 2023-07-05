import {
    fontSplit,
    DenoAdapter,
    Assets,
} from "https://cdn.jsdelivr.net/npm/@konghayao/cn-font-split@4.3.3/dist/browser/index.js";
await DenoAdapter();
const root = "https://cdn.jsdelivr.net/npm/@konghayao/cn-font-split@4.3.3";
Assets.redefine({
    "hb-subset.wasm": root + "/dist/browser/hb-subset.wasm",
    "cn_char_rank.dat": root + "/dist/browser/cn_char_rank.dat",
    "unicodes_contours.dat": root + "/dist/browser/unicodes_contours.dat",
});

const names = [];
await fontSplit({
    destFold: "/tmp/" + Date.now(),
    FontPath: "/tmp/SmileySans-Oblique.ttf",
    targetType: "woff2",
    previewImage: {},
    outputFile(name, buffer) {
        names.push(name);
    },
});
import { checkResult } from "./common/checkResult.mjs";
checkResult(names);
