import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_scan: PauseableObservable.Signature["scan"] = <
  T,
  TAcc,
>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) =>
  pipe(
    Observer_createScanObserver<T, TAcc>,
    partial(reducer, initialValue),
    PauseableObservable_lift,
  );

export default PauseableObservable_scan;
