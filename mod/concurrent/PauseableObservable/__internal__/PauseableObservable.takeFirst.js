/// <reference types="./PauseableObservable.takeFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createTakeFirstObserver from "../../Observer/__internal__/Observer.createTakeFirstObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_takeFirst = (options = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return pipe(Observer_createTakeFirstObserver, partial(count), PauseableObservable_lift);
};
export default PauseableObservable_takeFirst;
