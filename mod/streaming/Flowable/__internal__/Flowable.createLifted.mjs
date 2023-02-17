/// <reference types="./Flowable.createLifted.d.ts" />
import Container_concatWith from '../../../containers/Container/__internal__/Container.concatWith.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import { composeUnsafe, returns, pipe } from '../../../functions.mjs';
import Observable_distinctUntilChanged from '../../../rx/Observable/__internal__/Observable.distinctUntilChanged.mjs';
import Observable_merge from '../../../rx/Observable/__internal__/Observable.merge.mjs';
import Observable_scan from '../../../rx/Observable/__internal__/Observable.scan.mjs';
import { PauseableState_paused } from '../../../scheduling.mjs';
import Dispatcher_dispatch from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.mjs';
import Stream_create from '../../Stream/__internal__/Stream.create.mjs';
import Streamable_create from '../../Streamable/__internal__/Streamable.create.mjs';

const updateReducer = (acc, updater) => updater(acc);
const Flowable_createLifted = (...ops) => {
    const op = composeUnsafe(Observable_scan(updateReducer, returns(PauseableState_paused)), Container_concatWith({ concat: Observable_merge }, pipe([PauseableState_paused], ReadonlyArray_toRunnableObservable())), Observable_distinctUntilChanged(), ...ops);
    return Streamable_create((scheduler, options) => {
        const stream = Stream_create(op, scheduler, options);
        return pipe(stream, Dispatcher_dispatch(returns(PauseableState_paused)));
    });
};

export { Flowable_createLifted as default };
