/// <reference types="./RunnableObservable.toReadonlyArray.d.ts" />
import { pipe, isSome, raiseError } from '../../../functions.mjs';
import Continuation_run from '../../../scheduling/Continuation/__internal__/Continuation.run.mjs';
import VirtualTimeScheduler_create from '../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.mjs';
import Disposable_getError from '../../../util/Disposable/__internal__/Disposable.getError.mjs';
import Observable_forEach from '../../Observable/__internal__/Observable.forEach.mjs';
import Observable_subscribe from '../../Observable/__internal__/Observable.subscribe.mjs';

const RunnableObservable_toReadonlyArray = () => observable => {
    const scheduler = VirtualTimeScheduler_create();
    const result = [];
    const subscription = pipe(observable, Observable_forEach(next => {
        result.push(next);
    }), Observable_subscribe(scheduler));
    Continuation_run(scheduler);
    const error = Disposable_getError(subscription);
    return isSome(error) ? raiseError(error) : result;
};

export { RunnableObservable_toReadonlyArray as default };
