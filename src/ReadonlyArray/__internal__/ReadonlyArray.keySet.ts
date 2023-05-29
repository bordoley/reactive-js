import Observable_toReadonlySet from "../../Observable/__internal__/Observable.toReadonlySet.js";
import { compose } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_keys from "./ReadonlyArray.keys.js";

const ReadonlyArray_keySet: ReadonlyArray.Signature["keySet"] = (() =>
  compose(
    ReadonlyArray_keys(),
    Observable_toReadonlySet(),
  )) as ReadonlyArray.Signature["keySet"];

export default ReadonlyArray_keySet;
