/// <reference types="./Runnable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { newInstance, none } from "../../../functions.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class DecodeWithCharsetSink extends AbstractDelegatingDisposableSink {
    sink;
    td;
    [SinkLike_isCompleted] = false;
    constructor(sink, charset, options) {
        super(sink);
        this.sink = sink;
        this.td = newInstance(TextDecoder, charset, options);
    }
    [EventListenerLike_notify](next) {
        const data = this.td.decode(next, {
            stream: true,
        });
        if (data[Array_length] > 0) {
            this.sink[EventListenerLike_notify](data);
        }
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isCompleted]) {
            const data = this.td.decode(newInstance(Uint8Array, []), {
                stream: false,
            });
            this.td = none;
            this[SinkLike_isCompleted] = true;
            if (data[Array_length] > 0) {
                this.sink[EventListenerLike_notify](data);
            }
            this.sink[SinkLike_complete]();
        }
    }
}
const Runnable_decodeWithCharset = (options) => Runnable_lift((sink) => newInstance(DecodeWithCharsetSink, sink, options?.charset ?? "utf-8", options), true);
export default Runnable_decodeWithCharset;
