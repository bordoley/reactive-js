/// <reference types="./Runnable.concatAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";
const Runnable_concatAll = () => Runnable_mergeAll({ maxBufferSize: MAX_SAFE_INTEGER, maxConcurrency: 1 });
export default Runnable_concatAll;
