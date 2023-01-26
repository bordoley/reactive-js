/// <reference types="./Disposable.add.d.ts" />
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$add = (child) => (parent) => {
    Disposable$addDisposableOrTeardown(parent, child);
    return parent;
};

export { Disposable$add as default };
