/// <reference types="./Disposable.usingAsyncLazy.d.ts" />

import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";
const Disposable_usingAsyncLazy = (...factories) => f => async () => Disposable_usingAsyncImpl(f, factories);
export default Disposable_usingAsyncLazy;
