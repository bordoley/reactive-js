import { pipe } from "../../functions.js";
import { onNotify, empty as emptyObs, ignoreElements, map, merge, using, } from "../../observable.js";
import { createStream } from "./createStream.js";
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
const createFactory = (obsOps, reqOps, requests) => (stream) => {
    const observable = pipe(stream, ...obsOps);
    const mapRequest = (req) => pipe(req, ...reqOps);
    const onRequest = pipe(requests, map(mapRequest), onNotify((req) => stream.dispatch(req)), ignoreElements());
    return merge(observable, onRequest);
};
const liftImpl = (enumerable, obsOps, reqOps) => {
    const src = enumerable instanceof LiftedStreamable ? enumerable.src : enumerable;
    const op = (requests) => using(scheduler => src.stream(scheduler), createFactory(obsOps, reqOps, requests));
    return new LiftedStreamable(op, src, obsOps, reqOps);
};
export const lift = (op) => enumerable => {
    const obsOps = enumerable instanceof LiftedStreamable ? [...enumerable.obsOps, op] : [op];
    const reqOps = enumerable instanceof LiftedStreamable ? enumerable.reqOps : [];
    return liftImpl(enumerable, obsOps, reqOps);
};
export const mapReq = (op) => enumerable => {
    const obsOps = enumerable instanceof LiftedStreamable ? enumerable.obsOps : [];
    const reqOps = enumerable instanceof LiftedStreamable ? [op, ...enumerable.reqOps] : [op];
    return liftImpl(enumerable, obsOps, reqOps);
};
const _empty = createStreamable(_ => emptyObs());
export const empty = () => _empty;
