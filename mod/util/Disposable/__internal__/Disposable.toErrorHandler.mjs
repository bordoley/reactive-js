/// <reference types="./Disposable.toErrorHandler.d.ts" />
import { pipe, error } from '../../../functions.mjs';
import Disposable_dispose from './Disposable.dispose.mjs';

const Disposable_toErrorHandler = (disposable) => e => pipe(disposable, Disposable_dispose(error(e)));

export { Disposable_toErrorHandler as default };
