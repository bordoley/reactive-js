/// <reference types="./DisposableLike.toErrorHandler.d.ts" />
import { pipe, error } from '../../../functions.mjs';
import DisposableLike__dispose from './DisposableLike.dispose.mjs';

const DisposableLike__toErrorHandler = (disposable) => e => pipe(disposable, DisposableLike__dispose(error(e)));

export { DisposableLike__toErrorHandler as default };
