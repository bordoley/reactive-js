/// <reference types="./Enumerable.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import Enumerable_toRunnable from "./Enumerable.toRunnable.js";
const Enumerable_toFlowable = options => compose(Enumerable_toRunnable(options), Runnable_toFlowable());
export default Enumerable_toFlowable;
