/// <reference types="./Observable.enqueue.d.ts" />

import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { bindMethod, partial, pipe } from "../../functions.js";
import { QueueableLike_enqueue } from "../../types.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_enqueue = (queue) => {
    const op = pipe(Observer_createEnqueueObserver, partial(queue));
    return Observable_liftWithSideEffects(Enumerator_forEach(bindMethod(queue, QueueableLike_enqueue)), op);
};
export default Observable_enqueue;
