import assert from "node:assert";
import path from "node:path";
const right = [
    "0f035dad7df31b6ddf6d095c5dcb1902.woff2",
    "0fadbfb1118623b6c4703dda47553725.woff2",
    "1d298e933db9ff80bc121cfd75bea091.woff2",
    "29cf4f004553e544fedf2f2117752f84.woff2",
    "2b87059d49b8767c458b75b5b12d296e.woff2",
    "5841eb6bbe72445a309e2514791e4900.woff2",
    "5ba6810ac12f2a68cb61fae8284724d7.woff2",
    "6d3f74d809864d11c8df1284f15d0ab3.woff2",
    "7217e4e273d2591aa8c109c55d87412d.woff2",
    "7a4ea7a373018b8741a02abffb31ad9e.woff2",
    "807bf851364a8d3f18fe31006dff3599.woff2",
    "8b1a293d64f8bb81c3e8cc4abdb7288a.woff2",
    "b7008ecd93175560537e82da78c48875.woff2",
    "be582806ceb776a1fc7d6298062ffd27.woff2",
    "c4aa8064322c376f6b44c3782d344d37.woff2",
    "cb79f5113ac8b89a3f6a4b49c8f9ddce.woff2",
    "db505bc39cbd2b3a121ed6b561ae902d.woff2",
    "ec728e9721af5273446c80540f55c1b9.woff2",
    "fbc95501b692309977426bf636484a29.woff2",
    "index.html",
    "preview.png",
    "reporter.json",
    "result.css",
];
export const checkResult = (names) => {
    names = [...new Set(names)].map((i) => {
        return path.basename(i);
    });
    assert.strictEqual(names.length, right.length);
    assert.equal(
        names.every((i) => right.includes(i)),
        true
    );
};
