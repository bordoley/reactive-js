/// <reference types="./Streamable.createStateStore.d.ts" />

import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import Streamable_createLifted from "./Streamable.createLifted.js";
const Streamable_createStateStore = (initialState, options) => Streamable_createLifted(Observable_stateStore(initialState, options), true, true, true);
export default Streamable_createStateStore;
