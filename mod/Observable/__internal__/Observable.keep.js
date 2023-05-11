/// <reference types="./Observable.keep.d.ts" />

import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_keep = (predicate) => pipe(Observer_createKeepObserver, partial(predicate), Observable_liftSource);
export default Observable_keep;
