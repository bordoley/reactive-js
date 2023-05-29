import Observable_range from "../../Observable/__internal__/Observable.range.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_keys: ReadonlyArray.Signature["keys"] = (() => arr =>
  Observable_range(0, {
    count: arr.length,
  })) as ReadonlyArray.Signature["keys"];

export default ReadonlyArray_keys;
