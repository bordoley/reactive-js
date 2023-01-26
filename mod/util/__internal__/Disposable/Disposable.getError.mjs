/// <reference types="./Disposable.getError.d.ts" />
import { DisposableLike_error } from '../../../util.mjs';

const Disposable_getError = (disposable) => disposable[DisposableLike_error];

export { Disposable_getError as default };
