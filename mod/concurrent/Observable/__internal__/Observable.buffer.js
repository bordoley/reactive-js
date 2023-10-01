/// <reference types="./Observable.buffer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_buffer = (options) => pipe((Observer_createBufferObserver), partial(clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER)), Observable_liftPure);
export default Observable_buffer;
