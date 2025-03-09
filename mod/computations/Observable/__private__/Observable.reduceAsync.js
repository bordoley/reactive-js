/// <reference types="./Observable.reduceAsync.d.ts" />

import { compose, identity } from "../../../functions.js";
import Observable_actionReducer from "./Observable.actionReducer.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
const Observable_reduceAsync = ((reducer, initialValue, schedulerOrOptions, maybeOptions) => compose((identity), Observable_actionReducer(reducer, initialValue), Observable_lastAsync(schedulerOrOptions, maybeOptions)));
export default Observable_reduceAsync;
