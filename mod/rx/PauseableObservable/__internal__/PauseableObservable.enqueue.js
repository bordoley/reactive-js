/// <reference types="./PauseableObservable.enqueue.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_enqueue = ((queue) => pipe(Observer_createEnqueueObserver, partial(queue), PauseableObservable_lift));
export default PauseableObservable_enqueue;
