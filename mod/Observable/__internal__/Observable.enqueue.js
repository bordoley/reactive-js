/// <reference types="./Observable.enqueue.d.ts" />

import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_enqueue = (queue) => pipe(Observer_createEnqueueObserver, partial(queue), Observable_liftSource);
export default Observable_enqueue;
