/// <reference types="./Streamable.syncState.d.ts" />

import { ComputationLike_isPure, SourceLike_subscribe, StreamableLike_stream, } from "../../../computations.js";
import { compose, identity, invoke, pipe, } from "../../../functions.js";
import * as Observable from "../../Observable.js";
const Streamable_syncState = (onInit, onChange, syncStateOptions) => (streamable) => ({
    [StreamableLike_stream](scheduler, options) {
        const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
        const stream = streamable[StreamableLike_stream](scheduler, options);
        pipe(stream, Observable.fromBroadcaster(), Observable.forkMerge(compose(Observable.takeFirst(), Observable.map(onInit), Observable.concatAll({
            [ComputationLike_isPure]: false,
        })), compose(throttleDuration > 0
            ? Observable.throttle(throttleDuration)
            : identity, Observable.pairwise(), Observable.map(([oldValue, newValue]) => onChange(oldValue, newValue)), Observable.concatAll({
            [ComputationLike_isPure]: false,
        })), { [ComputationLike_isPure]: false }), Observable.toProducer({ scheduler }), invoke(SourceLike_subscribe, stream));
        return stream;
    },
});
export default Streamable_syncState;
