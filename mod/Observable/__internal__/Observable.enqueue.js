/// <reference types="./Observable.enqueue.d.ts" />

import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { partial, pipe } from "../../functions.js";
const Observable_enqueue = ((queue) => pipe(Observer_createEnqueueObserver, partial(queue), Enumerable_lift));
export default Observable_enqueue;
