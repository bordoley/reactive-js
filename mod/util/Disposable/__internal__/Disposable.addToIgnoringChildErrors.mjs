/// <reference types="./Disposable.addToIgnoringChildErrors.d.ts" />
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_addToIgnoringChildErrors = (parent) => (child) => {
    Disposable_addDisposableOrTeardown(parent, child, true);
    return child;
};

export { Disposable_addToIgnoringChildErrors as default };
