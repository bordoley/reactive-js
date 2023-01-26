/// <reference types="./Disposable.toAbortSignal.d.ts" />
import { newInstance, pipe } from '../../../functions.mjs';
import Disposable_onDisposed from './Disposable.onDisposed.mjs';

const Disposable_toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, Disposable_onDisposed(e => abortController.abort(e)));
    return abortController.signal;
};

export { Disposable_toAbortSignal as default };
