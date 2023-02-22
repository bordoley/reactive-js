/// <reference types="./Observable.endWith.d.ts" />

import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_endWith = 
/*@__PURE__*/ Container_endWith(Observable_concatWith, ReadonlyArray_toRunnableObservable);
export default Observable_endWith;
