/// <reference types="./Observable.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createTakeWhileObserver from "../../Observer/__private__/Observer.createTakeWhileObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_takeWhile = (predicate, options = {}) => pipe(Observer_createTakeWhileObserver, partial(predicate, options?.inclusive ?? false), Observable_liftPure);
export default Observable_takeWhile;
