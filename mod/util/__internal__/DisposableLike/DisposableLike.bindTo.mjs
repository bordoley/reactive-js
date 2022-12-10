/// <reference types="./DisposableLike.bindTo.d.ts" />
import addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const bindTo = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
};

export { bindTo as default };
