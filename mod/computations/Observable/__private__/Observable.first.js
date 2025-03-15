/// <reference types="./Observable.first.d.ts" />

import { compose } from "../../../functions.js";
import Observable_last from "./Observable.last.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_first = (options) => compose(Observable_takeFirst(), Observable_last(options));
export default Observable_first;
