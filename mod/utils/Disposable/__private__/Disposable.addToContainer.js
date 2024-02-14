/// <reference types="./Disposable.addToContainer.d.ts" />

import { DisposableContainerLike_add, } from "../../../utils.js";
const Disposable_addToContainer = (parent) => (child) => {
    parent[DisposableContainerLike_add](child);
    return child;
};
export default Disposable_addToContainer;
