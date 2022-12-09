/// <reference types="./DisposableLike.toErrorHandler.d.ts" />
import { pipe } from '../../../functions.mjs';
import { dispose } from './DisposableLike.dispose.mjs';

const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));

export { toErrorHandler };
