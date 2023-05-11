/// <reference types="./Observable.withLatestFrom.d.ts" />

import Observer_createWithLatestObserver from "../../Observer/__internal__/Observer.createWithLatestObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";
const Observable_withLatestFrom = ((other, selector) => pipe(Observer_createWithLatestObserver, partial(other, selector), Observable_liftUpperBoundedBy(other)));
export default Observable_withLatestFrom;
