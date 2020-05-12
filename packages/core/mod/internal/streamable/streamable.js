import { pipe, compose } from "../../functions.js";
import { onNotify, empty as emptyObs, map, using, dispatchTo, } from "../../observable.js";
import { isNone } from "../../option.js";
import { subscribe } from "../observable/subscribe.js";
import { createStream } from "./createStream.js";
import { addDisposableOrTeardown, add } from "../../disposable.js";
class StreamableImpl {
    constructor(op) {
        this.op = op;
    }
    stream(scheduler, replayCount = 0) {
        return createStream(this.op, scheduler, replayCount);
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
        const srcStream = stream(src, scheduler);
        const requestSubscription = pipe(requests, map(compose(...reqOps)), onNotify(dispatchTo(srcStream)), subscribe(scheduler), addDisposableOrTeardown(srcStream));
        return add(srcStream, requestSubscription);
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
export const stream = (streamable, scheduler, replayCount) => streamable.stream(scheduler, replayCount);
