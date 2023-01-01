/// <reference types="./PromiseableLike.toObservable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { getDispatcher } from '../../../rx/ObserverLike.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import { dispatch } from '../../../scheduling/DispatcherLike.mjs';
import { isDisposed, dispose, toErrorHandler } from '../../../util/DisposableLike.mjs';

const IterableLike__toObservable = () => (promise) => ObservableLike__create(observer => {
    const dispatcher = getDispatcher(observer);
    promise.then(next => {
        if (!isDisposed(dispatcher)) {
            pipe(dispatcher, dispatch(next), dispose());
        }
    }, toErrorHandler(dispatcher));
});

export { IterableLike__toObservable as default };
