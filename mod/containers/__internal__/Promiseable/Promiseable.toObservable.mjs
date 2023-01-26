/// <reference types="./Promiseable.toObservable.d.ts" />
import { pipe } from '../../../functions.mjs';
import Observable$create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observer$getDispatcher from '../../../rx/__internal__/Observer/Observer.getDispatcher.mjs';
import Dispatcher$dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$toErrorHandler from '../../../util/__internal__/Disposable/Disposable.toErrorHandler.mjs';

const Promiseable$toObservable = () => (promise) => Observable$create(observer => {
    const dispatcher = Observer$getDispatcher(observer);
    promise.then(next => {
        if (!Disposable$isDisposed(dispatcher)) {
            pipe(dispatcher, Dispatcher$dispatch(next), Disposable$dispose());
        }
    }, Disposable$toErrorHandler(dispatcher));
});

export { Promiseable$toObservable as default };
