/// <reference types="./Disposable.addIgnoringChildErrors.d.ts" />
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_addIgnoringChildErrors = (child) => (parent) => {
    Disposable_addDisposableOrTeardown(parent, child, true);
    return parent;
};

export { Disposable_addIgnoringChildErrors as default };
