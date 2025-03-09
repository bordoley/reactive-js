/// <reference types="./Runnable.toReadonlyArrayAsync.d.ts" />

import { pipe, returns } from "../../../functions.js";
import Runnable_toReadonlyArray from "./Runnable.toReadonlyArray.js";
const Runnable_toReadonlyArrayAsync = 
/*@__PURE__*/ returns(async (runnable) => {
    await Promise.resolve();
    return pipe(runnable, Runnable_toReadonlyArray());
});
export default Runnable_toReadonlyArrayAsync;
