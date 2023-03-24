/// <reference types="./Disposable.addIgnoringChildErrors.d.ts" />

import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_addIgnoringChildErrors = (child) => (parent) => {
    Disposable_addDisposableOrTeardown(parent, child, true);
    return parent;
};
export default Disposable_addIgnoringChildErrors;
