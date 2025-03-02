/// <reference types="./Streamable.syncState.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { DeferredComputationWithSideEffectsType } from "../../../computations.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import { compose, identity, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DeferredObservable from "../../DeferredObservable.js";
import * as Observable from "../../Observable.js";
const Streamable_syncState = (onInit, onChange, syncStateOptions) => (streamable) => ({
    [StreamableLike_stream](scheduler, options) {
        const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
        const stream = streamable[StreamableLike_stream](scheduler, options);
        pipe(stream, Observable.forkMerge(compose(Observable.takeFirst(), Computation.concatMap({
            concatAll: DeferredObservable.concatAll,
            map: DeferredObservable.map,
        })(onInit, {
            innerType: DeferredComputationWithSideEffectsType,
        })), compose(throttleDuration > 0
            ? Observable.throttle(throttleDuration)
            : identity, Observable.pairwise(), Computation.concatMap({
            concatAll: DeferredObservable.concatAll,
            map: DeferredObservable.map,
        })(([oldValue, newValue]) => onChange(oldValue, newValue), {
            innerType: DeferredComputationWithSideEffectsType,
        }))), Observable.dispatchTo(stream), Observable.ignoreElements(), Observable.subscribe(scheduler), Disposable.addTo(stream));
        return stream;
    },
});
export default Streamable_syncState;
