/// <reference types="./Flowable.createLifted.d.ts" />

import { compose, returns } from "../../../functions.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { PauseableState_paused } from "../../../scheduling.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
const updateReducer = (acc, updater) => updater(acc);
const Flowable_createLifted = (op) => Streamable_createLifted(compose(Observable_scan(updateReducer, returns(PauseableState_paused)), Observable_distinctUntilChanged(), op), false, false, false);
export default Flowable_createLifted;
