/// <reference types="./Observable.enqueue.d.ts" />

import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_enqueue = (queue) => pipe(Observer_createEnqueueObserver, partial(queue), Observable_liftEnumerableUpperBounded);
export default Observable_enqueue;
