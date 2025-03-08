import { returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";

const neverInstance = /*@__PURE__*/ Subject.create();
const Observable_never: Observable.Signature["never"] = /*@__PURE__*/ returns(
  neverInstance,
) as Observable.Signature["never"];

export default Observable_never;
