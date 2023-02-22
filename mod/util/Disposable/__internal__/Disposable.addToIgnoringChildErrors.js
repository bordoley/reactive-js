/// <reference types="./Disposable.addToIgnoringChildErrors.d.ts" />

import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_addToIgnoringChildErrors = (parent) => (child) => {
    addDisposableOrTeardown(parent, child, true);
    return child;
};
export default Disposable_addToIgnoringChildErrors;
