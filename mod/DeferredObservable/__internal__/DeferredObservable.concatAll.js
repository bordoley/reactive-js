/// <reference types="./DeferredObservable.concatAll.d.ts" />

import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";
const DeferredObservable_concatAll = () => DeferredObservable_mergeAll({ concurrency: 1 });
export default DeferredObservable_concatAll;
