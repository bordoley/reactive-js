/// <reference types="./Runnable.throwIfEmpty.d.ts" />

import { error, newInstance, raise } from "../../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class ThrowIfEmptySink {
    sink;
    f;
    [SinkLike_isCompleted] = false;
    e = true;
    constructor(sink, f) {
        this.sink = sink;
        this.f = f;
    }
    [SinkLike_next](next) {
        this.e = false;
        this.sink[SinkLike_next](next);
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
