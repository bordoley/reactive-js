/// <reference types="./Disposable.disposed.d.ts" />

import { DisposableLike_dispose } from "../../types.js";
import Disposable_create from "./Disposable.create.js";
const Disposable_disposed = 
/*@__PURE__*/ (() => {
    const instance = Disposable_create();
    instance[DisposableLike_dispose]();
    return instance;
})();
export default Disposable_disposed;
