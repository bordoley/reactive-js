/// <reference types="./DisposableLike.isDisposed.d.ts" />
import { DisposableLike_isDisposed } from '../../../util.mjs';

const isDisposed = (disposable) => disposable[DisposableLike_isDisposed];

export { isDisposed as default };
