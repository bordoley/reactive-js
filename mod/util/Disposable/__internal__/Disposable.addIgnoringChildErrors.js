/// <reference types="./Disposable.addIgnoringChildErrors.d.ts" />

import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_addIgnoringChildErrors = (child) => (parent) => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
};
export default Disposable_addIgnoringChildErrors;
