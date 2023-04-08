/// <reference types="./Disposable.addIgnoringChildErrors.d.ts" />

import { DisposableLike_add } from "../../../util.js";
const Disposable_addIgnoringChildErrors = (child) => (parent) => {
    parent[DisposableLike_add](child);
    return parent;
};
export default Disposable_addIgnoringChildErrors;
