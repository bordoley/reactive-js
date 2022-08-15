/// <reference types="./PromiseableLike.d.ts" />
import { pipe } from '../functions.mjs';
import { e as createObservable, W as getDispatcher, i as isDisposed, B as dispatch, f as dispose, X as toErrorHandler } from '../DisposableLike-82e2991c.mjs';

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
