/// <reference types="./Runnable.startWith.d.ts" />

import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import Runnable_concatWith from "./Runnable.concatWith.js";
const Runnable_startWith = 
/*@__PURE__*/ Container_startWith(Runnable_concatWith, ReadonlyArray_toRunnable);
export default Runnable_startWith;
