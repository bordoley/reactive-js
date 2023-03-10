/// <reference types="./Flowable.createLifted.d.ts" />

import { compose } from "../../../functions.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
const Flowable_createLifted = (op, isRunnable) => Streamable_createLifted(compose(Observable_distinctUntilChanged(), op), false, false, isRunnable);
export default Flowable_createLifted;
