/// <reference types="./HigherOrderObservable.encodeUtf8.d.ts" />

import { bindMethod, newInstance, pipe } from "../../../functions.js";
const HigherOrderObservable_encodeUtf8 = (defer, map) => () => observable => defer(() => {
    const textEncoder = newInstance(TextEncoder);
    return pipe(observable, map(bindMethod(textEncoder, "encode")));
});
export default HigherOrderObservable_encodeUtf8;
