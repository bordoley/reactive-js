/// <reference types="./PauseableObservable.buffer.d.ts" />

import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_buffer = (count) => pipe((Observer_createBufferObserver), partial(clampPositiveNonZeroInteger(count)), PauseableObservable_lift);
export default PauseableObservable_buffer;
