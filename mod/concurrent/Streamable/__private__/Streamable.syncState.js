/// <reference types="./Streamable.syncState.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { DeferredComputationWithSideEffectsType, } from "../../../computations.js";
import { StreamableLike_stream, } from "../../../concurrent.js";
import { compose, identity, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
const ObservableModule = {
    concatAll: Observable.concatAll,
    keep: Observable.keep,
    map: Observable.map,
};
const Streamable_syncState = (onInit, onChange, syncStateOptions) => (streamable) => ({
    [StreamableLike_stream](scheduler, options) {
        const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
        const stream = streamable[StreamableLike_stream](scheduler, options);
        pipe(stream, Observable.forkMerge(compose(Observable.takeFirst(), Computation.concatMap(ObservableModule)(onInit, {
            innerType: DeferredComputationWithSideEffectsType,
        })), compose(throttleDuration > 0
            ? Observable.throttle(throttleDuration)
            : identity, Observable.pairwise(), Computation.concatMap(ObservableModule)(([oldValue, newValue]) => onChange(oldValue, newValue), {
            innerType: DeferredComputationWithSideEffectsType,
        })), { innerType: DeferredComputationWithSideEffectsType }), Observable.dispatchTo(stream), Computation.ignoreElements(ObservableModule)(), Observable.subscribe(scheduler), Disposable.addTo(stream));
        return stream;
    },
});
export default Streamable_syncState;
