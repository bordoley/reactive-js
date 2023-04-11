/// <reference types="./Streamable.createStateStore.d.ts" />

import { compose, isFunction, pipe, } from "../../../functions.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_create from "./Streamable.create.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";
const Streamable_createStateStore = ((initialState, onChangeOrOptions, options = {}) => isFunction(onChangeOrOptions)
    ? Streamable_create(compose(Observable_stateStore(initialState, options), Observable_pairwise(), options?.mode === "switching"
        ? Observable_switchMap(([prev, next]) => pipe(onChangeOrOptions(prev, next), Observable_endWith(next)))
        : Observable_mergeMap(([prev, next]) => pipe(onChangeOrOptions(prev, next), Observable_endWith(next)), { ...options, concurrency: 1 })))
    : Streamable_createWithConfig(Observable_stateStore(initialState, options), {
        [StreamableLike_isEnumerable]: true,
        [StreamableLike_isInteractive]: true,
        [StreamableLike_isRunnable]: true,
    }));
export default Streamable_createStateStore;
