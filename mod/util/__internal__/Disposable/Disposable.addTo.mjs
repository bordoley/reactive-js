/// <reference types="./Disposable.addTo.d.ts" />
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$addTo = (parent) => (child) => {
    Disposable$addDisposableOrTeardown(parent, child);
    return child;
};

export { Disposable$addTo as default };
