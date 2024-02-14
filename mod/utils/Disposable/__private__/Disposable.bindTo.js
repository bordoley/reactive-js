/// <reference types="./Disposable.bindTo.d.ts" />

import { DisposableContainerLike_add } from "../../../utils.js";
const Disposable_bindTo = (child) => (parent) => {
    parent[DisposableContainerLike_add](child);
    child[DisposableContainerLike_add](parent);
    return parent;
};
export default Disposable_bindTo;
