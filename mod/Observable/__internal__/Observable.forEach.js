/// <reference types="./Observable.forEach.d.ts" />

import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_forEach = (effect) => pipe(Observer_createForEachObserver, partial(effect), Observable_liftEnumerableUpperBounded);
export default Observable_forEach;
