/// <reference types="./Disposable.using.d.ts" />

import Disposable_usingImpl from "./Disposable.usingImpl.js";
const Disposable_using = ((...factories) => f => Disposable_usingImpl(f, factories));
export default Disposable_using;
