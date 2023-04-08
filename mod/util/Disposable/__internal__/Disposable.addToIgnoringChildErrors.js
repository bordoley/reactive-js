/// <reference types="./Disposable.addToIgnoringChildErrors.d.ts" />

import { DisposableLike_add } from "../../../util.js";
const Disposable_addToIgnoringChildErrors = (parent) => (child) => {
    parent[DisposableLike_add](child);
    return child;
};
export default Disposable_addToIgnoringChildErrors;
