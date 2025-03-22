import type * as Observable from "../../Observable.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_fromValue: Observable.Signature["fromValue"] =
  <T>(options?: { delay?: number }) =>
  (v: T) =>
    Observable_genPure<T>(function* ObservableFromValue() {
      yield v;
      // FIXME: Need to set the correct delay options
    }, options);

export default Observable_fromValue;
