/// <reference types="./Disposable.usingLazy.d.ts" />

import Disposable_usingImpl from "./Disposable.usingImpl.js";
const Disposable_usingLazy = (...factories) => f => () => Disposable_usingImpl(f, factories);
export default Disposable_usingLazy;
