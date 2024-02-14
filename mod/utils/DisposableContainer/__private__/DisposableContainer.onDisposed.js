/// <reference types="./DisposableContainer.onDisposed.d.ts" />

import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onDisposed = (teardown) => disposable => {
    disposable[DisposableContainerLike_add](teardown);
    return disposable;
};
export default DisposableContainer_onDisposed;
