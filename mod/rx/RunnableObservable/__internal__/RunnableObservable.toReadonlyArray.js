/// <reference types="./RunnableObservable.toReadonlyArray.d.ts" />

import { isSome, pipe, raiseError } from "../../../functions.js";
import VirtualTimeScheduler_create from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.create.js";
import VirtualTimeScheduler_run from "../../../scheduling/VirtualTimeScheduler/__internal__/VirtualTimeScheduler.run.js";
import Disposable_getError from "../../../util/Disposable/__internal__/Disposable.getError.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
const RunnableObservable_toReadonlyArray = () => observable => {
    const scheduler = VirtualTimeScheduler_create();
    const result = [];
    const subscription = pipe(observable, Observable_forEach(next => {
        result.push(next);
    }), Observable_subscribe(scheduler));
    VirtualTimeScheduler_run(scheduler);
    const error = Disposable_getError(subscription);
    return isSome(error) ? raiseError(error) : result;
};
export default RunnableObservable_toReadonlyArray;
