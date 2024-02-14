/// <reference types="./Disposable.addTo.d.ts" />

import Disposable_addChildToParent from "./Disposable.addChildToParent.js";
const Disposable_addTo = (parent) => (child) => {
    Disposable_addChildToParent(parent, child);
    return child;
};
export default Disposable_addTo;
