/// <reference types="./Iterable.toFlowable.d.ts" />

import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import Iterable_toObservable from "./Iterable.toObservable.js";
const Iterable_toFlowable = options => compose(Iterable_toObservable(options), Runnable_toFlowable());
export default Iterable_toFlowable;
