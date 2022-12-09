/// <reference types="./DisposableLike.addIgnoringChildErrors.d.ts" />
import { addDisposableOrTeardown } from './DisposableLike.addDisposableOrTeardown.mjs';

const addIgnoringChildErrors = (child) => (parent) => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
};

export { addIgnoringChildErrors };
