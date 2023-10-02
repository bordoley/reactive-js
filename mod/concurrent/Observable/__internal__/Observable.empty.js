/// <reference types="./Observable.empty.d.ts" />

import { returns } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observable_createRunnable from "./Observable.createRunnable.js";
const emptyObservable = /*@__PURE__*/ Observable_createRunnable(observer => {
    observer[DisposableLike_dispose]();
});
const Observable_empty = 
/*@__PURE__*/ returns(emptyObservable);
export default Observable_empty;
