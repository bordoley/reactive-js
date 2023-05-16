/// <reference types="./MulticastObservable.concatAll.d.ts" />

import MulticastObservable_mergeAll from "./MulticastObservable.mergeAll.js";
const MulticastObservable_concatAll = () => MulticastObservable_mergeAll({ concurrency: 1 });
export default MulticastObservable_concatAll;
