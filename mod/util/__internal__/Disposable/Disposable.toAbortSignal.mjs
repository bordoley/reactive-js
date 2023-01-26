/// <reference types="./Disposable.toAbortSignal.d.ts" />
import { newInstance, pipe } from '../../../functions.mjs';
import Disposable$onDisposed from './Disposable.onDisposed.mjs';

const Disposable$toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, Disposable$onDisposed(e => abortController.abort(e)));
    return abortController.signal;
};

export { Disposable$toAbortSignal as default };
