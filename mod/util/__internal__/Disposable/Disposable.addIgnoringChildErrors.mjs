/// <reference types="./Disposable.addIgnoringChildErrors.d.ts" />
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$addIgnoringChildErrors = (child) => (parent) => {
    Disposable$addDisposableOrTeardown(parent, child, true);
    return parent;
};

export { Disposable$addIgnoringChildErrors as default };
