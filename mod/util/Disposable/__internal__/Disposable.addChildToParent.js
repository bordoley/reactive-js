/// <reference types="./Disposable.addChildToParent.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, } from "../../../util.js";
import Disposable_onError from "./Disposable.onError.js";
const Disposable_addChildToParent = (parent, child, options) => {
    const { ignoreChildErrors = false } = options ?? {};
    parent[DisposableLike_add](child);
    if (!ignoreChildErrors) {
        pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
    }
};
export default Disposable_addChildToParent;
