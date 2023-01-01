/// <reference types="./DisposableLike.addToIgnoringChildErrors.d.ts" />
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__addToIgnoringChildErrors = (parent) => (child) => {
    DisposableLike__addDisposableOrTeardown(parent, child, true);
    return child;
};

export { DisposableLike__addToIgnoringChildErrors as default };
