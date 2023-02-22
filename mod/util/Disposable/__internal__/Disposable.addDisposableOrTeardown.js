/// <reference types="./Disposable.addDisposableOrTeardown.d.ts" />

import { DisposableLike_add, } from "../../../util.js";
const Disposable_addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};
export default Disposable_addDisposableOrTeardown;
