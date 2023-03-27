/// <reference types="./Enumerable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";
const Enumerable_concatAll = () => Enumerable_mergeAll({ maxBufferSize: MAX_SAFE_INTEGER, maxConcurrency: 1 });
export default Enumerable_concatAll;
