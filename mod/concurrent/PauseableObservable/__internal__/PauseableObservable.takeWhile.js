/// <reference types="./PauseableObservable.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createTakeWhileObserver from "../../Observer/__internal__/Observer.createTakeWhileObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(Observer_createTakeWhileObserver, partial(predicate, inclusive), (PauseableObservable_lift));
};
export default PauseableObservable_takeWhile;
