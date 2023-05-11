/// <reference types="./SharedObservable.concatAll.d.ts" />

import SharedObservable_mergeAll from "./SharedObservable.mergeAll.js";
const SharedObservable_concatAll = () => SharedObservable_mergeAll({ concurrency: 1 });
export default SharedObservable_concatAll;
