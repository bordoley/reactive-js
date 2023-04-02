/// <reference types="./Observable.concatAll.d.ts" />

import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_concatAll = () => Observable_mergeAll({ maxConcurrency: 1 });
export default Observable_concatAll;
