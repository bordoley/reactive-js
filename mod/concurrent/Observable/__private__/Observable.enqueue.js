/// <reference types="./Observable.enqueue.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createEnqueueObserver from "../../Observer/__private__/Observer.createEnqueueObserver.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_enqueue = (queue) => pipe(Observer_createEnqueueObserver, partial(queue), Observable_liftWithSideEffects);
export default Observable_enqueue;
