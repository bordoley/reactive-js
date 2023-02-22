/// <reference types="./Disposable.add.d.ts" />

import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_add = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    return parent;
};
export default Disposable_add;
