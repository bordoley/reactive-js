import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { pipe, returns } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_scanWithSpring from "./Observable.scanWithSpring.js";

const Observable_spring = (
  start: number,
  finish: number,
  options?: {
    stiffness?: number;
    damping?: number;
    precision?: number;
  },
): ObservableLike<number> =>
  pipe(
    finish,
    Optional_toObservable(),
    Observable_scanWithSpring(returns(start), options),
  );

export default Observable_spring;
