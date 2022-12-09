/// <reference types="./DisposableLike.addTo.d.ts" />
import { addDisposableOrTeardown } from './DisposableLike.addDisposableOrTeardown.mjs';

const addTo = (parent) => (child) => {
    addDisposableOrTeardown(parent, child);
    return child;
};

export { addTo };
