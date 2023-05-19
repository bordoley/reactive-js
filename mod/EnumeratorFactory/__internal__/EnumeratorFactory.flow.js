/// <reference types="./EnumeratorFactory.flow.d.ts" />

import Runnable_flow from "../../Runnable/__internal__/Runnable.flow.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_toObservable from "./EnumeratorFactory.toObservable.js";
const EnumeratorFactory_flow = (scheduler, options) => compose(EnumeratorFactory_toObservable(options), Runnable_flow(scheduler, options));
export default EnumeratorFactory_flow;
