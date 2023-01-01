/// <reference types="./DisposableLike.add.d.ts" />
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__add = (child) => (parent) => {
    DisposableLike__addDisposableOrTeardown(parent, child);
    return parent;
};

export { DisposableLike__add as default };
