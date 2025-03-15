/// <reference types="./Observable.reduceAsync.d.ts" />

import { compose, identity } from "../../../functions.js";
import Observable_actionReducer from "./Observable.actionReducer.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
const Observable_reduceAsync = ((reducer, initialValue, options) => compose((identity), Observable_actionReducer(reducer, initialValue), Observable_lastAsync(options)));
export default Observable_reduceAsync;
