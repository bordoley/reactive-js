/// <reference types="./Observable.takeFirst.d.ts" />

import Observer_createTakeFirstObserver from "../../Observer/__internal__/Observer.takeFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_takeFirst = (options = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return pipe(Observer_createTakeFirstObserver, partial(count), Observable_liftSource);
};
export default Observable_takeFirst;
