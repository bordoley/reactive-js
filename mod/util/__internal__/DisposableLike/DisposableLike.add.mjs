/// <reference types="./DisposableLike.add.d.ts" />
import { addDisposableOrTeardown } from './DisposableLike.addDisposableOrTeardown.mjs';

const add = (child) => (parent) => {
    addDisposableOrTeardown(parent, child);
    return parent;
};

export { add };
