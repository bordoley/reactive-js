/// <reference types="./Promiseable.toObservable.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";
const Promiseable_toObservable = () => (promise) => Observable_create(observer => {
    const dispatcher = Observer_getDispatcher(observer);
    promise.then(next => {
        if (!Disposable_isDisposed(dispatcher)) {
            pipe(dispatcher, Queueable_push(next), Disposable_dispose());
        }
    }, Disposable_toErrorHandler(dispatcher));
});
export default Promiseable_toObservable;
