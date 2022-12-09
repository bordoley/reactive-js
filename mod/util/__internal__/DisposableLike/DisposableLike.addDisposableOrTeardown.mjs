/// <reference types="./DisposableLike.addDisposableOrTeardown.d.ts" />
import { DisposableLike_add } from '../../../util.mjs';

const addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};

export { addDisposableOrTeardown };
