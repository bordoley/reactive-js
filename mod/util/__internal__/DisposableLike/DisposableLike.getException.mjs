/// <reference types="./DisposableLike.getException.d.ts" />
import { DisposableLike_exception } from '../../../util.mjs';

const getException = (disposable) => disposable[DisposableLike_exception];

export { getException };
