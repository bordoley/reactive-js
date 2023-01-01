/// <reference types="./DisposableLike.bindTo.d.ts" />
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__bindTo = (child) => (parent) => {
    DisposableLike__addDisposableOrTeardown(parent, child);
    DisposableLike__addDisposableOrTeardown(child, parent);
    return parent;
};

export { DisposableLike__bindTo as default };
