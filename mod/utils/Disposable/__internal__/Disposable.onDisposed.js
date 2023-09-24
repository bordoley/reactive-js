/// <reference types="./Disposable.onDisposed.d.ts" />

import { DisposableLike_add } from "../../../utils.js";
const Disposable_onDisposed = (teardown) => disposable => {
    disposable[DisposableLike_add](teardown);
    return disposable;
};
export default Disposable_onDisposed;
