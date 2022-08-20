/// <reference types="./PromiseableLike.d.ts" />
import { pipe } from '../functions.mjs';
import { d as createObservable, i as isDisposed, e as dispose, F as toErrorHandler } from '../rx-31e22181.mjs';
import { dispatch } from '../scheduling/DispatcherLike.mjs';
import { getDispatcher } from '../scheduling/ObserverLike.mjs';

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
