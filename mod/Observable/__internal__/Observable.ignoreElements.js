/// <reference types="./Observable.ignoreElements.d.ts" />

import { alwaysFalse, returns } from "../../functions.js";
import Observable_keep from "./Observable.keep.js";
const Observable_ignoreElements = 
/*@__PURE__*/ (() => returns(Observable_keep(alwaysFalse)))();
export default Observable_ignoreElements;
