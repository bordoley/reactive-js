/// <reference types="./DisposableLike.addDisposableOrTeardown.d.ts" />
import { DisposableLike_add } from '../../../util.mjs';

const DisposableLike__addDisposableOrTeardown = (parent, child, ignoreChildErrors = false) => {
    parent[DisposableLike_add](child, ignoreChildErrors);
};

export { DisposableLike__addDisposableOrTeardown as default };
