/// <reference types="./Observable.takeFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createTakeFirstObserver from "../../Observer/__internal__/Observer.createTakeFirstObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_takeFirst = (options = {}) => pipe(Observer_createTakeFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_takeFirst;
