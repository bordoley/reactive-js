/// <reference types="./Disposable.add.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, } from "../../../util.js";
import Disposable_onError from "./Disposable.onError.js";
const Disposable_add = (child) => (parent) => {
    parent[DisposableLike_add](child);
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
    return parent;
};
export default Disposable_add;
