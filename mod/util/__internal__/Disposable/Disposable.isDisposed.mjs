/// <reference types="./Disposable.isDisposed.d.ts" />
import { DisposableLike_isDisposed } from '../../../util.mjs';

const Disposable$isDisposed = (disposable) => disposable[DisposableLike_isDisposed];

export { Disposable$isDisposed as default };
