/// <reference types="./Disposable.addTo.d.ts" />

import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_addTo = (parent) => (child) => {
    addDisposableOrTeardown(parent, child);
    return child;
};
export default Disposable_addTo;
