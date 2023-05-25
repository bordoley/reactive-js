/// <reference types="./Observable.buffer.d.ts" />

import Enumerator_buffer from "../../Enumerator/__internal__/Enumerator.buffer.js";
import Observer_createBufferObserver from "../../Observer/__internal__/Observer.createBufferObserver.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";
const Observable_buffer = (options) => {
    const count = clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER);
    const op = pipe(Observer_createBufferObserver, partial(count));
    return Observable_liftPureObservableOperator(Enumerator_buffer(count), op);
};
export default Observable_buffer;
