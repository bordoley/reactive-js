import type * as Observable from "../../Observable.js";
import { alwaysFalse, returns } from "../../functions.js";
import Observable_keep from "./Observable.keep.js";

const Observable_ignoreElements: Observable.Signature["ignoreElements"] =
  /*@__PURE__*/ (() => returns(Observable_keep(alwaysFalse)))();

export default Observable_ignoreElements;
