/// <reference types="./Flowable.createLifted.d.ts" />

import { compose, isFunction, returns } from "../../../functions.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { FlowableState_paused, } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
const Flowable_createLifted = (op, isRunnable) => Streamable_createLifted(compose(Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(FlowableState_paused)), Observable_distinctUntilChanged(), op), false, false, isRunnable);
export default Flowable_createLifted;
