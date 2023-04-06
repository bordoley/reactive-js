/// <reference types="./Streamable.createStateStore.d.ts" />

import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";
const Streamable_createStateStore = (initialState, options) => Streamable_createWithConfig(Observable_stateStore(initialState, options), {
    [StreamableLike_isEnumerable]: true,
    [StreamableLike_isInteractive]: true,
    [StreamableLike_isRunnable]: true,
});
export default Streamable_createStateStore;
