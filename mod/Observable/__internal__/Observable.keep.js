/// <reference types="./Observable.keep.d.ts" />

import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_keep = (predicate) => pipe(Observer_createKeepObserver, partial(predicate), Observable_liftEnumerableUpperBounded);
export default Observable_keep;
