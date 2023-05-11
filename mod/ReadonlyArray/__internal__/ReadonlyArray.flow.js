/// <reference types="./ReadonlyArray.flow.d.ts" />

import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { compose } from "../../functions.js";
import ReadonlyArray_toRunnable from "./ReadonlyArray.toRunnable.js";
const ReadonlyArray_flow = (scheduler, options) => compose(ReadonlyArray_toRunnable(options), Runnable_flow(scheduler, options));
export default ReadonlyArray_flow;
