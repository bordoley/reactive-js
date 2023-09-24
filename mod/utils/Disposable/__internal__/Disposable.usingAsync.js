/// <reference types="./Disposable.usingAsync.d.ts" />

import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";
const Disposable_usingAsync = ((...factoryOrDisposables) => f => Disposable_usingAsyncImpl(f, factoryOrDisposables));
export default Disposable_usingAsync;
