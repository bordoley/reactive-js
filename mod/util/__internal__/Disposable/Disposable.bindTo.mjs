/// <reference types="./Disposable.bindTo.d.ts" />
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$bindTo = (child) => (parent) => {
    Disposable$addDisposableOrTeardown(parent, child);
    Disposable$addDisposableOrTeardown(child, parent);
    return parent;
};

export { Disposable$bindTo as default };
