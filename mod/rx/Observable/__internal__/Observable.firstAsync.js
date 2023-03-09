/// <reference types="./Observable.firstAsync.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_lastAsync from "./Observable.lastAsync.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_firstAsync = (options) => (observable) => pipe(observable, Observable_takeFirst(), Observable_lastAsync(options));
export default Observable_firstAsync;
