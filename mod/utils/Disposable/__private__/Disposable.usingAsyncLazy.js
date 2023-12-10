/// <reference types="./Disposable.usingAsyncLazy.d.ts" />

import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";
const Disposable_usingAsyncLazy = (...factoryOrDisposables) => f => async () => Disposable_usingAsyncImpl(f, factoryOrDisposables);
export default Disposable_usingAsyncLazy;
