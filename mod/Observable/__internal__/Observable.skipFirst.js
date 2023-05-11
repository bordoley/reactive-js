/// <reference types="./Observable.skipFirst.d.ts" />

import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_skipFirst = ((options = {}) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    const op = pipe((Observer_createSkipFirstObserver), partial(count), (Observable_liftSource));
    return (obs) => (count > 0 ? op(obs) : obs);
});
export default Observable_skipFirst;
