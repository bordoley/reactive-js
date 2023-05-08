/// <reference types="./Observable.enqueue.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
const Observable_enqueue = ((queue) => pipe(Observer_createEnqueueObserver, partial(queue), Enumerable_lift));
export default Observable_enqueue;
