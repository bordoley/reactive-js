/// <reference types="./Disposable.isDisposed.d.ts" />

import { DisposableLike_isDisposed } from "../../../util.js";
const Disposable_isDisposed = (disposable) => disposable[DisposableLike_isDisposed];
export default Disposable_isDisposed;
