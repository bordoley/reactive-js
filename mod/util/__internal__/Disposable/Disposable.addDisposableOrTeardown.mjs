/// <reference types="./Disposable.addDisposableOrTeardown.d.ts" />
import { DisposableLike_add } from '../../../util.mjs';

const Disposable$addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};

export { Disposable$addDisposableOrTeardown as default };
