/// <reference types="./Disposable.addToIgnoringChildErrors.d.ts" />

import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_addToIgnoringChildErrors = (parent) => (child) => {
    Disposable_addDisposableOrTeardown(parent, child, true);
    return child;
};
export default Disposable_addToIgnoringChildErrors;
