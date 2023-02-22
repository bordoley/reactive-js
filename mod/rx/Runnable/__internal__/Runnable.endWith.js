/// <reference types="./Runnable.endWith.d.ts" />

import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import Runnable_concatWith from "./Runnable.concatWith.js";
const Runnable_endWith = 
/*@__PURE__*/ Container_endWith(Runnable_concatWith, ReadonlyArray_toRunnable);
export default Runnable_endWith;
