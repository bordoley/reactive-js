/// <reference types="./Runnable.encodeUtf8.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, RunnableLike_eval, SinkLike_complete, } from "../../../computations.js";
import { bindMethod, invoke, newInstance, pipe } from "../../../functions.js";
import Runnable_map from "./Runnable.map.js";
class EncodeUtf8Runnable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isDeferred];
    }
    [RunnableLike_eval](sink) {
        const textEncoder = newInstance(TextEncoder);
        pipe(this.s, Runnable_map(bindMethod(textEncoder, "encode")), invoke(RunnableLike_eval, sink));
        sink[SinkLike_complete]();
    }
}
const Runnable_encodeUtf8 = (() => (s) => newInstance(EncodeUtf8Runnable, s));
export default Runnable_encodeUtf8;
