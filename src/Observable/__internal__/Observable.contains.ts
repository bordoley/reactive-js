import type * as Observable from "../../Observable.js";
import { isEqualTo } from "../../functions.js";
import Observable_someSatisfy from "./Observable.someSatisfy.js";

const Observable_contains: Observable.Signature["contains"] = (
  value,
  options,
) => Observable_someSatisfy(isEqualTo(value, options));

export default Observable_contains;
