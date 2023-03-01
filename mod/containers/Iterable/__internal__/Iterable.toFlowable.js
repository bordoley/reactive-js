/// <reference types="./Iterable.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import Iterable_toRunnable from "./Iterable.toRunnable.js";
const Iterable_toFlowable = options => compose(Iterable_toRunnable(options), Runnable_toFlowable());
export default Iterable_toFlowable;
