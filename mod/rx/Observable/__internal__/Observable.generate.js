/// <reference types="./Observable.generate.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
const Observable_generate = (generator, initialValue, options) => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSubscribe = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!observer[DisposableLike_isDisposed]) {
                acc = generator(acc);
                observer[ObserverLike_notify](acc);
                Continuation__yield(delay);
            }
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
};
export default Observable_generate;
