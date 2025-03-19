import { ignore, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";

const Observable_never: Observable.Signature["never"] = /*@__PURE__*/ (() =>
  returns(Source.create(ignore)))() as Observable.Signature["never"];

export default Observable_never;
