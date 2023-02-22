/// <reference types="./Flowable.createLifted.d.ts" />

import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { composeUnsafe, pipe, returns } from "../../../functions.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_merge from "../../../rx/Observable/__internal__/Observable.merge.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { PauseableState_paused } from "../../../scheduling.js";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "../../Streamable/__internal__/Streamable.create.js";
const updateReducer = (acc, updater) => updater(acc);
const Flowable_createLifted = (...ops) => {
    const op = composeUnsafe(Observable_scan(updateReducer, returns(PauseableState_paused)), Container_concatWith({ concat: Observable_merge }, pipe([PauseableState_paused], ReadonlyArray_toRunnableObservable())), Observable_distinctUntilChanged(), ...ops);
    return Streamable_create((scheduler, options) => {
        const stream = Stream_create(op, scheduler, options);
        return pipe(stream, Dispatcher_dispatch(returns(PauseableState_paused)));
    });
};
export default Flowable_createLifted;
