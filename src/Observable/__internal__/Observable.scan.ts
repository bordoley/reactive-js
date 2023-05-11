import type * as Observable from "../../Observable.js";
import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import { Factory, Reducer, partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_scan: Observable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    Observer_createScanObserver<T, TAcc>,
    partial(reducer, initialValue),
    Observable_liftSource,
  );

export default Observable_scan;
