import { ignore, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_createMulticast from "./Observable.createMulticast.js";

const neverInstance = /*@__PURE__*/ Observable_createMulticast(ignore);
const Observable_never: Observable.Signature["never"] = /*@__PURE__*/ returns(
  neverInstance,
) as Observable.Signature["never"];

export default Observable_never;
