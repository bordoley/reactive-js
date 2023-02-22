/// <reference types="./Container.encodeUtf8.d.ts" />

import { newInstance, pipe } from "../../../functions.js";
const Container_encodeUtf8 = (defer, map) => _ => container => defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(container, map(s => textEncoder.encode(s)));
});
export default Container_encodeUtf8;
