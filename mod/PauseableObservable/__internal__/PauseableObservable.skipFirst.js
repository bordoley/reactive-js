/// <reference types="./PauseableObservable.skipFirst.d.ts" />

import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_skipFirst = (options = {}) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    const op = pipe((Observer_createSkipFirstObserver), partial(count), PauseableObservable_lift);
    return (obs) => (count > 0 ? op(obs) : obs);
};
export default PauseableObservable_skipFirst;
