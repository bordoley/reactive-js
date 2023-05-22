/// <reference types="./Observable.skipFirst.d.ts" />

import Enumerator_skipFirst from "../../Enumerator/__internal__/Enumerator.skipFirst.js";
import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBound from "./Observable.liftEnumerableUpperBounded.js";
const Observable_skipFirst = (options = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    const op = pipe(Observer_createSkipFirstObserver, partial(count));
    return Observable_liftEnumerableUpperBound(Enumerator_skipFirst(count), op);
};
export default Observable_skipFirst;
