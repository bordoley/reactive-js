import { alwaysFalse } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_keep from "./Observable.keep.js";

const Observable_ignoreElements: Observable.Signature["ignoreElements"] =
  /*@__PURE__*/ () => Observable_keep(alwaysFalse);

export default Observable_ignoreElements;
