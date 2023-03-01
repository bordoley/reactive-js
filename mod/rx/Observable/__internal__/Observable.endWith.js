/// <reference types="./Observable.endWith.d.ts" />

import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_endWith = 
/*@__PURE__*/ Container_endWith(Observable_concatWith, ReadonlyArray_toRunnable);
export default Observable_endWith;
