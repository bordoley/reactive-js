/// <reference types="./DisposableLike.toAbortSignal.d.ts" />
import { newInstance, pipe } from '../../../functions.mjs';
import DisposableLike__onDisposed from './DisposableLike.onDisposed.mjs';

const DisposableLike__toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, DisposableLike__onDisposed(e => abortController.abort(e === null || e === void 0 ? void 0 : e.cause)));
    return abortController.signal;
};

export { DisposableLike__toAbortSignal as default };
