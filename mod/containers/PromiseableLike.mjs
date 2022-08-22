/// <reference types="./PromiseableLike.d.ts" />
import { createObservable } from '../__internal__/rx/__internal__ObservableLike.create.mjs';
import { pipe } from '../functions.mjs';
import { getDispatcher } from '../rx/ObserverLike.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { isDisposed, dispose, toErrorHandler } from '../util/DisposableLike.mjs';

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
