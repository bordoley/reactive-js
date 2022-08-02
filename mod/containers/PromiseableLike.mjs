/// <reference types="./PromiseableLike.d.ts" />
import { pipe } from '../functions.mjs';
import { createObservable } from '../rx.mjs';
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
