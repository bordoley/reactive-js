/// <reference types="./DisposableLike.addToIgnoringChildErrors.d.ts" />
import { addDisposableOrTeardown } from './DisposableLike.addDisposableOrTeardown.mjs';

const addToIgnoringChildErrors = (parent) => (child) => {
    addDisposableOrTeardown(parent, child, true);
    return child;
};

export { addToIgnoringChildErrors };
