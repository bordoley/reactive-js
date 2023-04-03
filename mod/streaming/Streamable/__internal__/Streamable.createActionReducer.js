/// <reference types="./Streamable.createActionReducer.d.ts" />

import Observable_actionReducer from "../../../rx/Observable/__internal__/Observable.actionReducer.js";
import Streamable_createLifted from "./Streamable.createLifted.js";
const Streamable_createActionReducer = (reducer, initialState, options) => Streamable_createLifted(Observable_actionReducer(reducer, initialState, options), true, true, true);
export default Streamable_createActionReducer;
