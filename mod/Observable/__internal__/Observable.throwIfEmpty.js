/// <reference types="./Observable.throwIfEmpty.d.ts" />

import Observer_createThrowIfEmptyObserver from "../../Observer/__internal__/Observer.createThrowIfEmptyObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_throwIfEmpty = (factory) => pipe(Observer_createThrowIfEmptyObserver, partial(factory), Observable_liftEnumerableUpperBounded);
export default Observable_throwIfEmpty;
