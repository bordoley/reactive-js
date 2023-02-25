/// <reference types="./Flowable.createLifted.d.ts" />

import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { composeUnsafe, pipe, returns } from "../../../functions.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { PauseableState_paused } from "../../../scheduling.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_create from "../../Streamable/__internal__/Streamable.create.js";
const updateReducer = (acc, updater) => updater(acc);
const Flowable_createLifted = (...ops) => {
    const op = composeUnsafe(Observable_scan(updateReducer, returns(PauseableState_paused)), Observable_mergeWith(pipe([PauseableState_paused], ReadonlyArray_toRunnableObservable())), Observable_distinctUntilChanged(), ...ops);
    return Streamable_create((scheduler, options) => {
        const stream = Stream_create(op, scheduler, options);
        return pipe(stream, Queue_push(returns(PauseableState_paused)));
    });
};
export default Flowable_createLifted;
