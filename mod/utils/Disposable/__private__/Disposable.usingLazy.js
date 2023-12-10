/// <reference types="./Disposable.usingLazy.d.ts" />

import Disposable_usingImpl from "./Disposable.usingImpl.js";
const Disposable_usingLazy = (...factoryOrDisposables) => f => () => Disposable_usingImpl(f, factoryOrDisposables);
export default Disposable_usingLazy;
