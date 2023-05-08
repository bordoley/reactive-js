/// <reference types="./Disposable.bindTo.d.ts" />

import { DisposableLike_add } from "../../../core.js";
const Disposable_bindTo = (child) => (parent) => {
    parent[DisposableLike_add](child);
    child[DisposableLike_add](parent);
    return parent;
};
export default Disposable_bindTo;
