/// <reference types="./PauseableObservable.takeLast.d.ts" />

import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_takeLast = (options = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return pipe(Observer_createTakeLastObserver, partial(count), (PauseableObservable_lift));
};
export default PauseableObservable_takeLast;
