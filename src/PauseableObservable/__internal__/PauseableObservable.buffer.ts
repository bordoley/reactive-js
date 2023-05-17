import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_buffer: PauseableObservable.Signature["buffer"] = <T>(
  count: number,
) =>
  pipe(
    Observer_createBufferObserver<T>,
    partial(clampPositiveNonZeroInteger(count)),
    PauseableObservable_lift,
  );

export default PauseableObservable_buffer;
