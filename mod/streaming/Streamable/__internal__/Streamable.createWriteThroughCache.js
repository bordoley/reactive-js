/// <reference types="./Streamable.createWriteThroughCache.d.ts" />

import { bind, compose, identity, pipe, } from "../../../functions.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_forkMerge from "../../../rx/Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../../rx/Observable/__internal__/Observable.throttle.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
import { QueueableLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Streamable_createStateStore from "./Streamable.createStateStore.js";
const Streamable_createWriteThroughCache = (initialState, onInit, onChange, options) => {
    var _a;
    const stateStore = Streamable_createStateStore(initialState, options);
    const throttleDuration = (_a = options === null || options === void 0 ? void 0 : options.throttleDuration) !== null && _a !== void 0 ? _a : 0;
    const stream = (scheduler, options) => {
        const state = stateStore[StreamableLike_stream](scheduler, options);
        pipe(state, Observable_forkMerge(compose(Observable_takeFirst(), Observable_concatMap(onInit)), compose(throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity, Observable_pairwise(), Observable_concatMap(([oldValue, newValue]) => onChange(oldValue, newValue)))), Observable_forEach(bind(state[QueueableLike_push], state)), Observable_subscribe(scheduler, options), Disposable_addTo(state));
        return state;
    };
    return {
        [StreamableLike_isEnumerable]: false,
        [StreamableLike_isInteractive]: false,
        [StreamableLike_isRunnable]: false,
        [StreamableLike_stream]: stream,
    };
};
export default Streamable_createWriteThroughCache;
