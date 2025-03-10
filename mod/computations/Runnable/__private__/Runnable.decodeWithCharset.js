/// <reference types="./Runnable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { newInstance, none } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class DecodeWithCharsetSink {
    sink;
    td;
    [SinkLike_isComplete] = false;
    constructor(sink, charset, options) {
        this.sink = sink;
        this.td = newInstance(TextDecoder, charset, options);
    }
    [SinkLike_next](next) {
        const data = this.td.decode(next, {
            stream: true,
        });
        if (data[Array_length] > 0) {
            this.sink[SinkLike_next](data);
        }
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isComplete]) {
            const data = this.td.decode(newInstance(Uint8Array, []), {
                stream: false,
            });
            this.td = none;
            this[SinkLike_isComplete] = true;
            if (data[Array_length] > 0) {
                this.sink[SinkLike_next](data);
            }
            this.sink[SinkLike_complete]();
        }
    }
}
const Runnable_decodeWithCharset = (options) => Runnable_lift((sink) => newInstance(DecodeWithCharsetSink, sink, options?.charset ?? "utf-8", options), true);
export default Runnable_decodeWithCharset;
