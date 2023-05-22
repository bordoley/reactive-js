/// <reference types="./Observable.forEach.d.ts" />

import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBound from "./Observable.liftEnumerableUpperBounded.js";
const Observable_forEach = (effect) => {
    const op = pipe((Observer_createForEachObserver), partial(effect));
    return Observable_liftEnumerableUpperBound(Enumerator_forEach(effect), op);
};
export default Observable_forEach;
