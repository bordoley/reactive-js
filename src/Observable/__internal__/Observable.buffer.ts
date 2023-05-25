import Enumerator_buffer from "../../Enumerator/__internal__/Enumerator.buffer.js";
import type * as Observable from "../../Observable.js";
import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";

const Observable_buffer: Observable.Signature["buffer"] = <T>(options?: {
  count?: number;
}) => {
  const count = clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER);
  const op = pipe(Observer_createBufferObserver, partial(count));
  return Observable_liftPureObservableOperator(Enumerator_buffer<T>(count), op);
};

export default Observable_buffer;
