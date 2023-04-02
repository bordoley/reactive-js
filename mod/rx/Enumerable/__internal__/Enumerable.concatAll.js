/// <reference types="./Enumerable.concatAll.d.ts" />

import Enumerable_mergeAll from "./Enumerable.mergeAll.js";
const Enumerable_concatAll = () => Enumerable_mergeAll({ maxConcurrency: 1 });
export default Enumerable_concatAll;
