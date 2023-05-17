import type * as PauseableObservable from "../../PauseableObservable.js";
import { alwaysFalse, returns } from "../../functions.js";
import PauseableObservable_keep from "./PauseableObservable.keep.js";

const PauseableObservable_ignoreElements: PauseableObservable.Signature["ignoreElements"] =
  /*@__PURE__*/ (() => returns(PauseableObservable_keep<any>(alwaysFalse)))();

export default PauseableObservable_ignoreElements;
