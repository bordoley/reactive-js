import { bindDisposables } from "../../disposable.js";
import { pipe, compose } from "../../functions.js";
import { onNotify, empty as emptyObs, map, using, dispatchTo, } from "../../observable.js";
import { isNone } from "../../option.js";
import { subscribe } from "../observable/subscribe.js";
import { createStream } from "./createStream.js";
class StreamableImpl {
    constructor(op) {
        this.op = op;
    }
    stream(scheduler, options) {
        return createStream(this.op, scheduler, options);
    }
}
export const createStreamable = (op) => new StreamableImpl(op);
class LiftedStreamable extends StreamableImpl {
    constructor(op, src, obsOps, reqOps) {
        super(op);
        this.src = src;
        this.obsOps = obsOps;
        this.reqOps = reqOps;
    }
}
const liftImpl = (streamable, obsOps, reqOps) => {
    const src = streamable instanceof LiftedStreamable ? streamable.src : streamable;
    const op = requests => using(scheduler => {
        const srcStream = pipe(src, stream(scheduler));
        const requestSubscription = pipe(requests, map(compose(...reqOps)), onNotify(dispatchTo(srcStream)), subscribe(scheduler));
        bindDisposables(srcStream, requestSubscription);
        return srcStream;
    }, compose(...obsOps));
    return new LiftedStreamable(op, src, obsOps, reqOps);
};
export const lift = (op) => streamable => {
    const obsOps = streamable instanceof LiftedStreamable ? [...streamable.obsOps, op] : [op];
    const reqOps = streamable instanceof LiftedStreamable ? streamable.reqOps : [];
    return liftImpl(streamable, obsOps, reqOps);
};
export const mapReq = (op) => streamable => {
    const obsOps = streamable instanceof LiftedStreamable ? streamable.obsOps : [];
    const reqOps = streamable instanceof LiftedStreamable ? [op, ...streamable.reqOps] : [op];
    return liftImpl(streamable, obsOps, reqOps);
};
const _empty = createStreamable(_ => emptyObs());
export const empty = (options) => isNone(options) ? _empty : createStreamable(_ => emptyObs(options));
export const stream = (scheduler, options) => streamable => streamable.stream(scheduler, options);
