/// <reference types="./Observable.scanDistinct.d.ts" />

import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Observable_concat from "./Observable.concat.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import { Observable_genPure } from "./Observable.gen.js";
import Observable_scan from "./Observable.scan.js";
const m = {
    concat: Observable_concat,
    distinctUntilChanged: Observable_distinctUntilChanged,
    genPure: Observable_genPure,
    scan: Observable_scan,
};
const Observable_scanDistinct = ((reducer, initialState, options) => DeferredSource.scanDistinct(m)(reducer, initialState, options));
export default Observable_scanDistinct;
