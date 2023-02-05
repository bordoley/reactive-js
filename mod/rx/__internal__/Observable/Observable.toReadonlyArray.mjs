/// <reference types="./Observable.toReadonlyArray.d.ts" />
import { pipe, isSome, raiseError } from '../../../functions.mjs';
import Continuation_run from '../../../scheduling/__internal__/Continuation/Continuation.run.mjs';
import VirtualTimeScheduler_create from '../../../scheduling/__internal__/VirtualTimeScheduler/VirtualTimeScheduler.create.mjs';
import Disposable_getError from '../../../util/__internal__/Disposable/Disposable.getError.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_isRunnable from './Observable.isRunnable.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_toReadonlyArray = (options = {}) => observable => {
    if (Observable_isRunnable(observable)) {
        const { schedulerFactory = VirtualTimeScheduler_create } = options;
        const scheduler = schedulerFactory();
        const result = [];
        const subscription = pipe(observable, Observable_forEach(next => {
            result.push(next);
        }), Observable_subscribe(scheduler));
        Continuation_run(scheduler);
        const error = Disposable_getError(subscription);
        return isSome(error) ? raiseError(error) : result;
    }
    else {
        return [];
    }
};

export { Observable_toReadonlyArray as default };
