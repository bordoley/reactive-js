/// <reference types="./Streamable.createQueueingEventHandler.d.ts" />

import { compose } from "../../../functions.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createQueueingEventHandler = (op, options) => Streamable_create(Observable_mergeMap(compose(op, Observable_ignoreElements()), options));
export default Streamable_createQueueingEventHandler;
