/// <reference types="./Container.encodeUtf8.d.ts" />

import { bindMethod, newInstance, pipe } from "../../../functions.js";
const Container_encodeUtf8 = (defer, map) => _ => container => defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(container, map(bindMethod(textEncoder, "encode")));
});
export default Container_encodeUtf8;
