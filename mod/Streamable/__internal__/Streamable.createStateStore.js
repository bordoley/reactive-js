/// <reference types="./Streamable.createStateStore.d.ts" />

import Observable_stateStore from "../../Observable/__internal__/Observable.stateStore.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createStateStore = (initialState, options) => Streamable_create(Observable_stateStore(initialState, options));
export default Streamable_createStateStore;
