/// <reference types="./Disposable.getError.d.ts" />
import { DisposableLike_error } from '../../../util.mjs';

const Disposable$getError = (disposable) => disposable[DisposableLike_error];

export { Disposable$getError as default };
