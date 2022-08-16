/// <reference types="./PromiseableLike.d.ts" />
import { pipe } from '../functions.mjs';
import { e as createObservable, i as isDisposed, f as dispose, F as toErrorHandler } from '../DisposableLike-45fa23bf.mjs';
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
