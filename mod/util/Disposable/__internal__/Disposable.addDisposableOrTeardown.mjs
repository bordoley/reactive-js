/// <reference types="./Disposable.addDisposableOrTeardown.d.ts" />
import { DisposableLike_add } from '../../../util.mjs';

const Disposable_addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};

export { Disposable_addDisposableOrTeardown as default };
