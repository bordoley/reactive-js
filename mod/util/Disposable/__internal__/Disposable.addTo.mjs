/// <reference types="./Disposable.addTo.d.ts" />
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_addTo = (parent) => (child) => {
    Disposable_addDisposableOrTeardown(parent, child);
    return child;
};

export { Disposable_addTo as default };
