/// <reference types="./DisposableLike.addIgnoringChildErrors.d.ts" />
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__addIgnoringChildErrors = (child) => (parent) => {
    DisposableLike__addDisposableOrTeardown(parent, child, true);
    return parent;
};

export { DisposableLike__addIgnoringChildErrors as default };
