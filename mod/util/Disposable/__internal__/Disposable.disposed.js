/// <reference types="./Disposable.disposed.d.ts" />

import { DisposableLike_dispose } from "../../../util.js";
import create from "./Disposable.create.js";
const Disposable_disposed = /*@__PURE__*/ (() => {
    const instance = create();
    instance[DisposableLike_dispose]();
    return instance;
})();
export default Disposable_disposed;
