/// <reference types="./Producer.scanDistinct.d.ts" />

import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Producer_concat from "./Producer.concat.js";
import Producer_distinctUntilChanged from "./Producer.distinctUntilChanged.js";
import { Producer_genPure } from "./Producer.gen.js";
import Producer_scan from "./Producer.scan.js";
const m = {
    concat: Producer_concat,
    distinctUntilChanged: Producer_distinctUntilChanged,
    genPure: Producer_genPure,
    scan: Producer_scan,
};
const Producer_scanDistinct = ((reducer, initialState, options) => DeferredSource.scanDistinct(m)(reducer, initialState, options));
export default Producer_scanDistinct;
