import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_scan: Observable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    Observer_createScanObserver<T, TAcc>,
    partial(reducer, initialValue),
    Observable_liftPure,
  );

export default Observable_scan;
