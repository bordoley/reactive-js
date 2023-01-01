/// <reference types="./DisposableLike.toErrorHandler.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__dispose from './DisposableLike.dispose.mjs';

const DisposableLike__toErrorHandler = (disposable) => cause => pipe(disposable, DisposableLike__dispose({ cause }));

export { DisposableLike__toErrorHandler as default };
