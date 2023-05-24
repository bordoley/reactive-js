/// <reference types="./Observable.first.d.ts" />

import { pipe } from "../../functions.js";
import Observable_last from "./Observable.last.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_first = () => (obs) => pipe(obs, Observable_takeFirst(), Observable_last());
export default Observable_first;
