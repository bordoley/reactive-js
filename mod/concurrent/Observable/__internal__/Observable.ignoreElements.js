/// <reference types="./Observable.ignoreElements.d.ts" />

import { alwaysFalse, partial, pipe, returns } from "../../../functions.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_ignoreElements = 
/*@__PURE__*/ (() => pipe((Observer_createKeepObserver), partial(alwaysFalse), Observable_liftPure, returns))();
export default Observable_ignoreElements;
