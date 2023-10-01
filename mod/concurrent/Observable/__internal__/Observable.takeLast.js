/// <reference types="./Observable.takeLast.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createTakeLastObserver from "../../Observer/__internal__/Observer.createTakeLastObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_takeLast = (options = {}) => pipe(Observer_createTakeLastObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_takeLast;
