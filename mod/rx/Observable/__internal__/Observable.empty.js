/// <reference types="./Observable.empty.d.ts" />

import { pipe, pipeLazy } from "../../../functions.js";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import EnumerableObservable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import RunnableObservable_create from "../../RunnableObservable/__internal__/RunnableObservable.create.js";
const Observable_empty = (options) => hasDelay(options)
    ? RunnableObservable_create(observer => {
        pipe(observer, Observer_schedule(pipeLazy(observer, Disposable_dispose()), options));
    })
    : EnumerableObservable_create(sink => {
        pipe(sink, Disposable_dispose());
    });
export default Observable_empty;
