/// <reference types="./Observable.keep.d.ts" />

import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_keep = (predicate) => {
    const op = pipe((Observer_createKeepObserver), partial(predicate));
    return Observable_liftPure(Enumerator_keep(predicate), op);
};
export default Observable_keep;
