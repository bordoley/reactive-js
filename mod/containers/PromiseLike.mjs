/// <reference types="./PromiseLike.d.ts" />
import { pipe } from '../functions.mjs';
import { f as createObservable } from '../ReactiveContainerLike-e32dbf9b.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { getDispatcher } from '../scheduling/ObserverLike.mjs';
import { toErrorHandler } from '../util/DisposableLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const toObservable = () => (promise) => createObservable(observer => {
    const dispatcher = getDispatcher(observer);
    promise.then(next => {
        if (!isDisposed(dispatcher)) {
            pipe(dispatcher, dispatch(next), dispose());
        }
    }, toErrorHandler(dispatcher));
});
const toObservableT = { toObservable };

export { toObservable, toObservableT };
