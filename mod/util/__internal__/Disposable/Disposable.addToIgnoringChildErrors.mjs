/// <reference types="./Disposable.addToIgnoringChildErrors.d.ts" />
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$addToIgnoringChildErrors = (parent) => (child) => {
    Disposable$addDisposableOrTeardown(parent, child, true);
    return child;
};

export { Disposable$addToIgnoringChildErrors as default };
