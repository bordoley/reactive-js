/// <reference types="./Iterable.flow.d.ts" />

import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { compose } from "../../functions.js";
import Iterable_toObservable from "./Iterable.toObservable.js";
const Iterable_flow = (scheduler, options) => compose(Iterable_toObservable(options), Runnable_flow(scheduler, options));
export default Iterable_flow;
