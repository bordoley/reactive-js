/// <reference types="./Disposable.addTo.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, } from "../../../util.js";
import Disposable_onError from "./Disposable.onError.js";
const Disposable_addTo = (parent) => (child) => {
    parent[DisposableLike_add](child);
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
    return child;
};
export default Disposable_addTo;
