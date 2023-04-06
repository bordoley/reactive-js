/// <reference types="./Streamable.createActionReducer.d.ts" />

import Observable_actionReducer from "../../../rx/Observable/__internal__/Observable.actionReducer.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";
const Streamable_createActionReducer = (reducer, initialState, options) => Streamable_createWithConfig(Observable_actionReducer(reducer, initialState, options), {
    [StreamableLike_isEnumerable]: true,
    [StreamableLike_isInteractive]: true,
    [StreamableLike_isRunnable]: true,
});
export default Streamable_createActionReducer;
