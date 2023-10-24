import { compose, tuple } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const Observable_fromValue: Observable.Signature["fromValue"] = <T>() =>
  compose(tuple<T>, Observable_fromReadonlyArray());

export default Observable_fromValue;
