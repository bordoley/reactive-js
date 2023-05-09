/// <reference types="./Streamable.createStateStore.d.ts" />

import DeferredObservable_stateStore from "../../DeferredObservable/__internal__/DeferredObservable.stateStore.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createStateStore = (initialState, options) => Streamable_create(DeferredObservable_stateStore(initialState, options));
export default Streamable_createStateStore;
