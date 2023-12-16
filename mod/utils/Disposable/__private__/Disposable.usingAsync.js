/// <reference types="./Disposable.usingAsync.d.ts" />

import Disposable_usingAsyncImpl from "./Disposable.usingAsyncImpl.js";
const Disposable_usingAsync = ((...factories) => f => Disposable_usingAsyncImpl(f, factories));
export default Disposable_usingAsync;
