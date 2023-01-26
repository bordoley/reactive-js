/// <reference types="./Disposable.add.d.ts" />
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_add = (child) => (parent) => {
    Disposable_addDisposableOrTeardown(parent, child);
    return parent;
};

export { Disposable_add as default };
