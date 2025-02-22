/// <reference types="./Deferable.throwIfEmpty.d.ts" />

import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { error, newInstance, raise } from "../../../functions.js";
import Deferable_lift from "./Deferable.lift.js";
class ThrowIfEmptySink {
    sink;
    f;
    [SinkLike_isComplete] = false;
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
        if (!this[SinkLike_isComplete]) {
            this[SinkLike_isComplete] = true;
            if (this.e) {
                raise(error(this.f()));
            }
            this[SinkLike_complete]();
        }
    }
}
const Deferable_throwIfEmpty = (factory) => Deferable_lift((sink) => newInstance((ThrowIfEmptySink), sink, factory));
export default Deferable_throwIfEmpty;
