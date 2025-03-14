/// <reference types="./Runnable.throwIfEmpty.d.ts" />

import { error, newInstance, raise } from "../../../functions.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class ThrowIfEmptySink extends AbstractDelegatingDisposableSink {
    sink;
    f;
    [SinkLike_isCompleted] = false;
    e = true;
    constructor(sink, f) {
        super(sink);
        this.sink = sink;
        this.f = f;
    }
    [EventListenerLike_notify](next) {
        this.e = false;
        this.sink[EventListenerLike_notify](next);
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isCompleted]) {
            this[SinkLike_isCompleted] = true;
            if (this.e) {
                raise(error(this.f()));
            }
            this[SinkLike_complete]();
        }
    }
}
const Runnable_throwIfEmpty = (factory) => Runnable_lift((sink) => newInstance((ThrowIfEmptySink), sink, factory), true);
export default Runnable_throwIfEmpty;
