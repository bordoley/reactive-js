/// <reference types="./Disposable.add.d.ts" />

import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_add = (child) => (parent) => {
    Disposable_addDisposableOrTeardown(parent, child);
    return parent;
};
export default Disposable_add;
