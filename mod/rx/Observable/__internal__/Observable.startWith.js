/// <reference types="./Observable.startWith.d.ts" />

import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Observable_concatWith from "./Observable.concatWith.js";
const Observable_startWith = 
/*@__PURE__*/ Container_startWith(Observable_concatWith, ReadonlyArray_toRunnableObservable);
export default Observable_startWith;
