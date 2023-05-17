import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_buffer: PauseableObservable.Signature["buffer"] = <
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    Observer_createBufferObserver<T>,
    partial(clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER)),
    PauseableObservable_lift,
  );

export default PauseableObservable_buffer;
