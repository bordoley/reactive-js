/// <reference types="./Container.encodeUtf8.d.ts" />

import { newInstance, pipe } from "../../../functions.js";
const Container_encodeUtf8 = (m) => obs => m.defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(obs, m.map(s => textEncoder.encode(s)));
});
export default Container_encodeUtf8;
