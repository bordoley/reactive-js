/// <reference types="./Disposable.toErrorHandler.d.ts" />
import { pipe, error } from '../../../functions.mjs';
import Disposable$dispose from './Disposable.dispose.mjs';

const Disposable$toErrorHandler = (disposable) => e => pipe(disposable, Disposable$dispose(error(e)));

export { Disposable$toErrorHandler as default };
