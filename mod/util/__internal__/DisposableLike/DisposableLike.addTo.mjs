/// <reference types="./DisposableLike.addTo.d.ts" />
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__addTo = (parent) => (child) => {
    DisposableLike__addDisposableOrTeardown(parent, child);
    return child;
};

export { DisposableLike__addTo as default };
