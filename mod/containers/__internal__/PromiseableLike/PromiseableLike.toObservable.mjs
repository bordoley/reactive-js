/// <reference types="./PromiseableLike.toObservable.d.ts" />
import { pipe } from '../../../functions.mjs';
import { getDispatcher } from '../../../rx/ObserverLike.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import DispatcherLike__dispatch from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__toErrorHandler from '../../../util/__internal__/DisposableLike/DisposableLike.toErrorHandler.mjs';

const PromiseableLike__toObservable = () => (promise) => ObservableLike__create(observer => {
    const dispatcher = getDispatcher(observer);
    promise.then(next => {
        if (!DisposableLike__isDisposed(dispatcher)) {
            pipe(dispatcher, DispatcherLike__dispatch(next), DisposableLike__dispose());
        }
    }, DisposableLike__toErrorHandler(dispatcher));
});

export { PromiseableLike__toObservable as default };
