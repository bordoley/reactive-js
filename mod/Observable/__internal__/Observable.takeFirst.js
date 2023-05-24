/// <reference types="./Observable.takeFirst.d.ts" />

import Enumerator_takeFirst from "../../Enumerator/__internal__/Enumerator.takeFirst.js";
import Observer_createTakeFirstObserver from "../../Observer/__internal__/Observer.createTakeFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_takeFirst = (options = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    const op = pipe(Observer_createTakeFirstObserver, partial(count));
    return Observable_liftPure(Enumerator_takeFirst(count), op);
};
export default Observable_takeFirst;
