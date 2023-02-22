/// <reference types="./Disposable.bindTo.d.ts" />

import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_bindTo = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
};
export default Disposable_bindTo;
