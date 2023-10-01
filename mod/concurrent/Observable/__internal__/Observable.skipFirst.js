/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_skipFirst = (options = {}) => pipe(Observer_createSkipFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_skipFirst;
