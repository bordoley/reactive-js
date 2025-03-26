/// <reference types="./Runnable.lastAsync.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Runnable_last from "./Runnable.last.js";
const Runnable_lastAsync = 
/*@__PURE__*/ returns(async (runnable) => {
    await Promise.resolve();
    return pipe(runnable, Runnable_last());
});
export default Runnable_lastAsync;
