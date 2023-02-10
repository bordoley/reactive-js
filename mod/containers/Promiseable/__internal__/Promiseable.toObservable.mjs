/// <reference types="./Promiseable.toObservable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Observable_create from '../../../rx/Observable/__internal__/Observable.create.mjs';
import Observer_getDispatcher from '../../../rx/Observer/__internal__/Observer.getDispatcher.mjs';
import Dispatcher_dispatch from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_toErrorHandler from '../../../util/Disposable/__internal__/Disposable.toErrorHandler.mjs';

const Promiseable_toObservable = () => (promise) => Observable_create(observer => {
    const dispatcher = Observer_getDispatcher(observer);
    promise.then(next => {
        if (!Disposable_isDisposed(dispatcher)) {
            pipe(dispatcher, Dispatcher_dispatch(next), Disposable_dispose());
        }
    }, Disposable_toErrorHandler(dispatcher));
});

export { Promiseable_toObservable as default };
