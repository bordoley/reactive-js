/// <reference types="./Observable.toReadonlyArray.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import Continuation$run from '../../../scheduling/__internal__/Continuation/Continuation.run.mjs';
import VirtualTimeScheduler$create from '../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create.mjs';
import Disposable$getError from '../../../util/__internal__/Disposable/Disposable.getError.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$isRunnable from './Observable.isRunnable.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$toReadonlyArray = (options = {}) => observable => {
    if (Observable$isRunnable(observable)) {
        const { schedulerFactory = VirtualTimeScheduler$create } = options;
        const scheduler = schedulerFactory();
        const result = [];
        const subscription = pipe(observable, Observable$forEach(next => {
            result.push(next);
        }), Observable$subscribe(scheduler));
        Continuation$run(scheduler);
        const error = Disposable$getError(subscription);
        return isSome(error) ? raise(error) : result;
    }
    else {
        return [];
    }
};

export { Observable$toReadonlyArray as default };
