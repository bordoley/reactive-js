import type * as Observable from "../../Observable.js";
import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose } from "../../functions.js";

const Observable_fromValue: Observable.Signature["fromValue"] = () =>
  compose(ReadonlyArray_fromValue(), ReadonlyArray_toObservable());

export default Observable_fromValue;
