/// <reference types="./Runnable.firstAsync.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Runnable_first from "./Runnable.first.js";
const Runnable_firstAsync = 
/*@__PURE__*/ returns(async (runnable) => {
    await Promise.resolve();
    return pipe(runnable, Runnable_first());
});
export default Runnable_firstAsync;
