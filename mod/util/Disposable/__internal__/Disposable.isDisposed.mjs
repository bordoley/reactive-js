/// <reference types="./Disposable.isDisposed.d.ts" />
import { DisposableLike_isDisposed } from '../../../util.mjs';

const Disposable_isDisposed = (disposable) => disposable[DisposableLike_isDisposed];

export { Disposable_isDisposed as default };
