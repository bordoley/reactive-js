/// <reference types="./Disposable.bindTo.d.ts" />

import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_bindTo = (child) => (parent) => {
    Disposable_addDisposableOrTeardown(parent, child);
    Disposable_addDisposableOrTeardown(child, parent);
    return parent;
};
export default Disposable_bindTo;
