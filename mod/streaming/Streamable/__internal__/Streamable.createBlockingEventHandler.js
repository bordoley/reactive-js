/// <reference types="./Streamable.createBlockingEventHandler.d.ts" />

import { compose } from "../../../functions.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaustMap from "../../../rx/Observable/__internal__/Observable.exhaustMap.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createBlockingEventHandler = (op) => Streamable_create(compose(Observable_exhaustMap(compose(op, Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false))), Observable_startWith(false)));
export default Streamable_createBlockingEventHandler;
