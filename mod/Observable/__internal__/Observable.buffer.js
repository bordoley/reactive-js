/// <reference types="./Observable.buffer.d.ts" />

import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_buffer = (count) => pipe(Observer_createBufferObserver, partial(clampPositiveNonZeroInteger(count)), Observable_liftEnumerableUpperBounded);
export default Observable_buffer;
