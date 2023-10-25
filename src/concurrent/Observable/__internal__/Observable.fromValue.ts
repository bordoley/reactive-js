import { compose, isSome, none, tuple } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";

const Observable_fromValue: Observable.Signature["fromValue"] = <T>(options?: {
  delay: number;
}) =>
  compose(
    tuple<T>,
    Observable_fromReadonlyArray(
      isSome(options) ? { ...options, delayStart: true } : none,
    ),
  );

export default Observable_fromValue;
