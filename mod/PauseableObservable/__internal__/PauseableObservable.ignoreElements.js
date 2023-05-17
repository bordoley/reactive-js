/// <reference types="./PauseableObservable.ignoreElements.d.ts" />

import { alwaysFalse, returns } from "../../functions.js";
import PauseableObservable_keep from "./PauseableObservable.keep.js";
const PauseableObservable_ignoreElements = 
/*@__PURE__*/ (() => returns(PauseableObservable_keep(alwaysFalse)))();
export default PauseableObservable_ignoreElements;
