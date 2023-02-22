/// <reference types="./Observable.scanAsync.d.ts" />

import HigherOrderObservable_scanAsync from "../../HigherOrderObservable/__internal__/HigherOrderObservable.scanAsync.js";
import Observable_create from "./Observable.create.js";
const Observable_scanAsync = HigherOrderObservable_scanAsync(Observable_create);
export default Observable_scanAsync;
