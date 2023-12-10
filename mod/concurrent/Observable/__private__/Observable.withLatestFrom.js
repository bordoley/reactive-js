/// <reference types="./Observable.withLatestFrom.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createWithLatestFromObserver from "../../Observer/__private__/Observer.createWithLatestFromObserver.js";
import Observable_lift from "./Observable.lift.js";
const Observable_withLatestFrom = ((other, selector) => pipe(Observer_createWithLatestFromObserver, partial(other, selector), Observable_lift(other)));
export default Observable_withLatestFrom;
