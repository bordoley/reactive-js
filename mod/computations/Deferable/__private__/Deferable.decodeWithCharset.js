/// <reference types="./Deferable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import Deferable_lift from "./Deferable.lift.js";
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
const Deferable_decodeWithCharset = (options) => Deferable_lift((sink) => newInstance(DecodeWithCharsetSink, sink, options?.charset ?? "utf-8", options));
export default Deferable_decodeWithCharset;
