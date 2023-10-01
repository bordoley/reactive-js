import { SideEffect1, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_forEach: Observable.Signature["forEach"] = <T>(
  effect: SideEffect1<T>,
) =>
  pipe(
    Observer_createForEachObserver<T>,
    partial(effect),
    Observable_liftWithSideEffects,
  );

export default Observable_forEach;
