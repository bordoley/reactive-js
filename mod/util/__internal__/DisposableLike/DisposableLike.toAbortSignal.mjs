/// <reference types="./DisposableLike.toAbortSignal.d.ts" />
import { newInstance, pipe } from '../../../functions.mjs';
import { onDisposed } from './DisposableLike.onDisposed.mjs';

const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, onDisposed(e => abortController.abort(e === null || e === void 0 ? void 0 : e.cause)));
    return abortController.signal;
};

export { toAbortSignal };
