/// <reference types="./Promiseable.toObservable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Observable_create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observer_getDispatcher from '../../../rx/__internal__/Observer/Observer.getDispatcher.mjs';
import Dispatcher_dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_toErrorHandler from '../../../util/__internal__/Disposable/Disposable.toErrorHandler.mjs';

const Promiseable_toObservable = () => (promise) => Observable_create(observer => {
    const dispatcher = Observer_getDispatcher(observer);
    promise.then(next => {
        if (!Disposable_isDisposed(dispatcher)) {
            pipe(dispatcher, Dispatcher_dispatch(next), Disposable_dispose());
        }
    }, Disposable_toErrorHandler(dispatcher));
});

export { Promiseable_toObservable as default };
