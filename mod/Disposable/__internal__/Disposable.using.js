/// <reference types="./Disposable.using.d.ts" />

import Disposable_usingImpl from "./Disposable.usingImpl.js";
const Disposable_using = ((...factoryOrDisposables) => f => Disposable_usingImpl(f, factoryOrDisposables));
export default Disposable_using;
