/// <reference types="./Disposable.addChildToParent.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { DisposableContainerLike_add, DisposableLike_dispose, } from "../../../utils.js";
import * as DisposableContainer from "../../DisposableContainer.js";
const Disposable_addChildToParent = (parent, child) => {
    parent[DisposableContainerLike_add](child);
    pipe(child, DisposableContainer.onError(bindMethod(parent, DisposableLike_dispose)));
};
export default Disposable_addChildToParent;
