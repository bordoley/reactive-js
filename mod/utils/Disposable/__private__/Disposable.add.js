/// <reference types="./Disposable.add.d.ts" />

import Disposable_addChildToParent from "./Disposable.addChildToParent.js";
const Disposable_add = (child) => (parent) => {
    Disposable_addChildToParent(parent, child);
    return parent;
};
export default Disposable_add;
