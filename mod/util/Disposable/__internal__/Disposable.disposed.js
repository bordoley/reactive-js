/// <reference types="./Disposable.disposed.d.ts" />

import { pipe } from "../../../functions.js";
import create from "./Disposable.create.js";
import dispose from "./Disposable.dispose.js";
const Disposable_disposed = /*@__PURE__*/ (() => {
    const instance = create();
    pipe(instance, dispose());
    return instance;
})();
export default Disposable_disposed;
