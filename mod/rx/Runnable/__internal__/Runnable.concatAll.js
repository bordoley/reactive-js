/// <reference types="./Runnable.concatAll.d.ts" />

import Runnable_mergeAll from "./Runnable.mergeAll.js";
const Runnable_concatAll = () => Runnable_mergeAll({ concurrency: 1 });
export default Runnable_concatAll;
