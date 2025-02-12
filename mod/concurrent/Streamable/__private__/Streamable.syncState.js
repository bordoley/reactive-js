/// <reference types="./Streamable.syncState.d.ts" />

import { StreamableLike_stream, } from "../../../concurrent.js";
import { compose, identity, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
const Streamable_syncState = (onInit, onChange, syncStateOptions) => (streamable) => ({
    [StreamableLike_stream](scheduler, options) {
        const throttleDuration = syncStateOptions?.throttleDuration ?? 0;
        const stream = streamable[StreamableLike_stream](scheduler, options);
        pipe(stream, Observable.forkMerge([
            compose(Observable.takeFirst(), Observable.concatMap(onInit, {
                innerType: Observable.DeferredObservableWithSideEffectsType,
            })),
            compose(throttleDuration > 0
                ? Observable.throttle(throttleDuration)
                : identity, Observable.pairwise(), Observable.concatMap(([oldValue, newValue]) => onChange(oldValue, newValue), { innerType: Observable.DeferredObservableWithSideEffectsType })),
        ]), Observable.dispatchTo(stream), Observable.ignoreElements(), Observable.subscribe(scheduler), Disposable.addTo(stream));
        return stream;
    },
});
export default Streamable_syncState;
