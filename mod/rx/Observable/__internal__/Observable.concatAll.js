/// <reference types="./Observable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_concatAll = () => Observable_mergeAll({ maxBufferSize: MAX_SAFE_INTEGER, maxConcurrency: 1 });
export default Observable_concatAll;
