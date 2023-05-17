import type * as Observable from "../../Observable.js";
import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";

const Observable_buffer: Observable.Signature["buffer"] = (options?: {
  count?: number;
}) =>
  pipe(
    Observer_createBufferObserver,
    partial(clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER)),
    Observable_liftEnumerableUpperBounded,
  );

export default Observable_buffer;
