/// <reference types="./Disposable.addTo.d.ts" />

import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_addTo = (parent) => (child) => {
    Disposable_addDisposableOrTeardown(parent, child);
    return child;
};
export default Disposable_addTo;
