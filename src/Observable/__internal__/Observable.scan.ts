import Enumerator_scan from "../../Enumerator/__internal__/Enumerator.scan.js";
import type * as Observable from "../../Observable.js";
import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import { Factory, Reducer, partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_scan: Observable.Signature["scan"] = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => {
  const op = pipe(
    Observer_createScanObserver<T, TAcc>,
    partial(reducer, initialValue),
  );

  return Observable_liftPure(Enumerator_scan(reducer, initialValue), op);
};

export default Observable_scan;
